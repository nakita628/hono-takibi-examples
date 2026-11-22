type Filter = {
  highValue?: string | undefined
  operator:
    | 'BETWEEN'
    | 'CONTAINS_TOKEN'
    | 'EQ'
    | 'GT'
    | 'GTE'
    | 'HAS_PROPERTY'
    | 'IN'
    | 'LT'
    | 'LTE'
    | 'NEQ'
    | 'NOT_CONTAINS_TOKEN'
    | 'NOT_HAS_PROPERTY'
    | 'NOT_IN'
  propertyName: string
  value?: string | undefined
  values?: string[] | undefined
}
type FilterGroup = { filters: Filter[] }
type PublicCrmSearchRequest = {
  filterGroups: FilterGroup[]
  filters: Filter[]
  query?: string | undefined
  sorts: string[]
}
type PublicExportViewRequest = {
  associatedObjectType: string[]
  exportInternalValuesOptions: ('NAMES' | 'VALUES')[]
  exportName: string
  exportType: 'VIEW'
  format: 'CSV' | 'XLS' | 'XLSX'
  includeLabeledAssociations: boolean
  includePrimaryDisplayPropertyForAssociatedObjects: boolean
  language:
    | 'AF_ZA'
    | 'AR_EG'
    | 'BG'
    | 'BN'
    | 'CA_ES'
    | 'CS'
    | 'DA_DK'
    | 'DE'
    | 'EL_GR'
    | 'EN'
    | 'EN_GB'
    | 'ES'
    | 'ES_MX'
    | 'ET_EE'
    | 'FI'
    | 'FR'
    | 'FR_CA'
    | 'HE_IL'
    | 'HI_IN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO_KR'
    | 'LT_LT'
    | 'MS'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT_BR'
    | 'PT_PT'
    | 'RO'
    | 'RU'
    | 'SK_SK'
    | 'SL'
    | 'SV'
    | 'TH'
    | 'TL'
    | 'TR'
    | 'UK'
    | 'VI_VN'
    | 'ZH_CN'
    | 'ZH_HK'
    | 'ZH_TW'
  objectProperties: string[]
  objectType: string
  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean
  publicCrmSearchRequest?: PublicCrmSearchRequest | undefined
}
type PublicExportListRequest = {
  associatedObjectType: string[]
  exportInternalValuesOptions: ('NAMES' | 'VALUES')[]
  exportName: string
  exportType: 'LIST'
  format: 'CSV' | 'XLS' | 'XLSX'
  includeLabeledAssociations: boolean
  includePrimaryDisplayPropertyForAssociatedObjects: boolean
  language:
    | 'AF_ZA'
    | 'AR_EG'
    | 'BG'
    | 'BN'
    | 'CA_ES'
    | 'CS'
    | 'DA_DK'
    | 'DE'
    | 'EL_GR'
    | 'EN'
    | 'EN_GB'
    | 'ES'
    | 'ES_MX'
    | 'ET_EE'
    | 'FI'
    | 'FR'
    | 'FR_CA'
    | 'HE_IL'
    | 'HI_IN'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO_KR'
    | 'LT_LT'
    | 'MS'
    | 'NL'
    | 'NO'
    | 'PL'
    | 'PT_BR'
    | 'PT_PT'
    | 'RO'
    | 'RU'
    | 'SK_SK'
    | 'SL'
    | 'SV'
    | 'TH'
    | 'TL'
    | 'TR'
    | 'UK'
    | 'VI_VN'
    | 'ZH_CN'
    | 'ZH_HK'
    | 'ZH_TW'
  listId: string
  objectProperties: string[]
  objectType: string
  overrideAssociatedObjectsPerDefinitionPerRowLimit: boolean
}
type PublicExportRequest = PublicExportViewRequest | PublicExportListRequest
type TaskLocator = { id: string; links?: { [x: string]: string } | undefined }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type ActionResponseWithSingleResultURI = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  result?: string | undefined
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PublicExportResponse = {
  createdAt: string
  exportName?: string | undefined
  exportState:
    | 'CANCELED'
    | 'CONFLICT'
    | 'DEFERRED'
    | 'DELETED'
    | 'DONE'
    | 'ENQUEUED'
    | 'FAILED'
    | 'PENDING_APPROVAL'
    | 'PROCESSING'
  exportType: 'LIST' | 'VIEW'
  id: string
  objectProperties: string[]
  objectType: string
  recordCount?: number | undefined
  updatedAt: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/exports/2026-09/export/async': {
      $post:
        | {
            input: { json: PublicExportRequest }
            output: TaskLocator
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: PublicExportRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/exports/2026-09/export/async/tasks/:taskId/status': {
      $get:
        | {
            input: { param: { taskId: bigint } }
            output: ActionResponseWithSingleResultURI
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: bigint } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/exports/2026-09/export/:exportId': {
      $get:
        | {
            input: { param: { exportId: bigint } }
            output: PublicExportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { exportId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
