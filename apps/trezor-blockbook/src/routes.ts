import { createRoute, z } from '@hono/zod-openapi'

const LegacyObjectSchema = z
  .looseObject({})
  .openapi({
    description: 'Legacy Bitcore Insight-compatible payload. Use API V2 for stable typed schemas.',
  })
  .openapi('LegacyObject')

const ErrorResponseSchema = z
  .object({ error: z.string().openapi({ description: 'Human-readable error message.' }) })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const AmountStringSchema = z
  .string()
  .regex(/^-?[0-9]+$/)
  .openapi({
    description: 'Integer amount in the lowest chain denomination, encoded as a string.',
    examples: ['100000000', '17177839694340'],
  })
  .openapi('AmountString')

const TokenStandardSchema = z
  .enum([
    '',
    'XPUBAddress',
    'ERC20',
    'ERC721',
    'ERC1155',
    'BEP20',
    'BEP721',
    'BEP1155',
    'TRC20',
    'TRC721',
    'TRC1155',
  ])
  .openapi({ description: 'Token standard name. Empty string means no token standard is known.' })
  .openapi('TokenStandard')

const BlockHashResponseSchema = z
  .object({ blockHash: z.string() })
  .openapi({ required: ['blockHash'] })
  .openapi('BlockHashResponse')

const ResultStringResponseSchema = z
  .object({
    result: z
      .string()
      .openapi({ description: 'Result string, usually a decimal amount in chain base currency.' }),
  })
  .openapi({ required: ['result'] })
  .openapi('ResultStringResponse')

const SendTransactionResponseSchema = z
  .object({ result: z.string().openapi({ description: 'Broadcast transaction id/hash.' }) })
  .openapi({ required: ['result'] })
  .openapi('SendTransactionResponse')

