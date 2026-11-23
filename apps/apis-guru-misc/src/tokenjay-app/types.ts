type AgeUsdInfo = { reserveRatio: bigint; sigRsvPrice: bigint; sigUsdPrice: bigint }
type ErgoPayResponse = {
  address?: string | undefined
  addresses?: string[] | undefined
  message?: string | undefined
  messageSeverity?: 'NONE' | 'INFORMATION' | 'WARNING' | 'ERROR' | undefined
  reducedTx?: string | undefined
  reducedTxList?: string[] | undefined
  replyTo?: string | undefined
}
type Action = { id?: string | undefined }
type MosaikManifest = {
  appDescription?: string | undefined
  appName?: string | undefined
  appVersion?: number | undefined
  cacheLifetime?: number | undefined
  errorReportUrl?: string | undefined
  iconUrl?: string | undefined
  notificationCheckUrl?: string | undefined
  onAppLoadedAction?: string | undefined
  onResizeAction?: string | undefined
  targetCanvasDimension?: 'COMPACT_WIDTH' | 'MEDIUM_WIDTH' | 'FULL_WIDTH' | undefined
  targetMosaikVersion?: number | undefined
}
type ViewElement = {
  id?: string | undefined
  onClickAction?: string | undefined
  onLongPressAction?: string | undefined
  visible?: boolean | undefined
}
type MosaikApp = {
  actions?: Action[] | undefined
  manifest?: MosaikManifest | undefined
  view?: ViewElement | undefined
}
type FetchActionResponse = { action?: Action | undefined; appVersion?: number | undefined }
type NotificationCheckResponse = {
  message?: string | undefined
  messageTs?: bigint | undefined
  nextCheck?: number | undefined
}
type CreatePaymentRequest = {
  message?: string | undefined
  nanoErg: bigint
  receiverAddress: string
  senderAddress?: string | undefined
  tokenId?: string | undefined
  tokenRawAmount?: bigint | undefined
}
type AddRequestResponse = { ergoPayUrl: string; requestId: string }
type PaymentRequestStateResponse = {
  paymentRequestState: 'CREATED' | 'WAITING' | 'EXECUTED' | 'INVALID'
  requestId: string
  txId?: string | undefined
}
type NodePeer = {
  blockHeight: bigint
  blockchainApi: boolean
  headerHeight: bigint
  lastSeen: bigint
  name: string
  openRestApi: boolean
  responseTime: bigint
  url: string
}
type AgeUsdExchangeInfo = {
  bankFeeAmount: bigint
  bankFeeDescription: string
  ergAmount: bigint
  ergAmountDescription: string
  exchangeRate: bigint
  jayFeeAmount: bigint
  jayFeeDescription: string
  totalAmount: bigint
}
type TokenPrice = {
  available: bigint
  displayName: string
  lastUpdated: bigint
  price: bigint
  tokenId: string
  volumeLastDay: bigint
}
type GenuineToken = {
  issuer?: string | undefined
  tokenId: string
  tokenName: string
  uniqueName: boolean
}
type CheckResponse = { genuine: number; token?: GenuineToken | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ageusd/info': {
      $get:
        | { input: {}; output: AgeUsdInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/cancelbabel/:boxId': {
      $get:
        | {
            input: { param: { boxId: string } }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { boxId: string } }; output: string; outputFormat: 'text'; status: 400 }
        | { input: { param: { boxId: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { boxId: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { boxId: string } }; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/createbabel/:address': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: { tokenId: string; ergAmount: bigint; tokenAmount: bigint }
            }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: { tokenId: string; ergAmount: bigint; tokenAmount: bigint }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: { tokenId: string; ergAmount: bigint; tokenAmount: bigint }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              query: { tokenId: string; ergAmount: bigint; tokenAmount: bigint }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: { tokenId: string; ergAmount: bigint; tokenAmount: bigint }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/mosaik/babelfee/': {
      $get:
        | { input: {}; output: MosaikApp; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/babelfee/newoffer': {
      $get:
        | { input: {}; output: MosaikApp; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/babelfee/newoffer/doit': {
      $post:
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: FetchActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/mosaik/babelfee/newoffer/new-input': {
      $post:
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: FetchActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/mosaik/babelfee/notificationcheck': {
      $get:
        | { input: {}; output: NotificationCheckResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/boxconsolidation/': {
      $get:
        | { input: {}; output: MosaikApp; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/boxconsolidation/consolidate/:p2pkaddress': {
      $get:
        | {
            input: { param: { p2pkaddress: string } }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { p2pkaddress: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { p2pkaddress: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { p2pkaddress: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { p2pkaddress: string } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/mosaik/tokenburn': {
      $get:
        | { input: {}; output: MosaikApp; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/tokenburn/get/:uuid': {
      $get:
        | {
            input: { param: { uuid: string } }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { uuid: string } }; output: string; outputFormat: 'text'; status: 400 }
        | { input: { param: { uuid: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { uuid: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { uuid: string } }; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/mosaik/tokenburn/prepare': {
      $post:
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: FetchActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: { [x: string]: { [x: string]: unknown } } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/payment/addrequest': {
      $post:
        | {
            input: { json: CreatePaymentRequest }
            output: AddRequestResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreatePaymentRequest }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreatePaymentRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreatePaymentRequest }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreatePaymentRequest }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/payment/state/:requestId': {
      $get:
        | {
            input: { param: { requestId: string } }
            output: PaymentRequestStateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { requestId: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { requestId: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { requestId: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { requestId: string } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/peers/list': {
      $get:
        | {
            input: {
              query: {
                unreachable?: boolean | undefined
                closedApi?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: NodePeer[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                unreachable?: boolean | undefined
                closedApi?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                unreachable?: boolean | undefined
                closedApi?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                unreachable?: boolean | undefined
                closedApi?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                unreachable?: boolean | undefined
                closedApi?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/sigrsv/exchange/': {
      $get:
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/sigrsv/exchange/:amount/info': {
      $get:
        | {
            input: { param: { amount: bigint } }
            output: AgeUsdExchangeInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/sigrsv/price': {
      $get:
        | { input: {}; output: TokenPrice; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/sigusd/exchange/': {
      $get:
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: ErgoPayResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                amount: bigint
                address: string
                checkRate?: bigint | undefined
                executionFee?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/sigusd/exchange/:amount/info': {
      $get:
        | {
            input: { param: { amount: bigint } }
            output: AgeUsdExchangeInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { amount: bigint } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/sigusd/price': {
      $get:
        | { input: {}; output: TokenPrice; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/tokens/check/:tokenId/:tokenName': {
      $get:
        | {
            input: { param: { tokenId: string; tokenName: string } }
            output: CheckResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tokenId: string; tokenName: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tokenId: string; tokenName: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tokenId: string; tokenName: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tokenId: string; tokenName: string } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/tokens/listBlocked': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/tokens/listGenuine': {
      $get:
        | { input: {}; output: GenuineToken[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/tokens/prices/all': {
      $get:
        | { input: {}; output: TokenPrice[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 404 }
        | { input: {}; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/tokens/prices/:tokenId': {
      $get:
        | {
            input: { param: { tokenId: string } }
            output: TokenPrice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tokenId: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tokenId: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tokenId: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tokenId: string } }
            output: string
            outputFormat: 'text'
            status: 409
          }
    }
  },
  '/'
>
export default routes
