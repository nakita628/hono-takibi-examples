type NullableNumberInterval = (number | null)[] | null
type NullableDateInterval = (string | null)[] | null
type MappingJob = {
  contractSize?: NullableNumberInterval | undefined
  coupon?: NullableNumberInterval | undefined
  currency?: (string | null) | undefined
  exchCode?: (string | null) | undefined
  expiration?: NullableDateInterval | undefined
  idType:
    | 'ID_ISIN'
    | 'ID_BB_UNIQUE'
    | 'ID_SEDOL'
    | 'ID_COMMON'
    | 'ID_WERTPAPIER'
    | 'ID_CUSIP'
    | 'ID_BB'
    | 'ID_ITALY'
    | 'ID_EXCH_SYMBOL'
    | 'ID_FULL_EXCHANGE_SYMBOL'
    | 'COMPOSITE_ID_BB_GLOBAL'
    | 'ID_BB_GLOBAL_SHARE_CLASS_LEVEL'
    | 'ID_BB_SEC_NUM_DES'
    | 'ID_BB_GLOBAL'
    | 'TICKER'
    | 'ID_CUSIP_8_CHR'
    | 'OCC_SYMBOL'
    | 'UNIQUE_ID_FUT_OPT'
    | 'OPRA_SYMBOL'
    | 'TRADING_SYSTEM_IDENTIFIER'
    | 'ID_CINS'
    | 'ID_SHORT_CODE'
    | 'BASE_TICKER'
    | 'VENDOR_INDEX_CODE'
  idValue: string | number
  includeUnlistedEquities?: (boolean | null) | undefined
  marketSecDes?: (string | null) | undefined
  maturity?: NullableDateInterval | undefined
  micCode?: (string | null) | undefined
  optionType?: 'Put' | 'Call' | undefined
  securityType?: (string | null) | undefined
  securityType2?: (string | null) | undefined
  stateCode?:
    | 'AB'
    | 'AC'
    | 'AC'
    | 'AH'
    | 'AK'
    | 'AL'
    | 'AM'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AZ'
    | 'BC'
    | 'BJ'
    | 'CA'
    | 'CB'
    | 'CO'
    | 'CQ'
    | 'CT'
    | 'CZ'
    | 'DC'
    | 'DE'
    | 'EH'
    | 'FH'
    | 'FI'
    | 'FJ'
    | 'FL'
    | 'FO'
    | 'FS'
    | 'GA'
    | 'GD'
    | 'GF'
    | 'GM'
    | 'GS'
    | 'GU'
    | 'GX'
    | 'GZ'
    | 'HA'
    | 'HB'
    | 'HE'
    | 'HG'
    | 'HI'
    | 'HI'
    | 'HL'
    | 'HN'
    | 'HO'
    | 'HS'
    | 'IA'
    | 'ID'
    | 'IG'
    | 'IK'
    | 'IL'
    | 'IN'
    | 'IT'
    | 'JL'
    | 'JS'
    | 'JX'
    | 'KA'
    | 'KC'
    | 'KN'
    | 'KO'
    | 'KS'
    | 'KT'
    | 'KU'
    | 'KY'
    | 'LA'
    | 'LN'
    | 'MA'
    | 'MB'
    | 'MD'
    | 'ME'
    | 'ME'
    | 'MG'
    | 'MI'
    | 'MN'
    | 'MO'
    | 'MS'
    | 'MT'
    | 'MZ'
    | 'NB'
    | 'NC'
    | 'ND'
    | 'NE'
    | 'NG'
    | 'NH'
    | 'NJ'
    | 'NL'
    | 'NM'
    | 'NM'
    | 'NN'
    | 'NR'
    | 'NS'
    | 'NS'
    | 'NS'
    | 'NT'
    | 'NU'
    | 'NV'
    | 'NW'
    | 'NX'
    | 'NY'
    | 'OH'
    | 'OK'
    | 'ON'
    | 'ON'
    | 'OR'
    | 'OS'
    | 'OT'
    | 'OT'
    | 'OY'
    | 'PA'
    | 'PE'
    | 'PR'
    | 'QC'
    | 'QH'
    | 'QL'
    | 'RI'
    | 'SA'
    | 'SA'
    | 'SC'
    | 'SC'
    | 'SD'
    | 'SD'
    | 'SH'
    | 'SI'
    | 'SK'
    | 'SN'
    | 'SN'
    | 'ST'
    | 'SX'
    | 'SZ'
    | 'TA'
    | 'TG'
    | 'TJ'
    | 'TK'
    | 'TN'
    | 'TS'
    | 'TT'
    | 'TT'
    | 'TX'
    | 'TY'
    | 'UT'
    | 'VA'
    | 'VI'
    | 'VI'
    | 'VT'
    | 'WA'
    | 'WA'
    | 'WI'
    | 'WK'
    | 'WV'
    | 'WY'
    | 'XJ'
    | 'XZ'
    | 'YA'
    | 'YN'
    | 'YN'
    | 'YT'
    | 'YU'
    | 'ZJ'
    | undefined
  strike?: NullableNumberInterval | undefined
}
type BulkMappingJob = MappingJob[]
type FigiResult = {
  compositeFIGI?: (string | null) | undefined
  exchCode?: (string | null) | undefined
  figi?: string | undefined
  marketSector?: (string | null) | undefined
  metadata?: (string | null) | undefined
  name?: (string | null) | undefined
  securityDescription?: (string | null) | undefined
  securityType?: (string | null) | undefined
  securityType2?: (string | null) | undefined
  shareClassFIGI?: (string | null) | undefined
  ticker?: (string | null) | undefined
}
type MappingJobResultFigiList = { data?: FigiResult[] | undefined }
type MappingJobResultFigiNotFound = { warning?: string | undefined }
type MappingJobResult = MappingJobResultFigiList | MappingJobResultFigiNotFound
type BulkMappingJobResult = MappingJobResult[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mapping': {
      $post:
        | {
            input: { json: BulkMappingJob }
            output: BulkMappingJobResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BulkMappingJob }; output: string; outputFormat: 'text'; status: 400 }
        | { input: { json: BulkMappingJob }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { json: BulkMappingJob }; output: string; outputFormat: 'text'; status: 406 }
        | { input: { json: BulkMappingJob }; output: string; outputFormat: 'text'; status: 413 }
        | { input: { json: BulkMappingJob }; output: string; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/mapping/values/:key': {
      $get:
        | {
            input: {
              param: {
                key:
                  | 'idType'
                  | 'exchCode'
                  | 'micCode'
                  | 'currency'
                  | 'marketSecDes'
                  | 'securityType'
                  | 'securityType2'
              }
            }
            output: { values?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                key:
                  | 'idType'
                  | 'exchCode'
                  | 'micCode'
                  | 'currency'
                  | 'marketSecDes'
                  | 'securityType'
                  | 'securityType2'
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                key:
                  | 'idType'
                  | 'exchCode'
                  | 'micCode'
                  | 'currency'
                  | 'marketSecDes'
                  | 'securityType'
                  | 'securityType2'
              }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
