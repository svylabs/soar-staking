/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  StakeRelayer,
  StakeRelayerInterface,
} from "../../../contracts/StakeRelayer.sol/StakeRelayer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeChain",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardChain",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "relay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardChain",
    outputs: [
      {
        internalType: "contract IRewardChain",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeChain",
    outputs: [
      {
        internalType: "contract IStakeChain",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161063c38038061063c8339818101604052810190610032919061011d565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015d565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ea826100bf565b9050919050565b6100fa816100df565b811461010557600080fd5b50565b600081519050610117816100f1565b92915050565b60008060408385031215610134576101336100ba565b5b600061014285828601610108565b925050602061015385828601610108565b9150509250929050565b6104d08061016c6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063609c320f1461004657806373b6656f14610064578063c21a0b3b14610080575b600080fd5b61004e61009e565b60405161005b91906102a4565b60405180910390f35b61007e60048036038101906100799190610302565b6100c2565b005b6100886101ff565b6040516100959190610350565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ca47f0c856040518263ffffffff1660e01b8152600401610121919061037a565b606060405180830381865afa15801561013e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101629190610401565b925092509250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632172c1608584846040518463ffffffff1660e01b81526004016101c793929190610463565b600060405180830381600087803b1580156101e157600080fd5b505af11580156101f5573d6000803e3d6000fd5b5050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061026a61026561026084610225565b610245565b610225565b9050919050565b600061027c8261024f565b9050919050565b600061028e82610271565b9050919050565b61029e81610283565b82525050565b60006020820190506102b96000830184610295565b92915050565b600080fd5b60006102cf82610225565b9050919050565b6102df816102c4565b81146102ea57600080fd5b50565b6000813590506102fc816102d6565b92915050565b600060208284031215610318576103176102bf565b5b6000610326848285016102ed565b91505092915050565b600061033a82610271565b9050919050565b61034a8161032f565b82525050565b60006020820190506103656000830184610341565b92915050565b610374816102c4565b82525050565b600060208201905061038f600083018461036b565b92915050565b6000819050919050565b6103a881610395565b81146103b357600080fd5b50565b6000815190506103c58161039f565b92915050565b6000819050919050565b6103de816103cb565b81146103e957600080fd5b50565b6000815190506103fb816103d5565b92915050565b60008060006060848603121561041a576104196102bf565b5b6000610428868287016103b6565b9350506020610439868287016103ec565b925050604061044a868287016103ec565b9150509250925092565b61045d816103cb565b82525050565b6000606082019050610478600083018661036b565b6104856020830185610454565b6104926040830184610454565b94935050505056fea26469706673582212207223d02fc5965e041608ee7be13491e64df1446d9fc97c132e35fb36635b5df764736f6c63430008180033";

type StakeRelayerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeRelayerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeRelayer__factory extends ContractFactory {
  constructor(...args: StakeRelayerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _stakeChain: AddressLike,
    _rewardChain: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _stakeChain,
      _rewardChain,
      overrides || {}
    );
  }
  override deploy(
    _stakeChain: AddressLike,
    _rewardChain: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_stakeChain, _rewardChain, overrides || {}) as Promise<
      StakeRelayer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StakeRelayer__factory {
    return super.connect(runner) as StakeRelayer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeRelayerInterface {
    return new Interface(_abi) as StakeRelayerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StakeRelayer {
    return new Contract(address, _abi, runner) as unknown as StakeRelayer;
  }
}
