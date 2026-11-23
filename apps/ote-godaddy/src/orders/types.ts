type LineItemSummary = { label: string }
type OrderSummaryPricing = { total: string }
type OrderSummary = {
  createdAt: string
  currency: string
  items: LineItemSummary[]
  orderId: string
  parentOrderId?: string | undefined
  pricing: OrderSummaryPricing
}
type Pagination = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  previous?: string | undefined
  total?: number | undefined
}
type OrderList = { orders: OrderSummary[]; pagination: Pagination }
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
type Address = {
  address1: string
  address2?: string | undefined
  city: string
  country:
    | 'AC'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KR'
    | 'KV'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TP'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW'
  postalCode: string
  state: string
}
type Contact = {
  addressMailing: Address
  email: string
  fax?: string | undefined
  jobTitle?: string | undefined
  nameFirst: string
  nameLast: string
  nameMiddle?: string | undefined
  organization?: string | undefined
  phone: string
}
type BillTo = { contact: Contact; taxId?: string | undefined }
type OrderFee = { icann?: number | undefined; total: number }
type LineItemPricing = {
  discount: number
  fees: OrderFee
  list: number
  sale: number
  savings: number
  subtotal: number
  taxes: number
  unit: { [x: string]: unknown }
}
type LineItemTaxCollector = { taxCollectorId: number }
type LineItem = {
  domains?: string[] | undefined
  label: string
  period?: number | undefined
  periodUnit?: 'MONTH' | 'QUARTER' | 'SEMI_ANNUAL' | 'YEAR' | 'ONE_TIME' | undefined
  pfid?: number | undefined
  pricing: LineItemPricing
  quantity: number
  taxCollector?: LineItemTaxCollector | undefined
}
type Payment = {
  amount: number
  category: 'CREDIT_CARD' | 'PAYPAL' | 'ACH' | 'GIFT_CARD' | 'IN_STORE_CREDIT' | 'PREPAID'
  paymentProfileId: string
  subcategory?:
    | 'CHECKING_PERSONAL'
    | 'CHECKING_BUSINESS'
    | 'VISA'
    | 'MASTER_CARD'
    | 'AMEX'
    | 'JCB'
    | 'UNIONPAY'
    | undefined
}
type LineItemPricingTaxDetail = { amount?: number | undefined; rate?: number | undefined }
type OrderPricing = {
  discount: number
  fees: OrderFee
  id?: number | undefined
  list: number
  savings: number
  subtotal: number
  taxDetails?: LineItemPricingTaxDetail[] | undefined
  taxes: number
  total: number
}
type Order = {
  billTo: BillTo
  createdAt: string
  currency: string
  items: LineItem[]
  orderId: string
  parentOrderId?: string | undefined
  payments: Payment[]
  pricing: OrderPricing
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/orders': {
      $get:
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: OrderList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: OrderList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: OrderList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: OrderList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: OrderList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: {
              query: {
                periodStart?: string | undefined
                periodEnd?: string | undefined
                domain?: string | undefined
                productGroupId?: number | undefined
                paymentProfileId?: number | undefined
                parentOrderId?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'createdAt'
                  | '-createdAt'
                  | 'orderId'
                  | '-orderId'
                  | 'pricing.total'
                  | '-pricing.total'
                  | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
    }
  } & {
    '/v1/orders/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Order
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Order
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Order
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Order
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { orderId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
    }
  },
  '/'
>
export default routes
