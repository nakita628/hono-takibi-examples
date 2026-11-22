type InternalStateColumn = {
  name?: string | undefined
  version?: number | undefined
  rows?: number | undefined
  keyBytes?: bigint | undefined
  valueBytes?: bigint | undefined
  updated?: string | undefined
}
type BlockbookInfo = {
  coin: string
  network: string
  host: string
  version: string
  gitCommit: string
  buildTime: string
  syncMode: boolean
  initialSync: boolean
  inSync: boolean
  bestHeight: number
  lastBlockTime?: string | undefined
  inSyncMempool?: boolean | undefined
  lastMempoolTime?: string | undefined
  mempoolSize?: number | undefined
  decimals: number
  dbSize?: bigint | undefined
  hasFiatRates?: boolean | undefined
  hasTokenFiatRates?: boolean | undefined
  currentFiatRatesTime?: string | undefined
  historicalFiatRatesTime?: string | undefined
  historicalTokenFiatRatesTime?: string | undefined
  supportedStakingPools?: string[] | undefined
  dbSizeFromColumns?: bigint | undefined
  dbColumns?: InternalStateColumn[] | undefined
  about: string
}
type BackendInfo = {
  error?: string | undefined
  chain?: string | undefined
  blocks?: number | undefined
  headers?: number | undefined
  bestBlockHash?: string | undefined
  difficulty?: string | undefined
  sizeOnDisk?: bigint | undefined
  version?: string | undefined
  subversion?: string | undefined
  protocolVersion?: string | undefined
  timeOffset?: number | undefined
  warnings?: string | undefined
  consensus_version?: string | undefined
  consensus?: { [x: string]: unknown } | undefined
}
type SystemInfo = { blockbook?: BlockbookInfo | undefined; backend?: BackendInfo | undefined }
type ErrorResponse = { error: string }
type BlockHashResponse = { blockHash: string }
type AmountString = string
type Vin = {
  txid?: string | undefined
  vout?: number | undefined
  sequence?: number | undefined
  n: number
  addresses?: string[] | undefined
  isAddress: boolean
  isOwn?: boolean | undefined
  value?: AmountString | undefined
  hex?: string | undefined
  asm?: string | undefined
  coinbase?: string | undefined
}
type Vout = {
  value?: AmountString | undefined
  n: number
  spent?: boolean | undefined
  spentTxId?: string | undefined
  spentIndex?: number | undefined
  spentHeight?: number | undefined
  hex?: string | undefined
  asm?: string | undefined
  addresses: string[] | ({ [x: string]: unknown } | null)
  isAddress: boolean
  isOwn?: boolean | undefined
  type?: string | undefined
}
type TxChainExtraData = { payloadType: string; payload?: { [x: string]: unknown } | undefined }
type TokenStandard =
  | ''
  | 'XPUBAddress'
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155'
  | 'BEP20'
  | 'BEP721'
  | 'BEP1155'
  | 'TRC20'
  | 'TRC721'
  | 'TRC1155'
