type SubaccountCreate = {
  email: string
  externalId?: number | undefined
  marketId?:
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AE'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-HK'
    | 'en-IE'
    | 'en-IL'
    | 'en-IN'
    | 'en-MY'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-CL'
    | 'es-CO'
    | 'es-ES'
    | 'es-MX'
    | 'es-PE'
    | 'es-US'
    | 'es-VE'
    | 'fi-FI'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'hi-IN'
    | 'id-ID'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'mr-IN'
    | 'nb-NO'
    | 'nl-BE'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ru-RU'
    | 'sv-SE'
    | 'ta-IN'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'vi-VN'
    | 'zh-HK'
    | 'zh-SG'
    | 'zh-TW'
    | undefined
  nameFirst: string
  nameLast: string
  password: string
}
type ShopperId = { customerId?: string | undefined; shopperId: string }
type ErrorField = {
  code: string
  message?: string | undefined
  path: string
  pathRelated?: string | undefined
}
type Error = { code: string; fields?: ErrorField[] | undefined; message?: string | undefined }
type ErrorLimit = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  retryAfterSec: number
}
type Shopper = {
  customerId?: string | undefined
  email: string
  externalId?: number | undefined
  marketId: string
  nameFirst: string
  nameLast: string
  shopperId: string
}
type ShopperUpdate = {
  email?: string | undefined
  externalId?: number | undefined
  marketId?:
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AE'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-HK'
    | 'en-IE'
    | 'en-IL'
    | 'en-IN'
    | 'en-MY'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-CL'
    | 'es-CO'
    | 'es-ES'
    | 'es-MX'
    | 'es-PE'
    | 'es-US'
    | 'es-VE'
    | 'fi-FI'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'hi-IN'
    | 'id-ID'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'mr-IN'
    | 'nb-NO'
    | 'nl-BE'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ru-RU'
    | 'sv-SE'
    | 'ta-IN'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'vi-VN'
    | 'zh-HK'
    | 'zh-SG'
    | 'zh-TW'
    | undefined
  nameFirst?: string | undefined
  nameLast?: string | undefined
}
type Secret = { secret?: string | undefined }
type PasswordError = {
  code?:
    | 'PW_BLACK_LIST'
    | 'PW_TOO_SHORT'
    | 'PW_TOO_LONG'
    | 'PW_MISSING_UC'
    | 'PW_MISSING_NUM'
    | 'PW_RECENTLY_USED'
    | 'PW_NOT_UNIQUE'
    | undefined
  message?: string | undefined
  type?: string | undefined
}
type ShopperStatus = { billingState?: 'ABANDONED' | 'INACTIVE' | 'ACTIVE' | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/shoppers/subaccount': {
      $post:
        | {
            input: { json: SubaccountCreate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SubaccountCreate }
            output: ShopperId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountCreate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SubaccountCreate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SubaccountCreate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 401 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 401 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 401 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 401 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 403 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 403 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 403 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 403 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 422 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 422 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 422 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 422 }
        | {
            input: { json: SubaccountCreate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: SubaccountCreate }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SubaccountCreate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: SubaccountCreate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: SubaccountCreate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 500 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 500 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 500 }
        | { input: { json: SubaccountCreate }; output: Error; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/v1/shoppers/:shopperId': {
      $delete:
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Shopper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Shopper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Shopper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Shopper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Shopper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & {
              query: { includes?: 'customerId'[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ShopperId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ShopperId
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { json: ShopperUpdate }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/shoppers/:shopperId/factors/password': {
      $put:
        | {
            input: { param: { shopperId: string } } & { json: Secret }
            output: ShopperId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { json: Secret }
            output: PasswordError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { json: Secret }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { json: Secret }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/shoppers/:shopperId/status': {
      $get:
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ShopperStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ShopperStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ShopperStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ShopperStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ShopperStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { shopperId: string } } & { query: { auditClientIp: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
