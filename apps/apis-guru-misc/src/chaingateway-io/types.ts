type ClearAddressRequest = { ethereumaddress: string; newaddress: string; password: string }
type ClearAddress = {
  amount: number
  ethereumaddress: string
  gas: number
  newaddress: string
  ok: boolean
  total: string
  txid: string
}
type DeleteAddressRequest = { ethereumaddress: string; password: string }
type DeleteAddress = { deleted: boolean; ethereumaddress: string; ok: boolean }
type ExportAddressRequest = { ethaddress: string; password: string }
type ExportAddress = { content: string; filename: string; ok: boolean }
type GetBlockRequest = { block: string }
type GetBlock = {
  block_number: string
  difficulty: string
  gas_limit: string
  gas_used: string
  hash: string
  miner: string
  ok: boolean
  parent_hash: string
  size_in_bytes: string
  time_stamp: string
  transactions_count: string
}
type GetEthereumBalanceRequest = { ethereumaddress: string }
type GetEthereumBalance = { balance: number; ethereumaddress: string; ok: boolean }
type GetExchangeRateRequest = { currency: string }
type GetExchangeRate = { currency: string; ok: boolean; rate: number }
type GetGasPrice = { gasprice: number; ok: boolean }
type GetLastBlockNumber = { blocknumber: number; ok: boolean }
type GetTokenRequest = { contractaddress: string }
type GetToken = {
  contractaddress: string
  decimals: number
  name: string
  ok: boolean
  supply: bigint
  symbol: string
}
type GetTokenBalanceRequest = { contractaddress: string; ethereumaddress: string }
type GetTokenBalance = {
  balance: number
  contractaddress: string
  ethereumaddress: string
  ok: boolean
}
type GetTransactionsRequest = { txid: string }
type Transaction = {
  amount: string
  block_number: string
  contract_address: string
  from: string
  gas: string
  gas_price: string
  to: string
  token_decimals: string
  token_name: string
  token_supply: string
  token_symbol: string
  txid: string
  type: string
}
type GetTransactions = { ok: boolean; transactions: Transaction[] }
type Cipherparams = { iv: string }
type Kdfparams = { dklen: number; n: number; p: number; r: number; salt: string }
type Crypto = {
  cipher: string
  cipherparams: Cipherparams
  ciphertext: string
  kdf: string
  kdfparams: Kdfparams
  mac: string
}
type Content = { address: string; crypto: Crypto; id: string; version: number }
type ImportAddressRequest = { content: Content; filename: string; password: string }
type ImportAddress = { ethaddress: string; filename: string; ok: boolean }
type Address = { ethereumaddress: string }
type ListAddresses = { addresses: Address[]; ok: boolean }
type FailedIpn = {
  action: string
  amount: string
  contractaddress: string
  ethereumaddress: string
  id: string
  timestamp: string
  url: string
}
type ListFailedIPNs = { failed_ipns: FailedIpn[]; ok: boolean }
type Ipn = { contractaddress: string; ethereumaddress: string; url: string }
type ListSubscribedAddresses = { ipns: Ipn[]; ok: boolean }
type NewAddressRequest = { password: string }
type NewAddress = { ethereumaddress: string; ok: boolean; password: string }
type ResendFailedIPNRequest = { id: number }
type ResendFailedIPN = { id: number; ok: boolean }
type SendEthereumRequest = { amount: number; from: string; password: string; to: string }
type SendEthereum = { amount: string; from: string; ok: boolean; to: string; txid: string }
type SendTokenRequest = {
  amount: number
  contractaddress: string
  from: string
  identifier: string
  password: string
  to: string
}
type SendToken = {
  amount: number
  contractaddress: string
  from: string
  identifier: string
  ok: boolean
  to: string
  txid: string
}
type SubscribeAddressRequest = { contractaddress: string; ethereumaddress: string; url: string }
type SubscribeAddress = {
  contractaddress: string
  ethereumaddress: string
  ok: boolean
  url: string
}
type UnsubscribeAddressRequest = { contractaddress: string; ethereumaddress: string; url: string }
type UnsubscribeAddress = {
  contractaddress: string
  deleted: boolean
  ethereumaddress: string
  ok: boolean
  url: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/clearAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: ClearAddressRequest }
        output: ClearAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: DeleteAddressRequest }
        output: DeleteAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/exportAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: ExportAddressRequest }
        output: ExportAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getBlock': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetBlockRequest }
        output: GetBlock
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getEthereumBalance': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetEthereumBalanceRequest }
        output: GetEthereumBalance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getExchangeRate': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetExchangeRateRequest }
        output: GetExchangeRate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getGasPrice': {
      $post: {
        input: { header: { 'Content-Type': string; Authorization: string } }
        output: GetGasPrice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getLastBlockNumber': {
      $post: {
        input: { header: { 'Content-Type': string; Authorization: string } }
        output: GetLastBlockNumber
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getToken': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetTokenRequest }
        output: GetToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getTokenBalance': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetTokenBalanceRequest }
        output: GetTokenBalance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getTransactions': {
      $post: {
        input: { header: { Authorization: string } } & { json: GetTransactionsRequest }
        output: GetTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/importAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: ImportAddressRequest }
        output: ImportAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listAddresses': {
      $post: {
        input: { header: { 'Content-Type': string; Authorization: string } }
        output: ListAddresses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listFailedIPNs': {
      $post: {
        input: { header: { 'Content-Type': string; Authorization: string } }
        output: ListFailedIPNs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listSubscribedAddresses': {
      $post: {
        input: { header: { 'Content-Type': string; Authorization: string } }
        output: ListSubscribedAddresses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/newAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: NewAddressRequest }
        output: NewAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resendFailedIPN': {
      $post: {
        input: { header: { Authorization: string } } & { json: ResendFailedIPNRequest }
        output: ResendFailedIPN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sendEthereum': {
      $post: {
        input: { header: { Authorization: string } } & { json: SendEthereumRequest }
        output: SendEthereum
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sendToken': {
      $post: {
        input: { header: { Authorization: string } } & { json: SendTokenRequest }
        output: SendToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribeAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: SubscribeAddressRequest }
        output: SubscribeAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/unsubscribeAddress': {
      $post: {
        input: { header: { Authorization: string } } & { json: UnsubscribeAddressRequest }
        output: UnsubscribeAddress
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