type MultiTokenValue = { id?: AmountString | undefined; value?: AmountString | undefined }
type TokenTransfer = {
  type: TokenStandard
  standard: TokenStandard
  from: string
  to: string
  contract: string
  name?: string | undefined
  symbol?: string | undefined
  decimals: number
  value?: AmountString | undefined
  multiTokenValues?: MultiTokenValue[] | undefined
}
type EthereumParsedInputParam = { type: string; values?: string[] | undefined }
type EthereumParsedInputData = {
  methodId: string
  name: string
  function?: string | undefined
  params?: EthereumParsedInputParam[] | undefined
  parsedDataTruncated?: boolean | undefined
}
type EthereumInternalTransfer = {
  type: number
  from: string
  to: string
  value?: AmountString | undefined
}
type EthereumSpecific = {
  type?: number | undefined
  createdContract?: string | undefined
  status: number
  error?: string | undefined
  nonce: bigint
  gasLimit?: bigint | undefined
  gasUsed?: bigint | undefined
  gasPrice?: AmountString | undefined
  effectiveGasPrice?: AmountString | undefined
  maxPriorityFeePerGas?: AmountString | undefined
  maxFeePerGas?: AmountString | undefined
  baseFeePerGas?: AmountString | undefined
  l1Fee?: bigint | undefined
  l1FeeScalar?: string | undefined
  l1GasPrice?: AmountString | undefined
  l1GasUsed?: bigint | undefined
  data?: string | undefined
  parsedData?: EthereumParsedInputData | undefined
  internalTransfers?: EthereumInternalTransfer[] | undefined
}
type AddressAlias = { Type?: string | undefined; Alias?: string | undefined }
type AddressAliases = { [x: string]: AddressAlias }
type Tx = {
  txid: string
  version?: number | undefined
  lockTime?: number | undefined
  vin: Vin[]
  vout: Vout[]
  blockHash?: string | undefined
  blockHeight: number
  confirmations: number
  confirmationETABlocks?: number | undefined
  confirmationETASeconds?: bigint | undefined
  blockTime: bigint
  size?: number | undefined
  vsize?: number | undefined
  value?: AmountString | undefined
  valueIn?: AmountString | undefined
  fees?: AmountString | undefined
  hex?: string | undefined
  rbf?: boolean | undefined
  coinSpecificData?: { [x: string]: unknown } | undefined
  chainExtraData?: TxChainExtraData | undefined
  tokenTransfers?: TokenTransfer[] | undefined
  ethereumSpecific?: EthereumSpecific | undefined
  addressAliases?: AddressAliases | undefined
}
type Block = {
  page?: number | undefined
  totalPages?: number | undefined
  itemsOnPage?: number | undefined
  hash: string
  previousBlockHash?: string | undefined
  nextBlockHash?: string | undefined
  height: number
  confirmations: number
  size?: number | undefined
  time?: bigint | undefined
  version?: string | number | undefined
  merkleRoot?: string | undefined
  nonce?: string | undefined
  bits?: string | undefined
  difficulty?: string | undefined
  tx?: string[] | undefined
  txCount: number
  txs?: Tx[] | undefined
  addressAliases?: AddressAliases | undefined
}
type BlockRaw = { hex: string }
type BlockFilters = {
  P: number
  M: bigint
  zeroedKey: boolean
  blockFilters: { [x: string]: { blockHash: string; filter: string } }
}
type SendTransactionResponse = { result: string }
type Token = {
  type: TokenStandard
  standard: TokenStandard
  name: string
  path?: string | undefined
  contract?: string | undefined
  transfers: number
  symbol?: string | undefined
  decimals: number
  balance?: AmountString | undefined
  baseValue?: number | undefined
  secondaryValue?: number | undefined
  ids?: AmountString[] | undefined
  multiTokenValues?: MultiTokenValue[] | undefined
  totalReceived?: AmountString | undefined
  totalSent?: AmountString | undefined
  protocols?: string[] | undefined
}
type ContractInfoRates = {
  baseRate?: number | undefined
  currency?: string | undefined
  secondaryRate?: number | undefined
}
type Erc4626TokenMetadata = {
  contract: string
  name?: string | undefined
  symbol?: string | undefined
  decimals: number
}
type Erc4626Token = {
  asset?: Erc4626TokenMetadata | undefined
  share?: Erc4626TokenMetadata | undefined
  totalAssets?: AmountString | undefined
  convertToAssets1Share?: AmountString | undefined
  convertToShares1Asset?: AmountString | undefined
  previewDeposit1Asset?: AmountString | undefined
  previewRedeem1Share?: AmountString | undefined
  error?: string | undefined
}
type ContractInfoProtocols = { erc4626?: Erc4626Token | undefined }
type ContractInfoResult = {
  type: TokenStandard
  standard: TokenStandard
  contract: string
  name: string
  symbol: string
  decimals: number
  createdInBlock?: number | undefined
  destructedInBlock?: number | undefined
  rates?: ContractInfoRates | undefined
  protocols?: ContractInfoProtocols | undefined
  blockHeight: number
}
type StakingPool = {
  contract: string
  name: string
  pendingBalance?: AmountString | undefined
  pendingDepositedBalance?: AmountString | undefined
  depositedBalance?: AmountString | undefined
  withdrawTotalAmount?: AmountString | undefined
  claimableAmount?: AmountString | undefined
  restakedReward?: AmountString | undefined
  autocompoundBalance?: AmountString | undefined
}
type AccountChainExtraData = { payloadType: string; payload?: { [x: string]: unknown } | undefined }
type Address = {
  page?: number | undefined
  totalPages?: number | undefined
  itemsOnPage?: number | undefined
  address: string
  balance?: AmountString | undefined
  totalReceived?: AmountString | undefined
  totalSent?: AmountString | undefined
  unconfirmedBalance?: AmountString | undefined
  unconfirmedTxs: number
  unconfirmedSending?: AmountString | undefined
  unconfirmedReceiving?: AmountString | undefined
  txs: number
  addrTxCount?: number | undefined
  nonTokenTxs?: number | undefined
  internalTxs?: number | undefined
  transactions?: Tx[] | undefined
  txids?: string[] | undefined
  nonce?: string | undefined
  confirmedNonce?: string | undefined
  usedTokens?: number | undefined
  tokens?: Token[] | undefined
  secondaryValue?: number | undefined
  tokensBaseValue?: number | undefined
  tokensSecondaryValue?: number | undefined
  totalBaseValue?: number | undefined
  totalSecondaryValue?: number | undefined
  contractInfo?: ContractInfoResult | undefined
  erc20Contract?: ContractInfoResult | undefined
  addressAliases?: AddressAliases | undefined
  stakingPools?: StakingPool[] | undefined
  chainExtraData?: AccountChainExtraData | undefined
}
type Utxo = {
  txid: string
  vout: number
  value?: AmountString | undefined
  height?: number | undefined
  confirmations: number
  address?: string | undefined
  path?: string | undefined
  lockTime?: number | undefined
  coinbase?: boolean | undefined
}
type BalanceHistory = {
  time: bigint
  txs: number
  received?: AmountString | undefined
  sent?: AmountString | undefined
  sentToSelf?: AmountString | undefined
  rates?: { [x: string]: number } | undefined
  txid?: string | undefined
}
type ResultStringResponse = { result: string }
type FeeStats = {
  txCount: number
  totalFeesSat?: AmountString | undefined
  averageFeePerKb: number
  decilesFeePerKb: number[]
}
type FiatTicker = {
  ts?: bigint | undefined
  rates: { [x: string]: number }
  error?: string | undefined
}
type AvailableVsCurrencies = {
  ts?: bigint | undefined
  available_currencies: string[]
  error?: string | undefined
}
type LegacyObject = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/status': {
      $get:
        | { input: {}; output: SystemInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/': {
      $get:
        | { input: {}; output: SystemInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/block-index/:height': {
      $get:
        | {
            input: { param: { height: number } }
            output: BlockHashResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { height: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/block/:blockId': {
      $get:
        | {
            input: { param: { blockId: string } } & {
              query: { page?: number | undefined; pageSize?: number | undefined }
            }
            output: Block
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: string } } & {
              query: { page?: number | undefined; pageSize?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/rawblock/:blockId': {
      $get:
        | {
            input: { param: { blockId: string } }
            output: BlockRaw
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/block-filters/': {
      $get:
        | {
            input: {
              query: {
                scriptType: string
                lastN?: number | undefined
                from?: number | undefined
                to?: number | undefined
              }
            }
            output: BlockFilters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scriptType: string
                lastN?: number | undefined
                from?: number | undefined
                to?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/tx/:txid': {
      $get:
        | {
            input: { param: { txid: string } } & { query: { spending?: boolean | undefined } }
            output: Tx
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { txid: string } } & { query: { spending?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/tx-specific/:txid': {
      $get:
        | {
            input: { param: { txid: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { txid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/rawtx/:txid': {
      $get:
        | { input: { param: { txid: string } }; output: string; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { txid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/sendtx/:hex': {
      $get:
        | {
            input: { param: { hex: string } }
            output: SendTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hex: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/sendtx/': {
      $post:
        | {
            input: { json: string }
            output: SendTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: string }; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/address/:address': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                from?: number | undefined
                to?: number | undefined
                details?:
                  | 'basic'
                  | 'tokens'
                  | 'tokenBalances'
                  | 'txids'
                  | 'txslight'
                  | 'txs'
                  | undefined
                filter?: 'inputs' | 'outputs' | number | undefined
                contract?: string | undefined
                protocols?: string[] | undefined
                secondary?: string | undefined
                confirmedNonce?: boolean | undefined
              }
            }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                from?: number | undefined
                to?: number | undefined
                details?:
                  | 'basic'
                  | 'tokens'
                  | 'tokenBalances'
                  | 'txids'
                  | 'txslight'
                  | 'txs'
                  | undefined
                filter?: 'inputs' | 'outputs' | number | undefined
                contract?: string | undefined
                protocols?: string[] | undefined
                secondary?: string | undefined
                confirmedNonce?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/xpub/:xpub': {
      $get:
        | {
            input: { param: { xpub: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                from?: number | undefined
                to?: number | undefined
                details?:
                  | 'basic'
                  | 'tokens'
                  | 'tokenBalances'
                  | 'txids'
                  | 'txslight'
                  | 'txs'
                  | undefined
                tokens?: 'nonzero' | 'used' | 'derived' | undefined
                filter?: 'inputs' | 'outputs' | number | undefined
                contract?: string | undefined
                protocols?: string[] | undefined
                secondary?: string | undefined
                gap?: number | undefined
              }
            }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { xpub: string } } & {
              query: {
                page?: number | undefined
                pageSize?: number | undefined
                from?: number | undefined
                to?: number | undefined
                details?:
                  | 'basic'
                  | 'tokens'
                  | 'tokenBalances'
                  | 'txids'
                  | 'txslight'
                  | 'txs'
                  | undefined
                tokens?: 'nonzero' | 'used' | 'derived' | undefined
                filter?: 'inputs' | 'outputs' | number | undefined
                contract?: string | undefined
                protocols?: string[] | undefined
                secondary?: string | undefined
                gap?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/utxo/:descriptor': {
      $get:
        | {
            input: { param: { descriptor: string } } & {
              query: { confirmed?: boolean | undefined; gap?: number | undefined }
            }
            output: Utxo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { descriptor: string } } & {
              query: { confirmed?: boolean | undefined; gap?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/balancehistory/:descriptor': {
      $get:
        | {
            input: { param: { descriptor: string } } & {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                fiatcurrency?: string | undefined
                groupBy?: number | undefined
                gap?: number | undefined
              }
            }
            output: BalanceHistory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { descriptor: string } } & {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                fiatcurrency?: string | undefined
                groupBy?: number | undefined
                gap?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/contract/:contract': {
      $get:
        | {
            input: { param: { contract: string } } & {
              query: { currency?: string | undefined; protocols?: string[] | undefined }
            }
            output: ContractInfoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contract: string } } & {
              query: { currency?: string | undefined; protocols?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/estimatefee/:blocks': {
      $get:
        | {
            input: { param: { blocks: number } } & { query: { conservative?: boolean | undefined } }
            output: ResultStringResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blocks: number } } & { query: { conservative?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/feestats/:blockId': {
      $get:
        | {
            input: { param: { blockId: string } }
            output: FeeStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/tickers/': {
      $get:
        | {
            input: {
              query: {
                currency?: string | undefined
                timestamp?: bigint | undefined
                block?: string | undefined
                token?: string | undefined
              }
            }
            output: FiatTicker
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: string | undefined
                timestamp?: bigint | undefined
                block?: string | undefined
                token?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/multi-tickers/': {
      $get:
        | {
            input: {
              query: {
                timestamp: string
                currency?: string | undefined
                token?: string | undefined
              }
            }
            output: FiatTicker[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timestamp: string
                currency?: string | undefined
                token?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v2/tickers-list/': {
      $get:
        | {
            input: { query: { timestamp: bigint; token?: string | undefined } }
            output: AvailableVsCurrencies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { timestamp: bigint; token?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/block-index/:height': {
      $get:
        | {
            input: { param: { height: number } }
            output: BlockHashResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { height: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tx/:txid': {
      $get:
        | {
            input: { param: { txid: string } }
            output: LegacyObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { txid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/address/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: LegacyObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/utxo/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: LegacyObject[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/block/:blockId': {
      $get:
        | {
            input: { param: { blockId: string } }
            output: LegacyObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/estimatefee/:blocks': {
      $get:
        | {
            input: { param: { blocks: number } }
            output: ResultStringResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blocks: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/sendtx/:hex': {
      $get:
        | {
            input: { param: { hex: string } }
            output: SendTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hex: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/sendtx/': {
      $post:
        | {
            input: { json: string }
            output: SendTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: string }; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/websocket': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 101 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
