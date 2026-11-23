type SubMerchantData = {
  city?: string | undefined
  country?: string | undefined
  displayName: string
  email?: string | undefined
  id: string
  mcc: string
  name: string
  phoneNumber?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  street?: string | undefined
  taxId?: string | undefined
}
type BoardingTokenRequest = {
  boardingRequestToken: string
  subMerchantData?: SubMerchantData | undefined
}
type BoardingTokenResponse = { boardingToken: string; installationId: string }
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type PaymentsAppDto = {
  installationId: string
  merchantAccountCode: string
  merchantStoreCode?: string | undefined
  status: string
}
type PaymentsAppResponse = { paymentsApps: PaymentsAppDto[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/merchants/:merchantId/generatePaymentsAppBoardingToken': {
      $post:
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: BoardingTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & { json: BoardingTokenRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentsApps': {
      $get:
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: PaymentsAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/paymentsApps/:installationId/revoke': {
      $post:
        | {
            input: { param: { merchantId: string; installationId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { merchantId: string; installationId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; installationId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; installationId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores/:storeId/generatePaymentsAppBoardingToken': {
      $post:
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: BoardingTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              json: BoardingTokenRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/merchants/:merchantId/stores/:storeId/paymentsApps': {
      $get:
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: PaymentsAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { merchantId: string; storeId: string } } & {
              query: {
                statuses?: string | undefined
                limit?: number | undefined
                offset?: bigint | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
