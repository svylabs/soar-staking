//! A simple program that takes a number `n` as input, and writes the `n-1`th and `n`th fibonacci
//! number as an output.

// These two lines are necessary for the program to properly compile.
//
// Under the hood, we wrap your main function with some extra code so that it behaves properly
// inside the zkVM.
#![no_main]
sp1_zkvm::entrypoint!(main);

use alloy_sol_types::{sol_data::Bytes, SolType};
//use fibonacci_lib::{fibonacci, PublicValuesStruct};
use soar_lib::{
    reward,
    reward_calculator::RewardCalculator,
    types::{Bytes32, PublicValuesStruct, Zero},
};

pub fn main() {
    // Read an input to the program.
    //
    // Behind the scenes, this compiles down to a custom system call which handles reading inputs
    // from the prover.
    let data = sp1_zkvm::io::read_vec();
    let mut reward_calculator = RewardCalculator::from(data);

    // Compute the n'th fibonacci number using a function from the workspace lib crate.
    let total_rewards = reward_calculator.calculate_reward();
    let mut claim = reward_calculator.claim;

    let mut from_user_stake_event = claim.from_user_stake_event;
    let mut from_user_stake_event_hash = Bytes32::zero();
    if from_user_stake_event.is_some() {
        from_user_stake_event_hash = from_user_stake_event.unwrap().hash();
    }
    let mut from_stake_event_hash = Bytes32::zero();
    let mut from_stake_event = claim.from_stake_event;
    if from_stake_event.is_some() {
        from_stake_event_hash = from_stake_event.unwrap().hash();
    }
    let mut from_reward_event_hash = Bytes32::zero();
    let mut from_reward_event = claim.from_reward_event;
    if from_reward_event.is_some() {
        from_reward_event_hash = from_reward_event.unwrap().hash();
    }

    let mut to_user_stake_event = claim.to_user_stake_event;
    let mut to_user_stake_event_hash = Bytes32::zero();
    if to_user_stake_event.is_some() {
        to_user_stake_event_hash = to_user_stake_event.unwrap().hash();
    }

    // Encode the output of the program.
    let pub_vals = PublicValuesStruct {
        user: reward_calculator.user.into(),
        total_rewards: total_rewards.into(),
        from_reward_event_hash: from_reward_event_hash.into(),
        to_reward_event_hash: claim.to_reward_event.hash().into(),
        from_stake_event_hash: from_stake_event_hash.into(),
        to_stake_event_hash: claim.to_stake_event.hash().into(),
        from_user_stake_event_hash: from_user_stake_event_hash.into(),
        to_user_stake_event_hash: to_user_stake_event_hash.into(),
        updated_to_reward_event_hash: Bytes32::zero().into(),
    };

    // Encode the public values of the program.
    let bytes = PublicValuesStruct::abi_encode(&pub_vals);

    // Commit to the public values of the program. The final proof will have a commitment to all the
    // bytes that were committed to.
    sp1_zkvm::io::commit_slice(&bytes);
}
