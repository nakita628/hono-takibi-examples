type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SPL'
  | 'SRD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TVD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZMK'
  | 'ZWD'
type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
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
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'BT'
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
  | 'CU'
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
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GQ'
  | 'GR'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
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
  | 'IR'
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
  | 'KP'
  | 'KR'
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
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
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
  | 'SD'
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
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
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
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type Error = {
  title?: string | undefined
  status?: number | undefined
  detail?: string | undefined
  type?:
    | 'invalid-request'
    | 'invalid-application'
    | 'invalid-feed-connection'
    | 'duplicate-statement'
    | 'invalid-end-balance'
    | 'invalid-start-and-end-date'
    | 'invalid-start-date'
    | 'internal-error'
    | 'feed-already-connected-in-current-organisation'
    | 'invalid-end-date'
    | 'statement-not-found'
    | 'feed-connected-in-different-organisation'
    | 'feed-already-connected-in-different-organisation'
    | 'bank-feed-not-found'
    | 'invalid-country-specified'
    | 'invalid-organisation-bank-feeds'
    | 'invalid-organisation-multi-currency'
    | 'invalid-feed-connection-for-organisation'
    | 'invalid-user-role'
    | 'account-not-valid'
    | 'feed-not-found-or-already-deleted'
    | undefined
}
type FeedConnection = {
  id?: string | undefined
  accountToken?: string | undefined
  accountNumber?: string | undefined
  accountName?: string | undefined
  accountId?: string | undefined
  accountType?: 'BANK' | 'CREDITCARD' | undefined
  currency?: CurrencyCode | undefined
  country?: CountryCode | undefined
  status?: 'PENDING' | 'REJECTED' | undefined
  error?: Error | undefined
}
type FeedConnections = { pagination?: Pagination | undefined; items?: FeedConnection[] | undefined }
type CreditDebitIndicator = 'CREDIT' | 'DEBIT'
type StartBalance = {
  amount?: number | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
}
type EndBalance = {
  amount?: number | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
}
type StatementLine = {
  postedDate?: string | undefined
  description?: string | undefined
  amount?: number | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
  transactionId?: string | undefined
  payeeName?: string | undefined
  reference?: string | undefined
  chequeNumber?: string | undefined
  transactionType?: string | undefined
}
type StatementLines = StatementLine[]
type Statement = {
  id?: string | undefined
  feedConnectionId?: string | undefined
  status?: 'PENDING' | 'REJECTED' | 'DELIVERED' | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  startBalance?: StartBalance | undefined
  endBalance?: EndBalance | undefined
  statementLines?: StatementLines | undefined
  errors?: Error[] | undefined
  statementLineCount?: number | undefined
}
type Statements = { pagination?: Pagination | undefined; items?: Statement[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/FeedConnections': {
      $get:
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: FeedConnections
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: { 'Xero-Tenant-Id': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: FeedConnections }
            output: FeedConnections
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: FeedConnections }
            output: FeedConnections
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FeedConnections/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: FeedConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/FeedConnections/DeleteRequests': {
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: FeedConnections }
            output: FeedConnections
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: FeedConnections }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/Statements': {
      $get:
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: {
                'Xero-Application-Id'?: string | undefined
                'Xero-User-Id'?: string | undefined
                'Xero-Tenant-Id': string
              }
            }
            output: Statements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
              header: {
                'Xero-Application-Id'?: string | undefined
                'Xero-User-Id'?: string | undefined
                'Xero-Tenant-Id': string
              }
            }
            output: Statements
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'Xero-Tenant-Id': string }
            } & { json: Statements }
            output: Statements
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/Statements/:statementId': {
      $get:
        | {
            input: { param: { statementId: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: Statement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { statementId: string } } & { header: { 'Xero-Tenant-Id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
