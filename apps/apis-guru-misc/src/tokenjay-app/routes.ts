import { createRoute, z } from '@hono/zod-openapi'

const ActionSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Action')

const AddRequestResponseSchema = z
  .object({ ergoPayUrl: z.string(), requestId: z.string() })
  .openapi({ required: ['ergoPayUrl', 'requestId'] })
  .openapi('AddRequestResponse')

const AgeUsdExchangeInfoSchema = z
  .object({
    bankFeeAmount: z
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
    bankFeeDescription: z.string(),
    ergAmount: z
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
    ergAmountDescription: z.string(),
    exchangeRate: z
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
    jayFeeAmount: z
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
    jayFeeDescription: z.string(),
    totalAmount: z
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
  })
  .openapi({
    required: [
      'bankFeeAmount',
      'bankFeeDescription',
      'ergAmount',
      'ergAmountDescription',
      'exchangeRate',
      'jayFeeAmount',
      'jayFeeDescription',
      'totalAmount',
    ],
  })
  .openapi('AgeUsdExchangeInfo')

const AgeUsdInfoSchema = z
  .object({
    reserveRatio: z
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
    sigRsvPrice: z
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
    sigUsdPrice: z
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
  })
  .openapi({ required: ['reserveRatio', 'sigRsvPrice', 'sigUsdPrice'] })
  .openapi('AgeUsdInfo')

const GenuineTokenSchema = z
  .object({
    issuer: z.string().exactOptional(),
    tokenId: z.string(),
    tokenName: z.string(),
    uniqueName: z.boolean(),
  })
  .openapi({ required: ['tokenId', 'tokenName', 'uniqueName'] })
  .openapi('GenuineToken')

const CheckResponseSchema = z
  .object({
    genuine: z
      .int32()
      .openapi({
        description: 'Flag with 0 unknown, 1 verified, 2 suspicious, 3 blocked (see EIP-21)',
      }),
    token: GenuineTokenSchema.exactOptional(),
  })
  .openapi({ required: ['genuine'] })
  .openapi('CheckResponse')

