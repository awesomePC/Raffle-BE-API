import WINNER_KEYPAIR from './winner_dev.json';
import * as AUCTION_IDL from '../constants/idl/auction'
import * as RAFFLE_IDL from '../constants/idl/raffle'

export default {
  WINNER_WALLET: WINNER_KEYPAIR,
  ADMIN_WALLET_PUB: '5L7tpgCGhoHK8Ammvxpu379ai3VDwyUNUBLpNKMeM7M5',
  PROGRAM_ID: 'FakQFuzB7pUqb5NBTP4Gnvr1uMz3agwnanKFWmh8u75T',
  CLUSTER_API: 'https://api.devnet.solana.com',
  BUNDLR_URL: 'https://devnet.bundlr.network',
  ENV: 'dev',
  SIGN_KEY: 'VERIFY WALLET',
  DECIMAL: 1000000000,
  PRICEPERBYTE: 0.00000001,
  SOLANA_NETWORK: 'devnet',
  MAGICEDEN_API_KEY: `c0f5e640-575c-417f-b5c9-4f9c91bbaab4`,
  TOKEN_ADDRESS: '4zB4rouKhfte4b3hC9qCb565qYou47sMRi4Z3CX49497',

  AUCTION: {
    PROGRAM_ID: '4jXT35nGLxpVMYhkZbtVdQHMo5GgCxbkGcb6QeHPyGQd',
    POOL_SEED: 'pool',
    IDL: AUCTION_IDL.IDL,
    PAY_TOKEN_DECIMAL: 1000000000,
    message: 'Auction Message'
  },
  RAFFLE: {
    PROGRAM_ID: 'FakQFuzB7pUqb5NBTP4Gnvr1uMz3agwnanKFWmh8u75T',
    POOL_SEED: 'pool',
    IDL: RAFFLE_IDL.IDL,
    PAY_TOKEN_DECIMAL: 1000000000,
    message: 'Raffle Message'
  }
}