const AddressAliasSchema = z
  .object({ Type: z.string().exactOptional(), Alias: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AddressAlias')

const AddressAliasesSchema = z.record(z.string(), AddressAliasSchema).openapi('AddressAliases')

const MultiTokenValueSchema = z
  .object({ id: AmountStringSchema.exactOptional(), value: AmountStringSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiTokenValue')

const TokenTransferSchema = z
  .object({
    type: TokenStandardSchema.openapi({ deprecated: true }),
    standard: TokenStandardSchema,
    from: z.string(),
    to: z.string(),
    contract: z.string(),
    name: z.string().exactOptional(),
    symbol: z.string().exactOptional(),
    decimals: z.int(),
    value: AmountStringSchema.exactOptional(),
    multiTokenValues: z.array(MultiTokenValueSchema).exactOptional(),
  })
  .openapi({ required: ['type', 'standard', 'from', 'to', 'contract', 'decimals'] })
  .openapi('TokenTransfer')

const VinSchema = z
  .object({
    txid: z.string().exactOptional(),
    vout: z.int().min(0).exactOptional(),
    sequence: z.int().exactOptional(),
    n: z.int().min(0),
    addresses: z.array(z.string()).exactOptional(),
    isAddress: z.boolean(),
    isOwn: z.boolean().exactOptional(),
    value: AmountStringSchema.exactOptional(),
    hex: z.string().exactOptional(),
    asm: z.string().exactOptional(),
    coinbase: z.string().exactOptional(),
  })
  .openapi({ required: ['n', 'isAddress'] })
  .openapi('Vin')

const VoutSchema = z
  .object({
    value: AmountStringSchema.exactOptional(),
    n: z.int().min(0),
    spent: z.boolean().exactOptional(),
    spentTxId: z.string().exactOptional(),
    spentIndex: z.int().exactOptional(),
    spentHeight: z.int().exactOptional(),
    hex: z.string().exactOptional(),
    asm: z.string().exactOptional(),
    addresses: z.xor([z.array(z.string()), z.null().nullable()]),
    isAddress: z.boolean(),
    isOwn: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: ['n', 'addresses', 'isAddress'] })
  .openapi('Vout')

const EthereumInternalTransferSchema = z
  .object({
    type: z.int(),
    from: z.string(),
    to: z.string(),
    value: AmountStringSchema.exactOptional(),
  })
  .openapi({ required: ['type', 'from', 'to'] })
  .openapi('EthereumInternalTransfer')

const EthereumParsedInputParamSchema = z
  .object({ type: z.string(), values: z.array(z.string()).exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('EthereumParsedInputParam')

const EthereumParsedInputDataSchema = z
  .object({
    methodId: z.string().openapi({ description: 'First 4 bytes of the input data.' }),
    name: z.string().openapi({ description: 'Parsed function name when recognized.' }),
    function: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full function signature when recognized.' }),
    params: z.array(EthereumParsedInputParamSchema).exactOptional(),
    parsedDataTruncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when input data exceeded the parse-size budget and parameters were not decoded.',
      }),
  })
  .openapi({ required: ['methodId', 'name'] })
  .openapi('EthereumParsedInputData')

const EthereumSpecificSchema = z
  .object({
    type: z.int().exactOptional(),
    createdContract: z.string().exactOptional(),
    status: z.int().openapi({ description: '1 success, 0 failed, -1 pending.' }),
    error: z.string().exactOptional(),
    nonce: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    gasLimit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    gasUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    gasPrice: AmountStringSchema.exactOptional(),
    effectiveGasPrice: AmountStringSchema.exactOptional(),
    maxPriorityFeePerGas: AmountStringSchema.exactOptional(),
    maxFeePerGas: AmountStringSchema.exactOptional(),
    baseFeePerGas: AmountStringSchema.exactOptional(),
    l1Fee: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    l1FeeScalar: z.string().exactOptional(),
    l1GasPrice: AmountStringSchema.exactOptional(),
    l1GasUsed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    data: z.string().exactOptional(),
    parsedData: EthereumParsedInputDataSchema.exactOptional(),
    internalTransfers: z.array(EthereumInternalTransferSchema).exactOptional(),
  })
  .openapi({ required: ['status', 'nonce'] })
  .openapi('EthereumSpecific')

const TxChainExtraDataSchema = z
  .object({
    payloadType: z
      .string()
      .openapi({
        description: 'Discriminator for normalized chain-specific payloads, for example tron.',
      }),
    payload: z.any().exactOptional(),
  })
  .openapi({ required: ['payloadType'] })
  .openapi('TxChainExtraData')

const AccountChainExtraDataSchema = z
  .object({ payloadType: z.string(), payload: z.any().exactOptional() })
  .openapi({ required: ['payloadType'] })
  .openapi('AccountChainExtraData')

const TxSchema = z
  .object({
    txid: z.string(),
    version: z.int().exactOptional(),
    lockTime: z.int().exactOptional(),
    vin: z.array(VinSchema),
    vout: z.array(VoutSchema),
    blockHash: z.string().exactOptional(),
    blockHeight: z.int().openapi({ description: '-1 for unconfirmed transactions.' }),
    confirmations: z.int().min(0),
    confirmationETABlocks: z.int().exactOptional(),
    confirmationETASeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    blockTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    size: z.int().exactOptional(),
    vsize: z.int().exactOptional(),
    value: AmountStringSchema.exactOptional(),
    valueIn: AmountStringSchema.exactOptional(),
    fees: AmountStringSchema.exactOptional(),
    hex: z.string().exactOptional(),
    rbf: z.boolean().exactOptional(),
    coinSpecificData: z
      .any()
      .exactOptional()
      .openapi({ description: 'Raw blockchain-specific transaction data.' }),
    chainExtraData: TxChainExtraDataSchema.exactOptional(),
    tokenTransfers: z.array(TokenTransferSchema).exactOptional(),
    ethereumSpecific: EthereumSpecificSchema.exactOptional(),
    addressAliases: AddressAliasesSchema.exactOptional(),
  })
  .openapi({ required: ['txid', 'vin', 'vout', 'blockHeight', 'confirmations', 'blockTime'] })
  .openapi('Tx')

const FeeStatsSchema = z
  .object({
    txCount: z.int(),
    totalFeesSat: AmountStringSchema.exactOptional(),
    averageFeePerKb: z.number(),
    decilesFeePerKb: z.array(z.number()),
  })
  .openapi({ required: ['txCount', 'averageFeePerKb', 'decilesFeePerKb'] })
  .openapi('FeeStats')

const Erc4626TokenMetadataSchema = z
  .object({
    contract: z.string(),
    name: z.string().exactOptional(),
    symbol: z.string().exactOptional(),
    decimals: z.int(),
  })
  .openapi({ required: ['contract', 'decimals'] })
  .openapi('Erc4626TokenMetadata')

const Erc4626TokenSchema = z
  .object({
    asset: Erc4626TokenMetadataSchema.exactOptional(),
    share: Erc4626TokenMetadataSchema.exactOptional(),
    totalAssets: AmountStringSchema.exactOptional(),
    convertToAssets1Share: AmountStringSchema.exactOptional(),
    convertToShares1Asset: AmountStringSchema.exactOptional(),
    previewDeposit1Asset: AmountStringSchema.exactOptional(),
    previewRedeem1Share: AmountStringSchema.exactOptional(),
    error: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Erc4626Token')

const ContractInfoProtocolsSchema = z
  .object({ erc4626: Erc4626TokenSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ContractInfoProtocols')

const ContractInfoRatesSchema = z
  .object({
    baseRate: z.number().exactOptional(),
    currency: z.string().exactOptional(),
    secondaryRate: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContractInfoRates')

const ContractInfoResultSchema = z
  .object({
    type: TokenStandardSchema.openapi({ deprecated: true }),
    standard: TokenStandardSchema,
    contract: z.string(),
    name: z.string(),
    symbol: z.string(),
    decimals: z.int(),
    createdInBlock: z.int().exactOptional(),
    destructedInBlock: z.int().exactOptional(),
    rates: ContractInfoRatesSchema.exactOptional(),
    protocols: ContractInfoProtocolsSchema.exactOptional(),
    blockHeight: z.int(),
  })
  .openapi({
    required: ['type', 'standard', 'contract', 'name', 'symbol', 'decimals', 'blockHeight'],
  })
  .openapi('ContractInfoResult')

const TokenSchema = z
  .object({
    type: TokenStandardSchema.openapi({ deprecated: true }),
    standard: TokenStandardSchema,
    name: z.string(),
    path: z.string().exactOptional(),
    contract: z.string().exactOptional(),
    transfers: z.int(),
    symbol: z.string().exactOptional(),
    decimals: z.int(),
    balance: AmountStringSchema.exactOptional(),
    baseValue: z.number().exactOptional(),
    secondaryValue: z.number().exactOptional(),
    ids: z.array(AmountStringSchema).exactOptional(),
    multiTokenValues: z.array(MultiTokenValueSchema).exactOptional(),
    totalReceived: AmountStringSchema.exactOptional(),
    totalSent: AmountStringSchema.exactOptional(),
    protocols: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Indexed protocol identifiers such as erc4626.' }),
  })
  .openapi({ required: ['type', 'standard', 'name', 'transfers', 'decimals'] })
  .openapi('Token')

const StakingPoolSchema = z
  .object({
    contract: z.string(),
    name: z.string(),
    pendingBalance: AmountStringSchema.exactOptional(),
    pendingDepositedBalance: AmountStringSchema.exactOptional(),
    depositedBalance: AmountStringSchema.exactOptional(),
    withdrawTotalAmount: AmountStringSchema.exactOptional(),
    claimableAmount: AmountStringSchema.exactOptional(),
    restakedReward: AmountStringSchema.exactOptional(),
    autocompoundBalance: AmountStringSchema.exactOptional(),
  })
  .openapi({ required: ['contract', 'name'] })
  .openapi('StakingPool')

const AddressSchema = z
  .object({
    page: z.int().exactOptional(),
    totalPages: z.int().exactOptional(),
    itemsOnPage: z.int().exactOptional(),
    address: z.string(),
    balance: AmountStringSchema.exactOptional(),
    totalReceived: AmountStringSchema.exactOptional(),
    totalSent: AmountStringSchema.exactOptional(),
    unconfirmedBalance: AmountStringSchema.exactOptional(),
    unconfirmedTxs: z.int(),
    unconfirmedSending: AmountStringSchema.exactOptional(),
    unconfirmedReceiving: AmountStringSchema.exactOptional(),
    txs: z.int(),
    addrTxCount: z.int().exactOptional(),
    nonTokenTxs: z.int().exactOptional(),
    internalTxs: z.int().exactOptional(),
    transactions: z.array(TxSchema).exactOptional(),
    txids: z.array(z.string()).exactOptional(),
    nonce: z.string().exactOptional(),
    confirmedNonce: z.string().exactOptional(),
    usedTokens: z.int().exactOptional(),
    tokens: z.array(TokenSchema).exactOptional(),
    secondaryValue: z.number().exactOptional(),
    tokensBaseValue: z.number().exactOptional(),
    tokensSecondaryValue: z.number().exactOptional(),
    totalBaseValue: z.number().exactOptional(),
    totalSecondaryValue: z.number().exactOptional(),
    contractInfo: ContractInfoResultSchema.exactOptional(),
    erc20Contract: ContractInfoResultSchema.exactOptional().openapi({ deprecated: true }),
    addressAliases: AddressAliasesSchema.exactOptional(),
    stakingPools: z.array(StakingPoolSchema).exactOptional(),
    chainExtraData: AccountChainExtraDataSchema.exactOptional(),
  })
  .openapi({ required: ['address', 'unconfirmedTxs', 'txs'] })
  .openapi('Address')

const UtxoSchema = z
  .object({
    txid: z.string(),
    vout: z.int().min(0),
    value: AmountStringSchema.exactOptional(),
    height: z.int().exactOptional(),
    confirmations: z.int().min(0),
    address: z.string().exactOptional(),
    path: z.string().exactOptional(),
    lockTime: z.int().exactOptional(),
    coinbase: z.boolean().exactOptional(),
  })
  .openapi({ required: ['txid', 'vout', 'confirmations'] })
  .openapi('Utxo')

const BalanceHistorySchema = z
  .object({
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    txs: z.int(),
    received: AmountStringSchema.exactOptional(),
    sent: AmountStringSchema.exactOptional(),
    sentToSelf: AmountStringSchema.exactOptional(),
    rates: z.record(z.string(), z.number()).exactOptional(),
    txid: z.string().exactOptional(),
  })
  .openapi({ required: ['time', 'txs'] })
  .openapi('BalanceHistory')

const BlockSchema = z
  .object({
    page: z.int().exactOptional(),
    totalPages: z.int().exactOptional(),
    itemsOnPage: z.int().exactOptional(),
    hash: z.string(),
    previousBlockHash: z.string().exactOptional(),
    nextBlockHash: z.string().exactOptional(),
    height: z.int(),
    confirmations: z.int().min(0),
    size: z.int().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    version: z.xor([z.string(), z.int()]).exactOptional(),
    merkleRoot: z.string().exactOptional(),
    nonce: z.string().exactOptional(),
    bits: z.string().exactOptional(),
    difficulty: z.string().exactOptional(),
    tx: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Transaction ids when full transactions are not returned.' }),
    txCount: z.int(),
    txs: z
      .array(TxSchema)
      .exactOptional()
      .openapi({ description: 'Full transaction details for this page.' }),
    addressAliases: AddressAliasesSchema.exactOptional(),
  })
  .openapi({ required: ['hash', 'height', 'confirmations', 'txCount'] })
  .openapi('Block')

const BlockRawSchema = z
  .object({ hex: z.string() })
  .openapi({ required: ['hex'] })
  .openapi('BlockRaw')

const BlockFiltersSchema = z
  .object({
    P: z.int(),
    M: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    zeroedKey: z.boolean(),
    blockFilters: z.record(
      z.string(),
      z
        .object({ blockHash: z.string(), filter: z.string() })
        .openapi({ required: ['blockHash', 'filter'] }),
    ),
  })
  .openapi({ required: ['P', 'M', 'zeroedKey', 'blockFilters'] })
  .openapi('BlockFilters')

const BackendInfoSchema = z
  .object({
    error: z.string().exactOptional(),
    chain: z.string().exactOptional(),
    blocks: z.int().exactOptional(),
    headers: z.int().exactOptional(),
    bestBlockHash: z.string().exactOptional(),
    difficulty: z.string().exactOptional(),
    sizeOnDisk: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    version: z.string().exactOptional(),
    subversion: z.string().exactOptional(),
    protocolVersion: z.string().exactOptional(),
    timeOffset: z.int().exactOptional(),
    warnings: z.string().exactOptional(),
    consensus_version: z.string().exactOptional(),
    consensus: z.any().exactOptional().openapi({ description: 'Chain-specific consensus data.' }),
  })
  .openapi({ required: [] })
  .openapi('BackendInfo')

const InternalStateColumnSchema = z
  .object({
    name: z.string().exactOptional(),
    version: z.int().exactOptional(),
    rows: z.int().exactOptional(),
    keyBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    valueBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updated: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InternalStateColumn')

const BlockbookInfoSchema = z
  .object({
    coin: z.string(),
    network: z.string(),
    host: z.string(),
    version: z.string(),
    gitCommit: z.string(),
    buildTime: z.string(),
    syncMode: z.boolean(),
    initialSync: z.boolean(),
    inSync: z.boolean(),
    bestHeight: z.int(),
    lastBlockTime: z.string().exactOptional(),
    inSyncMempool: z.boolean().exactOptional(),
    lastMempoolTime: z.string().exactOptional(),
    mempoolSize: z.int().exactOptional(),
    decimals: z.int(),
    dbSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    hasFiatRates: z.boolean().exactOptional(),
    hasTokenFiatRates: z.boolean().exactOptional(),
    currentFiatRatesTime: z.string().exactOptional(),
    historicalFiatRatesTime: z.string().exactOptional(),
    historicalTokenFiatRatesTime: z.string().exactOptional(),
    supportedStakingPools: z.array(z.string()).exactOptional(),
    dbSizeFromColumns: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dbColumns: z.array(InternalStateColumnSchema).exactOptional(),
    about: z.string(),
  })
  .openapi({
    required: [
      'coin',
      'network',
      'host',
      'version',
      'gitCommit',
      'buildTime',
      'syncMode',
      'initialSync',
      'inSync',
      'bestHeight',
      'decimals',
      'about',
    ],
  })
  .openapi('BlockbookInfo')

const SystemInfoSchema = z
  .object({
    blockbook: BlockbookInfoSchema.exactOptional(),
    backend: BackendInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemInfo')

const FiatTickerSchema = z
  .object({
    ts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    rates: z.record(z.string(), z.number()),
    error: z.string().exactOptional(),
  })
  .openapi({ required: ['rates'] })
  .openapi('FiatTicker')

const AvailableVsCurrenciesSchema = z
  .object({
    ts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    available_currencies: z.array(z.string()),
    error: z.string().exactOptional(),
  })
  .openapi({ required: ['available_currencies'] })
  .openapi('AvailableVsCurrencies')

const WsPrivatePendingSchema = z
  .object({
    nonces: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    txids: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description:
      'Ethereum-like only: the private (alternative send-tx / relay) transactions the wallet knows are in flight for the queried address. Only nonces drive behavior; txids are reserved for future use. See docs/evm-send.md.',
    required: [],
  })
  .openapi('WsPrivatePending')

const WsAccountInfoReqSchema = z
  .object({
    descriptor: z.string(),
    details: z
      .enum(['basic', 'tokens', 'tokenBalances', 'txids', 'txslight', 'txs'])
      .exactOptional(),
    tokens: z.enum(['derived', 'used', 'nonzero']).exactOptional(),
    protocols: z.array(z.string()).exactOptional(),
    pageSize: z.int().exactOptional(),
    page: z.int().exactOptional(),
    from: z.int().exactOptional(),
    to: z.int().exactOptional(),
    contractFilter: z.string().exactOptional(),
    secondaryCurrency: z.string().exactOptional(),
    gap: z.int().exactOptional(),
    confirmedNonce: z.boolean().exactOptional(),
    privatePending: WsPrivatePendingSchema.exactOptional(),
  })
  .openapi({ required: ['descriptor'] })
  .openapi('WsAccountInfoReq')

const WsContractInfoReqSchema = z
  .object({
    contract: z.string(),
    currency: z.string().exactOptional(),
    protocols: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['contract'] })
  .openapi('WsContractInfoReq')

const WsBlockHashReqSchema = z
  .object({ height: z.int().min(0) })
  .openapi({ required: ['height'] })
  .openapi('WsBlockHashReq')

const WsBlockReqSchema = z
  .object({
    id: z.string(),
    pageSize: z.int().max(10000).exactOptional(),
    page: z.int().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('WsBlockReq')

const WsAccountUtxoReqSchema = z
  .object({ descriptor: z.string() })
  .openapi({ required: ['descriptor'] })
  .openapi('WsAccountUtxoReq')

const WsBalanceHistoryReqSchema = z
  .object({
    descriptor: z.string(),
    from: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    currencies: z.array(z.string()).exactOptional(),
    gap: z.int().exactOptional(),
    groupBy: z.int().exactOptional(),
  })
  .openapi({ required: ['descriptor'] })
  .openapi('WsBalanceHistoryReq')

const WsTransactionReqSchema = z
  .object({ txid: z.string() })
  .openapi({ required: ['txid'] })
  .openapi('WsTransactionReq')

const WsTransactionSpecificReqSchema = z
  .object({ txid: z.string() })
  .openapi({ required: ['txid'] })
  .openapi('WsTransactionSpecificReq')

const WsEstimateFeeReqSchema = z
  .object({
    blocks: z.array(z.int()).exactOptional(),
    specific: z
      .looseObject({
        conservative: z.boolean().exactOptional(),
        txsize: z.int().exactOptional(),
        from: z.string().exactOptional(),
        to: z.string().exactOptional(),
        data: z.string().exactOptional(),
        value: z.string().exactOptional(),
        privatePending: WsPrivatePendingSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('WsEstimateFeeReq')

const WsSendTransactionReqSchema = z
  .object({
    hex: z.string().exactOptional(),
    disableAlternativeRpc: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WsSendTransactionReq')

const WsMempoolFiltersReqSchema = z
  .object({
    scriptType: z.string(),
    fromTimestamp: z.int(),
    M: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['scriptType', 'fromTimestamp'] })
  .openapi('WsMempoolFiltersReq')

const WsBlockFilterReqSchema = z
  .object({
    scriptType: z.string(),
    blockHash: z.string(),
    M: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['scriptType', 'blockHash'] })
  .openapi('WsBlockFilterReq')

const WsBlockFiltersBatchReqSchema = z
  .object({
    scriptType: z.string(),
    bestKnownBlockHash: z.string(),
    pageSize: z.int().exactOptional(),
    M: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['scriptType', 'bestKnownBlockHash'] })
  .openapi('WsBlockFiltersBatchReq')

const WsRpcCallReqSchema = z
  .object({ from: z.string().exactOptional(), to: z.string(), data: z.string() })
  .openapi({ required: ['to', 'data'] })
  .openapi('WsRpcCallReq')

const WsSubscribeAddressesReqSchema = z
  .object({ addresses: z.array(z.string()), newBlockTxs: z.boolean().exactOptional() })
  .openapi({ required: ['addresses'] })
  .openapi('WsSubscribeAddressesReq')

const WsSubscribeFiatRatesReqSchema = z
  .object({ currency: z.string().exactOptional(), tokens: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('WsSubscribeFiatRatesReq')

const WsCurrentFiatRatesReqSchema = z
  .object({ currencies: z.array(z.string()).exactOptional(), token: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('WsCurrentFiatRatesReq')

const WsFiatRatesForTimestampsReqSchema = z
  .object({
    timestamps: z.array(
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
    ),
    currencies: z.array(z.string()).exactOptional(),
    token: z.string().exactOptional(),
  })
  .openapi({ required: ['timestamps'] })
  .openapi('WsFiatRatesForTimestampsReq')

const WsFiatRatesTickersListReqSchema = z
  .object({
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    token: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WsFiatRatesTickersListReq')

const WsRequestSchema = z
  .object({
    id: z.string().openapi({ description: 'Client-chosen request id echoed by the response.' }),
    method: z.enum([
      'getAccountInfo',
      'getContractInfo',
      'getInfo',
      'getBlockHash',
      'getBlock',
      'getAccountUtxo',
      'getBalanceHistory',
      'getTransaction',
      'getTransactionSpecific',
      'estimateFee',
      'longTermFeeRate',
      'sendTransaction',
      'getMempoolFilters',
      'getBlockFilter',
      'getBlockFiltersBatch',
      'rpcCall',
      'subscribeNewBlock',
      'unsubscribeNewBlock',
      'subscribeNewTransaction',
      'unsubscribeNewTransaction',
      'subscribeAddresses',
      'unsubscribeAddresses',
      'subscribeFiatRates',
      'unsubscribeFiatRates',
      'ping',
      'getCurrentFiatRates',
      'getFiatRatesForTimestamps',
      'getFiatRatesTickersList',
    ]),
    params: z
      .xor([
        WsAccountInfoReqSchema,
        WsContractInfoReqSchema,
        WsBlockHashReqSchema,
        WsBlockReqSchema,
        WsAccountUtxoReqSchema,
        WsBalanceHistoryReqSchema,
        WsTransactionReqSchema,
        WsTransactionSpecificReqSchema,
        WsEstimateFeeReqSchema,
        WsSendTransactionReqSchema,
        WsMempoolFiltersReqSchema,
        WsBlockFilterReqSchema,
        WsBlockFiltersBatchReqSchema,
        WsRpcCallReqSchema,
        WsSubscribeAddressesReqSchema,
        WsSubscribeFiatRatesReqSchema,
        WsCurrentFiatRatesReqSchema,
        WsFiatRatesForTimestampsReqSchema,
        WsFiatRatesTickersListReqSchema,
        z
          .object({})
          .openapi({
            description:
              'Empty parameter object for methods such as getInfo, ping, and unsubscribe methods.',
          }),
      ])
      .exactOptional()
      .openapi({ description: 'Method-specific request parameters.' }),
  })
  .openapi({ required: ['id', 'method'] })
  .openapi('WsRequest')

const WsBackendInfoSchema = z
  .object({
    version: z.string().exactOptional(),
    subversion: z.string().exactOptional(),
    consensus_version: z.string().exactOptional(),
    consensus: z.any().exactOptional().openapi({ description: 'Chain-specific consensus data.' }),
  })
  .openapi({ required: [] })
  .openapi('WsBackendInfo')

const WsInfoResSchema = z
  .object({
    name: z.string(),
    shortcut: z.string(),
    network: z.string(),
    decimals: z.int(),
    version: z.string(),
    bestHeight: z.int(),
    bestHash: z.string(),
    block0Hash: z.string(),
    testnet: z.boolean(),
    backend: WsBackendInfoSchema,
  })
  .openapi({
    required: [
      'name',
      'shortcut',
      'network',
      'decimals',
      'version',
      'bestHeight',
      'bestHash',
      'block0Hash',
      'testnet',
      'backend',
    ],
  })
  .openapi('WsInfoRes')

const WsBlockHashResSchema = z
  .object({ hash: z.string() })
  .openapi({ required: ['hash'] })
  .openapi('WsBlockHashRes')

const Eip1559FeeSchema = z
  .object({
    maxFeePerGas: AmountStringSchema.exactOptional(),
    maxPriorityFeePerGas: AmountStringSchema.exactOptional(),
    minWaitTimeEstimate: z.number().exactOptional(),
    maxWaitTimeEstimate: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Eip1559Fee')

const Eip1559FeesSchema = z
  .object({
    baseFeePerGas: AmountStringSchema.exactOptional(),
    low: Eip1559FeeSchema.exactOptional(),
    medium: Eip1559FeeSchema.exactOptional(),
    high: Eip1559FeeSchema.exactOptional(),
    instant: Eip1559FeeSchema.exactOptional(),
    networkCongestion: z.number().exactOptional(),
    latestPriorityFeeRange: z.array(AmountStringSchema).exactOptional(),
    historicalPriorityFeeRange: z.array(AmountStringSchema).exactOptional(),
    historicalBaseFeeRange: z.array(AmountStringSchema).exactOptional(),
    priorityFeeTrend: z.enum(['up', 'down']).exactOptional(),
    baseFeeTrend: z.enum(['up', 'down']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Eip1559Fees')

const WsEstimateFeeResSchema = z
  .object({
    feePerTx: AmountStringSchema.exactOptional(),
    feePerUnit: AmountStringSchema.exactOptional(),
    feeLimit: AmountStringSchema.exactOptional(),
    eip1559: Eip1559FeesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WsEstimateFeeRes')

const FiatTickersSchema = z
  .object({ tickers: z.array(FiatTickerSchema) })
  .openapi({ required: ['tickers'] })
  .openapi('FiatTickers')

const WsRpcCallResSchema = z
  .object({ data: z.string() })
  .openapi({ required: ['data'] })
  .openapi('WsRpcCallRes')

const MempoolTxidFilterEntriesSchema = z
  .object({
    entries: z.record(z.string(), z.string()).exactOptional(),
    usedZeroedKey: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MempoolTxidFilterEntries')

const WsErrorDataSchema = z
  .object({ error: z.object({ message: z.string() }).openapi({ required: ['message'] }) })
  .openapi({ required: ['error'] })
  .openapi('WsErrorData')

const WsResponseSchema = z
  .object({
    id: z.string(),
    data: z
      .xor([
        WsInfoResSchema,
        WsBlockHashResSchema,
        BlockSchema,
        AddressSchema,
        z.array(UtxoSchema),
        TxSchema,
        WsEstimateFeeResSchema,
        ResultStringResponseSchema,
        FiatTickerSchema,
        FiatTickersSchema,
        AvailableVsCurrenciesSchema,
        WsRpcCallResSchema,
        MempoolTxidFilterEntriesSchema,
        WsErrorDataSchema,
        z.object({}),
      ])
      .openapi({ description: 'Method-specific result, or WsErrorData on failure.' }),
  })
  .openapi({ required: ['id', 'data'] })
  .openapi('WsResponse')

const EthereumGasDataSchema = z
  .object({
    baseFeePerGas: AmountStringSchema.exactOptional(),
    blockGasUsed: AmountStringSchema.exactOptional(),
    blockGasLimit: AmountStringSchema.exactOptional(),
  })
  .openapi({
    description:
      "EVM block-level gas figures pushed with subscribeNewBlock notifications, used by the frontend to deterministically project the next block's EIP-1559 base fee. Decimal strings, omitted for pre-London blocks.\n",
    required: [],
  })
  .openapi('EthereumGasData')

const WsNewBlockSchema = z
  .object({
    height: z.number(),
    hash: z.string(),
    evmData: z
      .xor([EthereumGasDataSchema, z.null().nullable()])
      .openapi({
        description: 'EVM gas data for the EIP-1559 base-fee projection; null on non-EVM chains.',
      }),
  })
  .openapi({
    required: ['height', 'hash', 'evmData'],
    description: 'Pushed to subscribeNewBlock subscribers when a new block is connected.',
  })
  .openapi('WsNewBlock')

const ErrorExample = {
  summary: 'REST error',
  value: { error: "Transaction 'missing-txid' not found" },
}

const ErrorResponse = {
  description:
    'Public API error. Public validation errors are HTTP 400; internal errors are HTTP 500.',
  content: {
    'application/json': { schema: ErrorResponseSchema, examples: { error: ErrorExample } },
  },
}

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description:
        '1-based page index. Values outside safe bounds are sanitized to the closest possible page.',
      schema: { type: 'integer', minimum: 1 },
      required: false,
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'pageSize',
      in: 'query',
      description:
        "Number of history items per page. The default and maximum for REST account endpoints is 1000. Unconfirmed transactions take the first slots of the paged history and count towards both pageSize and totalPages, so a page is never longer than pageSize and, as long as the account's pending set does not change between page requests, walking all pages returns every transaction exactly once. A pending transaction that is replaced or evicted mid-walk shifts the following pages; for a walk that is consistent under mempool churn, set the to parameter to the current best height, which pages only the confirmed history.",
      schema: { type: 'integer', minimum: 1, maximum: 1000 },
      required: false,
    },
  })

const BlockPageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'pageSize',
      in: 'query',
      description: 'Number of transactions per block page. The default and maximum is 1000.',
      schema: { type: 'integer', minimum: 1, maximum: 1000 },
      required: false,
    },
  })

const FromHeightParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'from',
      in: 'query',
      description: 'First block height included in account transaction filtering.',
      schema: { type: 'integer', minimum: 0 },
      required: false,
    },
  })

const ToHeightParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'to',
      in: 'query',
      description: 'Last block height included in account transaction filtering.',
      schema: { type: 'integer', minimum: 0 },
      required: false,
    },
  })

const DetailsParamsSchema = z
  .enum(['basic', 'tokens', 'tokenBalances', 'txids', 'txslight', 'txs'])
  .default('txids')
  .exactOptional()
  .openapi({
    param: {
      name: 'details',
      in: 'query',
      description:
        'Controls how much account data is returned.\nbasic returns balances and counts only.\ntokens adds known token rows.\ntokenBalances returns token rows with balances.\ntxids adds paged transaction ids.\ntxslight adds limited transaction details from the index.\ntxs adds full transaction details.',
      schema: {
        type: 'string',
        default: 'txids',
        enum: ['basic', 'tokens', 'tokenBalances', 'txids', 'txslight', 'txs'],
      },
      required: false,
    },
  })

const TokensParamsSchema = z
  .enum(['nonzero', 'used', 'derived'])
  .default('nonzero')
  .exactOptional()
  .openapi({
    param: {
      name: 'tokens',
      in: 'query',
      description:
        'Controls which XPUB-derived address rows are included: nonzero returns\nonly addresses with nonzero balance, used returns addresses with at\nleast one transaction, and derived returns all derived addresses.',
      schema: { type: 'string', default: 'nonzero', enum: ['nonzero', 'used', 'derived'] },
      required: false,
    },
  })

const FilterParamsSchema = ((schema) =>
  z.union([
    z.preprocess(
      (val) =>
        typeof val === 'string' &&
        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
          ? Number(val)
          : val,
      schema,
    ),
    schema,
  ]))(z.xor([z.enum(['inputs', 'outputs']), z.int().min(0)]))
  .exactOptional()
  .openapi({
    param: {
      name: 'filter',
      in: 'query',
      description:
        'Filter account history by input/output side, or by numeric token/internal filter id.',
      schema: {
        oneOf: [
          { type: 'string', enum: ['inputs', 'outputs'] },
          { type: 'integer', minimum: 0 },
        ],
      },
      required: false,
    },
  })

const ContractFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'contract',
      in: 'query',
      description: 'Contract address used to filter token data.',
      schema: { type: 'string' },
      required: false,
    },
  })

const ProtocolsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string().openapi({ example: 'erc4626' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'protocols',
      in: 'query',
      description:
        'Optional protocol enrichments, comma-separated or repeated. Currently supported value: erc4626. Unknown values are rejected.',
      style: 'form',
      explode: false,
      schema: { type: 'array', items: { type: 'string', example: 'erc4626' } },
      required: false,
    },
  })

const SecondaryCurrencyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'secondary',
      in: 'query',
      description: 'Secondary currency code used to populate fiat values.',
      schema: { type: 'string', example: 'usd' },
      required: false,
    },
    example: 'usd',
  })

const GapParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(10000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'gap',
      in: 'query',
      description: 'XPUB/address derivation gap limit. Values are capped by the server.',
      schema: { type: 'integer', minimum: 0, maximum: 10000 },
      required: false,
    },
  })

const ConfirmedNonceParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'confirmedNonce',
      in: 'query',
      description:
        'If true, additionally return the confirmed nonce for Ethereum-like\naddresses (the confirmedNonce response field). This triggers an extra\neth_getTransactionCount("latest") backend call, so it is off by default.',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const StatusExample = {
  summary: 'Blockbook and backend status',
  value: {
    blockbook: {
      coin: 'Bitcoin',
      network: 'BTC',
      host: 'backend5',
      version: '0.5.1',
      gitCommit: 'a0960c8e',
      buildTime: '2024-08-08T12:32:50+00:00',
      syncMode: true,
      initialSync: false,
      inSync: true,
      bestHeight: 860730,
      lastBlockTime: '2024-09-10T08:19:04.471017534Z',
      inSyncMempool: true,
      lastMempoolTime: '2024-09-10T08:42:39.38871351Z',
      mempoolSize: 232021,
      decimals: 8,
      dbSize: 761283489075,
      hasFiatRates: true,
      currentFiatRatesTime: '2024-09-10T08:42:00.898792419Z',
      historicalFiatRatesTime: '2024-09-10T00:00:00Z',
      about: 'Blockbook - blockchain indexer for Trezor Suite.',
    },
    backend: {
      chain: 'main',
      blocks: 860730,
      headers: 860730,
      bestBlockHash: '00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5',
      difficulty: '89471664776970.77',
      sizeOnDisk: 681584532221,
      version: '270100',
      subversion: '/Satoshi:27.1.0/',
      protocolVersion: '70016',
    },
  },
}

const BlockHashExample = {
  summary: 'Block hash at height',
  value: { blockHash: '0000000000000000000b7b8574bc6fd285825ec2dbcbeca149121fc05b0c828c' },
}

const RawBlockExample = { summary: 'Raw block', value: { hex: '00000020f3e9...' } }

const BlockFiltersExample = {
  summary: 'Compact block filters',
  value: {
    P: 19,
    M: 784931,
    zeroedKey: false,
    blockFilters: {
      '860730': {
        blockHash: '00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5',
        filter: '0286f0...',
      },
    },
  },
}

const BitcoinTransactionConfirmedExample = {
  summary: 'Bitcoin-like confirmed transaction',
  value: {
    txid: '8c1e3dec662d1f2a5e322ccef5eca263f98eb16723c6f990be0c88c1db113fb1',
    version: 2,
    lockTime: 860729,
    vin: [
      {
        txid: '0eb7b574373de2c88d0dc1444f49947c681d0437d21361f9ebb4dd09c62f2a66',
        vout: 1,
        sequence: 4294967293,
        n: 0,
        addresses: ['bc1qmgwnfjlda4ns3g6g3yz74w6scnn9yu2ts82yyc'],
        isAddress: true,
        value: '10106300',
      },
    ],
    vout: [
      {
        value: '175000',
        n: 0,
        hex: '76a914ecc999d554eaa3efa5e871c28f58b549c36ec51788ac',
        addresses: ['1Nb1ykSD7J5k4RFjJQGsrD9gxBE6jzfNa9'],
        isAddress: true,
      },
      {
        value: '9888100',
        n: 1,
        hex: '001496f152a0919487624bf4f13f46f0d20fa10d9acc',
        addresses: ['bc1qjmc49gy3jjrkyjl57yl5duxjp7ssmxkvh5t2q5'],
        isAddress: true,
      },
    ],
    blockHash: '00000000000000000000effeb0c4460480e6a347deab95332c63007a68646ee5',
    blockHeight: 860730,
    confirmations: 1,
    blockTime: 1725956288,
    size: 225,
    vsize: 144,
    value: '10063100',
    valueIn: '10106300',
    fees: '43200',
    hex: '02000000000101662a...',
  },
}

const BitcoinTransactionUnconfirmedExample = {
  summary: 'Bitcoin-like unconfirmed transaction',
  value: {
    txid: '73b1ad97194e426031e5c692869de2d83dc2ff6033fc6f0ab5514345f92eaf0d',
    version: 2,
    vin: [
      {
        txid: 'bccbebb64b1613ada74eefa96753088a80fefa53a10e42c66eef1899371bc096',
        n: 0,
        addresses: ['bc1q9lh77es6m8ztr7muwcec00ewn8fxakpl9jwv8y'],
        isAddress: true,
        value: '371042',
      },
    ],
    vout: [
      {
        value: '293135',
        n: 0,
        hex: '0014aafd7386f99f4b508ec05ee8f7edc2e07126620a',
        addresses: ['bc1q4t7h8phena94prkqtm500mwzupcjvcs2akcdy9'],
        isAddress: true,
      },
    ],
    blockHeight: -1,
    confirmations: 0,
    confirmationETABlocks: 1,
    confirmationETASeconds: 619,
    blockTime: 1725959035,
    size: 222,
    vsize: 141,
    value: '367157',
    valueIn: '371042',
    fees: '3885',
    rbf: true,
  },
}

const EthereumTransactionExample = {
  summary: 'Ethereum-like transaction',
  value: {
    txid: '0xa6c8ae1f91918d09cf2bd67bbac4c168849e672fd81316fa1d26bb9b4fc0f790',
    vin: [{ n: 0, addresses: ['0xd446089cf19C3D3Eb1743BeF3A852293Fd2C7775'], isAddress: true }],
    vout: [
      {
        value: '5615959129349132871',
        n: 0,
        addresses: ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88'],
        isAddress: true,
      },
    ],
    blockHash: '0x10ea8cfecda89d6d864c1d919911f819c9febc2b455b48c9918cee3c6cdc4adb',
    blockHeight: 16529834,
    confirmations: 3,
    blockTime: 1675204631,
    value: '5615959129349132871',
    fees: '19141662404282012',
    tokenTransfers: [
      {
        type: 'ERC20',
        standard: 'ERC20',
        from: '0xd446089cf19C3D3Eb1743BeF3A852293Fd2C7775',
        to: '0x3B685307C8611AFb2A9E83EBc8743dc20480716E',
        contract: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870',
        name: 'Fantom Token',
        symbol: 'FTM',
        decimals: 18,
        value: '15362368338194882707417',
      },
    ],
    ethereumSpecific: {
      status: 1,
      nonce: 505,
      gasLimit: 550941,
      gasUsed: 434686,
      gasPrice: '44035608242',
      effectiveGasPrice: '44035608242',
      maxPriorityFeePerGas: '44035608243',
      maxFeePerGas: '44035608244',
      baseFeePerGas: '2035608244',
      data: '0xac9650d800000000000000000000',
      parsedData: {
        methodId: '0xfa2b068f',
        name: 'Mint',
        function: 'mint(address, uint256, uint32, bytes32[], address)',
        params: [{ type: 'address', values: ['0xa5fD1Da088598e88ba731B0E29AECF0BC2A31F82'] }],
      },
      internalTransfers: [
        {
          type: 0,
          from: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
          to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          value: '5615959129349132871',
        },
      ],
    },
    addressAliases: {
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': { Type: 'Contract', Alias: 'Wrapped Ether' },
    },
  },
}

const TransactionSpecificExample = {
  summary: 'Backend-native transaction JSON',
  value: {
    hex: '040000808...8e6e73cb009',
    txid: '7a0a0ff6f67bac2a856c7296382b69151949878de6fb0d01a8efa197182b2913',
    size: 1809,
    overwintered: true,
    version: 4,
    versiongroupid: '892f2085',
    locktime: 0,
    expiryheight: 495680,
    vin: [],
    vout: [],
    blockhash: '0000000001c4aa394e796dd1b82e358f114535204f6f5b6cf4ad58dc439c47af',
    height: 495665,
    confirmations: 2145803,
    time: 1552301566,
    blocktime: 1552301566,
  },
}

const RawTransactionExample = {
  summary: 'Raw transaction hex',
  value: '02000000000101662a2fc609ddb4eb...',
}

const SendTransactionExample = {
  summary: 'Broadcast result',
  value: { result: '7c3be24063f268aaa1ed81b64776798f56088757641a34fb156c4f51ed2e9d25' },
}

const BitcoinAddressTxidsExample = {
  summary: 'Address with transaction ids',
  value: {
    page: 1,
    totalPages: 1,
    itemsOnPage: 1000,
    address: 'bc1q0wd209cv5k9pd9mhk7nspacywcj038xxdhnt5u',
    balance: '4225100',
    totalReceived: '4225100',
    totalSent: '0',
    unconfirmedBalance: '0',
    unconfirmedTxs: 0,
    txs: 2,
    txids: [
      '0db6010dc0815a4bdaa505bd1ccc851056b0d53c7e4ea7af39c4d648a2c0c019',
      '7532920ddc506218337cceac978cce9c7f98e27ad3226dee55f3e934e0b32e80',
    ],
  },
}

const EthereumAddressTokenBalancesExample = {
  summary: 'Ethereum address with token balances and secondary currency',
  value: {
    address: '0x2df3951b2037bA620C20Ed0B73CCF45Ea473e83B',
    balance: '21004631949601199',
    unconfirmedBalance: '0',
    unconfirmedTxs: 0,
    txs: 5,
    nonTokenTxs: 3,
    nonce: '1',
    tokens: [
      {
        type: 'ERC20',
        standard: 'ERC20',
        name: 'Tether USD',
        contract: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        transfers: 3,
        symbol: 'USDT',
        decimals: 6,
        balance: '4913000000',
        baseValue: 3.104622978658881,
        secondaryValue: 4914.214559070491,
      },
    ],
    secondaryValue: 33.247601671503574,
    tokensBaseValue: 3.104622978658881,
    tokensSecondaryValue: 4914.214559070491,
    totalBaseValue: 3.125627610608482,
    totalSecondaryValue: 4947.462160741995,
  },
}

const ContractInfoExample = {
  summary: 'Contract metadata with ERC4626 enrichment',
  value: {
    type: 'ERC20',
    standard: 'ERC20',
    contract: '0x0000000000000000000000000000000000000001',
    name: 'Vault Share',
    symbol: 'vETH',
    decimals: 18,
    rates: { baseRate: 0.000523, currency: 'usd', secondaryRate: 1.24 },
    protocols: {
      erc4626: {
        asset: {
          contract: '0x0000000000000000000000000000000000000002',
          name: 'Wrapped Ether',
          symbol: 'WETH',
          decimals: 18,
        },
        share: {
          contract: '0x0000000000000000000000000000000000000001',
          name: 'Vault Share',
          symbol: 'vETH',
          decimals: 18,
        },
        totalAssets: '123456789',
        convertToAssets1Share: '1000000000000000000',
        convertToShares1Asset: '1000000000000000000',
        previewDeposit1Asset: '999999999999999999',
        previewRedeem1Share: '1000000000000000000',
      },
    },
    blockHeight: 12345678,
  },
}

const XpubAddressExample = {
  summary: 'XPUB account',
  value: {
    page: 1,
    totalPages: 1,
    itemsOnPage: 1000,
    address: 'dgub8sbe5Mi8LA4dXB9zPfLZW8arm...9Vjp2HHx91xdDEmWYpmD49fpoUYF',
    balance: '90000000',
    totalReceived: '3093381250',
    totalSent: '3083381250',
    unconfirmedBalance: '0',
    unconfirmedTxs: 0,
    txs: 5,
    txids: ['383ccb5da16fccad294e24a2ef77bdee5810573bb1b252d8b2af4f0ac8c4e04c'],
    usedTokens: 2,
    tokens: [
      {
        type: 'XPUBAddress',
        standard: 'XPUBAddress',
        name: 'DUCd1B3YBiXL5By15yXgSLZtEkvwsgEdqS',
        path: "m/44'/3'/0'/0/0",
        transfers: 3,
        decimals: 8,
        balance: '90000000',
        totalReceived: '2903986975',
        totalSent: '2803986975',
      },
    ],
    secondaryValue: 21195.47633568,
  },
}

const UtxoListExample = {
  summary: 'UTXOs',
  value: [
    {
      txid: '13d26cd939bf5d155b1c60054e02d9c9b832a85e6ec4f2411be44b6b5a2842e9',
      vout: 0,
      value: '1422303206539',
      confirmations: 0,
      lockTime: 2648100,
    },
    {
      txid: 'a79e396a32e10856c97b95f43da7e9d2b9a11d446f7638dbd75e5e7603128cac',
      vout: 1,
      value: '39748685',
      height: 2648043,
      confirmations: 47,
      coinbase: true,
    },
  ],
}

const BlockExample = {
  summary: 'Block with transactions',
  value: {
    page: 1,
    totalPages: 1,
    itemsOnPage: 1000,
    hash: '760f8ed32894ccce9c1ea11c8a019cadaa82bcb434b25c30102dd7e43f326217',
    previousBlockHash: '786a1f9f38493d32fd9f9c104d748490a070bc74a83809103bcadd93ae98288f',
    nextBlockHash: '151615691b209de41dda4798a07e62db8429488554077552ccb1c4f8c7e9f57a',
    height: 2648059,
    confirmations: 47,
    size: 951,
    time: 1553096617,
    version: '6422787',
    merkleRoot: '6783f6083788c4f69b8af23bd2e4a194cf36ac34d590dfd97e510fe7aebc72c8',
    nonce: '0',
    bits: '1a063f3b',
    difficulty: '2685605.260733312',
    txCount: 2,
    txs: [
      {
        txid: '2b9fc57aaa8d01975631a703b0fc3f11d70671953fc769533b8078a04d029bf9',
        vin: [{ n: 0, isAddress: false, value: '0' }],
        vout: [
          {
            value: '1000100000000',
            n: 0,
            addresses: ['D6ravJL6Fgxtgp8k2XZZt1QfUmwwGuLwQJ'],
            isAddress: true,
          },
        ],
        blockHash: '760f8ed32894ccce9c1ea11c8a019cadaa82bcb434b25c30102dd7e43f326217',
        blockHeight: 2648059,
        confirmations: 47,
        blockTime: 1553096617,
        value: '1000100000000',
        valueIn: '0',
        fees: '0',
      },
    ],
  },
}

const EstimateFeeExample = { summary: 'Fee estimate', value: { result: '0.00002460' } }

const FeeStatsExample = {
  summary: 'Fee statistics',
  value: {
    txCount: 1820,
    totalFeesSat: '182000000',
    averageFeePerKb: 23.41,
    decilesFeePerKb: [3.1, 5.4, 8.8, 11.2, 15.7, 20.3, 26.8, 35.1, 48.4, 91.6],
  },
}

const TickersListExample = {
  summary: 'Available fiat currencies',
  value: { ts: 1574346615, available_currencies: ['eur', 'usd'] },
}

const FiatTickerAllExample = {
  summary: 'All available rates',
  value: { ts: 1574346615, rates: { eur: 7134.1, usd: 7914.5 } },
}

const FiatTickerUsdExample = {
  summary: 'Single currency rate',
  value: { ts: 1574346615, rates: { usd: 7914.5 } },
}

const FiatTickerUnavailableExample = {
  summary: 'Unavailable rate marker',
  value: { ts: 7980386400, rates: { usd: -1 } },
}

const MultiTickersExample = {
  summary: 'Rates for multiple timestamps',
  value: [
    { ts: 1574346615, rates: { usd: 7914.5 } },
    { ts: 1574433015, rates: { usd: 7344.2 } },
  ],
}

const BalanceHistoryAllRatesExample = {
  summary: 'Balance history with all rates',
  value: [
    {
      time: 1578391200,
      txs: 5,
      received: '5000000',
      sent: '0',
      sentToSelf: '100000',
      rates: { usd: 7855.9, eur: 6838.13 },
    },
    {
      time: 1578488400,
      txs: 1,
      received: '0',
      sent: '5000000',
      sentToSelf: '0',
      rates: { usd: 8283.11, eur: 7464.45 },
    },
  ],
}

const BalanceHistoryUsdExample = {
  summary: 'Balance history with USD only',
  value: [
    {
      time: 1578391200,
      txs: 5,
      received: '5000000',
      sent: '0',
      sentToSelf: '0',
      rates: { usd: 7855.9 },
    },
    {
      time: 1578488400,
      txs: 1,
      received: '0',
      sent: '5000000',
      sentToSelf: '0',
      rates: { usd: 8283.11 },
    },
  ],
}

const BalanceHistoryGroupedExample = {
  summary: 'Grouped balance history',
  value: [
    {
      time: 1578355200,
      txs: 6,
      received: '5000000',
      sent: '5000000',
      sentToSelf: '0',
      rates: { usd: 7734.45 },
    },
  ],
}

const WebSocketGetInfoRequestExample = {
  summary: 'Get current Blockbook info',
  value: { id: '1', method: 'getInfo', params: {} },
}

const WebSocketSubscribeAddressesRequestExample = {
  summary: 'Subscribe to address activity',
  value: {
    id: '1',
    method: 'subscribeAddresses',
    params: {
      addresses: [
        'mnYYiDCb2JZXnqEeXta1nkt5oCVe2RVhJj',
        'tb1qp0we5epypgj4acd2c4au58045ruud2pd6heuee',
      ],
      newBlockTxs: true,
    },
  },
}

const WebSocketGetContractInfoRequestExample = {
  summary: 'Get contract metadata with ERC4626 enrichment',
  value: {
    id: '1',
    method: 'getContractInfo',
    params: {
      contract: '0x0000000000000000000000000000000000000001',
      currency: 'usd',
      protocols: ['erc4626'],
    },
  },
}

const WebSocketGetBlockRequestExample = {
  summary: 'Get a block with paged transactions',
  value: {
    id: '1',
    method: 'getBlock',
    params: {
      id: '760f8ed32894ccce9c1ea11c8a019cadaa82bcb434b25c30102dd7e43f326217',
      page: 1,
      pageSize: 1000,
    },
  },
}

export const getApiStatusRoute = createRoute({
  method: 'get',
  path: '/api/status',
  tags: ['Status'],
  summary: 'Get Blockbook and backend status.',
  description:
    'Returns Blockbook sync state and connected backend metadata.\n\nLoad estimate: Low; constant-size status metadata.',
  operationId: 'getStatus',
  responses: {
    200: {
      description: 'Current Blockbook and backend status.',
      content: {
        'application/json': { schema: SystemInfoSchema, examples: { status: StatusExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiIndexRoute = createRoute({
  method: 'get',
  path: '/api/',
  tags: ['Status'],
  summary: 'Get status from the API index handler.',
  description:
    'Alias served by the same handler as /api/status on full public\ninterfaces.\n\nLoad estimate: Low; constant-size status metadata.',
  operationId: 'getApiIndexStatus',
  responses: {
    200: {
      description: 'Current Blockbook and backend status.',
      content: {
        'application/json': { schema: SystemInfoSchema, examples: { status: StatusExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2BlockIndexHeightRoute = createRoute({
  method: 'get',
  path: '/api/v2/block-index/{height}',
  tags: ['Blocks'],
  summary: 'Get a block hash by height.',
  description:
    'Returns the block hash for a height on the backend main chain.\nBlockbook follows the backend main chain; after a rollback or reorg,\nheight lookups resolve to the current main-chain block.\n\nLoad estimate: Low; indexed height-to-hash lookup.',
  operationId: 'getBlockHashByHeight',
  request: {
    params: z.object({
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'height',
            in: 'path',
            required: true,
            description: 'Block height on the backend main chain.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Block hash at the requested height.',
      content: {
        'application/json': {
          schema: BlockHashResponseSchema,
          examples: { blockHash: BlockHashExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2BlockBlockIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/block/{blockId}',
  tags: ['Blocks'],
  summary: 'Get a block by height or hash.',
  description:
    'Returns block information with paged transactions. When full\ntransaction details are unavailable, the response can contain only\ntransaction ids.\n\nBlockbook follows the backend main chain. Height lookups always return\nthe current main-chain block. Hash lookups can return a block from\nanother fork only if the backend still keeps it.\n\nLoad estimate: Medium; grows mainly with block transaction count and\nrequested page.',
  operationId: 'getBlock',
  request: {
    params: z.object({
      blockId: z
        .string()
        .openapi({
          param: {
            name: 'blockId',
            in: 'path',
            required: true,
            description: 'Block height or block hash.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ page: PageParamsSchema, pageSize: BlockPageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Block details.',
      content: { 'application/json': { schema: BlockSchema, examples: { block: BlockExample } } },
    },
    default: ErrorResponse,
  },
})

export const getApiV2RawblockBlockIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/rawblock/{blockId}',
  tags: ['Blocks'],
  summary: 'Get raw block hex.',
  description:
    'Returns raw serialized block data.\n\nLoad estimate: High for large blocks; payload size grows with the raw\nblock size.',
  operationId: 'getRawBlock',
  request: {
    params: z.object({
      blockId: z
        .string()
        .openapi({
          param: {
            name: 'blockId',
            in: 'path',
            required: true,
            description: 'Block height or block hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Raw block data.',
      content: {
        'application/json': { schema: BlockRawSchema, examples: { rawBlock: RawBlockExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2BlockFiltersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/block-filters/',
  tags: ['Blocks'],
  summary: 'Get compact block filters.',
  description:
    'Returns compact block filters for the script type configured on this\nBlockbook instance. Provide either lastN or a from/to range. When to is\nomitted for a range, the current best height is used.\n\nLoad estimate: High for wide ranges; work and payload grow linearly\nwith the number of requested filters.',
  operationId: 'getBlockFilters',
  request: {
    query: z.object({
      scriptType: z
        .string()
        .openapi({
          param: {
            name: 'scriptType',
            in: 'query',
            required: true,
            description:
              'Script type configured for block filters on this instance, for example taproot.',
            schema: { type: 'string' },
          },
        }),
      lastN: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'lastN',
            in: 'query',
            description: 'Return filters for the last N blocks.',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'First block height in the requested range.',
            schema: { type: 'integer', minimum: 0 },
            required: false,
          },
        }),
      to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            description:
              'Last block height in the requested range. Defaults to the current best height when omitted.',
            schema: { type: 'integer', minimum: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Block filters keyed by block height.',
      content: {
        'application/json': {
          schema: BlockFiltersSchema,
          examples: { blockFilters: BlockFiltersExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2TxTxidRoute = createRoute({
  method: 'get',
  path: '/api/v2/tx/{txid}',
  tags: ['Transactions'],
  summary: 'Get a normalized transaction.',
  description:
    'Returns normalized transaction data with the same general structure for\nall supported coins. Coin-specific fields that do not fit the common\nshape are omitted here; use getTransactionSpecific for backend-native\nJSON.\n\nBitcoin-like confirmed transactions include blockHash, confirmations,\nblockTime, size/vsize, value/valueIn, fees, and hex. Unconfirmed\ntransactions can include confirmationETABlocks and\nconfirmationETASeconds.\n\nEthereum-like transactions have one vin and one vout, tokenTransfers,\nethereumSpecific execution data, and optional addressAliases. Parsed\ninput data is included when the 4byte signature can be resolved.\n\nFor mined transactions, blockTime is the block timestamp. For mempool\ntransactions, blockTime is when this Blockbook instance first learned\nabout the transaction and can differ between instances.\n\nLoad estimate: Medium; grows with inputs, outputs, token transfers,\naddress aliases, and spending=true extra lookups.',
  operationId: 'getTransaction',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            name: 'txid',
            in: 'path',
            required: true,
            description: 'Transaction id/hash.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      spending: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'spending',
            in: 'query',
            description: 'Include spending transaction metadata for UTXO outputs when available.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Normalized transaction.',
      content: {
        'application/json': {
          schema: TxSchema,
          examples: {
            bitcoinConfirmed: BitcoinTransactionConfirmedExample,
            bitcoinUnconfirmed: BitcoinTransactionUnconfirmedExample,
            ethereum: EthereumTransactionExample,
          },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2TxSpecificTxidRoute = createRoute({
  method: 'get',
  path: '/api/v2/tx-specific/{txid}',
  tags: ['Transactions'],
  summary: 'Get blockchain-specific transaction JSON.',
  description:
    'Returns transaction data in the exact backend-specific format. Use this\nwhen a chain exposes fields that are intentionally absent from the\nnormalized Tx schema.\n\nLoad estimate: Medium; payload size depends on chain-specific fields\nand transaction complexity.',
  operationId: 'getTransactionSpecific',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            name: 'txid',
            in: 'path',
            required: true,
            description: 'Transaction id/hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chain-specific transaction payload.',
      content: {
        'application/json': {
          schema: z.any().openapi({ description: 'Arbitrary chain-specific transaction payload.' }),
          examples: { transactionSpecific: TransactionSpecificExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiRawtxTxidRoute = createRoute({
  method: 'get',
  path: '/api/rawtx/{txid}',
  tags: ['Transactions'],
  summary: 'Get raw transaction hex.',
  description:
    'Unversioned public endpoint exposed by Blockbook for raw transaction\ndata.\n\nLoad estimate: Medium; payload size grows with raw transaction size.',
  operationId: 'getRawTransaction',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            name: 'txid',
            in: 'path',
            required: true,
            description: 'Transaction id/hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Raw transaction hex as a JSON string.',
      content: {
        'application/json': {
          schema: z.string(),
          examples: { rawTransaction: RawTransactionExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2SendtxHexRoute = createRoute({
  method: 'get',
  path: '/api/v2/sendtx/{hex}',
  tags: ['Transactions'],
  summary: 'Broadcast a raw transaction using the path.',
  description:
    'Broadcasts hex-encoded raw transaction data. Prefer POST for large\npayloads.\n\nLoad estimate: High; validates and forwards to the backend, with cost\ngrowing with transaction size and backend mempool policy checks.',
  operationId: 'sendTransactionByGet',
  request: {
    params: z.object({
      hex: z
        .string()
        .regex(/^[0-9a-fA-F]+$/)
        .openapi({
          param: {
            name: 'hex',
            in: 'path',
            required: true,
            description: 'Raw transaction.',
            schema: { type: 'string', pattern: '^[0-9a-fA-F]+$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Broadcast result.',
      content: {
        'application/json': {
          schema: SendTransactionResponseSchema,
          examples: { broadcast: SendTransactionExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const postApiV2SendtxIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/sendtx/',
  tags: ['Transactions'],
  summary: 'Broadcast a raw transaction using the request body.',
  description:
    'Broadcasts hex-encoded raw transaction data from the request body. The\ntrailing slash is mandatory in the Blockbook handler. POST bodies are\nlimited to 8 MiB.\n\nLoad estimate: High; validates and forwards to the backend, with cost\ngrowing with transaction size and backend mempool policy checks.',
  operationId: 'sendTransactionByPost',
  request: {
    body: {
      content: { 'text/plain': { schema: z.string().regex(/^[0-9a-fA-F]+$/) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Broadcast result.',
      content: {
        'application/json': {
          schema: SendTransactionResponseSchema,
          examples: { broadcast: SendTransactionExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2AddressAddressRoute = createRoute({
  method: 'get',
  path: '/api/v2/address/{address}',
  tags: ['Accounts'],
  summary: 'Get address/account details.',
  description:
    'Returns balances and transactions of an address. Transactions are\nsorted by block height with newest blocks first. Response size is\ncontrolled by the details parameter.\n\nAt details=basic, mempool transactions are not aggregated:\nunconfirmedBalance, unconfirmedSending, and unconfirmedReceiving are\nomitted, and unconfirmedTxs reports the raw mempool index size for the\naddress.\n\nLoad estimate: Variable; basic is low, token/tokenBalances and\ntxids/txslight are medium, and txs can be high as it grows with\npageSize, transactions, token rows, filters, and protocol enrichment.',
  operationId: 'getAddress',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            name: 'address',
            in: 'path',
            required: true,
            description: 'Chain address.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      from: FromHeightParamsSchema,
      to: ToHeightParamsSchema,
      details: DetailsParamsSchema,
      filter: FilterParamsSchema,
      contract: ContractFilterParamsSchema,
      protocols: ProtocolsParamsSchema,
      secondary: SecondaryCurrencyParamsSchema,
      confirmedNonce: ConfirmedNonceParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Address/account details.',
      content: {
        'application/json': {
          schema: AddressSchema,
          examples: {
            bitcoinTxids: BitcoinAddressTxidsExample,
            ethereumTokenBalances: EthereumAddressTokenBalancesExample,
          },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2XpubXpubRoute = createRoute({
  method: 'get',
  path: '/api/v2/xpub/{xpub}',
  tags: ['Accounts'],
  summary: 'Get XPUB or descriptor account details.',
  description:
    "Returns balances and transactions of an XPUB or output descriptor for\nBitcoin-type coins. Transactions are sorted by block height with newest\nblocks first. URL-encode descriptors before placing them after /xpub/.\n\nBlockbook expects XPUBs at level 3 of the derivation path, for example\nm/purpose'/coin_type'/account'. It derives the remaining\nchange/address_index path. The BIP scheme is inferred from the XPUB\nprefix; unknown prefixes default to BIP44.\n\nSupported descriptors are pkh(xpub), sh(wpkh(xpub)), wpkh(xpub), and\ntr(xpub). Descriptors can include origin paths and change selectors\nsuch as <0;1> or {0,1}; when change is omitted, Blockbook defaults to\n<0;1>.\n\nNote: usedTokens always reports the total number of used addresses for\nthe XPUB, regardless of the tokens query filter.\n\nLoad estimate: High for broad accounts; grows with derived addresses,\ngap, used address count, pageSize, transaction history, token rows, and\nprotocol enrichment.",
  operationId: 'getXpub',
  request: {
    params: z.object({
      xpub: z
        .string()
        .openapi({
          param: {
            name: 'xpub',
            in: 'path',
            required: true,
            allowReserved: true,
            description: 'XPUB or supported descriptor.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      from: FromHeightParamsSchema,
      to: ToHeightParamsSchema,
      details: DetailsParamsSchema,
      tokens: TokensParamsSchema,
      filter: FilterParamsSchema,
      contract: ContractFilterParamsSchema,
      protocols: ProtocolsParamsSchema,
      secondary: SecondaryCurrencyParamsSchema,
      gap: GapParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'XPUB/descriptor account details.',
      content: {
        'application/json': { schema: AddressSchema, examples: { xpub: XpubAddressExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2UtxoDescriptorRoute = createRoute({
  method: 'get',
  path: '/api/v2/utxo/{descriptor}',
  tags: ['Accounts'],
  summary: 'Get UTXOs for an address, XPUB, or descriptor.',
  description:
    'Returns unspent outputs for an address, XPUB, or descriptor on\nBitcoin-type coins. By default both confirmed and unconfirmed UTXOs are\nreturned; confirmed=true filters out unconfirmed entries. Results are\nsorted by block height with newest entries first.\n\nUnconfirmed UTXOs omit height, have confirmations set to 0, and can\ninclude lockTime. XPUB and descriptor UTXOs also include address and\nderivation path when available. Coinbase UTXOs include coinbase=true\nonly up to the coinbase confirmation limit, currently 100 blocks.\n\nLoad estimate: Variable; address lookups are usually medium, while\nXPUB/descriptor lookups grow with gap, derived addresses, and UTXO\ncount.',
  operationId: 'getUtxo',
  request: {
    params: z.object({
      descriptor: z
        .string()
        .openapi({
          param: {
            name: 'descriptor',
            in: 'path',
            required: true,
            allowReserved: true,
            description: 'Address, XPUB, or supported descriptor. URL-encode descriptors.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      confirmed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'confirmed',
            in: 'query',
            description: 'When true, return only confirmed UTXOs.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      gap: GapParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'UTXO list.',
      content: {
        'application/json': { schema: z.array(UtxoSchema), examples: { utxos: UtxoListExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2BalancehistoryDescriptorRoute = createRoute({
  method: 'get',
  path: '/api/v2/balancehistory/{descriptor}',
  tags: ['Accounts'],
  summary: 'Get account balance history.',
  description:
    'Returns balance history points for an address, XPUB, or descriptor.\nfrom and to are Unix timestamps. groupBy is an aggregation interval in\nseconds and defaults to 3600. When fiatcurrency is omitted, rates can\ncontain all available currencies. sentToSelf is the amount sent from an\naddress to itself or within addresses of the same XPUB.\n\nLoad estimate: High; grows with account transaction history, time span,\ngrouping cardinality, fiat rate lookups, and XPUB/descriptor gap.',
  operationId: 'getBalanceHistory',
  request: {
    params: z.object({
      descriptor: z
        .string()
        .openapi({
          param: {
            name: 'descriptor',
            in: 'path',
            required: true,
            allowReserved: true,
            description: 'Address, XPUB, or supported descriptor. URL-encode descriptors.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'Unix timestamp lower bound.',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      to: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            description: 'Unix timestamp upper bound.',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      fiatcurrency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fiatcurrency',
            in: 'query',
            description: 'Optional fiat currency code to include in rates.',
            schema: { type: 'string', example: 'usd' },
            required: false,
          },
          example: 'usd',
        }),
      groupBy: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'groupBy',
            in: 'query',
            description: 'Aggregation interval in seconds. Defaults to 3600.',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
      gap: GapParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Balance history points.',
      content: {
        'application/json': {
          schema: z.array(BalanceHistorySchema),
          examples: {
            allRates: BalanceHistoryAllRatesExample,
            usd: BalanceHistoryUsdExample,
            grouped: BalanceHistoryGroupedExample,
          },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2ContractContractRoute = createRoute({
  method: 'get',
  path: '/api/v2/contract/{contract}',
  tags: ['Contracts'],
  summary: 'Get contract metadata.',
  description:
    "Returns indexed token/contract metadata and optional current protocol\nenrichments such as ERC4626.\n\nblockHeight reflects the indexer's best block at request time.\nERC4626 fields under protocols.erc4626 are fetched through JSON-RPC\ncalls pinned to that exact blockHeight, so the ERC4626 values are a\nconsistent snapshot. If a vault is detected but the underlying asset\nmetadata cannot be resolved, protocols.erc4626 contains error and omits\nasset; callers must not derive fiat rates or human-unit exchange rates\nfrom such a partial response.\n\nLoad estimate: Medium; indexed metadata is cheap, but optional protocol\nenrichment can add backend RPC calls and token metadata lookups.",
  operationId: 'getContractInfo',
  request: {
    params: z.object({
      contract: z
        .string()
        .openapi({
          param: {
            name: 'contract',
            in: 'path',
            required: true,
            description: 'Smart contract address.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description: 'Secondary currency code for rates.',
            schema: { type: 'string', example: 'usd' },
            required: false,
          },
          example: 'usd',
        }),
      protocols: ProtocolsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Contract metadata.',
      content: {
        'application/json': {
          schema: ContractInfoResultSchema,
          examples: { contract: ContractInfoExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2EstimatefeeBlocksRoute = createRoute({
  method: 'get',
  path: '/api/v2/estimatefee/{blocks}',
  tags: ['Fees'],
  summary: 'Estimate a fee target.',
  description:
    'Returns backend fee estimation for the requested confirmation target.\n\nLoad estimate: Low; a small backend fee estimate lookup.',
  operationId: 'estimateFee',
  request: {
    params: z.object({
      blocks: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'blocks',
            in: 'path',
            required: true,
            description: 'Confirmation target in blocks.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    query: z.object({
      conservative: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'conservative',
            in: 'query',
            description: 'Use conservative smart fee estimation where supported.',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Decimal fee estimate in chain base currency.',
      content: {
        'application/json': {
          schema: ResultStringResponseSchema,
          examples: { estimateFee: EstimateFeeExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2FeestatsBlockIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/feestats/{blockId}',
  tags: ['Fees'],
  summary: 'Get fee statistics for a block.',
  description:
    'Returns fee statistics for transactions in one block.\n\nLoad estimate: Medium to high; grows with the number of transactions\nin the requested block.',
  operationId: 'getFeeStats',
  request: {
    params: z.object({
      blockId: z
        .string()
        .openapi({
          param: {
            name: 'blockId',
            in: 'path',
            required: true,
            description: 'Block height or block hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Fee statistics.',
      content: {
        'application/json': { schema: FeeStatsSchema, examples: { feeStats: FeeStatsExample } },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2TickersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/tickers/',
  tags: ['Fiat'],
  summary: 'Get current or historical fiat rates.',
  description:
    'Returns currency rates for the requested currency and date. If a rate\nis unavailable for the exact timestamp, the closest available rate can\nbe returned. Responses include the actual rate timestamp. Without a\ncurrency parameter, all available currencies can be returned. A rate of\n-1 marks an unavailable or invalid currency for that timestamp.\n\nLoad estimate: Low to medium; specific currency lookups are cheap,\nwhile omitted currency and token lookups increase response size.',
  operationId: 'getFiatTicker',
  request: {
    query: z.object({
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description:
              'Optional currency code. When omitted, all available rates can be returned.',
            schema: { type: 'string', example: 'usd' },
            required: false,
          },
          example: 'usd',
        }),
      timestamp: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            description: 'Unix timestamp for historical rates.',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      block: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'block',
            in: 'query',
            description:
              'Block height or hash whose timestamp should be used for historical rates.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Optional token symbol or contract/address key for token-specific rates.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Fiat rate ticker.',
      content: {
        'application/json': {
          schema: FiatTickerSchema,
          examples: {
            allRates: FiatTickerAllExample,
            usd: FiatTickerUsdExample,
            unavailable: FiatTickerUnavailableExample,
          },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2MultiTickersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/multi-tickers/',
  tags: ['Fiat'],
  summary: 'Get fiat rates for multiple timestamps.',
  description:
    'Returns fiat rate tickers for a comma-separated list of Unix\ntimestamps.\n\nLoad estimate: Medium; work and payload grow linearly with timestamp\ncount, plus token/currency selection.',
  operationId: 'getFiatTickersForTimestamps',
  request: {
    query: z.object({
      timestamp: z
        .string()
        .regex(/^[0-9]+(,[0-9]+)*$/)
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            required: true,
            description: 'Comma-separated Unix timestamps.',
            schema: {
              type: 'string',
              pattern: '^[0-9]+(,[0-9]+)*$',
              example: '1710000000,1720000000',
            },
          },
          example: '1710000000,1720000000',
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description: 'Optional currency code.',
            schema: { type: 'string', example: 'usd' },
            required: false,
          },
          example: 'usd',
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Optional token symbol or contract/address key.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Fiat rate tickers.',
      content: {
        'application/json': {
          schema: z.array(FiatTickerSchema),
          examples: { multiTickers: MultiTickersExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV2TickersListIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/tickers-list/',
  tags: ['Fiat'],
  summary: 'Get currencies available for a timestamp.',
  description:
    'Returns available secondary currencies for a date together with the\nactual rate timestamp.\n\nLoad estimate: Low to medium; token lookups and wide currency lists\nincrease response size.',
  operationId: 'getFiatTickersList',
  request: {
    query: z.object({
      timestamp: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            required: true,
            description: 'Unix timestamp for the requested currency list.',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Optional token symbol or contract/address key.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Available currencies.',
      content: {
        'application/json': {
          schema: AvailableVsCurrenciesSchema,
          examples: { tickersList: TickersListExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV1BlockIndexHeightRoute = createRoute({
  method: 'get',
  path: '/api/v1/block-index/{height}',
  tags: ['Legacy'],
  summary: 'Legacy get block hash by height.',
  description:
    'Bitcore Insight-compatible V1 route for Bitcoin-type coins.\n\nLoad estimate: Low; indexed height-to-hash lookup.',
  operationId: 'getLegacyBlockHashByHeight',
  request: {
    params: z.object({
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'height',
            in: 'path',
            required: true,
            description: 'Block height on the backend main chain.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Block hash at the requested height.',
      content: {
        'application/json': {
          schema: BlockHashResponseSchema,
          examples: { blockHash: BlockHashExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV1TxTxidRoute = createRoute({
  method: 'get',
  path: '/api/v1/tx/{txid}',
  tags: ['Legacy'],
  summary: 'Legacy get transaction.',
  description:
    'Bitcore Insight-compatible V1 transaction shape for Bitcoin-type\ncoins.\n\nLoad estimate: Medium; grows with inputs, outputs, scripts, and raw\ntransaction size.',
  operationId: 'getLegacyTransaction',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            name: 'txid',
            in: 'path',
            required: true,
            description: 'Transaction id/hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Legacy transaction payload.',
      content: { 'application/json': { schema: LegacyObjectSchema } },
    },
    default: ErrorResponse,
  },
})

export const getApiV1AddressAddressRoute = createRoute({
  method: 'get',
  path: '/api/v1/address/{address}',
  tags: ['Legacy'],
  summary: 'Legacy get address.',
  description:
    'Bitcore Insight-compatible V1 address shape for Bitcoin-type coins.\n\nLoad estimate: Variable; grows with address transaction count and\nlegacy response expansion.',
  operationId: 'getLegacyAddress',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            name: 'address',
            in: 'path',
            required: true,
            description: 'Chain address.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Legacy address payload.',
      content: { 'application/json': { schema: LegacyObjectSchema } },
    },
    default: ErrorResponse,
  },
})

export const getApiV1UtxoAddressRoute = createRoute({
  method: 'get',
  path: '/api/v1/utxo/{address}',
  tags: ['Legacy'],
  summary: 'Legacy get address UTXOs.',
  description:
    'Bitcore Insight-compatible V1 UTXO list for Bitcoin-type coins.\n\nLoad estimate: Medium; grows with the number of unspent outputs.',
  operationId: 'getLegacyUtxo',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            name: 'address',
            in: 'path',
            required: true,
            description: 'Chain address.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Legacy UTXO list.',
      content: { 'application/json': { schema: z.array(LegacyObjectSchema) } },
    },
    default: ErrorResponse,
  },
})

export const getApiV1BlockBlockIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/block/{blockId}',
  tags: ['Legacy'],
  summary: 'Legacy get block by height or hash.',
  description:
    'Bitcore Insight-compatible V1 block shape for Bitcoin-type coins.\n\nLoad estimate: Medium to high; grows with block transaction count and\nlegacy payload size.',
  operationId: 'getLegacyBlock',
  request: {
    params: z.object({
      blockId: z
        .string()
        .openapi({
          param: {
            name: 'blockId',
            in: 'path',
            required: true,
            description: 'Block height or block hash.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Legacy block payload.',
      content: { 'application/json': { schema: LegacyObjectSchema } },
    },
    default: ErrorResponse,
  },
})

export const getApiV1EstimatefeeBlocksRoute = createRoute({
  method: 'get',
  path: '/api/v1/estimatefee/{blocks}',
  tags: ['Legacy'],
  summary: 'Legacy estimate fee target.',
  description:
    'Bitcore Insight-compatible V1 fee estimate for Bitcoin-type coins.\n\nLoad estimate: Low; a small backend fee estimate lookup.',
  operationId: 'estimateLegacyFee',
  request: {
    params: z.object({
      blocks: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .openapi({
          param: {
            name: 'blocks',
            in: 'path',
            required: true,
            description: 'Confirmation target in blocks.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Decimal fee estimate in chain base currency.',
      content: {
        'application/json': {
          schema: ResultStringResponseSchema,
          examples: { estimateFee: EstimateFeeExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getApiV1SendtxHexRoute = createRoute({
  method: 'get',
  path: '/api/v1/sendtx/{hex}',
  tags: ['Legacy'],
  summary: 'Legacy broadcast transaction using the path.',
  description:
    'Bitcore Insight-compatible V1 broadcast route for Bitcoin-type coins.\n\nLoad estimate: High; validates and forwards to the backend, with cost\ngrowing with transaction size and backend mempool policy checks.',
  operationId: 'sendLegacyTransactionByGet',
  request: {
    params: z.object({
      hex: z
        .string()
        .regex(/^[0-9a-fA-F]+$/)
        .openapi({
          param: {
            name: 'hex',
            in: 'path',
            required: true,
            description: 'Raw transaction.',
            schema: { type: 'string', pattern: '^[0-9a-fA-F]+$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Broadcast result.',
      content: {
        'application/json': {
          schema: SendTransactionResponseSchema,
          examples: { broadcast: SendTransactionExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const postApiV1SendtxIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/sendtx/',
  tags: ['Legacy'],
  summary: 'Legacy broadcast transaction using the request body.',
  description:
    'Bitcore Insight-compatible V1 broadcast route for Bitcoin-type coins.\n\nLoad estimate: High; validates and forwards to the backend, with cost\ngrowing with transaction size and backend mempool policy checks.',
  operationId: 'sendLegacyTransactionByPost',
  request: {
    body: {
      content: { 'text/plain': { schema: z.string().regex(/^[0-9a-fA-F]+$/) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Broadcast result.',
      content: {
        'application/json': {
          schema: SendTransactionResponseSchema,
          examples: { broadcast: SendTransactionExample },
        },
      },
    },
    default: ErrorResponse,
  },
})

export const getWebsocketRoute = createRoute({
  method: 'get',
  path: '/websocket',
  tags: ['WebSocket'],
  summary: 'WebSocket upgrade endpoint.',
  description:
    'Connect with a WebSocket client and exchange JSON messages using the\nWsRequest/WsResponse schemas. The endpoint can also be explored through\n/test-websocket.html on a Blockbook instance.\n\nDuring a backend reorg, new-block notifications can contain a block\nhash at the same or even smaller height.\n\nLoad estimate: Variable; idle connections are low, request methods\ncost roughly like their REST equivalents, and subscriptions grow with\nconnection count, subscribed addresses, and event frequency.',
  operationId: 'connectWebSocket',
  responses: {
    101: { description: 'WebSocket protocol upgrade.' },
    400: { description: 'Bad WebSocket upgrade request.' },
  },
  servers: [
    {
      url: 'https://raw.githubusercontent.com/',
      description:
        'Current Blockbook instance. Use ws or wss with the current host for WebSocket clients.',
    },
  ],
})