const CreatePaymentRequestSchema = z
  .object({
    message: z.string().exactOptional(),
    nanoErg: z
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
    receiverAddress: z.string(),
    senderAddress: z.string().exactOptional(),
    tokenId: z.string().exactOptional(),
    tokenRawAmount: z
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
  .openapi({ required: ['nanoErg', 'receiverAddress'] })
  .openapi('CreatePaymentRequest')

const ErgoPayResponseSchema = z
  .object({
    address: z.string().exactOptional(),
    addresses: z.array(z.string()).exactOptional(),
    message: z.string().exactOptional(),
    messageSeverity: z.enum(['NONE', 'INFORMATION', 'WARNING', 'ERROR']).exactOptional(),
    reducedTx: z.string().exactOptional(),
    reducedTxList: z.array(z.string()).exactOptional(),
    replyTo: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErgoPayResponse')

const FetchActionResponseSchema = z
  .object({ action: ActionSchema.exactOptional(), appVersion: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('FetchActionResponse')

const MosaikManifestSchema = z
  .object({
    appDescription: z.string().exactOptional(),
    appName: z.string().exactOptional(),
    appVersion: z.int32().exactOptional(),
    cacheLifetime: z.int32().exactOptional(),
    errorReportUrl: z.string().exactOptional(),
    iconUrl: z.string().exactOptional(),
    notificationCheckUrl: z.string().exactOptional(),
    onAppLoadedAction: z.string().exactOptional(),
    onResizeAction: z.string().exactOptional(),
    targetCanvasDimension: z.enum(['COMPACT_WIDTH', 'MEDIUM_WIDTH', 'FULL_WIDTH']).exactOptional(),
    targetMosaikVersion: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MosaikManifest')

const ViewElementSchema = z
  .object({
    id: z.string().exactOptional(),
    onClickAction: z.string().exactOptional(),
    onLongPressAction: z.string().exactOptional(),
    visible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ViewElement')

const MosaikAppSchema = z
  .object({
    actions: z.array(ActionSchema).exactOptional(),
    manifest: MosaikManifestSchema.exactOptional(),
    view: ViewElementSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MosaikApp')

const NodePeerSchema = z
  .object({
    blockHeight: z
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
    blockchainApi: z.boolean(),
    headerHeight: z
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
    lastSeen: z
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
    name: z.string(),
    openRestApi: z.boolean(),
    responseTime: z
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
    url: z.string(),
  })
  .openapi({
    required: [
      'blockHeight',
      'blockchainApi',
      'headerHeight',
      'lastSeen',
      'name',
      'openRestApi',
      'responseTime',
      'url',
    ],
  })
  .openapi('NodePeer')

const NotificationCheckResponseSchema = z
  .object({
    message: z.string().exactOptional(),
    messageTs: z
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
    nextCheck: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationCheckResponse')

const PaymentRequestStateResponseSchema = z
  .object({
    paymentRequestState: z.enum(['CREATED', 'WAITING', 'EXECUTED', 'INVALID']),
    requestId: z.string(),
    txId: z.string().exactOptional(),
  })
  .openapi({ required: ['paymentRequestState', 'requestId'] })
  .openapi('PaymentRequestStateResponse')

const TokenPriceSchema = z
  .object({
    available: z
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
    displayName: z.string(),
    lastUpdated: z
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
    price: z
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
    tokenId: z.string(),
    volumeLastDay: z
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
  })
  .openapi({
    required: ['available', 'displayName', 'lastUpdated', 'price', 'tokenId', 'volumeLastDay'],
  })
  .openapi('TokenPrice')

export const getAgeusdInfoRoute = createRoute({
  method: 'get',
  path: '/ageusd/info',
  tags: ['ageUsd'],
  summary: 'Returns state of AgeUSD at this moment',
  operationId: 'getAgeUsdInfo',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: AgeUsdInfoSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getCancelbabelBoxIdRoute = createRoute({
  method: 'get',
  path: '/cancelbabel/{boxId}',
  tags: ['babel-fee-controller'],
  operationId: 'ergoPayCreateBabelBox_1',
  request: {
    params: z.object({
      boxId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'boxId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getCreatebabelAddressRoute = createRoute({
  method: 'get',
  path: '/createbabel/{address}',
  tags: ['babel-fee-new-offer-controller'],
  operationId: 'ergoPayCreateBabelBox',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      tokenId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'tokenId', required: true, schema: { type: 'string' } },
        }),
      ergAmount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'ergAmount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      tokenAmount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'tokenAmount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikBabelfeeIndexRoute = createRoute({
  method: 'get',
  path: '/mosaik/babelfee/',
  tags: ['babel-fee-controller'],
  operationId: 'getBabelFeeOverview',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: MosaikAppSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikBabelfeeNewofferRoute = createRoute({
  method: 'get',
  path: '/mosaik/babelfee/newoffer',
  tags: ['babel-fee-new-offer-controller'],
  operationId: 'getBabelFeeNewOffer',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: MosaikAppSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const postMosaikBabelfeeNewofferDoitRoute = createRoute({
  method: 'post',
  path: '/mosaik/babelfee/newoffer/doit',
  tags: ['babel-fee-new-offer-controller'],
  operationId: 'doCreateBabelBox',
  request: {
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.object({})) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: FetchActionResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const postMosaikBabelfeeNewofferNewInputRoute = createRoute({
  method: 'post',
  path: '/mosaik/babelfee/newoffer/new-input',
  tags: ['babel-fee-new-offer-controller'],
  operationId: 'replaceTokenAmountInputFields',
  request: {
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.object({})) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: FetchActionResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikBabelfeeNotificationcheckRoute = createRoute({
  method: 'get',
  path: '/mosaik/babelfee/notificationcheck',
  tags: ['babel-fee-controller'],
  operationId: 'checkForNotifications',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: NotificationCheckResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikBoxconsolidationIndexRoute = createRoute({
  method: 'get',
  path: '/mosaik/boxconsolidation/',
  tags: ['box-consolidation-controller'],
  operationId: 'mainApp_1',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: MosaikAppSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikBoxconsolidationConsolidateP2pkaddressRoute = createRoute({
  method: 'get',
  path: '/mosaik/boxconsolidation/consolidate/{p2pkaddress}',
  tags: ['box-consolidation-controller'],
  operationId: 'epConsolidate',
  request: {
    params: z.object({
      p2pkaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'p2pkaddress', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikTokenburnRoute = createRoute({
  method: 'get',
  path: '/mosaik/tokenburn',
  tags: ['token-burn-controller'],
  operationId: 'mainApp',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: MosaikAppSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMosaikTokenburnGetUuidRoute = createRoute({
  method: 'get',
  path: '/mosaik/tokenburn/get/{uuid}',
  tags: ['token-burn-controller'],
  operationId: 'getBurningTransaction',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const postMosaikTokenburnPrepareRoute = createRoute({
  method: 'post',
  path: '/mosaik/tokenburn/prepare',
  tags: ['token-burn-controller'],
  operationId: 'prepareTransaction',
  request: {
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.object({})) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: FetchActionResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const postPaymentAddrequestRoute = createRoute({
  method: 'post',
  path: '/payment/addrequest',
  tags: ['paymentPortal'],
  summary:
    'Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code',
  operationId: 'addPaymentRequest',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePaymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: AddRequestResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getPaymentStateRequestIdRoute = createRoute({
  method: 'get',
  path: '/payment/state/{requestId}',
  tags: ['paymentPortal'],
  summary:
    'Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed',
  operationId: 'getPaymentState',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'requestId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: PaymentRequestStateResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getPeersListRoute = createRoute({
  method: 'get',
  path: '/peers/list',
  tags: ['peerDetection'],
  summary: 'Lists known peers sorted by block height',
  operationId: 'getPeersList',
  request: {
    query: z.object({
      unreachable: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show unreachable peers in the list',
            in: 'query',
            name: 'unreachable',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      closedApi: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show peers not open to be connected',
            in: 'query',
            name: 'closedApi',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(NodePeerSchema) } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigrsvExchangeIndexRoute = createRoute({
  method: 'get',
  path: '/sigrsv/exchange/',
  tags: ['ageUsd'],
  summary: 'Builds ErgoPayRequest for SigRSV exchange',
  operationId: 'doSigmaRsvExchange',
  request: {
    query: z.object({
      amount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'amount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      address: z
        .string()
        .openapi({
          param: { in: 'query', name: 'address', required: true, schema: { type: 'string' } },
        }),
      checkRate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'checkRate',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
      executionFee: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'executionFee',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigrsvExchangeAmountInfoRoute = createRoute({
  method: 'get',
  path: '/sigrsv/exchange/{amount}/info',
  tags: ['ageUsd'],
  summary: 'Calculates SigRSV exchange',
  operationId: 'calcSigmaRsvExchange',
  request: {
    params: z.object({
      amount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'amount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: AgeUsdExchangeInfoSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigrsvPriceRoute = createRoute({
  method: 'get',
  path: '/sigrsv/price',
  tags: ['ageUsd'],
  summary: 'Lists price and available volume for SigmaRSV',
  operationId: 'getSigmaRsvPrice',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TokenPriceSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigusdExchangeIndexRoute = createRoute({
  method: 'get',
  path: '/sigusd/exchange/',
  tags: ['ageUsd'],
  summary: 'Builds ErgoPayRequest for SigUSD exchange',
  operationId: 'doSigmaUsdExchange',
  request: {
    query: z.object({
      amount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'amount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      address: z
        .string()
        .openapi({
          param: { in: 'query', name: 'address', required: true, schema: { type: 'string' } },
        }),
      checkRate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'checkRate',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
      executionFee: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'executionFee',
            required: false,
            schema: { default: 0, format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ErgoPayResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigusdExchangeAmountInfoRoute = createRoute({
  method: 'get',
  path: '/sigusd/exchange/{amount}/info',
  tags: ['ageUsd'],
  summary: 'Calculates SigUSD exchange',
  operationId: 'calcSigmaUsdExchange',
  request: {
    params: z.object({
      amount: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'amount',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: AgeUsdExchangeInfoSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getSigusdPriceRoute = createRoute({
  method: 'get',
  path: '/sigusd/price',
  tags: ['ageUsd'],
  summary: 'Lists price and available volume for SigmaUSD',
  operationId: 'getSigmaUsdPrice',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TokenPriceSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getTokensCheckTokenIdTokenNameRoute = createRoute({
  method: 'get',
  path: '/tokens/check/{tokenId}/{tokenName}',
  tags: ['tokenVerification'],
  summary: 'Check a token verification',
  operationId: 'checkToken',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tokenId', required: true, schema: { type: 'string' } },
        }),
      tokenName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tokenName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CheckResponseSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getTokensListBlockedRoute = createRoute({
  method: 'get',
  path: '/tokens/listBlocked',
  tags: ['tokenVerification'],
  summary: 'Lists all blocked tokens',
  operationId: 'listBlocked',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(z.string()) } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getTokensListGenuineRoute = createRoute({
  method: 'get',
  path: '/tokens/listGenuine',
  tags: ['tokenVerification'],
  summary: 'Lists all genuine tokens known',
  operationId: 'listGenuine',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GenuineTokenSchema) } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getTokensPricesAllRoute = createRoute({
  method: 'get',
  path: '/tokens/prices/all',
  tags: ['tokenPrices'],
  summary: 'Lists all token prices and available volume',
  operationId: 'getTokenPrices',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(TokenPriceSchema) } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})

export const getTokensPricesTokenIdRoute = createRoute({
  method: 'get',
  path: '/tokens/prices/{tokenId}',
  tags: ['tokenPrices'],
  summary: 'Lists price and available volume for a certain token',
  operationId: 'getTokenPrice',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tokenId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TokenPriceSchema } } },
    400: { description: 'Bad Request', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { '*/*': { schema: z.string() } } },
    404: { description: 'Not Found', content: { '*/*': { schema: z.string() } } },
    409: { description: 'Conflict', content: { '*/*': { schema: z.string() } } },
  },
})
