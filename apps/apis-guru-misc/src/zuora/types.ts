type ChargeMetricsResponse = {
  amendmentId?: string | undefined
  amendmentType?: string | undefined
  chargeNumber?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  deleted?: boolean | undefined
  endDate?: string | undefined
  id?: string | undefined
  invoiceOwnerAccountNumber?: string | undefined
  mrrDiscountAmount?: number | undefined
  mrrGrossAmount?: number | undefined
  mrrNetAmount?: number | undefined
  productId?: string | undefined
  productRatePlanChargeId?: string | undefined
  productRatePlanId?: string | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionName?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  tcvDiscountAmount?: number | undefined
  tcvGrossAmount?: number | undefined
  tcvNetAmount?: number | undefined
  updatedOn?: string | undefined
}
type CommonReasonsErrorResponse = {
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
}
type ChargeMetricsDiscountAllocationDetailResponse = {
  amendmentId?: string | undefined
  amendmentType?: string | undefined
  chargeMetricsId?: string | undefined
  chargeNumber?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  deleted?: boolean | undefined
  discountChargeNumber?: string | undefined
  discountMrr?: number | undefined
  discountTcv?: number | undefined
  endDate?: string | undefined
  id?: string | undefined
  invoiceOwnerAccountNumber?: string | undefined
  productId?: string | undefined
  productRatePlanChargeId?: string | undefined
  productRatePlanId?: string | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionName?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  updatedOn?: string | undefined
}
type EventType = { description?: string | undefined; displayName: string; name: string }
type EventTrigger = {
  active?: boolean | undefined
  baseObject?: string | undefined
  condition?: string | undefined
  description?: string | undefined
  eventType?: EventType | undefined
  id?: string | undefined
}
type ErrorResponse = {
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
}
type PostEventTriggerRequest = {
  active: boolean
  baseObject: string
  condition: string
  description?: string | undefined
  eventType: EventType
}
type PutEventTriggerRequest = {
  active?: boolean | undefined
  condition?: string | undefined
  description?: string | undefined
  eventType?: { description?: string | undefined; displayName?: string | undefined } | undefined
}
type GETPublicEmailTemplateResponse = {
  active?: boolean | undefined
  bccEmailAddress?: string | undefined
  ccEmailAddress?: string | undefined
  ccEmailType?:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
    | undefined
  createdBy?: string | undefined
  createdOn?: string | undefined
  description?: string | undefined
  emailBody?: string | undefined
  emailSubject?: string | undefined
  encodingType?: 'UTF8' | 'Shift_JIS' | 'ISO_2022_JP' | 'EUC_JP' | 'X_SJIS_0213' | undefined
  eventTypeName?: string | undefined
  eventTypeNamespace?: string | undefined
  fromEmailAddress?: string | undefined
  fromEmailType?: 'TenantEmail' | 'SpecificEmail' | undefined
  fromName?: string | undefined
  id?: string | undefined
  isHtml?: boolean | undefined
  name?: string | undefined
  replyToEmailAddress?: string | undefined
  replyToEmailType?: 'TenantEmail' | 'SpecificEmail' | undefined
  toEmailAddress?: string | undefined
  toEmailType?:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
    | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type POSTPublicEmailTemplateRequest = {
  active?: boolean | undefined
  bccEmailAddress?: string | undefined
  ccEmailAddress?: string | undefined
  ccEmailType?:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
    | undefined
  description?: string | undefined
  emailBody: string
  emailSubject: string
  encodingType?: 'UTF8' | 'Shift_JIS' | 'ISO_2022_JP' | 'EUC_JP' | 'X_SJIS_0213' | undefined
  eventTypeName: string
  eventTypeNamespace?: string | undefined
  fromEmailAddress?: string | undefined
  fromEmailType: 'TenantEmail' | 'SpecificEmail'
  fromName?: string | undefined
  isHtml?: boolean | undefined
  name: string
  replyToEmailAddress?: string | undefined
  replyToEmailType?: 'TenantEmail' | 'SpecificEmail' | undefined
  toEmailAddress?: string | undefined
  toEmailType:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
}
type PUTPublicEmailTemplateRequest = {
  active?: boolean | undefined
  bccEmailAddress?: string | undefined
  ccEmailAddress?: string | undefined
  ccEmailType?:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
    | undefined
  description?: string | undefined
  emailBody?: string | undefined
  emailSubject?: string | undefined
  encodingType?: 'UTF8' | 'Shift_JIS' | 'ISO_2022_JP' | 'EUC_JP' | 'X_SJIS_0213' | undefined
  fromEmailAddress?: string | undefined
  fromEmailType?: 'TenantEmail' | 'SpecificEmail' | undefined
  fromName?: string | undefined
  isHtml?: boolean | undefined
  name?: string | undefined
  replyToEmailAddress?: string | undefined
  replyToEmailType?: 'TenantEmail' | 'SpecificEmail' | undefined
  toEmailAddress?: string | undefined
  toEmailType?:
    | 'BillToContact'
    | 'SoldToContact'
    | 'SpecificEmails'
    | 'TenantAdmin'
    | 'BillToAndSoldToContacts'
    | 'RunOwner'
    | 'AllContacts'
    | 'InvoiceOwnerBillToContact'
    | 'InvoiceOwnerSoldToContact'
    | 'InvoiceOwnerBillToAndSoldToContacts'
    | 'InvoiceOwnerAllContacts'
    | undefined
}
type NotificationsHistoryDeletionTaskResponse = {
  accountId?: string | undefined
  createdBy?: string | undefined
  createdOn?: number | undefined
  id?: string | undefined
  status?: 'RUNNING' | 'FINISHED' | 'FAILED' | undefined
  tenantId?: string | undefined
}
type CalloutAuth = {
  domain?: string | undefined
  password?: string | undefined
  preemptive?: boolean | undefined
  username?: string | undefined
}
type CalloutMergeFields = { [x: string]: string }
type FilterRuleParameterDefinition = {
  description?: string | undefined
  displayName?: string | undefined
  options?: string[] | undefined
  valueType?:
    | 'STRING'
    | 'BYTE'
    | 'SHORT'
    | 'CHARACTER'
    | 'INTEGER'
    | 'LONG'
    | 'FLOAT'
    | 'DOUBLE'
    | 'BOOLEAN'
    | 'BIG_INTEGER'
    | 'BIG_DECIMAL'
    | 'LOCAL_DATE'
    | 'LOCAL_DATE_TIME'
    | 'TIMESTAMP'
    | 'BYTE_ARRAY'
    | 'SHORT_ARRAY'
    | 'CHARACTER_ARRAY'
    | 'INTEGER_ARRAY'
    | 'FLOAT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'BOOLEAN_ARRAY'
    | 'STRING_ARRAY'
    | 'BIG_INTEGER_ARRAY'
    | 'BIG_DECIMAL_ARRAY'
    | 'LOCAL_DATE_ARRAY'
    | 'LOCAL_DATE_TIME_ARRAY'
    | 'TIMESTAMP_ARRAY'
    | undefined
}
type FilterRuleParameterDefinitions = { [x: string]: FilterRuleParameterDefinition }
type FilterRuleParameterValues = { [x: string]: string }
type GETPublicNotificationDefinitionResponse = {
  active?: boolean | undefined
  callout?:
    | {
        active?: boolean | undefined
        calloutAuth?: CalloutAuth | undefined
        calloutBaseurl?: string | undefined
        calloutParams?: CalloutMergeFields | undefined
        calloutRetry?: boolean | undefined
        description?: string | undefined
        eventTypeName?: string | undefined
        httpMethod?: 'GET' | 'PUT' | 'POST' | 'DELETE' | undefined
        id?: string | undefined
        name?: string | undefined
        requiredAuth?: boolean | undefined
      }
    | undefined
  calloutActive?: boolean | undefined
  communicationProfileId?: string | undefined
  createdBy?: string | undefined
  createdOn?: string | undefined
  description?: string | undefined
  emailActive?: boolean | undefined
  emailTemplateId?: string | undefined
  eventTypeName?: string | undefined
  eventTypeNamespace?: string | undefined
  filterRule?:
    | {
        condition?: string | undefined
        description?: string | undefined
        eventTypeName?: string | undefined
        id?: string | undefined
        parameters?: FilterRuleParameterDefinitions | undefined
      }
    | undefined
  filterRuleParams?: FilterRuleParameterValues | undefined
  id?: string | undefined
  name?: string | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type POSTPublicNotificationDefinitionRequest = {
  active?: boolean | undefined
  callout?:
    | {
        active?: boolean | undefined
        calloutAuth?: CalloutAuth | undefined
        calloutBaseurl: string
        calloutParams?: CalloutMergeFields | undefined
        calloutRetry?: boolean | undefined
        description?: string | undefined
        eventTypeName: string
        httpMethod: 'GET' | 'PUT' | 'POST' | 'DELETE'
        name: string
        requiredAuth: boolean
      }
    | undefined
  calloutActive?: boolean | undefined
  communicationProfileId?: string | undefined
  description?: string | undefined
  emailActive?: boolean | undefined
  emailTemplateId?: string | undefined
  eventTypeName: string
  eventTypeNamespace?: string | undefined
  filterRule?:
    | {
        condition: string
        description?: string | undefined
        parameters: FilterRuleParameterDefinitions
      }
    | undefined
  filterRuleParams?: FilterRuleParameterValues | undefined
  name: string
}
type PUTPublicNotificationDefinitionRequest = {
  active?: boolean | undefined
  callout?:
    | {
        active?: boolean | undefined
        calloutAuth?: CalloutAuth | undefined
        calloutBaseurl: string
        calloutParams?: CalloutMergeFields | undefined
        calloutRetry?: boolean | undefined
        description?: string | undefined
        httpMethod: 'GET' | 'PUT' | 'POST' | 'DELETE'
        name: string
        requiredAuth: boolean
      }
    | undefined
  calloutActive?: boolean | undefined
  communicationProfileId?: string | undefined
  description?: string | undefined
  emailActive?: boolean | undefined
  emailTemplateId?: string | undefined
  filterRule?:
    | {
        condition: string
        description?: string | undefined
        parameters: FilterRuleParameterDefinitions
      }
    | undefined
  filterRuleParams?: FilterRuleParameterValues | undefined
  name?: string | undefined
}
type TokenResponse = {
  access_token?: string | undefined
  expires_in?: number | undefined
  jti?: string | undefined
  scope?: string | undefined
  token_type?: string | undefined
}
type CustomObjectRecordBatchUpdateMapping = { [x: string]: { [x: string]: unknown } }
type CustomObjectRecordBatchAction = {
  allowPartialSuccess?: boolean | undefined
  ids?: string[] | undefined
  records?: CustomObjectRecordBatchUpdateMapping | undefined
  type: 'delete' | 'update'
}
type CustomObjectRecordBatchRequest = { action: CustomObjectRecordBatchAction }
type CustomObjectRecordWithAllFields = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  type?: string | undefined
}
type CustomObjectRecordsWithError = {
  code?:
    | 71012520
    | 71012521
    | 71012522
    | 71012523
    | 71012524
    | 71012525
    | 71012526
    | 71012530
    | undefined
  message?: string | undefined
  record?: CustomObjectRecordWithAllFields | undefined
}
type CustomObjectRecordsErrorResponse = {
  code?: number | undefined
  details?: CustomObjectRecordsWithError[] | undefined
  message?: string | undefined
}
type CustomObjectRecordsBatchUpdatePartialSuccessResponse = {
  error?: CustomObjectRecordsErrorResponse | undefined
}
type Error401 = { code?: number | undefined; message?: string | undefined }
type ErrorResponse401Record = {
  code?: number | undefined
  details?: Error401[] | undefined
  message?: string | undefined
}
type CustomObjectRecordsThrottledResponse = {
  code?: number | undefined
  details?: CustomObjectRecordsWithError[] | undefined
  message?: string | undefined
}
type CustomObjectAllFieldsDefinition = {
  CreatedById?:
    | {
        format?: 'uuid' | undefined
        label?: string | undefined
        origin?: 'system' | undefined
        type?: 'string' | undefined
      }
    | undefined
  CreatedDate?:
    | {
        format?: 'date-time' | undefined
        origin?: 'system' | undefined
        type?: 'string' | undefined
      }
    | undefined
  Id?:
    | {
        format?: 'uuid' | undefined
        label?: string | undefined
        origin?: 'system' | undefined
        type?: 'string' | undefined
      }
    | undefined
  UpdatedById?:
    | {
        format?: 'uuid' | undefined
        label?: string | undefined
        origin?: 'system' | undefined
        type?: 'string' | undefined
      }
    | undefined
  UpdatedDate?:
    | {
        format?: 'date-time' | undefined
        origin?: 'system' | undefined
        type?: 'string' | undefined
      }
    | undefined
}
type FieldsAdditionalProperties = { [x: string]: string }
type CustomObjectDefinition = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  schema?:
    | {
        filterable?: string[] | undefined
        label?: string | undefined
        object?: string | undefined
        properties?: CustomObjectAllFieldsDefinition | undefined
        relationships?:
          | {
              cardinality?: 'manyToOne' | 'oneToMany' | undefined
              fields?: FieldsAdditionalProperties | undefined
              namespace?: string | undefined
              object?: string | undefined
              recordConstraints?:
                | { create?: { enforceValidMapping?: boolean | undefined } | undefined }
                | undefined
            }[]
          | undefined
        required?: string[] | undefined
        type?: 'object' | undefined
      }
    | undefined
  type?: string | undefined
}
type CustomObjectDefinitions = { [x: string]: CustomObjectDefinition }
type GETAllCustomObjectDefinitionsInNamespaceResponse = {
  count?: number | undefined
  definitions?: CustomObjectDefinitions | undefined
}
type PostCustomObjectDefinitionFieldDefinitionRequest = {
  format?: string | undefined
  label: string
  type: string
}
type PostCustomObjectDefinitionFieldsDefinitionRequest = {
  [x: string]: PostCustomObjectDefinitionFieldDefinitionRequest
}
type FieldsAdditionalPropertiesForPostDefinition = { [x: string]: string }
type PostCustomObjectDefinitionsRequestDefinition = {
  filterable?: string[] | undefined
  label: string
  object: string
  properties?: PostCustomObjectDefinitionFieldsDefinitionRequest | undefined
  relationships?:
    | {
        cardinality?: 'manyToOne' | undefined
        fields: FieldsAdditionalPropertiesForPostDefinition
        namespace: string
        object: string
        recordConstraints?:
          | { create?: { enforceValidMapping?: boolean | undefined } | undefined }
          | undefined
      }[]
    | undefined
  required?: string[] | undefined
}
type PostCustomObjectDefinitionsRequestDefinitions = {
  [x: string]: PostCustomObjectDefinitionsRequestDefinition
}
type PostCustomObjectDefinitionsRequest = {
  definitions?: PostCustomObjectDefinitionsRequestDefinitions | undefined
}
type CommonErrorResponse = { code?: number | undefined; message?: string | undefined }
type CustomObjectBulkJobResponse = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  error?: { code?: number | undefined; message?: string | undefined } | undefined
  namespace?: 'default' | 'com_zuora' | undefined
  object?: string | undefined
  operation?: 'delete' | 'create' | undefined
  processingTime?: number | undefined
  recordsProcessed?: number | undefined
  status?: 'open' | 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
}
type CustomObjectBulkJobResponseCollection = {
  count?: number | undefined
  cursor?: string | undefined
  jobs: CustomObjectBulkJobResponse[]
}
type CustomObjectBulkDeleteFilterCondition = {
  field: string
  operator: 'EQ' | 'GT' | 'LT' | 'GE' | 'LE'
  value: { [x: string]: unknown }
}
type CustomObjectBulkDeleteFilter = { conditions: CustomObjectBulkDeleteFilterCondition[] }
type CustomObjectBulkJobRequest = {
  filter?: CustomObjectBulkDeleteFilter | undefined
  namespace: 'default' | 'com_zuora'
  object: string
  operation: 'delete' | 'create'
}
type CustomObjectBulkJobErrorResponse = {
  code?: number | undefined
  message?: string | undefined
  record?: CustomObjectRecordWithAllFields | undefined
  row?: number | undefined
}
type CustomObjectBulkJobErrorResponseCollection = { errors: CustomObjectBulkJobErrorResponse[] }
type CustomObjectCustomFieldDefinitionUpdate = {
  default?: string | undefined
  description?: string | undefined
  format?: string | undefined
  label?: string | undefined
  origin?: 'custom' | undefined
  type?: string | undefined
}
type UpdateCustomObjectCusotmField = {
  definition?: CustomObjectCustomFieldDefinitionUpdate | undefined
  filterable?: boolean | undefined
  name?: string | undefined
  required?: boolean | undefined
  targetName?: string | undefined
}
type CustomObjectDefinitionUpdateActionRequest = {
  description?: string | undefined
  field?: UpdateCustomObjectCusotmField | undefined
  label?: string | undefined
  namespace: string
  object: string
  relationship?:
    | {
        cardinality?: 'manyToOne' | undefined
        fields: FieldsAdditionalProperties
        namespace: string
        object: string
        recordConstraints?:
          | { create?: { enforceValidMapping?: boolean | undefined } | undefined }
          | undefined
      }
    | undefined
  type:
    | 'addField'
    | 'deleteField'
    | 'updateField'
    | 'updateObject'
    | 'renameField'
    | 'addRelationship'
    | 'deleteRelationship'
}
type MigrationUpdateCustomObjectDefinitionsRequest = {
  actions: CustomObjectDefinitionUpdateActionRequest[]
}
type CustomObjectDefinitionUpdateActionResponse = {
  description?: string | undefined
  field?: UpdateCustomObjectCusotmField | undefined
  label?: string | undefined
  namespace?: string | undefined
  object?: string | undefined
  relationship?:
    | {
        cardinality?: 'manyToOne' | 'oneToMany' | undefined
        fields?: FieldsAdditionalProperties | undefined
        namespace?: string | undefined
        object?: string | undefined
        recordConstraints?:
          | { create?: { enforceValidMapping?: boolean | undefined } | undefined }
          | undefined
      }
    | undefined
  type?:
    | 'addField'
    | 'deleteField'
    | 'updateField'
    | 'updateObject'
    | 'renameField'
    | 'addRelationship'
    | 'deleteRelationship'
    | undefined
}
type MigrationUpdateCustomObjectDefinitionsResponse = {
  actions?: CustomObjectDefinitionUpdateActionResponse[] | undefined
}
type QueryCustomObjectRecordsResponse = {
  count: number
  records: CustomObjectRecordWithAllFields[]
}
type CustomObjectRecordWithOnlyCustomFields = { [x: string]: { [x: string]: unknown } }
type PostCustomObjectRecordsRequest = {
  allowPartialSuccess?: boolean | undefined
  records: CustomObjectRecordWithOnlyCustomFields[]
}
type PostCustomObjectRecordsResponse = {
  error?: CustomObjectRecordsErrorResponse | undefined
  records?: CustomObjectRecordWithAllFields[] | undefined
}
type DataQueryJob = {
  createdBy?: string | undefined
  id?: string | undefined
  query?: string | undefined
  remainingRetries?: number | undefined
  updatedOn?: string | undefined
  dataFile?: string | undefined
  outputRows?: number | undefined
  processingTime?: number | undefined
  queryStatus?:
    | 'submitted'
    | 'accepted'
    | 'in_progress'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | undefined
}
type GetDataQueryJobsResponse = { data?: DataQueryJob[] | undefined }
type SubmitDataQueryRequest = {
  columnSeparator?: string | undefined
  compression: 'NONE' | 'GZIP' | 'ZIP'
  encryptionKey?: string | undefined
  output: { target: 'S3' }
  outputFormat: 'JSON' | 'CSV' | 'TSV' | 'DSV'
  query: string
  readDeleted?: boolean | undefined
  sourceData?: 'DATAHUB' | 'LIVE' | undefined
  useIndexJoin?: boolean | undefined
}
type SubmitDataQueryResponse = { data?: DataQueryJob | undefined }
type DataQueryErrorResponse = { code?: number | undefined; message?: string | undefined }
type DataQueryJobCancelled = {
  createdBy?: string | undefined
  id?: string | undefined
  query?: string | undefined
  remainingRetries?: number | undefined
  updatedOn?: string | undefined
  queryStatus?: 'cancelled' | undefined
}
type DeleteDataQueryJobResponse = { data?: DataQueryJobCancelled | undefined }
type GetDataQueryJobResponse = { data?: DataQueryJob | undefined }
type BodyInSettingValueRequest = { [x: string]: unknown }
type ChildrenSettingValueRequest = {
  body?: BodyInSettingValueRequest | undefined
  id?: string | undefined
  method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE' | undefined
  url?: string | undefined
}
type SettingValueRequest = {
  body?: BodyInSettingValueRequest | undefined
  children?: ChildrenSettingValueRequest[] | undefined
  id?: string | undefined
  method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE' | undefined
  url?: string | undefined
}
type SettingsBatchRequest = { requests?: SettingValueRequest[] | undefined }
type BodyInSettingValueReponse = { [x: string]: unknown }
type SettingValueResponse = {
  body?: BodyInSettingValueReponse | undefined
  errorMessages?: string[] | undefined
  status?: string | undefined
}
type SettingValueResponseWrapper = {
  id?: string | undefined
  method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE' | undefined
  response?: SettingValueResponse | undefined
  url?: string | undefined
}
type SettingsBatchResponse = { responses?: SettingValueResponseWrapper[] | undefined }
type SettingItemHttpRequestParameter = {
  description?: string | undefined
  name?: string | undefined
}
type SettingItemHttpOperation = {
  method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE' | undefined
  parameters?: SettingItemHttpRequestParameter[] | undefined
  requestType?: { [x: string]: unknown } | undefined
  responseType?: { [x: string]: unknown } | undefined
  url?: string | undefined
}
type SettingItemWithOperationsInformation = {
  context?: 'Tenant' | 'Entity' | 'User' | 'None' | undefined
  description?: string | undefined
  httpOperations?: SettingItemHttpOperation[] | undefined
  key?: string | undefined
  pathPattern?: string | undefined
}
type ListAllSettingsResponse = { settings?: SettingItemWithOperationsInformation[] | undefined }
type GETAccountingCodeItemWithoutSuccessType = {
  category?: 'Assets' | 'Liabilities' | 'Equity' | 'Revenue' | 'Expenses' | undefined
  createdBy?: string | undefined
  createdOn?: string | undefined
  glAccountName?: string | undefined
  glAccountNumber?: string | undefined
  id?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  status?: 'Active' | 'Inactive' | undefined
  type?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type GETAccountingCodesType = {
  accountingCodes?: GETAccountingCodeItemWithoutSuccessType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type POSTAccountingCodeType = {
  glAccountName?: string | undefined
  glAccountNumber?: string | undefined
  name: string
  notes?: string | undefined
  type:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
}
type POSTAccountingCodeResponseType = { id?: string | undefined; success?: boolean | undefined }
type CommonResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type GETAccountingCodeItemType = {
  category?: 'Assets' | 'Liabilities' | 'Equity' | 'Revenue' | 'Expenses' | undefined
  createdBy?: string | undefined
  createdOn?: string | undefined
  glAccountName?: string | undefined
  glAccountNumber?: string | undefined
  id?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  status?: 'Active' | 'Inactive' | undefined
  success?: boolean | undefined
  type?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type PUTAccountingCodeType = {
  glAccountName?: string | undefined
  glAccountNumber?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  type?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
}
type GETAccountingPeriodWithoutSuccessType = {
  createdBy?: string | undefined
  createdOn?: string | undefined
  endDate?: string | undefined
  fileIds?:
    | {
        accountsReceivableAccountAgingDetailExportFileId?: string | undefined
        accountsReceivableInvoiceAgingDetailExportFileId?: string | undefined
        arRollForwardDetailExportFileId?: string | undefined
        fxRealizedGainAndLossDetailExportFileId?: string | undefined
        fxUnrealizedGainAndLossDetailExportFileId?: string | undefined
        revenueDetailCsvFileId?: string | undefined
        revenueDetailExcelFileId?: string | undefined
        unprocessedChargesFileId?: string | undefined
      }
    | undefined
  fiscalYear?: string | undefined
  fiscal_quarter?: bigint | undefined
  id?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  runTrialBalanceEnd?: string | undefined
  runTrialBalanceErrorMessage?: string | undefined
  runTrialBalanceStart?: string | undefined
  runTrialBalanceStatus?: string | undefined
  startDate?: string | undefined
  status?: string | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type GETAccountingPeriodsType = {
  accountingPeriods?: GETAccountingPeriodWithoutSuccessType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type POSTAccountingPeriodType = {
  endDate: string
  fiscalYear: string
  fiscal_quarter?: bigint | undefined
  name: string
  notes?: string | undefined
  startDate: string
}
type POSTAccountingPeriodResponseType = { id?: string | undefined; success?: boolean | undefined }
type GETAccountingPeriodType = {
  createdBy?: string | undefined
  createdOn?: string | undefined
  endDate?: string | undefined
  fileIds?:
    | {
        accountsReceivableAccountAgingDetailExportFileId?: string | undefined
        accountsReceivableInvoiceAgingDetailExportFileId?: string | undefined
        arRollForwardDetailExportFileId?: string | undefined
        fxRealizedGainAndLossDetailExportFileId?: string | undefined
        fxUnrealizedGainAndLossDetailExportFileId?: string | undefined
        revenueDetailCsvFileId?: string | undefined
        revenueDetailExcelFileId?: string | undefined
        unprocessedChargesFileId?: string | undefined
      }
    | undefined
  fiscalYear?: string | undefined
  fiscal_quarter?: bigint | undefined
  id?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  runTrialBalanceEnd?: string | undefined
  runTrialBalanceErrorMessage?: string | undefined
  runTrialBalanceStart?: string | undefined
  runTrialBalanceStatus?: string | undefined
  startDate?: string | undefined
  status?: string | undefined
  success?: boolean | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type PUTAccountingPeriodType = {
  endDate?: string | undefined
  fiscalYear?: string | undefined
  fiscal_quarter?: bigint | undefined
  name?: string | undefined
  notes?: string | undefined
  startDate?: string | undefined
}
type POSTAccountTypeBillToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type POSTAccountTypeCreditCard = {
  cardHolderInfo: {
    addressLine1: string
    addressLine2?: string | undefined
    cardHolderName: string
    city: string
    country: string
    email?: string | undefined
    phone?: string | undefined
    state: string
    zipCode: string
  }
  cardNumber: string
  cardType: string
  expirationMonth: string
  expirationYear: string
  securityCode?: string | undefined
}
type CreatePaymentMethodCardholderInfo = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  cardHolderName: string
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type POSTAccountTypePaymentMethod = {
  type: string
  BAID?: string | undefined
  email?: string | undefined
  preapprovalKey?: string | undefined
  cardHolderInfo?: CreatePaymentMethodCardholderInfo | undefined
  cardNumber?: string | undefined
  cardType?: string | undefined
  checkDuplicated?: boolean | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  mitConsentAgreementRef?: string | undefined
  mitConsentAgreementSrc?: 'External' | undefined
  mitNetworkTransactionId?: string | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileAgreedOn?: string | undefined
  mitProfileType?: 'Recurring' | 'Unscheduled' | undefined
  securityCode?: string | undefined
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  bankABACode?: string | undefined
  bankAccountName?: string | undefined
  bankAccountNumber?: string | undefined
  bankAccountType?: 'BusinessChecking' | 'Checking' | 'Saving' | undefined
  bankName?: string | undefined
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
  accountKey?: string | undefined
  authGateway?: string | undefined
  makeDefault?: boolean | undefined
  IBAN?: string | undefined
  accountHolderInfo?:
    | {
        accountHolderName: string
        addressLine1?: string | undefined
        addressLine2?: string | undefined
        city?: string | undefined
        email?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        phone?: string | undefined
        state?: string | undefined
        zipCode?: string | undefined
      }
    | undefined
  accountNumber?: string | undefined
  bankCode?: string | undefined
  branchCode?: string | undefined
  businessIdentificationCode?: string | undefined
  currencyCode?: string | undefined
  identityNumber?: string | undefined
}
type POSTAccountTypeSoldToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type ChargeModelConfigurationType = {
  customFieldPerUnitRate?: string | undefined
  customFieldTotalAmount?: string | undefined
  formula?: string | undefined
}
type POSTTierType = {
  endingUnit?: number | undefined
  price: number
  priceFormat?: string | undefined
  startingUnit?: number | undefined
  tier: bigint
}
type POSTScCreateType = {
  applyDiscountTo?: string | undefined
  billCycleDay?: string | undefined
  billCycleType?: string | undefined
  billingPeriod?: string | undefined
  billingPeriodAlignment?: string | undefined
  billingTiming?: string | undefined
  chargeModelConfiguration?: ChargeModelConfigurationType | undefined
  description?: string | undefined
  discountAmount?: number | undefined
  discountLevel?: string | undefined
  discountPercentage?: number | undefined
  endDateCondition?: string | undefined
  includedUnits?: number | undefined
  listPriceBase?: string | undefined
  number?: string | undefined
  numberOfPeriods?: bigint | undefined
  overagePrice?: number | undefined
  overageUnusedUnitsCreditOption?: string | undefined
  price?: number | undefined
  priceChangeOption?: string | undefined
  priceIncreasePercentage?: number | undefined
  productRatePlanChargeId: string
  quantity?: number | undefined
  ratingGroup?: string | undefined
  specificBillingPeriod?: bigint | undefined
  specificEndDate?: string | undefined
  tiers?: POSTTierType[] | undefined
  triggerDate?: string | undefined
  triggerEvent?: string | undefined
  unusedUnitsCreditRates?: number | undefined
  upToPeriods?: bigint | undefined
  upToPeriodsType?: string | undefined
  weeklyBillCycleDay?: string | undefined
}
type POSTSrpCreateType = {
  chargeOverrides?: POSTScCreateType[] | undefined
  productRatePlanId: string
}
type POSTAccountTypeSubscription = {
  autoRenew?: boolean | undefined
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  initialTerm?: bigint | undefined
  invoiceOwnerAccountKey?: string | undefined
  invoiceSeparately?: boolean | undefined
  notes?: string | undefined
  renewalTerm?: bigint | undefined
  serviceActivationDate?: string | undefined
  subscribeToRatePlans?: POSTSrpCreateType[] | undefined
  subscriptionNumber?: string | undefined
  termStartDate?: string | undefined
  termType: string
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type POSTAccountType = {
  accountNumber?: string | undefined
  additionalEmailAddresses?: string[] | undefined
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  autoPay?: boolean | undefined
  batch?: string | undefined
  billCycleDay?: bigint | undefined
  billToContact: POSTAccountTypeBillToContact
  collect?: boolean | undefined
  communicationProfileId?: string | undefined
  creditCard?: POSTAccountTypeCreditCard | undefined
  creditMemoTemplateId?: string | undefined
  crmId?: string | undefined
  currency: string
  debitMemoTemplateId?: string | undefined
  documentDate?: string | undefined
  hpmCreditCardPaymentMethodId?: string | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceDeliveryPrefsEmail?: boolean | undefined
  invoiceDeliveryPrefsPrint?: boolean | undefined
  invoiceTargetDate?: string | undefined
  invoiceTemplateId?: string | undefined
  name: string
  notes?: string | undefined
  parentId?: string | undefined
  paymentGateway?: string | undefined
  paymentMethod?: POSTAccountTypePaymentMethod | undefined
  paymentTerm?: string | undefined
  runBilling?: true | false | undefined
  salesRep?: string | undefined
  sequenceSetId?: string | undefined
  soldToContact?: POSTAccountTypeSoldToContact | undefined
  soldToSameAsBillTo?: boolean | undefined
  subscription?: POSTAccountTypeSubscription | undefined
  tagging?: string | undefined
  targetDate?: string | undefined
  taxInfo?:
    | {
        VATId?: string | undefined
        companyCode?: string | undefined
        exemptCertificateId?: string | undefined
        exemptCertificateType?: string | undefined
        exemptDescription?: string | undefined
        exemptEffectiveDate?: string | undefined
        exemptEntityUseCode?: string | undefined
        exemptExpirationDate?: string | undefined
        exemptIssuingJurisdiction?: string | undefined
        exemptStatus?: string | undefined
      }
    | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type POSTAccountResponseType = {
  accountId?: string | undefined
  accountNumber?: string | undefined
  billToContactId?: string | undefined
  contractedMrr?: string | undefined
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  soldToContactId?: string | undefined
  subscriptionId?: string | undefined
  subscriptionNumber?: string | undefined
  success?: boolean | undefined
  totalContractedValue?: string | undefined
}
type POSTBillingDocumentFilesDeletionJobRequest = { accountIds?: string[] | undefined }
type POSTBillingDocumentFilesDeletionJobResponse = {
  id?: string | undefined
  status?: 'Pending' | undefined
  success?: boolean | undefined
}
type GETBillingDocumentFilesDeletionJobResponse = {
  id?: string | undefined
  status?: 'Pending' | 'Processing' | 'Completed' | 'Error' | undefined
  success?: boolean | undefined
}
type GETAccountTypeBasicInfo = {
  accountNumber?: string | undefined
  batch?: string | undefined
  communicationProfileId?: string | undefined
  creditMemoTemplateId?: string | undefined
  crmId?: string | undefined
  currency?: string | undefined
  debitMemoTemplateId?: string | undefined
  id?: string | undefined
  invoiceTemplateId?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  parentId?: string | undefined
  salesRep?: string | undefined
  sequenceSetId?: string | undefined
  status?: string | undefined
  tags?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type GETAccountTypeBillToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName?: string | undefined
  homePhone?: string | undefined
  lastName?: string | undefined
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type GETAccountTypeSoldToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName?: string | undefined
  homePhone?: string | undefined
  lastName?: string | undefined
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type GETAccountType = {
  basicInfo?: GETAccountTypeBasicInfo | undefined
  billToContact?: GETAccountTypeBillToContact | undefined
  billingAndPayment?:
    | {
        additionalEmailAddresses?: string[] | undefined
        billCycleDay?: string | undefined
        currency?: string | undefined
        invoiceDeliveryPrefsEmail?: boolean | undefined
        invoiceDeliveryPrefsPrint?: boolean | undefined
        paymentGateway?: string | undefined
        paymentTerm?: string | undefined
      }
    | undefined
  metrics?:
    | {
        balance?: string | undefined
        contractedMrr?: string | undefined
        creditBalance?: string | undefined
        totalDebitMemoBalance?: string | undefined
        totalInvoiceBalance?: string | undefined
        unappliedCreditMemoAmount?: string | undefined
        unappliedPaymentAmount?: string | undefined
      }
    | undefined
  soldToContact?: GETAccountTypeSoldToContact | undefined
  success?: boolean | undefined
  taxInfo?:
    | {
        VATId?: string | undefined
        companyCode?: string | undefined
        exemptCertificateId?: string | undefined
        exemptCertificateType?: string | undefined
        exemptDescription?: string | undefined
        exemptEffectiveDate?: string | undefined
        exemptEntityUseCode?: string | undefined
        exemptExpirationDate?: string | undefined
        exemptIssuingJurisdiction?: string | undefined
        exemptStatus?: string | undefined
      }
    | undefined
}
type PUTAccountTypeBillToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type PUTAccountTypeSoldToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: string | undefined
  personalEmail?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type PUTAccountType = {
  additionalEmailAddresses?: string[] | undefined
  autoPay?: boolean | undefined
  batch?: string | undefined
  billToContact?: PUTAccountTypeBillToContact | undefined
  communicationProfileId?: string | undefined
  creditMemoTemplateId?: string | undefined
  crmId?: string | undefined
  debitMemoTemplateId?: string | undefined
  invoiceDeliveryPrefsEmail?: boolean | undefined
  invoiceDeliveryPrefsPrint?: boolean | undefined
  invoiceTemplateId?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  parentId?: string | undefined
  paymentGateway?: string | undefined
  salesRep?: string | undefined
  sequenceSetId?: string | undefined
  soldToContact?: PUTAccountTypeSoldToContact | undefined
  tagging?: string | undefined
  taxInfo?:
    | {
        VATId?: string | undefined
        companyCode?: string | undefined
        exemptCertificateId?: string | undefined
        exemptCertificateType?: string | undefined
        exemptDescription?: string | undefined
        exemptEffectiveDate?: string | undefined
        exemptEntityUseCode?: string | undefined
        exemptExpirationDate?: string | undefined
        exemptIssuingJurisdiction?: string | undefined
        exemptStatus?: string | undefined
      }
    | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type GETAccountSummaryTypeBasicInfo = {
  accountNumber?: string | undefined
  additionalEmailAddresses?: string[] | undefined
  balance?: string | undefined
  batch?: string | undefined
  billCycleDay?: string | undefined
  currency?: string | undefined
  defaultPaymentMethod?:
    | {
        creditCardExpirationMonth?: string | undefined
        creditCardExpirationYear?: string | undefined
        creditCardNumber?: string | undefined
        creditCardType?: string | undefined
        id?: string | undefined
        paymentMethodType?: string | undefined
      }
    | undefined
  id?: string | undefined
  invoiceDeliveryPrefsEmail?: boolean | undefined
  invoiceDeliveryPrefsPrint?: boolean | undefined
  lastInvoiceDate?: string | undefined
  lastPaymentAmount?: string | undefined
  lastPaymentDate?: string | undefined
  name?: string | undefined
  status?: string | undefined
  tags?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type GETAccountSummaryTypeBillToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type GETAccountSummaryInvoiceType = {
  amount?: number | undefined
  balance?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  invoiceDate?: string | undefined
  invoiceNumber?: string | undefined
  status?: string | undefined
}
type GETAccountSummaryPaymentInvoiceType = {
  appliedPaymentAmount?: string | undefined
  invoiceId?: string | undefined
  invoiceNumber?: string | undefined
}
type GETAccountSummaryPaymentType = {
  effectiveDate?: string | undefined
  id?: string | undefined
  paidInvoices?: GETAccountSummaryPaymentInvoiceType[] | undefined
  paymentNumber?: string | undefined
  paymentType?: string | undefined
  status?: string | undefined
}
type GETAccountSummaryTypeSoldToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
  zipCode?: string | undefined
}
type GETAccountSummarySubscriptionRatePlanType = {
  productId?: string | undefined
  productName?: string | undefined
  productRatePlanId?: string | undefined
  productSku?: string | undefined
  ratePlanName?: string | undefined
}
type GETAccountSummarySubscriptionType = {
  autoRenew?: boolean | undefined
  id?: string | undefined
  initialTerm?: string | undefined
  ratePlans?: GETAccountSummarySubscriptionRatePlanType[] | undefined
  renewalTerm?: string | undefined
  status?: string | undefined
  subscriptionNumber?: string | undefined
  subscriptionStartDate?: string | undefined
  termEndDate?: string | undefined
  termStartDate?: string | undefined
  termType?: string | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETAccountSummaryUsageType = {
  quantity?: string | undefined
  startDate?: string | undefined
  unitOfMeasure?: string | undefined
}
type GETAccountSummaryType = {
  basicInfo?: GETAccountSummaryTypeBasicInfo | undefined
  billToContact?: GETAccountSummaryTypeBillToContact | undefined
  invoices?: GETAccountSummaryInvoiceType[] | undefined
  payments?: GETAccountSummaryPaymentType[] | undefined
  soldToContact?: GETAccountSummaryTypeSoldToContact | undefined
  subscriptions?: GETAccountSummarySubscriptionType[] | undefined
  success?: boolean | undefined
  taxInfo?:
    | {
        VATId?: string | undefined
        companyCode?: string | undefined
        exemptCertificateId?: string | undefined
        exemptCertificateType?: string | undefined
        exemptDescription?: string | undefined
        exemptEffectiveDate?: string | undefined
        exemptEntityUseCode?: string | undefined
        exemptExpirationDate?: string | undefined
        exemptIssuingJurisdiction?: string | undefined
        exemptStatus?: string | undefined
      }
    | undefined
  usage?: GETAccountSummaryUsageType[] | undefined
}
type PostGenerateBillingDocumentType = {
  autoPost?: true | false | undefined
  autoRenew?: true | false | undefined
  chargeTypeToExclude?: string[] | undefined
  effectiveDate?: string | undefined
  subscriptionIds?: string[] | undefined
  targetDate?: string | undefined
}
type CreditMemoResponseType = { id?: string | undefined }
type InvoiceResponseType = { id?: string | undefined }
type GenerateBillingDocumentResponseType = {
  creditMemos?: CreditMemoResponseType[] | undefined
  invoices?: InvoiceResponseType[] | undefined
  success?: boolean | undefined
}
type ElectronicPaymentOptions = { PaymentMethodId?: string | undefined }
type ExternalPaymentOptions = {
  Amount?: number | undefined
  EffectiveDate?: string | undefined
  GatewayOrderId?: string | undefined
  PaymentMethodId?: string | undefined
  ReferenceId?: string | undefined
}
type InvoiceProcessingOptions = { InvoiceDate?: string | undefined; InvoiceTargetDate: string }
type RatePlan = {
  AmendmentId?: string | undefined
  AmendmentSubscriptionRatePlanId?: string | undefined
  AmendmentType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Name?: string | undefined
  ProductRatePlanId: string
  SubscriptionId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type RatePlanChargeTier = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  EndingUnit?: number | undefined
  IsOveragePrice?: boolean | undefined
  Price?: number | undefined
  PriceFormat?: 'FlatFee' | 'PerUnit' | undefined
  RatePlanChargeId: string
  StartingUnit?: number | undefined
  Tier?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type RatePlanChargeDataInRatePlanData = {
  RatePlanCharge: {
    AccountingCode?: string | undefined
    ApplyDiscountTo?: string | undefined
    BillCycleDay?: number | undefined
    BillCycleType?: string | undefined
    BillingPeriod?: string | undefined
    BillingPeriodAlignment?: string | undefined
    BillingTiming?: string | undefined
    ChargeModel?: string | undefined
    ChargeNumber?: string | undefined
    ChargeType?: string | undefined
    ChargedThroughDate?: string | undefined
    CreatedById?: string | undefined
    CreatedDate?: string | undefined
    DMRC?: number | undefined
    DTCV?: number | undefined
    Description?: string | undefined
    DiscountAmount?: number | undefined
    DiscountLevel?: string | undefined
    DiscountPercentage?: number | undefined
    EffectiveEndDate?: string | undefined
    EffectiveStartDate?: string | undefined
    EndDateCondition?: string | undefined
    IncludedUnits?: number | undefined
    IsLastSegment?: boolean | undefined
    ListPriceBase?: string | undefined
    MRR?: number | undefined
    Name?: string | undefined
    NumberOfPeriods?: bigint | undefined
    OriginalId?: string | undefined
    OverageCalculationOption?: string | undefined
    OveragePrice?: number | undefined
    OverageUnusedUnitsCreditOption?: string | undefined
    Price?: number | undefined
    PriceChangeOption?: string | undefined
    PriceIncreasePercentage?: number | undefined
    ProcessedThroughDate?: string | undefined
    ProductRatePlanChargeId: string
    Quantity?: number | undefined
    RatePlanId?: string | undefined
    RevRecCode?: string | undefined
    RevRecTriggerCondition?: string | undefined
    RevenueRecognitionRuleName?: string | undefined
    RolloverBalance?: number | undefined
    Segment?: number | undefined
    SpecificBillingPeriod?: bigint | undefined
    SpecificEndDate?: string | undefined
    TCV?: number | undefined
    TriggerDate?: string | undefined
    TriggerEvent?: string | undefined
    UOM?: string | undefined
    UnusedUnitsCreditRates?: number | undefined
    UpToPeriods?: bigint | undefined
    UpToPeriodsType?: string | undefined
    UpdatedById?: string | undefined
    UpdatedDate?: string | undefined
    UsageRecordRatingOption?: string | undefined
    UseDiscountSpecificAccountingCode?: boolean | undefined
    Version?: bigint | undefined
    WeeklyBillCycleDay?: string | undefined
  }
  RatePlanChargeTier?: RatePlanChargeTier[] | undefined
}
type ActionAmendSubscriptionProductFeature = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  FeatureCode?: string | undefined
  FeatureId?: string | undefined
  Name?: string | undefined
  RatePlanId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type SubscriptionProductFeatureList = {
  SubscriptionProductFeature?: ActionAmendSubscriptionProductFeature[] | undefined
}
type Amendment = {
  AutoRenew?: boolean | undefined
  Code?: string | undefined
  ContractEffectiveDate: string
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CurrentTerm?: bigint | undefined
  CurrentTermPeriodType?: string | undefined
  CustomerAcceptanceDate?: string | undefined
  Description?: string | undefined
  DestinationAccountId?: string | undefined
  DestinationInvoiceOwnerId?: string | undefined
  EffectiveDate?: string | undefined
  Name: string
  RatePlanData?:
    | {
        RatePlan: RatePlan
        RatePlanChargeData?: RatePlanChargeDataInRatePlanData[] | undefined
        SubscriptionProductFeatureList?: SubscriptionProductFeatureList | undefined
      }
    | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: bigint | undefined
  RenewalTermPeriodType?: string | undefined
  ResumeDate?: string | undefined
  ServiceActivationDate?: string | undefined
  SpecificUpdateDate?: string | undefined
  Status?: string | undefined
  SubscriptionId: string
  SuspendDate?: string | undefined
  TermStartDate?: string | undefined
  TermType?: string | undefined
  Type: string
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type AmendRequest = {
  AmendOptions?:
    | {
        ApplicationOrder?: string[] | undefined
        ApplyCredit?: boolean | undefined
        ApplyCreditBalance?: boolean | undefined
        ElectronicPaymentOptions?: ElectronicPaymentOptions | undefined
        ExternalPaymentOptions?: ExternalPaymentOptions | undefined
        GenerateInvoice?: boolean | undefined
        InvoiceProcessingOptions?: InvoiceProcessingOptions | undefined
        ProcessPayments?: boolean | undefined
      }
    | undefined
  Amendments: Amendment[]
  PreviewOptions?:
    | {
        EnablePreviewMode?: boolean | undefined
        IncludeExistingDraftInvoiceItems?: boolean | undefined
        NumberOfPeriods?: number | undefined
        PreviewThroughTermEnd?: boolean | undefined
        PreviewType?: string | undefined
      }
    | undefined
}
type ProxyActionamendRequest = { requests?: AmendRequest[] | undefined }
type NewChargeMetrics = {
  ChargeNumber?: string | undefined
  DMRR?: number | undefined
  DTCV?: number | undefined
  MRR?: number | undefined
  OriginalId?: string | undefined
  OriginalRatePlanId?: string | undefined
  ProductRatePlanChargeId?: string | undefined
  ProductRatePlanId?: string | undefined
  TCV?: number | undefined
}
type ChargeMetricsData = { ChargeMetrics?: NewChargeMetrics[] | undefined }
type ActionAmendCreditMemo = {
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalAmountWithoutTax?: number | undefined
}
type ActionAmendCreditMemoItem = {
  AmountWithoutTax?: number | undefined
  ChargeName?: string | undefined
  Description?: string | undefined
  ProductRatePlanChargeId?: string | undefined
  Quantity?: number | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  TaxAmount?: number | undefined
  UnitOfMeasure?: string | undefined
}
type ActionAmendCreditMemoData = {
  CreditMemo?: ActionAmendCreditMemo | undefined
  CreditMemoItem?: ActionAmendCreditMemoItem[] | undefined
}
type ActionsErrorResponse = { Code?: string | undefined; Message?: string | undefined }
type Invoice = {
  AccountId?: string | undefined
  AdjustmentAmount?: number | undefined
  Amount?: number | undefined
  AmountWithoutTax?: number | undefined
  Balance?: number | undefined
  BillRunId?: string | undefined
  Body?: string | undefined
  Comments?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreditBalanceAdjustmentAmount?: number | undefined
  DueDate?: string | undefined
  IncludesOneTime?: boolean | undefined
  IncludesRecurring?: boolean | undefined
  IncludesUsage?: boolean | undefined
  InvoiceDate?: string | undefined
  InvoiceNumber?: string | undefined
  LastEmailSentDate?: string | undefined
  PaymentAmount?: number | undefined
  PostedBy?: string | undefined
  PostedDate?: string | undefined
  RefundAmount?: number | undefined
  RegenerateInvoicePDF?: boolean | undefined
  Status?: string | undefined
  TargetDate?: string | undefined
  TaxAmount?: number | undefined
  TaxExemptAmount?: number | undefined
  TransferredToAccounting?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ActionAmendInvoiceItem = {
  AccountingCode?: string | undefined
  AppliedToInvoiceItemId?: string | undefined
  ChargeAmount?: number | undefined
  ChargeDate?: string | undefined
  ChargeDescription?: string | undefined
  ChargeId?: string | undefined
  ChargeName?: string | undefined
  ChargeNumber?: string | undefined
  ChargeType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  InvoiceId?: string | undefined
  ProcessingType?: number | undefined
  ProductDescription?: string | undefined
  ProductId?: string | undefined
  ProductName?: string | undefined
  ProductRatePlanChargeId?: string | undefined
  Quantity?: number | undefined
  RatePlanChargeId?: string | undefined
  RevRecCode?: string | undefined
  RevRecStartDate?: string | undefined
  RevRecTriggerCondition?: string | undefined
  SKU?: string | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  SubscriptionId?: string | undefined
  SubscriptionNumber?: string | undefined
  TaxAmount?: number | undefined
  TaxCode?: string | undefined
  TaxExemptAmount?: number | undefined
  TaxMode?: string | undefined
  UOM?: string | undefined
  UnitPrice?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ActionAmendInvoiceData = {
  Invoice?: Invoice | undefined
  InvoiceItem?: ActionAmendInvoiceItem[] | undefined
}
type AmendResult = {
  AmendmentIds?: string[] | undefined
  ChargeMetricsData?: ChargeMetricsData | undefined
  CreditMemoDatas?: ActionAmendCreditMemoData[] | undefined
  CreditMemoId?: string | undefined
  Errors?: ActionsErrorResponse[] | undefined
  GatewayResponse?: string | undefined
  GatewayResponseCode?: string | undefined
  InvoiceDatas?: ActionAmendInvoiceData[] | undefined
  InvoiceId?: string | undefined
  PaymentId?: string | undefined
  PaymentTransactionNumber?: string | undefined
  SubscriptionId?: string | undefined
  Success?: boolean | undefined
  TotalDeltaMrr?: number | undefined
  TotalDeltaTcv?: number | undefined
}
type ProxyActionamendResponse = { results?: AmendResult[] | undefined }
type ProxyUnauthorizedResponse = { message?: string | undefined }
type ZObject = { [x: string]: { [x: string]: unknown } }
type ProxyActioncreateRequest = { objects: ZObject[]; type: string }
type SaveResult = {
  Errors?: ActionsErrorResponse[] | undefined
  Id?: string | undefined
  Success?: boolean | undefined
}
type ProxyActiondeleteRequest = { ids: string[]; type: string }
type DeleteResult = {
  errors?: ActionsErrorResponse[] | undefined
  id?: string | undefined
  success?: boolean | undefined
}
type ProxyActionexecuteRequest = { ids: string[]; synchronous: boolean; type: 'InvoiceSplit' }
type ExecuteResult = {
  Errors?: ActionsErrorResponse[] | undefined
  Id?: string | undefined
  Success?: boolean | undefined
}
type ProxyActiongenerateRequest = { objects: ZObject[]; type: 'Invoice' }
type ProxyActionqueryRequest = {
  conf?: { batchSize?: number | undefined } | undefined
  queryString: string
}
type ProxyActionqueryResponse = {
  done?: boolean | undefined
  queryLocator?: string | undefined
  records?: ZObject[] | undefined
  size?: number | undefined
}
type ProxyActionqueryMoreRequest = { queryLocator: string }
type ProxyActionqueryMoreResponse = {
  done?: boolean | undefined
  queryLocator?: string | undefined
  records?: ZObject[] | undefined
  size?: number | undefined
}
type SubscribeRequestAccount = {
  AccountNumber?: string | undefined
  AdditionalEmailAddresses?: string | undefined
  AllowInvoiceEdit?: boolean | undefined
  AutoPay?: boolean | undefined
  Batch: string
  BcdSettingOption?: string | undefined
  BillCycleDay: number
  CommunicationProfileId?: string | undefined
  CrmId?: string | undefined
  Currency: string
  CustomerServiceRepName?: string | undefined
  DefaultPaymentMethodId?: string | undefined
  Id?: string | undefined
  InvoiceDeliveryPrefsEmail?: boolean | undefined
  InvoiceDeliveryPrefsPrint?: boolean | undefined
  InvoiceTemplateId?: string | undefined
  LastInvoiceDate?: string | undefined
  Name: string
  Notes?: string | undefined
  ParentId?: string | undefined
  PaymentGateway?: string | undefined
  PaymentTerm?: string | undefined
  PurchaseOrderNumber?: string | undefined
  SalesRepName?: string | undefined
  TaxCompanyCode?: string | undefined
  TaxExemptCertificateID?: string | undefined
  TaxExemptCertificateType?: string | undefined
  TaxExemptDescription?: string | undefined
  TaxExemptEffectiveDate?: string | undefined
  TaxExemptExpirationDate?: string | undefined
  TaxExemptIssuingJurisdiction?: string | undefined
  TaxExemptStatus?: string | undefined
  TotalInvoiceBalance?: number | undefined
  VATId?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type SubscribeRequestBillToContact = {
  AccountId?: string | undefined
  Address1?: string | undefined
  Address2?: string | undefined
  City?: string | undefined
  Country?: string | undefined
  County?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  Fax?: string | undefined
  FirstName: string
  HomePhone?: string | undefined
  LastName: string
  MobilePhone?: string | undefined
  NickName?: string | undefined
  OtherPhone?: string | undefined
  OtherPhoneType?: string | undefined
  PersonalEmail?: string | undefined
  PostalCode?: string | undefined
  State?: string | undefined
  TaxRegion?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  WorkEmail?: string | undefined
  WorkPhone?: string | undefined
}
type GatewayOption = { name?: string | undefined; value?: string | undefined }
type SubscribeRequestSoldToContact = {
  AccountId?: string | undefined
  Address1?: string | undefined
  Address2?: string | undefined
  City?: string | undefined
  Country?: string | undefined
  County?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  Fax?: string | undefined
  FirstName?: string | undefined
  HomePhone?: string | undefined
  LastName?: string | undefined
  MobilePhone?: string | undefined
  NickName?: string | undefined
  OtherPhone?: string | undefined
  OtherPhoneType?: string | undefined
  PersonalEmail?: string | undefined
  PostalCode?: string | undefined
  State?: string | undefined
  TaxRegion?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  WorkEmail?: string | undefined
  WorkPhone?: string | undefined
}
type RatePlanDataRatePlan = {
  AmendmentId?: string | undefined
  AmendmentSubscriptionRatePlanId?: string | undefined
  AmendmentType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Name?: string | undefined
  ProductRatePlanId: string
  SubscriptionId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type RatePlanChargeDataRatePlanCharge = {
  AccountingCode?: string | undefined
  ApplyDiscountTo?: string | undefined
  BillCycleDay?: number | undefined
  BillCycleType?: string | undefined
  BillingPeriod?: string | undefined
  BillingPeriodAlignment?: string | undefined
  BillingTiming?: string | undefined
  ChargeModel?: string | undefined
  ChargeNumber?: string | undefined
  ChargeType?: string | undefined
  ChargedThroughDate?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  DMRC?: number | undefined
  DTCV?: number | undefined
  Description?: string | undefined
  DiscountAmount?: number | undefined
  DiscountLevel?: string | undefined
  DiscountPercentage?: number | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  EndDateCondition?: string | undefined
  IncludedUnits?: number | undefined
  IsLastSegment?: boolean | undefined
  ListPriceBase?: string | undefined
  MRR?: number | undefined
  Name?: string | undefined
  NumberOfPeriods?: bigint | undefined
  OriginalId?: string | undefined
  OverageCalculationOption?: string | undefined
  OveragePrice?: number | undefined
  OverageUnusedUnitsCreditOption?: string | undefined
  Price?: number | undefined
  PriceChangeOption?: string | undefined
  PriceIncreasePercentage?: number | undefined
  ProcessedThroughDate?: string | undefined
  ProductRatePlanChargeId: string
  Quantity?: number | undefined
  RatePlanId?: string | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  RolloverBalance?: number | undefined
  Segment?: number | undefined
  SpecificBillingPeriod?: bigint | undefined
  SpecificEndDate?: string | undefined
  TCV?: number | undefined
  TriggerDate?: string | undefined
  TriggerEvent?: string | undefined
  UOM?: string | undefined
  UnusedUnitsCreditRates?: number | undefined
  UpToPeriods?: bigint | undefined
  UpToPeriodsType?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  UsageRecordRatingOption?: string | undefined
  UseDiscountSpecificAccountingCode?: boolean | undefined
  Version?: bigint | undefined
  WeeklyBillCycleDay?: string | undefined
}
type RatePlanChargeData = {
  RatePlanCharge: RatePlanChargeDataRatePlanCharge
  RatePlanChargeTier?: RatePlanChargeTier[] | undefined
}
type SubscriptionProductFeature = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  FeatureCode?: string | undefined
  FeatureId: string
  Name?: string | undefined
  RatePlanId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type RatePlanData = {
  RatePlan: RatePlanDataRatePlan
  RatePlanChargeData?: RatePlanChargeData[] | undefined
  SubscriptionProductFeatureList?:
    | { SubscriptionProductFeature?: SubscriptionProductFeature[] | undefined }
    | undefined
}
type SubscribeRequestSubscriptionDataSubscription = {
  AccountId?: string | undefined
  AncestorAccountId?: string | undefined
  AutoRenew?: boolean | undefined
  CancelledDate?: string | undefined
  ContractAcceptanceDate?: string | undefined
  ContractEffectiveDate: string
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreatorAccountId?: string | undefined
  CreatorInvoiceOwnerId?: string | undefined
  CurrentTerm?: number | undefined
  CurrentTermPeriodType?: string | undefined
  InitialTerm?: number | undefined
  InitialTermPeriodType?: string | undefined
  InvoiceOwnerId?: string | undefined
  IsInvoiceSeparate?: boolean | undefined
  Name?: string | undefined
  Notes?: string | undefined
  OriginalCreatedDate?: string | undefined
  OriginalId?: string | undefined
  PreviousSubscriptionId?: string | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: number | undefined
  RenewalTermPeriodType?: string | undefined
  ServiceActivationDate?: string | undefined
  Status?: string | undefined
  SubscriptionEndDate?: string | undefined
  SubscriptionStartDate?: string | undefined
  TermEndDate?: string | undefined
  TermStartDate?: string | undefined
  TermType: string
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  Version?: number | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type SubscribeRequest = {
  Account: SubscribeRequestAccount
  BillToContact?: SubscribeRequestBillToContact | undefined
  PaymentMethod?:
    | {
        AccountId?: string | undefined
        AchAbaCode?: string | undefined
        AchAccountName?: string | undefined
        AchAccountNumber?: string | undefined
        AchAccountNumberMask?: string | undefined
        AchAccountType?: string | undefined
        AchAddress1?: string | undefined
        AchAddress2?: string | undefined
        AchBankName?: string | undefined
        Active?: boolean | undefined
        BankBranchCode?: string | undefined
        BankCheckDigit?: string | undefined
        BankCity?: string | undefined
        BankCode?: string | undefined
        BankIdentificationNumber?: string | undefined
        BankName?: string | undefined
        BankPostalCode?: string | undefined
        BankStreetName?: string | undefined
        BankStreetNumber?: string | undefined
        BankTransferAccountName?: string | undefined
        BankTransferAccountNumber?: string | undefined
        BankTransferAccountNumberMask?: string | undefined
        BankTransferAccountType?: string | undefined
        BankTransferType?: string | undefined
        BusinessIdentificationCode?: string | undefined
        City?: string | undefined
        Country?: string | undefined
        CreatedById?: string | undefined
        CreatedDate?: string | undefined
        CreditCardAddress1?: string | undefined
        CreditCardAddress2?: string | undefined
        CreditCardCity?: string | undefined
        CreditCardCountry?: string | undefined
        CreditCardExpirationMonth?: number | undefined
        CreditCardExpirationYear?: number | undefined
        CreditCardHolderName?: string | undefined
        CreditCardMaskNumber?: string | undefined
        CreditCardNumber?: string | undefined
        CreditCardPostalCode?: string | undefined
        CreditCardSecurityCode?: string | undefined
        CreditCardState?: string | undefined
        CreditCardType?: string | undefined
        DeviceSessionId?: string | undefined
        Email?: string | undefined
        ExistingMandate?: string | undefined
        FirstName?: string | undefined
        GatewayOptionData?: { GatewayOption: GatewayOption[] } | undefined
        IBAN?: string | undefined
        IPAddress?: string | undefined
        Id?: string | undefined
        LastFailedSaleTransactionDate?: string | undefined
        LastName?: string | undefined
        LastTransactionDateTime?: string | undefined
        LastTransactionStatus?: string | undefined
        MandateCreationDate?: string | undefined
        MandateID?: string | undefined
        MandateReceived?: string | undefined
        MandateUpdateDate?: string | undefined
        MaxConsecutivePaymentFailures?: number | undefined
        Name?: string | undefined
        NumConsecutiveFailures?: number | undefined
        PaymentMethodStatus?: string | undefined
        PaymentRetryWindow?: number | undefined
        PaypalBaid?: string | undefined
        PaypalEmail?: string | undefined
        PaypalPreapprovalKey?: string | undefined
        PaypalType?: string | undefined
        Phone?: string | undefined
        PostalCode?: string | undefined
        SecondTokenId?: string | undefined
        SkipValidation?: boolean | undefined
        State?: string | undefined
        StreetName?: string | undefined
        StreetNumber?: string | undefined
        TokenId?: string | undefined
        TotalNumberOfErrorPayments?: number | undefined
        TotalNumberOfProcessedPayments?: number | undefined
        Type:
          | 'ACH'
          | 'ApplePay'
          | 'BankTransfer'
          | 'Cash'
          | 'Check'
          | 'CreditCard'
          | 'CreditCardReferenceTransaction'
          | 'DebitCard'
          | 'Other'
          | 'PayPal'
          | 'WireTransfer'
        UpdatedById?: string | undefined
        UpdatedDate?: string | undefined
        UseDefaultRetryRule?: boolean | undefined
      }
    | undefined
  PreviewOptions?:
    | {
        EnablePreviewMode?: boolean | undefined
        NumberOfPeriods?: number | undefined
        PreviewThroughTermEnd?: boolean | undefined
        PreviewType?: 'InvoiceItem' | 'ChargeMetrics' | 'InvoiceItemChargeMetrics' | undefined
      }
    | undefined
  SoldToContact?: SubscribeRequestSoldToContact | undefined
  SubscribeOptions?:
    | {
        ApplicationOrder?: string[] | undefined
        ApplyCredit?: boolean | undefined
        ApplyCreditBalance?: boolean | undefined
        ElectronicPaymentOptions?: { PaymentMethodId?: string | undefined } | undefined
        ExternalPaymentOptions?:
          | {
              Amount?: number | undefined
              EffectiveDate?: string | undefined
              GatewayOrderId?: string | undefined
              PaymentMethodId?: string | undefined
              ReferenceId?: string | undefined
            }
          | undefined
        GenerateInvoice: boolean
        ProcessPayments: boolean
        SubscribeInvoiceProcessingOptions?:
          | {
              InvoiceDate?: string | undefined
              InvoiceProcessingScope?: string | undefined
              InvoiceTargetDate?: string | undefined
            }
          | undefined
      }
    | undefined
  SubscriptionData: {
    RatePlanData: RatePlanData[]
    Subscription: SubscribeRequestSubscriptionDataSubscription
  }
}
type ProxyActionsubscribeRequest = { subscribes: SubscribeRequest[] }
type ActionSubscribeCreditMemo = {
  TaxAmount?: number | undefined
  TotalAmount?: number | undefined
  TotalAmountWithoutTax?: number | undefined
}
type ActionSubscribeCreditMemoItem = {
  AmountWithoutTax?: number | undefined
  ChargeName?: string | undefined
  Description?: string | undefined
  ProductRatePlanChargeId?: string | undefined
  Quantity?: number | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  TaxAmount?: number | undefined
  UnitOfMeasure?: string | undefined
}
type ActionSubscribeCreditMemoData = {
  CreditMemo?: ActionSubscribeCreditMemo | undefined
  CreditMemoItem?: ActionSubscribeCreditMemoItem[] | undefined
}
type InvoiceDataInvoice = {
  AccountId?: string | undefined
  AdjustmentAmount?: number | undefined
  Amount?: number | undefined
  AmountWithoutTax?: number | undefined
  Balance?: number | undefined
  BillRunId?: string | undefined
  Body?: string | undefined
  Comments?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreditBalanceAdjustmentAmount?: number | undefined
  DueDate?: string | undefined
  IncludesOneTime?: boolean | undefined
  IncludesRecurring?: boolean | undefined
  IncludesUsage?: boolean | undefined
  InvoiceDate?: string | undefined
  InvoiceNumber?: string | undefined
  LastEmailSentDate?: string | undefined
  PaymentAmount?: number | undefined
  PostedBy?: string | undefined
  PostedDate?: string | undefined
  RefundAmount?: number | undefined
  RegenerateInvoicePDF?: boolean | undefined
  Status?: string | undefined
  TargetDate?: string | undefined
  TaxAmount?: number | undefined
  TaxExemptAmount?: number | undefined
  TransferredToAccounting?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ActionSubscribeInvoiceItem = {
  AccountingCode?: string | undefined
  AppliedToChargeNumber?: string | undefined
  AppliedToInvoiceItemId?: string | undefined
  ChargeAmount?: number | undefined
  ChargeDate?: string | undefined
  ChargeDescription?: string | undefined
  ChargeId?: string | undefined
  ChargeName?: string | undefined
  ChargeNumber?: string | undefined
  ChargeType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  InvoiceId?: string | undefined
  ProcessingType?: number | undefined
  ProductDescription?: string | undefined
  ProductId?: string | undefined
  ProductName?: string | undefined
  ProductRatePlanChargeId?: string | undefined
  Quantity?: number | undefined
  RatePlanChargeId?: string | undefined
  RevRecCode?: string | undefined
  RevRecStartDate?: string | undefined
  RevRecTriggerCondition?: string | undefined
  SKU?: string | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  SubscriptionId?: string | undefined
  SubscriptionNumber?: string | undefined
  TaxAmount?: number | undefined
  TaxCode?: string | undefined
  TaxExemptAmount?: number | undefined
  TaxMode?: string | undefined
  UOM?: string | undefined
  UnitPrice?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ActionSubscribeInvoiceData = {
  Invoice?: InvoiceDataInvoice | undefined
  InvoiceItem?: ActionSubscribeInvoiceItem[] | undefined
}
type SubscribeResult = {
  AccountId?: string | undefined
  AccountNumber?: string | undefined
  ChargeMetricsData?: { ChargeMetrics?: NewChargeMetrics[] | undefined } | undefined
  CreditMemoData?: ActionSubscribeCreditMemoData[] | undefined
  CreditMemoId?: string | undefined
  CreditMemoNumber?: string | undefined
  CreditMemoResult?:
    | {
        CreditMemo?:
          | { CreditMemoNumber?: string | undefined; Id?: string | undefined }[]
          | undefined
      }
    | undefined
  Errors?: ActionsErrorResponse[] | undefined
  GatewayResponse?: string | undefined
  GatewayResponseCode?: string | undefined
  InvoiceData?: ActionSubscribeInvoiceData[] | undefined
  InvoiceId?: string | undefined
  InvoiceNumber?: string | undefined
  InvoiceResult?:
    | { Invoice?: { Id?: string | undefined; InvoiceNumber?: string | undefined }[] | undefined }
    | undefined
  PaymentId?: string | undefined
  PaymentTransactionNumber?: string | undefined
  SubscriptionId?: string | undefined
  SubscriptionNumber?: string | undefined
  Success?: boolean | undefined
  TotalMrr?: number | undefined
  TotalTcv?: number | undefined
}
type ZObjectUpdate = { Id: string; fieldsToNull?: string[] | undefined }
type ProxyActionupdateRequest = { objects: ZObjectUpdate[]; type: string }
type GETAmendmentType = {
  autoRenew?: boolean | undefined
  baseRatePlanId?: string | undefined
  baseSubscriptionId?: string | undefined
  code?: string | undefined
  contractEffectiveDate?: string | undefined
  currentTerm?: bigint | undefined
  currentTermPeriodType?: string | undefined
  customerAcceptanceDate?: string | undefined
  description?: string | undefined
  destinationAccountId?: string | undefined
  destinationInvoiceOwnerId?: string | undefined
  effectiveDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  newRatePlanId?: string | undefined
  newSubscriptionId?: string | undefined
  renewalSetting?: string | undefined
  renewalTerm?: bigint | undefined
  renewalTermPeriodType?: string | undefined
  resumeDate?: string | undefined
  serviceActivationDate?: string | undefined
  specificUpdateDate?: string | undefined
  status?: string | undefined
  success?: boolean | undefined
  suspendDate?: string | undefined
  termStartDate?: string | undefined
  termType?: string | undefined
  type?: string | undefined
}
type JobResult = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  accountId?: string | undefined
  accountNumber?: string | undefined
  creditMemoIds?: string[] | undefined
  creditMemoNumbers?: string[] | undefined
  invoiceId?: string | undefined
  invoiceNumbers?: string[] | undefined
  orderId?: string | undefined
  orderLineItems?: { id?: string | undefined; itemNumber?: string | undefined }[] | undefined
  orderNumber?: string | undefined
  paidAmount?: string | undefined
  paymentId?: string | undefined
  paymentNumber?: string | undefined
  ramps?: { rampNumber?: string | undefined; subscriptionNumber?: string | undefined }[] | undefined
  status?: 'Completed' | 'Pending' | undefined
  subscriptionIds?: string[] | undefined
  subscriptionNumbers?: string[] | undefined
  subscriptions?:
    | {
        status?: 'Active' | 'Pending Activation' | 'Pending Acceptance' | 'Cancelled' | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
}
type OrderObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type BillToContactPostOrder = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  contactDescription?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: 'Work' | 'Mobile' | 'Home' | 'Other' | undefined
  personalEmail?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
}
type AccountCreditCardHolder = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  cardHolderName?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type CreditCard = {
  cardHolderInfo?: AccountCreditCardHolder | undefined
  cardNumber?: string | undefined
  cardType?:
    | 'Visa'
    | 'MasterCard'
    | 'AmericanExpress'
    | 'Discover'
    | 'JCB'
    | 'Diners'
    | 'CUP'
    | 'Maestro'
    | 'Electron'
    | 'AppleVisa'
    | 'AppleMasterCard'
    | 'AppleAmericanExpress'
    | 'AppleDiscover'
    | 'AppleJCB'
    | 'Elo'
    | 'Hipercard'
    | 'Naranja'
    | 'Nativa'
    | 'TarjetaShopping'
    | 'Cencosud'
    | 'Argencard'
    | 'Cabal'
    | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  securityCode?: string | undefined
}
type AccountObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type PaymentMethod = {
  type: string
  BAID?: string | undefined
  email?: string | undefined
  preapprovalKey?: string | undefined
  cardHolderInfo?: CreatePaymentMethodCardholderInfo | undefined
  cardNumber?: string | undefined
  cardType?: string | undefined
  checkDuplicated?: boolean | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  mitConsentAgreementRef?: string | undefined
  mitConsentAgreementSrc?: 'External' | undefined
  mitNetworkTransactionId?: string | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileAgreedOn?: string | undefined
  mitProfileType?: 'Recurring' | 'Unscheduled' | undefined
  securityCode?: string | undefined
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  bankABACode?: string | undefined
  bankAccountName?: string | undefined
  bankAccountNumber?: string | undefined
  bankAccountType?: 'BusinessChecking' | 'Checking' | 'Saving' | undefined
  bankName?: string | undefined
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
  accountKey?: string | undefined
  authGateway?: string | undefined
  makeDefault?: boolean | undefined
  IBAN?: string | undefined
  accountHolderInfo?:
    | {
        accountHolderName: string
        addressLine1?: string | undefined
        addressLine2?: string | undefined
        city?: string | undefined
        email?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        phone?: string | undefined
        state?: string | undefined
        zipCode?: string | undefined
      }
    | undefined
  accountNumber?: string | undefined
  bankCode?: string | undefined
  branchCode?: string | undefined
  businessIdentificationCode?: string | undefined
  currencyCode?: string | undefined
  identityNumber?: string | undefined
}
type SoldToContactPostOrder = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  contactDescription?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: 'Work' | 'Mobile' | 'Home' | 'Other' | undefined
  personalEmail?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
}
type TaxInfo = {
  VATId?: string | undefined
  companyCode?: string | undefined
  exemptCertificateId?: string | undefined
  exemptCertificateType?: string | undefined
  exemptDescription?: string | undefined
  exemptEffectiveDate?: string | undefined
  exemptExpirationDate?: string | undefined
  exemptIssuingJurisdiction?: string | undefined
  exemptStatus?: 'No' | 'Yes' | 'PendingVerification' | undefined
}
type Account = {
  accountNumber?: string | undefined
  additionalEmailAddresses?: string | undefined
  allowInvoiceEdit?: boolean | undefined
  autoPay?: boolean | undefined
  batch?: string | undefined
  billCycleDay: number
  billToContact: BillToContactPostOrder
  communicationProfileId?: string | undefined
  creditCard?: CreditCard | undefined
  creditMemoTemplateId?: string | undefined
  crmId?: string | undefined
  currency: string
  customFields?: AccountObjectCustomFields | undefined
  customerServiceRepName?: string | undefined
  debitMemoTemplateId?: string | undefined
  hpmCreditCardPaymentMethodId?: string | undefined
  invoiceDeliveryPrefsEmail?: boolean | undefined
  invoiceDeliveryPrefsPrint?: boolean | undefined
  invoiceTemplateId?: string | undefined
  name: string
  notes?: string | undefined
  parentId?: string | undefined
  paymentGateway?: string | undefined
  paymentMethod?: PaymentMethod | undefined
  paymentTerm?: string | undefined
  purchaseOrderNumber?: string | undefined
  salesRep?: string | undefined
  sequenceSetId?: string | undefined
  soldToContact?: SoldToContactPostOrder | undefined
  taxInfo?: TaxInfo | undefined
}
type OrderLineItemCustomFields = { [x: string]: { [x: string]: unknown } }
type OrderContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
}
type CreateOrderOrderLineItem = {
  UOM?: string | undefined
  amountPerUnit?: number | undefined
  billTargetDate?: string | undefined
  customFields?: OrderLineItemCustomFields | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemName?: string | undefined
  itemState?: 'Executing' | 'SentToBilling' | 'Complete' | 'Cancelled' | undefined
  itemType?: 'Product' | 'Fee' | 'Services' | undefined
  listPricePerUnit?: number | undefined
  productCode?: string | undefined
  productRatePlanChargeId?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: number | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revenueRecognitionRule?: string | undefined
  soldTo?: string | undefined
  soldToData?: OrderContact | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  transactionDate?: string | undefined
}
type BillingOptions = { documentDate?: string | undefined; targetDate?: string | undefined }
type ProcessingOptions = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  billingOptions?: BillingOptions | undefined
  collectPayment?: boolean | undefined
  electronicPaymentOptions?: { paymentMethodId?: string | undefined } | undefined
  runBilling?: boolean | undefined
}
type SubscriptionObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type RatePlanChargeObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type EndConditions = {
  endDateCondition?: 'Subscription_End' | 'Fixed_Period' | 'Specific_End_Date' | undefined
  specificEndDate?: string | undefined
  upToPeriods?: number | undefined
  upToPeriodsType?: 'Billing_Periods' | 'Days' | 'Weeks' | 'Months' | 'Years' | undefined
}
type ChargeTier = {
  endingUnit?: number | undefined
  price: number
  priceFormat: 'FlatFee' | 'PerUnit'
  startingUnit: number
  tier: number
}
type ChargeModelDataOverride = {
  chargeModelConfiguration?:
    | {
        customFieldPerUnitRate?: string | undefined
        customFieldTotalAmount?: string | undefined
        formula?: string | undefined
      }
    | undefined
  tiers?: ChargeTier[] | undefined
}
type DiscountPricingOverride = {
  applyDiscountTo?:
    | 'ONETIME'
    | 'RECURRING'
    | 'USAGE'
    | 'ONETIMERECURRING'
    | 'ONETIMEUSAGE'
    | 'RECURRINGUSAGE'
    | 'ONETIMERECURRINGUSAGE'
    | undefined
  discountAmount?: number | undefined
  discountLevel?: 'rateplan' | 'subscription' | 'account' | undefined
  discountPercentage?: number | undefined
  priceChangeOption?: 'NoChange' | 'UseLatestProductCatalogPricing' | undefined
}
type OneTimeFlatFeePricingOverride = { listPrice: number }
type OneTimePerUnitPricingOverride = {
  listPrice?: number | undefined
  quantity?: number | undefined
}
type OneTimeTieredPricingOverride = {
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type OneTimeVolumePricingOverride = {
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type RecurringFlatFeePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
  listPriceBase?: 'Per_Billing_Period' | 'Per_Month' | 'Per_Week' | undefined
}
type RecurringPerUnitPricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
  listPriceBase?: 'Per_Billing_Period' | 'Per_Month' | 'Per_Week' | undefined
  quantity?: number | undefined
}
type RecurringTieredPricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPriceBase?: 'Per_Billing_Period' | 'Per_Month' | 'Per_Week' | undefined
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type RecurringVolumePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPriceBase?: 'Per_Billing_Period' | 'Per_Month' | 'Per_Week' | undefined
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type UsageFlatFeePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
}
type UsageOveragePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  includedUnits?: number | undefined
  numberOfPeriods?: number | undefined
  overagePrice?: number | undefined
  overageUnusedUnitsCreditOption?: 'NoCredit' | 'CreditBySpecificRate' | undefined
  unusedUnitsCreditRates?: number | undefined
}
type UsagePerUnitPricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
  ratingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | undefined
}
type UsageTieredPricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  ratingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | undefined
  tiers?: ChargeTier[] | undefined
}
type UsageTieredWithOveragePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  numberOfPeriods?: number | undefined
  overagePrice?: number | undefined
  overageUnusedUnitsCreditOption?: 'NoCredit' | 'CreditBySpecificRate' | undefined
  tiers?: ChargeTier[] | undefined
  unusedUnitsCreditRates?: number | undefined
}
type UsageVolumePricingOverride = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  ratingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | undefined
  tiers?: ChargeTier[] | undefined
}
type CreateOrderTriggerParams = {
  specificTriggerDate?: string | undefined
  triggerEvent?:
    | 'ContractEffective'
    | 'ServiceActivation'
    | 'CustomerAcceptance'
    | 'SpecificDate'
    | undefined
}
type CreateOrderChargeOverride = {
  billing?:
    | {
        billCycleDay?: number | undefined
        billCycleType?:
          | 'DefaultFromCustomer'
          | 'SpecificDayofMonth'
          | 'SubscriptionStartDay'
          | 'ChargeTriggerDay'
          | 'SpecificDayofWeek'
          | undefined
        billingPeriod?:
          | 'Month'
          | 'Quarter'
          | 'Semi_Annual'
          | 'Annual'
          | 'Eighteen_Months'
          | 'Two_Years'
          | 'Three_Years'
          | 'Five_Years'
          | 'Specific_Months'
          | 'Subscription_Term'
          | 'Week'
          | 'Specific_Weeks'
          | undefined
        billingPeriodAlignment?:
          | 'AlignToCharge'
          | 'AlignToSubscriptionStart'
          | 'AlignToTermStart'
          | undefined
        billingTiming?: 'IN_ADVANCE' | 'IN_ARREARS' | undefined
        specificBillingPeriod?: number | undefined
        weeklyBillCycleDay?:
          | 'Sunday'
          | 'Monday'
          | 'Tuesday'
          | 'Wednesday'
          | 'Thursday'
          | 'Friday'
          | 'Saturday'
          | undefined
      }
    | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  endDate?: EndConditions | undefined
  pricing?:
    | {
        chargeModelData?: ChargeModelDataOverride | undefined
        discount?: DiscountPricingOverride | undefined
        oneTimeFlatFee?: OneTimeFlatFeePricingOverride | undefined
        oneTimePerUnit?: OneTimePerUnitPricingOverride | undefined
        oneTimeTiered?: OneTimeTieredPricingOverride | undefined
        oneTimeVolume?: OneTimeVolumePricingOverride | undefined
        recurringFlatFee?: RecurringFlatFeePricingOverride | undefined
        recurringPerUnit?: RecurringPerUnitPricingOverride | undefined
        recurringTiered?: RecurringTieredPricingOverride | undefined
        recurringVolume?: RecurringVolumePricingOverride | undefined
        usageFlatFee?: UsageFlatFeePricingOverride | undefined
        usageOverage?: UsageOveragePricingOverride | undefined
        usagePerUnit?: UsagePerUnitPricingOverride | undefined
        usageTiered?: UsageTieredPricingOverride | undefined
        usageTieredWithOverage?: UsageTieredWithOveragePricingOverride | undefined
        usageVolume?: UsageVolumePricingOverride | undefined
      }
    | undefined
  productRatePlanChargeId: string
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'Contract Effective Date'
    | 'Service Activation Date'
    | 'Customer Acceptance Date'
    | undefined
  revenueRecognitionRuleName?: 'Recognize upon invoicing' | 'Recognize daily over time' | undefined
  startDate?: CreateOrderTriggerParams | undefined
  uniqueToken?: string | undefined
}
type RatePlanObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type CreateOrderRatePlanOverride = {
  chargeOverrides?: CreateOrderChargeOverride[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  productRatePlanId: string
  uniqueToken?: string | undefined
}
type CancelSubscription = {
  cancellationEffectiveDate?: string | undefined
  cancellationPolicy: 'EndOfCurrentTerm' | 'EndOfLastInvoicePeriod' | 'SpecificDate'
}
type CreateOrderCreateSubscriptionNewSubscriptionOwnerAccount = {
  accountNumber?: string | undefined
  additionalEmailAddresses?: string | undefined
  allowInvoiceEdit?: boolean | undefined
  autoPay?: boolean | undefined
  batch?: string | undefined
  billCycleDay: number
  billToContact: BillToContactPostOrder
  communicationProfileId?: string | undefined
  creditCard?: CreditCard | undefined
  creditMemoTemplateId?: string | undefined
  crmId?: string | undefined
  currency: string
  customFields?: AccountObjectCustomFields | undefined
  customerServiceRepName?: string | undefined
  debitMemoTemplateId?: string | undefined
  hpmCreditCardPaymentMethodId?: string | undefined
  invoiceDeliveryPrefsEmail?: boolean | undefined
  invoiceDeliveryPrefsPrint?: boolean | undefined
  invoiceTemplateId?: string | undefined
  name: string
  notes?: string | undefined
  parentId?: string | undefined
  paymentGateway?: string | undefined
  paymentMethod?: PaymentMethod | undefined
  paymentTerm?: string | undefined
  purchaseOrderNumber?: string | undefined
  salesRep?: string | undefined
  soldToContact?: SoldToContactPostOrder | undefined
  taxInfo?: TaxInfo | undefined
}
type RenewalTerm = {
  period?: number | undefined
  periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
}
type CreateOrderCreateSubscription = {
  invoiceSeparately?: boolean | undefined
  newSubscriptionOwnerAccount?: CreateOrderCreateSubscriptionNewSubscriptionOwnerAccount | undefined
  notes?: string | undefined
  subscribeToRatePlans?: CreateOrderRatePlanOverride[] | undefined
  subscriptionNumber?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  terms?:
    | {
        autoRenew?: boolean | undefined
        initialTerm: {
          period?: number | undefined
          periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
          startDate?: string | undefined
          termType: 'TERMED' | 'EVERGREEN'
        }
        renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
        renewalTerms?: RenewalTerm[] | undefined
      }
    | undefined
}
type OrderActionObjectCustomFields = { [x: string]: { [x: string]: unknown } }
type OwnerTransfer = {
  destinationAccountNumber?: string | undefined
  destinationInvoiceAccountNumber?: string | undefined
}
type RemoveProduct = { ratePlanId?: string | undefined; uniqueToken?: string | undefined }
type CreateOrderResume = {
  extendsTerm?: boolean | undefined
  resumePeriods?: number | undefined
  resumePeriodsType?: 'Day' | 'Week' | 'Month' | 'Year' | undefined
  resumePolicy:
    | 'Today'
    | 'FixedPeriodsFromSuspendDate'
    | 'FixedPeriodsFromToday'
    | 'SpecificDate'
    | 'SuspendDate'
  resumeSpecificDate?: string | undefined
}
type CreateOrderSuspend = {
  suspendPeriods?: number | undefined
  suspendPeriodsType?: 'Day' | 'Week' | 'Month' | 'Year' | undefined
  suspendPolicy: 'Today' | 'EndOfLastInvoicePeriod' | 'FixedPeriodsFromToday' | 'SpecificDate'
  suspendSpecificDate?: string | undefined
}
type LastTerm = {
  period?: number | undefined
  periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
  startDate?: string | undefined
  termType: 'TERMED' | 'EVERGREEN'
}
type CreateOrderTermsAndConditions = {
  autoRenew?: boolean | undefined
  lastTerm?: LastTerm | undefined
  renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
  renewalTerms?: RenewalTerm[] | undefined
}
type TriggerDate = {
  name?: 'ContractEffective' | 'ServiceActivation' | 'CustomerAcceptance' | undefined
  triggerDate?: string | undefined
}
type BillingUpdate = {
  billingPeriodAlignment?:
    | 'AlignToCharge'
    | 'AlignToSubscriptionStart'
    | 'AlignToTermStart'
    | undefined
}
type CreateOrderUpdateProductTriggerParams = {
  specificTriggerDate?: string | undefined
  triggerEvent?:
    | 'ContractEffective'
    | 'ServiceActivation'
    | 'CustomerAcceptance'
    | 'SpecificDate'
    | undefined
}
type DiscountPricingUpdate = {
  applyDiscountTo?:
    | 'ONETIME'
    | 'RECURRING'
    | 'USAGE'
    | 'ONETIMERECURRING'
    | 'ONETIMEUSAGE'
    | 'RECURRINGUSAGE'
    | 'ONETIMERECURRINGUSAGE'
    | undefined
  discountLevel?: 'rateplan' | 'subscription' | 'account' | undefined
  discountPercentage?: number | undefined
  priceChangeOption?: 'NoChange' | 'UseLatestProductCatalogPricing' | undefined
}
type RecurringFlatFeePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
}
type RecurringPerUnitPricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
  quantity?: number | undefined
}
type RecurringTieredPricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type RecurringVolumePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  quantity?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type UsageFlatFeePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
}
type UsageOveragePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  includedUnits?: number | undefined
  overagePrice?: number | undefined
}
type UsagePerUnitPricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  listPrice?: number | undefined
}
type UsageTieredPricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type UsageTieredWithOveragePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  overagePrice?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type UsageVolumePricingUpdate = {
  priceChangeOption?:
    | 'NoChange'
    | 'SpecificPercentageValue'
    | 'UseLatestProductCatalogPricing'
    | undefined
  priceIncreasePercentage?: number | undefined
  tiers?: ChargeTier[] | undefined
}
type CreateOrderPricingUpdate = {
  chargeModelData?: ChargeModelDataOverride | undefined
  discount?: DiscountPricingUpdate | undefined
  recurringFlatFee?: RecurringFlatFeePricingUpdate | undefined
  recurringPerUnit?: RecurringPerUnitPricingUpdate | undefined
  recurringTiered?: RecurringTieredPricingUpdate | undefined
  recurringVolume?: RecurringVolumePricingUpdate | undefined
  usageFlatFee?: UsageFlatFeePricingUpdate | undefined
  usageOverage?: UsageOveragePricingUpdate | undefined
  usagePerUnit?: UsagePerUnitPricingUpdate | undefined
  usageTiered?: UsageTieredPricingUpdate | undefined
  usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate | undefined
  usageVolume?: UsageVolumePricingUpdate | undefined
}
type CreateOrderChargeUpdate = {
  billing?: BillingUpdate | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  effectiveDate?: CreateOrderUpdateProductTriggerParams | undefined
  pricing?: CreateOrderPricingUpdate | undefined
  uniqueToken?: string | undefined
}
type CreateOrderRatePlanUpdate = {
  chargeUpdates?: CreateOrderChargeUpdate[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  ratePlanId?: string | undefined
  specificUpdateDate?: string | undefined
  uniqueToken?: string | undefined
}
type CreateOrderOrderAction = {
  addProduct?: CreateOrderRatePlanOverride | undefined
  cancelSubscription?: CancelSubscription | undefined
  createSubscription?: CreateOrderCreateSubscription | undefined
  customFields?: OrderActionObjectCustomFields | undefined
  ownerTransfer?: OwnerTransfer | undefined
  removeProduct?: RemoveProduct | undefined
  resume?: CreateOrderResume | undefined
  suspend?: CreateOrderSuspend | undefined
  termsAndConditions?: CreateOrderTermsAndConditions | undefined
  triggerDates?: TriggerDate[] | undefined
  type:
    | 'CreateSubscription'
    | 'TermsAndConditions'
    | 'AddProduct'
    | 'UpdateProduct'
    | 'RemoveProduct'
    | 'RenewSubscription'
    | 'CancelSubscription'
    | 'OwnerTransfer'
    | 'Suspend'
    | 'Resume'
  updateProduct?: CreateOrderRatePlanUpdate | undefined
}
type QuoteObjectFields = {
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
}
type RampChargeRequest = { chargeNumber?: string | undefined; uniqueToken?: string | undefined }
type RampIntervalRequest = {
  description?: string | undefined
  endDate: string
  name?: string | undefined
  startDate: string
}
type RampRequest = {
  charges?: RampChargeRequest[] | undefined
  delete?: boolean | undefined
  description?: string | undefined
  intervals?: RampIntervalRequest[] | undefined
  name?: string | undefined
}
type POSTOrderRequestType = {
  customFields?: OrderObjectCustomFields | undefined
  description?: string | undefined
  existingAccountNumber?: string | undefined
  newAccount?: Account | undefined
  orderDate: string
  orderLineItems?: CreateOrderOrderLineItem[] | undefined
  orderNumber?: string | undefined
  processingOptions?: ProcessingOptions | undefined
  subscriptions: {
    customFields?: SubscriptionObjectCustomFields | undefined
    orderActions?: CreateOrderOrderAction[] | undefined
    quote?: QuoteObjectFields | undefined
    ramp?: RampRequest | undefined
    subscriptionNumber?: string | undefined
  }[]
}
type PreviewContactInfo = {
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
}
type PreviewAccountInfo = {
  billCycleDay: number
  currency: string
  customFields?: AccountObjectCustomFields | undefined
  soldToContact?: PreviewContactInfo | undefined
  taxInfo?: TaxInfo | undefined
}
type PreviewOptions = {
  previewNumberOfPeriods?: number | undefined
  previewThruType?: 'SpecificDate' | 'TermEnd' | 'NumberOfPeriods' | undefined
  previewTypes?:
    | (
        | 'ChargeMetrics'
        | 'BillingDocs'
        | 'OrderDeltaMetrics'
        | 'OrderMetrics'
        | 'RampMetrics'
        | 'RampDeltaMetrics'
      )[]
    | undefined
  specificPreviewThruDate?: string | undefined
}
type PreviewOrderTriggerParams = {
  specificTriggerDate?: string | undefined
  triggerEvent?:
    | 'ContractEffective'
    | 'ServiceActivation'
    | 'CustomerAcceptance'
    | 'SpecificDate'
    | undefined
}
type PreviewOrderChargeOverride = {
  billing?:
    | {
        billCycleDay?: number | undefined
        billCycleType?:
          | 'DefaultFromCustomer'
          | 'SpecificDayofMonth'
          | 'SubscriptionStartDay'
          | 'ChargeTriggerDay'
          | 'SpecificDayofWeek'
          | undefined
        billingPeriod?:
          | 'Month'
          | 'Quarter'
          | 'Semi_Annual'
          | 'Annual'
          | 'Eighteen_Months'
          | 'Two_Years'
          | 'Three_Years'
          | 'Five_Years'
          | 'Specific_Months'
          | 'Subscription_Term'
          | 'Week'
          | 'Specific_Weeks'
          | undefined
        billingPeriodAlignment?:
          | 'AlignToCharge'
          | 'AlignToSubscriptionStart'
          | 'AlignToTermStart'
          | undefined
        billingTiming?: 'IN_ADVANCE' | 'IN_ARREARS' | undefined
        specificBillingPeriod?: number | undefined
        weeklyBillCycleDay?:
          | 'Sunday'
          | 'Monday'
          | 'Tuesday'
          | 'Wednesday'
          | 'Thursday'
          | 'Friday'
          | 'Saturday'
          | undefined
      }
    | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  endDate?: EndConditions | undefined
  pricing?:
    | {
        chargeModelData?: ChargeModelDataOverride | undefined
        discount?: DiscountPricingOverride | undefined
        oneTimeFlatFee?: OneTimeFlatFeePricingOverride | undefined
        oneTimePerUnit?: OneTimePerUnitPricingOverride | undefined
        oneTimeTiered?: OneTimeTieredPricingOverride | undefined
        oneTimeVolume?: OneTimeVolumePricingOverride | undefined
        recurringFlatFee?: RecurringFlatFeePricingOverride | undefined
        recurringPerUnit?: RecurringPerUnitPricingOverride | undefined
        recurringTiered?: RecurringTieredPricingOverride | undefined
        recurringVolume?: RecurringVolumePricingOverride | undefined
        usageFlatFee?: UsageFlatFeePricingOverride | undefined
        usageOverage?: UsageOveragePricingOverride | undefined
        usagePerUnit?: UsagePerUnitPricingOverride | undefined
        usageTiered?: UsageTieredPricingOverride | undefined
        usageTieredWithOverage?: UsageTieredWithOveragePricingOverride | undefined
        usageVolume?: UsageVolumePricingOverride | undefined
      }
    | undefined
  productRatePlanChargeId: string
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'Contract Effective Date'
    | 'Service Activation Date'
    | 'Customer Acceptance Date'
    | undefined
  revenueRecognitionRuleName?: 'Recognize upon invoicing' | 'Recognize daily over time' | undefined
  startDate?: PreviewOrderTriggerParams | undefined
  uniqueToken?: string | undefined
}
type PreviewOrderRatePlanOverride = {
  chargeOverrides?: PreviewOrderChargeOverride[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  productRatePlanId: string
  uniqueToken?: string | undefined
}
type PreviewOrderCreateSubscription = {
  invoiceSeparately?: boolean | undefined
  newSubscriptionOwnerAccount?:
    | {
        accountNumber?: string | undefined
        additionalEmailAddresses?: string | undefined
        allowInvoiceEdit?: boolean | undefined
        autoPay?: boolean | undefined
        batch?: string | undefined
        billCycleDay: number
        billToContact: BillToContactPostOrder
        communicationProfileId?: string | undefined
        creditCard?: CreditCard | undefined
        creditMemoTemplateId?: string | undefined
        crmId?: string | undefined
        currency: string
        customFields?: AccountObjectCustomFields | undefined
        customerServiceRepName?: string | undefined
        debitMemoTemplateId?: string | undefined
        hpmCreditCardPaymentMethodId?: string | undefined
        invoiceDeliveryPrefsEmail?: boolean | undefined
        invoiceDeliveryPrefsPrint?: boolean | undefined
        invoiceTemplateId?: string | undefined
        name: string
        notes?: string | undefined
        parentId?: string | undefined
        paymentGateway?: string | undefined
        paymentMethod?: PaymentMethod | undefined
        paymentTerm?: string | undefined
        purchaseOrderNumber?: string | undefined
        salesRep?: string | undefined
        soldToContact?: SoldToContactPostOrder | undefined
        taxInfo?: TaxInfo | undefined
      }
    | undefined
  notes?: string | undefined
  subscribeToRatePlans?: PreviewOrderRatePlanOverride[] | undefined
  subscriptionNumber?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  terms?:
    | {
        autoRenew?: boolean | undefined
        initialTerm: {
          period?: number | undefined
          periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
          startDate?: string | undefined
          termType: 'TERMED' | 'EVERGREEN'
        }
        renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
        renewalTerms?: RenewalTerm[] | undefined
      }
    | undefined
}
type PreviewOrderPricingUpdate = {
  chargeModelData?: ChargeModelDataOverride | undefined
  discount?: DiscountPricingUpdate | undefined
  recurringFlatFee?: RecurringFlatFeePricingUpdate | undefined
  recurringPerUnit?: RecurringPerUnitPricingUpdate | undefined
  recurringTiered?: RecurringTieredPricingUpdate | undefined
  recurringVolume?: RecurringVolumePricingUpdate | undefined
  usageFlatFee?: UsageFlatFeePricingUpdate | undefined
  usageOverage?: UsageOveragePricingUpdate | undefined
  usagePerUnit?: UsagePerUnitPricingUpdate | undefined
  usageTiered?: UsageTieredPricingUpdate | undefined
  usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate | undefined
  usageVolume?: UsageVolumePricingUpdate | undefined
}
type PreviewOrderChargeUpdate = {
  billing?: BillingUpdate | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  effectiveDate?: PreviewOrderTriggerParams | undefined
  pricing?: PreviewOrderPricingUpdate | undefined
  uniqueToken?: string | undefined
}
type PreviewOrderRatePlanUpdate = {
  chargeUpdates?: PreviewOrderChargeUpdate[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  ratePlanId?: string | undefined
  specificUpdateDate?: string | undefined
  uniqueToken?: string | undefined
}
type PreviewOrderOrderAction = {
  addProduct?: PreviewOrderRatePlanOverride | undefined
  cancelSubscription?: CancelSubscription | undefined
  createSubscription?: PreviewOrderCreateSubscription | undefined
  customFields?: OrderActionObjectCustomFields | undefined
  ownerTransfer?: OwnerTransfer | undefined
  removeProduct?: RemoveProduct | undefined
  resume?: CreateOrderResume | undefined
  suspend?: CreateOrderSuspend | undefined
  termsAndConditions?: CreateOrderTermsAndConditions | undefined
  triggerDates?: TriggerDate[] | undefined
  type:
    | 'CreateSubscription'
    | 'TermsAndConditions'
    | 'AddProduct'
    | 'UpdateProduct'
    | 'RemoveProduct'
    | 'RenewSubscription'
    | 'CancelSubscription'
    | 'OwnerTransfer'
    | 'Suspend'
    | 'Resume'
  updateProduct?: PreviewOrderRatePlanUpdate | undefined
}
type POSTOrderPreviewRequestType = {
  customFields?: OrderObjectCustomFields | undefined
  description?: string | undefined
  existingAccountNumber?: string | undefined
  orderDate: string
  orderLineItems?: CreateOrderOrderLineItem[] | undefined
  orderNumber?: string | undefined
  previewAccountInfo?: PreviewAccountInfo | undefined
  previewOptions: PreviewOptions
  subscriptions: {
    customFields?: SubscriptionObjectCustomFields | undefined
    orderActions?: PreviewOrderOrderAction[] | undefined
    quote?: QuoteObjectFields | undefined
    ramp?: RampRequest | undefined
    subscriptionNumber?: string | undefined
  }[]
}
type POSTAttachmentResponseType = {
  fileId?: string | undefined
  id?: string | undefined
  success?: boolean | undefined
}
type GETAttachmentResponseType = {
  createdBy?: string | undefined
  createdOn?: string | undefined
  description?: string | undefined
  fileContentType?: string | undefined
  fileId?: string | undefined
  fileName?: string | undefined
  id?: string | undefined
  success?: boolean | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type PUTAttachmentType = { description?: string | undefined; fileName?: string | undefined }
type GETAttachmentResponseWithoutSuccessType = {
  createdBy?: string | undefined
  createdOn?: string | undefined
  description?: string | undefined
  fileContentType?: string | undefined
  fileId?: string | undefined
  fileName?: string | undefined
  id?: string | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type GETAttachmentsResponseType = {
  attachments?: GETAttachmentResponseWithoutSuccessType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type POSTEmailBillingDocfromBillRunType = { resend?: boolean | undefined }
type GETBillingDocumentsResponseType = {
  accountId?: string | undefined
  amount?: number | undefined
  balance?: number | undefined
  documentDate?: string | undefined
  documentNumber?: string | undefined
  documentType?: 'Invoice' | 'CreditMemo' | 'DebitMemo' | undefined
  id?: string | undefined
  status?: 'Draft' | 'Posted' | 'Canceled' | 'Error' | undefined
}
type BillingDocumentQueryResponseElementType = {
  documents?: GETBillingDocumentsResponseType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type PostBillingPreviewRunParam = {
  assumeRenewal?: string | undefined
  batch?: string | undefined
  chargeTypeToExclude?: string | undefined
  includingEvergreenSubscription?: boolean | undefined
  targetDate: string
}
type GetBillingPreviewRunResponse = {
  assumeRenewal?: string | undefined
  batch?: string | undefined
  chargeTypeToExclude?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  endDate?: string | undefined
  errorMessage?: string | undefined
  includingEvergreenSubscription?: boolean | undefined
  resultFileUrl?: string | undefined
  runNumber?: string | undefined
  startDate?: string | undefined
  status?: string | undefined
  succeededAccounts?: number | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  totalAccounts?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type POSTMassUpdateResponseType = { bulkKey?: string | undefined; success?: boolean | undefined }
type GETMassUpdateType = {
  actionType?: string | undefined
  endedOn?: string | undefined
  errorCount?: string | undefined
  inputSize?: bigint | undefined
  outputSize?: bigint | undefined
  outputType?: string | undefined
  outputURL?: string | undefined
  processedCount?: string | undefined
  startedOn?: string | undefined
  status?: string | undefined
  success?: boolean | undefined
  successCount?: string | undefined
  totalCount?: string | undefined
  uploadedBy?: string | undefined
  uploadedOn?: string | undefined
}
type GetProductFeatureType = {
  code?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  status?: string | undefined
}
type GETProductType = {
  category?: string | undefined
  description?: string | undefined
  effectiveEndDate?: string | undefined
  effectiveStartDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  productFeatures?: GetProductFeatureType[] | undefined
  productRatePlans?: string | undefined
  sku?: string | undefined
  tags?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  SyncDate__NS?: string | undefined
}
type GETCatalogType = {
  nextPage?: string | undefined
  products?: GETProductType[] | undefined
  success?: boolean | undefined
}
type POSTCatalogType = { toEntityIds: string[] }
type GETRevenueItemTypeResponse = {
  accountingPeriodEndDate?: string | undefined
  accountingPeriodName?: string | undefined
  accountingPeriodStartDate?: string | undefined
  amount?: string | undefined
  currency?: string | undefined
  isAccountingPeriodClosed?: boolean | undefined
}
type GETChargeRSDetailType = {
  accountId?: string | undefined
  amount?: string | undefined
  currency?: string | undefined
  notes?: string | undefined
  number?: string | undefined
  recognitionRuleName?: string | undefined
  recognizedRevenue?: string | undefined
  revenueItems?: GETRevenueItemTypeResponse[] | undefined
  subscriptionChargeId?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  undistributedUnrecognizedRevenue?: string | undefined
  unrecognizedRevenue?: string | undefined
}
type GETCreditMemoTypewithSuccess = {
  accountId?: string | undefined
  amount?: number | undefined
  appliedAmount?: number | undefined
  autoApplyUponPosting?: boolean | undefined
  cancelledById?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoDate?: string | undefined
  currency?: string | undefined
  excludeFromAutoApplyRules?: boolean | undefined
  id?: string | undefined
  latestPDFFileId?: string | undefined
  number?: string | undefined
  postedById?: string | undefined
  postedOn?: string | undefined
  reasonCode?: string | undefined
  referredInvoiceId?: string | undefined
  refundAmount?: number | undefined
  source?: string | undefined
  sourceId?: string | undefined
  status?:
    | 'Draft'
    | 'Posted'
    | 'Canceled'
    | 'Error'
    | 'PendingForTax'
    | 'Generating'
    | 'CancelInProgress'
    | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  taxMessage?: string | undefined
  taxStatus?: 'Complete' | 'Error' | undefined
  totalTaxExemptAmount?: number | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  unappliedAmount?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type GETCreditMemoCollectionType = {
  creditmemos?: GETCreditMemoTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type CreditMemoFromChargeDetailType = {
  amount?: number | undefined
  chargeId: string
  comment?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        onAccountAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  memoItemAmount?: number | undefined
  productRatePlanChargeId: string
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
}
type CreditMemoFromChargeType = {
  accountId: string
  autoPost?: boolean | undefined
  charges?: CreditMemoFromChargeDetailType[] | undefined
  comment?: string | undefined
  effectiveDate?: string | undefined
  reasonCode?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type GETCreditMemoType = {
  accountId?: string | undefined
  amount?: number | undefined
  appliedAmount?: number | undefined
  autoApplyUponPosting?: boolean | undefined
  cancelledById?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoDate?: string | undefined
  currency?: string | undefined
  excludeFromAutoApplyRules?: boolean | undefined
  id?: string | undefined
  latestPDFFileId?: string | undefined
  number?: string | undefined
  postedById?: string | undefined
  postedOn?: string | undefined
  reasonCode?: string | undefined
  referredInvoiceId?: string | undefined
  refundAmount?: number | undefined
  source?: string | undefined
  sourceId?: string | undefined
  status?:
    | 'Draft'
    | 'Posted'
    | 'Canceled'
    | 'Error'
    | 'PendingForTax'
    | 'Generating'
    | 'CancelInProgress'
    | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  taxMessage?: string | undefined
  taxStatus?: 'Complete' | 'Error' | undefined
  totalTaxExemptAmount?: number | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  unappliedAmount?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type PutCreditMemoTaxItemType = {
  amount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
      }
    | undefined
  id: string
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxExemptAmount?: number | undefined
  taxName?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type PUTCreditMemoItemType = {
  amount?: number | undefined
  comment?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        onAccountAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  id: string
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  skuName?: string | undefined
  taxItems?: PutCreditMemoTaxItemType[] | undefined
  unitOfMeasure?: string | undefined
}
type PUTCreditMemoType = {
  autoApplyUponPosting?: boolean | undefined
  comment?: string | undefined
  effectiveDate?: string | undefined
  excludeFromAutoApplyRules?: boolean | undefined
  items?: PUTCreditMemoItemType[] | undefined
  reasonCode?: string | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type CreditMemoApplyDebitMemoItemRequestType = {
  amount: number
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  debitMemoItemId?: string | undefined
  taxItemId?: string | undefined
}
type CreditMemoApplyDebitMemoRequestType = {
  amount: number
  debitMemoId: string
  items?: CreditMemoApplyDebitMemoItemRequestType[] | undefined
}
type CreditMemoApplyInvoiceItemRequestType = {
  amount: number
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
}
type CreditMemoApplyInvoiceRequestType = {
  amount: number
  invoiceId: string
  items?: CreditMemoApplyInvoiceItemRequestType[] | undefined
}
type ApplyCreditMemoType = {
  debitMemos?: CreditMemoApplyDebitMemoRequestType[] | undefined
  effectiveDate?: string | undefined
  invoices?: CreditMemoApplyInvoiceRequestType[] | undefined
}
type PostCreditMemoEmailRequestType = {
  emailAddresses?: string | undefined
  includeAdditionalEmailAddresses?: true | false | undefined
  useEmailTemplateSetting?: true | false | undefined
}
type POSTUploadFileResponse = { fileId?: string | undefined; success?: boolean | undefined }
type GETCMTaxItemType = {
  appliedAmount?: number | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  refundAmount?: number | undefined
  sourceTaxItemId?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
  unappliedAmount?: number | undefined
}
type GETCMTaxItemTypeNew = {
  appliedAmount?: number | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  refundAmount?: number | undefined
  sourceTaxItemId?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
  unappliedAmount?: number | undefined
}
type GETCreditMemoItemTypewithSuccess = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  appliedAmount?: number | undefined
  appliedToItemId?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditFromItemId?: string | undefined
  creditFromItemSource?: 'InvoiceItem' | 'CreditMemoItem' | undefined
  creditTaxItems?: GETCMTaxItemType[] | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        deferredRevenueAccountingCodeType?: string | undefined
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCodeType?: string | undefined
        revenueRecognitionRuleName?: string | undefined
        revenueScheduleNumber?: string | undefined
      }
    | undefined
  id?: string | undefined
  processingType?: string | undefined
  quantity?: number | undefined
  refundAmount?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  skuName?: string | undefined
  sourceItemId?: string | undefined
  sourceItemType?: 'SubscriptionComponent' | 'InvoiceDetail' | 'ProductRatePlanCharge' | undefined
  subscriptionId?: string | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  taxationItems?:
    | { data?: GETCMTaxItemTypeNew[] | undefined; nextPage?: string | undefined }
    | undefined
  unappliedAmount?: number | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETCreditMemoItemsListType = {
  items?: GETCreditMemoItemTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETCreditMemoItemType = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  appliedAmount?: number | undefined
  appliedToItemId?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditFromItemId?: string | undefined
  creditFromItemSource?: 'InvoiceItem' | 'CreditMemoItem' | undefined
  creditTaxItems?: GETCMTaxItemType[] | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        deferredRevenueAccountingCodeType?: string | undefined
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCodeType?: string | undefined
        revenueRecognitionRuleName?: string | undefined
        revenueScheduleNumber?: string | undefined
      }
    | undefined
  id?: string | undefined
  processingType?: string | undefined
  quantity?: number | undefined
  refundAmount?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  skuName?: string | undefined
  sourceItemId?: string | undefined
  sourceItemType?: 'SubscriptionComponent' | 'InvoiceDetail' | 'ProductRatePlanCharge' | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  taxationItems?:
    | { data?: GETCMTaxItemTypeNew[] | undefined; nextPage?: string | undefined }
    | undefined
  unappliedAmount?: number | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETTaxationItemsOfCreditMemoItemType = {
  data?: GETCMTaxItemTypeNew[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETCreditMemoPartTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoId?: string | undefined
  id?: string | undefined
  invoiceId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETCreditMemoPartsCollectionType = {
  nextPage?: string | undefined
  parts?: GETCreditMemoPartTypewithSuccess[] | undefined
  success?: boolean | undefined
}
type GETCreditMemoPartType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoId?: string | undefined
  id?: string | undefined
  invoiceId?: string | undefined
  success?: boolean | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETCreditMemoItemPartTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  debitMemoItemId?: string | undefined
  id?: string | undefined
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETCreditMemoItemPartsCollectionType = {
  itemParts?: GETCreditMemoItemPartTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETCreditMemoItemPartType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  debitMemoItemId?: string | undefined
  id?: string | undefined
  invoiceItemId?: string | undefined
  success?: boolean | undefined
  taxItemId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type POSTMemoPdfResponse = { success?: boolean | undefined }
type POSTTaxationItemForCMType = {
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
      }
    | undefined
  jurisdiction: string
  locationCode?: string | undefined
  memoItemId?: string | undefined
  name: string
  sourceTaxItemId?: string | undefined
  taxAmount: number
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate: number
  taxRateDescription?: string | undefined
  taxRateType: 'Percentage' | 'FlatFee'
}
type POSTTaxationItemListForCMType = { taxationItems?: POSTTaxationItemForCMType[] | undefined }
type GETTaxationItemTypewithSuccess = {
  createdById?: string | undefined
  createdDate?: string | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  memoItemId?: string | undefined
  name?: string | undefined
  sourceTaxItemId?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETTaxationItemListType = {
  success?: boolean | undefined
  taxationItems?: GETTaxationItemTypewithSuccess[] | undefined
}
type CreditMemoUnapplyDebitMemoItemRequestType = {
  amount: number
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  debitMemoItemId?: string | undefined
  taxItemId?: string | undefined
}
type CreditMemoUnapplyDebitMemoRequestType = {
  amount: number
  debitMemoId: string
  items?: CreditMemoUnapplyDebitMemoItemRequestType[] | undefined
}
type CreditMemoUnapplyInvoiceItemRequestType = {
  amount: number
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
}
type CreditMemoUnapplyInvoiceRequestType = {
  amount: number
  invoiceId: string
  items?: CreditMemoUnapplyInvoiceItemRequestType[] | undefined
}
type UnapplyCreditMemoType = {
  debitMemos?: CreditMemoUnapplyDebitMemoRequestType[] | undefined
  effectiveDate?: string | undefined
  invoices?: CreditMemoUnapplyInvoiceRequestType[] | undefined
}
type RefundCreditMemoItemType = {
  amount: number
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
}
type PostNonRefRefundType = {
  comment?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        onAccountAccountingCode?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  items?: RefundCreditMemoItemType[] | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  paymentMethodId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  secondRefundReferenceId?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  totalAmount: number
  type: 'External' | 'Electronic'
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type GETRefundCreditMemoType = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: 'Processed' | 'Canceled' | 'Error' | 'Processing' | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type GETCustomExchangeRatesDataType = {
  DATE?:
    | { CURRENCY?: string | undefined; providerExchangeRateDate?: string | undefined }
    | undefined
}
type GETCustomExchangeRatesType = {
  inverse?: boolean | undefined
  rates?: GETCustomExchangeRatesDataType[] | undefined
  success?: boolean | undefined
}
type GETDebitMemoTypewithSuccess = {
  accountId?: string | undefined
  amount?: number | undefined
  autoPay?: boolean | undefined
  balance?: number | undefined
  beAppliedAmount?: number | undefined
  cancelledById?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoDate?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  latestPDFFileId?: string | undefined
  number?: string | undefined
  postedById?: string | undefined
  postedOn?: string | undefined
  reasonCode?: string | undefined
  referredInvoiceId?: string | undefined
  status?:
    | 'Draft'
    | 'Posted'
    | 'Canceled'
    | 'Error'
    | 'PendingForTax'
    | 'Generating'
    | 'CancelInProgress'
    | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  taxMessage?: string | undefined
  taxStatus?: 'Complete' | 'Error' | undefined
  totalTaxExemptAmount?: number | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETDebitMemoCollectionType = {
  debitmemos?: GETDebitMemoTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type DebitMemoFromChargeDetailType = {
  amount?: number | undefined
  chargeId: string
  comment?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  memoItemAmount?: number | undefined
  productRatePlanChargeId: string
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
}
type DebitMemoFromChargeType = {
  accountId?: string | undefined
  accountNumber?: string | undefined
  autoPay?: boolean | undefined
  autoPost?: boolean | undefined
  charges?: DebitMemoFromChargeDetailType[] | undefined
  comment?: string | undefined
  dueDate?: string | undefined
  effectiveDate?: string | undefined
  reasonCode?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETDebitMemoType = {
  accountId?: string | undefined
  amount?: number | undefined
  autoPay?: boolean | undefined
  balance?: number | undefined
  beAppliedAmount?: number | undefined
  cancelledById?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoDate?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  latestPDFFileId?: string | undefined
  number?: string | undefined
  postedById?: string | undefined
  postedOn?: string | undefined
  reasonCode?: string | undefined
  referredInvoiceId?: string | undefined
  status?:
    | 'Draft'
    | 'Posted'
    | 'Canceled'
    | 'Error'
    | 'PendingForTax'
    | 'Generating'
    | 'CancelInProgress'
    | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  taxMessage?: string | undefined
  taxStatus?: 'Complete' | 'Error' | undefined
  totalTaxExemptAmount?: number | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type BatchDebitMemoType = { dueDate?: string | undefined; id?: string | undefined }
type PUTBatchDebitMemosRequest = { debitMemos?: BatchDebitMemoType[] | undefined }
type PutDebitMemoTaxItemType = {
  amount?: number | undefined
  financeInformation?: { salesTaxPayableAccountingCode?: string | undefined } | undefined
  id: string
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxExemptAmount?: number | undefined
  taxName?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type PUTDebitMemoItemType = {
  amount?: number | undefined
  comment?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  id: string
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  skuName?: string | undefined
  taxItems?: PutDebitMemoTaxItemType[] | undefined
  unitOfMeasure?: string | undefined
}
type PUTDebitMemoType = {
  autoPay?: boolean | undefined
  comment?: string | undefined
  dueDate?: string | undefined
  effectiveDate?: string | undefined
  items?: PUTDebitMemoItemType[] | undefined
  reasonCode?: string | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GetDebitMemoApplicationPartType = {
  appliedAmount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  paymentId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GetDebitMemoApplicationPartCollectionType = {
  applicationParts?: GetDebitMemoApplicationPartType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type DebitMemoCollectRequest = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  collect?: boolean | undefined
  payment?: { gatewayId?: string | undefined; paymentMethodId?: string | undefined } | undefined
}
type DebitMemoCollectResponseAppliedCreditMemos = {
  appliedAmount?: number | undefined
  id?: string | undefined
  number?: string | undefined
  unappliedAmount?: number | undefined
}
type DebitMemoCollectResponseAppliedPayments = {
  appliedAmount?: number | undefined
  id?: string | undefined
  number?: string | undefined
  unappliedAmount?: number | undefined
}
type DebitMemoCollectResponse = {
  appliedCreditMemos?: DebitMemoCollectResponseAppliedCreditMemos[] | undefined
  appliedPayments?: DebitMemoCollectResponseAppliedPayments[] | undefined
  debitMemo?: { id?: string | undefined; number?: string | undefined } | undefined
  processedPayment?:
    | {
        amount?: number | undefined
        gatewayId?: string | undefined
        gatewayResponse?: string | undefined
        gatewayResponseCode?: string | undefined
        id?: string | undefined
        number?: string | undefined
        paymentMethodId?: string | undefined
        status?: 'Processing' | 'Processed' | 'Error' | 'Canceled' | undefined
      }
    | undefined
  success?: boolean | undefined
}
type PostDebitMemoEmailType = {
  emailAddresses?: string | undefined
  includeAdditionalEmailAddresses?: true | false | undefined
  useEmailTemplateSetting?: true | false | undefined
}
type GETDMTaxItemType = {
  appliedAmount?: number | undefined
  creditAmount?: number | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  paymentAmount?: number | undefined
  refundAmount?: number | undefined
  sourceTaxItemId?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
  unappliedAmount?: number | undefined
}
type GETDMTaxItemTypeNew = {
  balance?: number | undefined
  creditAmount?: number | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  paymentAmount?: number | undefined
  sourceTaxItemId?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type GETDebitMemoItemTypewithSuccess = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  balance?: number | undefined
  beAppliedAmount?: number | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        deferredRevenueAccountingCodeType?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCodeType?: string | undefined
        revenueRecognitionRuleName?: string | undefined
        revenueScheduleNumber?: string | undefined
      }
    | undefined
  id?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  skuName?: string | undefined
  sourceItemId?: string | undefined
  sourceItemType?: 'SubscriptionComponent' | 'InvoiceDetail' | 'ProductRatePlanCharge' | undefined
  subscriptionId?: string | undefined
  taxItems?: GETDMTaxItemType[] | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  taxationItems?:
    | { data?: GETDMTaxItemTypeNew[] | undefined; nextPage?: string | undefined }
    | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETDebitMemoItemCollectionType = {
  items?: GETDebitMemoItemTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETDebitMemoItemType = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  balance?: number | undefined
  beAppliedAmount?: number | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        deferredRevenueAccountingCodeType?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCodeType?: string | undefined
        revenueRecognitionRuleName?: string | undefined
        revenueScheduleNumber?: string | undefined
      }
    | undefined
  id?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  skuName?: string | undefined
  sourceItemId?: string | undefined
  sourceItemType?: 'SubscriptionComponent' | 'InvoiceDetail' | 'ProductRatePlanCharge' | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  taxItems?: GETDMTaxItemType[] | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  taxationItems?:
    | { data?: GETDMTaxItemTypeNew[] | undefined; nextPage?: string | undefined }
    | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETTaxationItemsOfDebitMemoItemType = {
  data?: GETDMTaxItemTypeNew[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type POSTTaxationItemForDMType = {
  exemptAmount?: number | undefined
  financeInformation?: { salesTaxPayableAccountingCode?: string | undefined } | undefined
  jurisdiction: string
  locationCode?: string | undefined
  memoItemId?: string | undefined
  name: string
  sourceTaxItemId?: string | undefined
  taxAmount: number
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate: number
  taxRateDescription?: string | undefined
  taxRateType: 'Percentage' | 'FlatFee'
}
type POSTTaxationItemListForDMType = { taxationItems?: POSTTaxationItemForDMType[] | undefined }
type POSTDocumentPropertiesType = {
  customFileName?: string | undefined
  documentId?: string | undefined
  documentType?: 'Invoice' | 'CreditMemo' | 'DebitMemo' | undefined
}
type GETDocumentPropertiesResponseType = {
  customFileName?: string | undefined
  documentId?: string | undefined
  documentType?: 'Invoice' | 'CreditMemo' | 'DebitMemo' | undefined
  id?: string | undefined
  success?: boolean | undefined
}
type PUTDocumentPropertiesType = { customFileName?: string | undefined }
type GETEntitiesType = {
  displayName?: string | undefined
  id?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  parentId?: string | undefined
  status?: 'Provisioned' | 'Unprovisioned' | undefined
  tenantId?: string | undefined
  timezone?: string | undefined
}
type GETEntitiesResponseType = {
  entities?: GETEntitiesType[] | undefined
  success?: boolean | undefined
}
type CreateEntityType = {
  displayName?: string | undefined
  locale: string
  name: string
  parentId: string
  timezone: string
}
type CreateEntityResponseType = {
  displayName?: string | undefined
  id?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  parentId?: string | undefined
  status?: 'Provisioned' | 'Unprovisioned' | undefined
  success?: boolean | undefined
  tenantId?: string | undefined
  timezone?: string | undefined
}
type DELETEntityResponseType = { success?: boolean | undefined }
type GETEntitiesResponseTypeWithId = {
  displayName?: string | undefined
  id?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  parentId?: string | undefined
  status?: 'Provisioned' | 'Unprovisioned' | undefined
  success?: boolean | undefined
  tenantId?: string | undefined
  timezone?: string | undefined
}
type UpdateEntityType = {
  displayName?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  timezone?: string | undefined
}
type UpdateEntityResponseType = { success?: boolean | undefined }
type ProvisionEntityResponseType = { success?: boolean | undefined }
type GETEntityConnectionsArrayItemsType = {
  id?: string | undefined
  sourceEntityId?: string | undefined
  status?: string | undefined
  targetEntityId?: string | undefined
}
type GETEntityConnectionsResponseType = {
  entityConnections?: GETEntityConnectionsArrayItemsType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type POSTEntityConnectionsType = { targetEntityId: string }
type POSTEntityConnectionsResponseType = { id?: string | undefined; success?: boolean | undefined }
type PUTEntityConnectionsAcceptResponseType = { success?: boolean | undefined }
type PUTEntityConnectionsDenyResponseType = { success?: boolean | undefined }
type PUTEntityConnectionsDisconnectResponseType = { success?: boolean | undefined }
type POSTReversePaymentRequest = {
  amount: number
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  referenceId?: string | undefined
  secondReferenceId?: string | undefined
  settledOn?: string | undefined
}
type POSTReversePaymentResponse = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: string | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type POSTRejectPaymentRequest = {
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  referenceId?: string | undefined
  secondReferenceId?: string | undefined
  settledOn?: string | undefined
}
type POSTRejectPaymentResponse = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: string | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type POSTSettlePaymentRequest = { settledOn?: string | undefined }
type POSTSettlePaymentResponse = {
  accountId?: string | undefined
  amount?: number | undefined
  appliedAmount?: number | undefined
  authTransactionId?: string | undefined
  bankIdentificationNumber?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditBalanceAmount?: number | undefined
  currency?: string | undefined
  effectiveDate?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayOrderId?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  number?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  referenceId?: string | undefined
  refundAmount?: number | undefined
  secondPaymentReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: string | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  unappliedAmount?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type POSTHMACSignatureType = {
  accountKey?: string | undefined
  method: string
  name?: string | undefined
  pageId?: string | undefined
  uri: string
}
type POSTHMACSignatureResponseType = {
  signature?: string | undefined
  success?: boolean | undefined
  token?: string | undefined
}
type GetHostedPageType = {
  pageId?: string | undefined
  pageName?: string | undefined
  pageType?: string | undefined
  pageVersion?: string | undefined
}
type GetHostedPagesType = {
  hostedpages?: GetHostedPageType[] | undefined
  success?: boolean | undefined
}
type PostTaxationItemType = {
  exemptAmount?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name: string
  taxAmount: string
  taxCode: string
  taxCodeDescription?: string | undefined
  taxDate: string
  taxMode: 'TaxInclusive' | 'TaxExclusive'
  taxRate: string
  taxRateDescription?: string | undefined
  taxRateType: 'Percentage' | 'FlatFee'
}
type PostInvoiceItemType = {
  accountingCode?: string | undefined
  amount: string
  bookingReference?: string | undefined
  chargeDate?: string | undefined
  chargeName?: string | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemType?: string | undefined
  productRatePlanChargeId?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: string | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'ContractEffectiveDate'
    | 'ServiceActivationDate'
    | 'CustomerAcceptanceDate'
    | undefined
  revenueRecognitionRuleName?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate: string
  sku?: string | undefined
  taxCode?: string | undefined
  taxItems?: PostTaxationItemType[] | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  unitPrice?: string | undefined
  uom?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PostInvoiceType = {
  accountId: string
  autoPay?: boolean | undefined
  comments?: string | undefined
  dueDate?: string | undefined
  invoiceDate: string
  invoiceItems?: PostInvoiceItemType[] | undefined
  status?: 'Draft' | 'Posted' | undefined
  transferredToAccounting?: 'Processing' | 'Error' | 'Ignore' | true | false | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PostInvoiceResponse = {
  accountId?: string | undefined
  amount?: string | undefined
  amountWithoutTax?: string | undefined
  autoPay?: boolean | undefined
  comments?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  invoiceDate?: string | undefined
  invoiceNumber?: string | undefined
  status?: 'Draft' | 'Posted' | undefined
  taxAmount?: string | undefined
  taxExemptAmount?: string | undefined
  transferredToAccounting?: 'Processing' | 'Error' | 'Ignore' | true | false | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PutInvoiceItemType = {
  accountingCode?: string | undefined
  amount?: string | undefined
  chargeDate?: string | undefined
  chargeName?: string | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  id?: string | undefined
  itemType?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: string | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'ContractEffectiveDate'
    | 'ServiceActivationDate'
    | 'CustomerAcceptanceDate'
    | undefined
  revenueRecognitionRuleName?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  unitPrice?: string | undefined
  uom?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type BatchInvoiceType = {
  autoPay?: boolean | undefined
  comments?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  invoiceDate?: string | undefined
  invoiceItems?: PutInvoiceItemType[] | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PutBatchInvoiceType = { invoices?: BatchInvoiceType[] | undefined }
type PutInvoiceType = {
  autoPay?: boolean | undefined
  comments?: string | undefined
  dueDate?: string | undefined
  invoiceDate?: string | undefined
  invoiceItems?: PutInvoiceItemType[] | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PutInvoiceResponseType = {
  accountId?: string | undefined
  amount?: number | undefined
  autoPay?: boolean | undefined
  balance?: number | undefined
  cancelledById?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditBalanceAdjustmentAmount?: number | undefined
  currency?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  invoiceDate?: string | undefined
  number?: string | undefined
  postedById?: string | undefined
  postedOn?: string | undefined
  status?: 'Draft' | 'Posted' | 'Canceled' | 'Error' | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  totalTaxExemptAmount?: number | undefined
  transferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GetInvoiceApplicationPartType = {
  appliedAmount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  paymentId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GetInvoiceApplicationPartCollectionType = {
  applicationParts?: GetInvoiceApplicationPartType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type CreditMemoTaxItemFromInvoiceTaxItemType = {
  amount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
      }
    | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  sourceTaxItemId?: string | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxExemptAmount?: number | undefined
  taxName?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type CreditMemoItemFromInvoiceItemType = {
  amount: number
  comment?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        onAccountAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  invoiceItemId?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  skuName: string
  taxItems?: CreditMemoTaxItemFromInvoiceTaxItemType[] | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  unitOfMeasure?: string | undefined
}
type CreditMemoFromInvoiceType = {
  autoApplyToInvoiceUponPosting?: boolean | undefined
  autoPost?: boolean | undefined
  comment?: string | undefined
  effectiveDate?: string | undefined
  excludeFromAutoApplyRules?: boolean | undefined
  invoiceId?: string | undefined
  items?: CreditMemoItemFromInvoiceItemType[] | undefined
  reasonCode?: string | undefined
  taxAutoCalculation?: boolean | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type DebitMemoTaxItemFromInvoiceTaxItemType = {
  amount?: number | undefined
  financeInformation?: { salesTaxPayableAccountingCode?: string | undefined } | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  sourceTaxItemId?: string | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxExemptAmount?: number | undefined
  taxName?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type DebitMemoItemFromInvoiceItemType = {
  amount: number
  comment?: string | undefined
  description?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  invoiceItemId?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  skuName: string
  taxItems?: DebitMemoTaxItemFromInvoiceTaxItemType[] | undefined
  taxMode?: 'TaxExclusive' | 'TaxInclusive' | undefined
  unitOfMeasure?: string | undefined
}
type DebitMemoFromInvoiceType = {
  autoPay?: boolean | undefined
  autoPost?: boolean | undefined
  comment?: string | undefined
  effectiveDate?: string | undefined
  invoiceId?: string | undefined
  items?: DebitMemoItemFromInvoiceItemType[] | undefined
  reasonCode?: string | undefined
  taxAutoCalculation?: boolean | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PostInvoiceEmailRequestType = {
  emailAddresses?: string | undefined
  includeAdditionalEmailAddresses?: true | false | undefined
  useEmailTemplateSetting?: true | false | undefined
}
type InvoiceFile = {
  id?: string | undefined
  pdfFileUrl?: string | undefined
  versionNumber?: bigint | undefined
}
type GETInvoiceFilesResponse = {
  invoiceFiles?: InvoiceFile[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETInvoiceTaxItemType = {
  availableToCreditAmount?: number | undefined
  balance?: number | undefined
  creditAmount?: number | undefined
  exemptAmount?: number | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  paymentAmount?: number | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type InvoiceItem = {
  accountingCode?: string | undefined
  appliedToItemId?: string | undefined
  availableToCreditAmount?: number | undefined
  balance?: string | undefined
  bookingReference?: string | undefined
  chargeAmount?: string | undefined
  chargeDescription?: string | undefined
  chargeId?: string | undefined
  chargeName?: string | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  id?: string | undefined
  itemType?: string | undefined
  productName?: string | undefined
  productRatePlanChargeId?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: string | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'ContractEffectiveDate'
    | 'ServiceActivationDate'
    | 'CustomerAcceptanceDate'
    | undefined
  revenueRecognitionRuleName?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  subscriptionId?: string | undefined
  subscriptionName?: string | undefined
  success?: boolean | undefined
  taxAmount?: string | undefined
  taxCode?: string | undefined
  taxMode?: string | undefined
  taxationItems?:
    | { data?: GETInvoiceTaxItemType[] | undefined; nextPage?: string | undefined }
    | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: number | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETInvoiceItemsResponse = {
  invoiceItems?: InvoiceItem[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETInvoiceTaxationItemsResponse = {
  data?: GETInvoiceTaxItemType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type PutReverseInvoiceType = {
  applyEffectiveDate?: string | undefined
  memoDate?: string | undefined
}
type PutReverseInvoiceResponseType = {
  creditMemo?: { id?: string | undefined } | undefined
  success?: boolean | undefined
}
type CreditMemoItemFromWriteOffInvoice = {
  comment?: string | undefined
  financeInformation?:
    | {
        deferredRevenueAccountingCode?: string | undefined
        onAccountAccountingCode?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        revenueRecognitionRuleName?: string | undefined
      }
    | undefined
  invoiceItemId?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  skuName?: string | undefined
  unitOfMeasure?: string | undefined
}
type PUTWriteOffInvoiceRequest = {
  comment?: string | undefined
  items?: CreditMemoItemFromWriteOffInvoice[] | undefined
  memoDate?: string | undefined
  reasonCode?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type PUTWriteOffInvoiceResponse = {
  creditMemo?: { id?: string | undefined } | undefined
  success?: boolean | undefined
}
type POSTJournalEntryItemType = {
  accountingCodeName: string
  accountingCodeType?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
  amount: string
  homeCurrencyAmount?: string | undefined
  type: 'Credit' | 'Debit'
}
type POSTJournalEntrySegmentType = { segmentName: string; segmentValue: string }
type POSTJournalEntryType = {
  accountingPeriodName: string
  currency: string
  journalEntryDate: string
  journalEntryItems: POSTJournalEntryItemType[]
  notes?: string | undefined
  segments?: POSTJournalEntrySegmentType[] | undefined
  transferredToAccounting?: 'No' | 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
}
type POSTJournalEntryResponseType = {
  journalEntryNumber?: string | undefined
  success?: boolean | undefined
}
type GETJournalEntryItemType = {
  accountingCodeName?: string | undefined
  accountingCodeType?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
  amount?: string | undefined
  glAccountName?: string | undefined
  glAccountNumber?: string | undefined
  homeCurrencyAmount?: string | undefined
  type?: 'Credit' | 'Debit' | undefined
}
type GETJournalEntrySegmentType = {
  segmentName?: string | undefined
  segmentValue?: string | undefined
}
type GETJournalEntryDetailTypeWithoutSuccess = {
  accountingPeriodName?: string | undefined
  aggregateCurrency?: boolean | undefined
  currency?: string | undefined
  homeCurrency?: string | undefined
  journalEntryDate?: string | undefined
  journalEntryItems?: GETJournalEntryItemType[] | undefined
  notes?: string | undefined
  number?: string | undefined
  segments?: GETJournalEntrySegmentType[] | undefined
  status?: 'Created' | 'Cancelled' | undefined
  timePeriodEnd?: string | undefined
  timePeriodStart?: string | undefined
  transactionType?: string | undefined
  transferDateTime?: string | undefined
  transferredBy?: string | undefined
  transferredToAccounting?: 'No' | 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
}
type GETJournalEntriesInJournalRunType = {
  journalEntries?: GETJournalEntryDetailTypeWithoutSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETJournalEntryDetailType = {
  accountingPeriodName?: string | undefined
  aggregateCurrency?: boolean | undefined
  currency?: string | undefined
  homeCurrency?: string | undefined
  journalEntryDate?: string | undefined
  journalEntryItems?: GETJournalEntryItemType[] | undefined
  notes?: string | undefined
  number?: string | undefined
  segments?: GETJournalEntrySegmentType[] | undefined
  status?: 'Created' | 'Cancelled' | undefined
  success?: boolean | undefined
  timePeriodEnd?: string | undefined
  timePeriodStart?: string | undefined
  transactionType?: string | undefined
  transferDateTime?: string | undefined
  transferredBy?: string | undefined
  transferredToAccounting?: 'No' | 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
}
type PUTJournalEntryItemType = {
  accountingCodeName: string
  accountingCodeType?:
    | 'AccountsReceivable'
    | 'On-Account Receivable'
    | 'Cash'
    | 'OtherAssets'
    | 'CustomerCashOnAccount'
    | 'DeferredRevenue'
    | 'SalesTaxPayable'
    | 'OtherLiabilities'
    | 'SalesRevenue'
    | 'SalesDiscounts'
    | 'OtherRevenue'
    | 'OtherEquity'
    | 'BadDebt'
    | 'OtherExpenses'
    | undefined
  type: 'Credit' | 'Debit'
}
type PUTBasicSummaryJournalEntryType = {
  journalEntryItems?: PUTJournalEntryItemType[] | undefined
  notes?: string | undefined
  transferredToAccounting?: 'No' | 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
}
type POSTJournalRunTransactionType = {
  type:
    | 'Invoice Item'
    | 'Taxation Item'
    | 'Invoice Item Adjustment (Invoice)'
    | 'Invoice Item Adjustment (Tax)'
    | 'Invoice Adjustment'
    | 'Electronic Payment'
    | 'External Payment'
    | 'Electronic Refund'
    | 'External Refund'
    | 'Electronic Credit Balance Payment'
    | 'External Credit Balance Payment'
    | 'Electronic Credit Balance Refund'
    | 'External Credit Balance Refund'
    | 'Credit Balance Adjustment (Applied from Credit Balance)'
    | 'Credit Balance Adjustment (Transferred to Credit Balance)'
    | 'Revenue Event Item'
    | 'Debit Memo Item (Charge)'
    | 'Debit Memo Item (Tax)'
    | 'Credit Memo Item (Charge)'
    | 'Credit Memo Item (Tax)'
    | 'Credit Memo Application Item'
    | 'Electronic Payment Application'
    | 'External Payment Application'
    | 'Electronic Refund Application'
    | 'External Refund Application'
    | 'Electronic Payment Application Item'
    | 'External Payment Application Item'
    | 'Electronic Refund Application Item'
    | 'External Refund Application Item'
}
type POSTJournalRunType = {
  accountingPeriodName?: string | undefined
  journalEntryDate: string
  targetEndDate?: string | undefined
  targetStartDate?: string | undefined
  transactionTypes: POSTJournalRunTransactionType[]
}
type POSTJournalRunResponseType = {
  journalRunNumber?: string | undefined
  success?: boolean | undefined
}
type GETJournalRunTransactionType = {
  type?:
    | 'Invoice Item'
    | 'Taxation Item'
    | 'Invoice Item Adjustment (Invoice)'
    | 'Invoice Item Adjustment (Tax)'
    | 'Invoice Adjustment'
    | 'Electronic Payment'
    | 'External Payment'
    | 'Electronic Refund'
    | 'External Refund'
    | 'Electronic Credit Balance Payment'
    | 'External Credit Balance Payment'
    | 'Electronic Credit Balance Refund'
    | 'External Credit Balance Refund'
    | 'Credit Balance Adjustment (Applied from Credit Balance)'
    | 'Credit Balance Adjustment (Transferred to Credit Balance)'
    | 'Revenue Event Item'
    | 'Debit Memo Item (Charge)'
    | 'Debit Memo Item (Tax)'
    | 'Credit Memo Item (Charge)'
    | 'Credit Memo Item (Tax)'
    | 'Credit Memo Application Item'
    | 'Electronic Payment Application'
    | 'External Payment Application'
    | 'Electronic Refund Application'
    | 'External Refund Application'
    | 'Electronic Payment Application Item'
    | 'External Payment Application Item'
    | 'Electronic Refund Application Item'
    | 'External Refund Application Item'
    | undefined
}
type GETJournalRunType = {
  aggregateCurrency?: boolean | undefined
  executedOn?: string | undefined
  journalEntryDate?: string | undefined
  number?: string | undefined
  segmentationRuleName?: string | undefined
  status?:
    | 'Pending'
    | 'Processing'
    | 'Completed'
    | 'Error'
    | 'CancelInprogress'
    | 'Cancelled'
    | 'DeleteInprogress'
    | undefined
  success?: boolean | undefined
  targetEndDate?: string | undefined
  targetStartDate?: string | undefined
  totalJournalEntryCount?: bigint | undefined
  transactionTypes?: GETJournalRunTransactionType[] | undefined
}
type GETCalloutHistoryVOType = {
  attemptedNum?: string | undefined
  createTime?: string | undefined
  eventCategory?: string | undefined
  eventContext?: string | undefined
  notification?: string | undefined
  requestMethod?: string | undefined
  requestUrl?: string | undefined
  responseCode?: string | undefined
  responseContent?: string | undefined
}
type GETCalloutHistoryVOsType = {
  calloutHistories?: GETCalloutHistoryVOType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETEmailHistoryVOType = {
  bcc?: string | undefined
  cc?: string | undefined
  errorMessage?: string | undefined
  eventCategory?: string | undefined
  fromEmail?: string | undefined
  notification?: string | undefined
  replyTo?: string | undefined
  result?: string | undefined
  sendTime?: string | undefined
  subject?: string | undefined
  toEmail?: string | undefined
}
type GETEmailHistoryVOsType = {
  emailHistories?: GETEmailHistoryVOType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type ProxyCreateAccount = {
  AccountNumber?: string | undefined
  AdditionalEmailAddresses?: string | undefined
  AllowInvoiceEdit?: boolean | undefined
  AutoPay?: boolean | undefined
  Batch?: string | undefined
  BcdSettingOption?: string | undefined
  BillCycleDay: number
  BillToId?: string | undefined
  CrmId?: string | undefined
  Currency: string
  CustomerServiceRepName?: string | undefined
  DefaultPaymentMethodId?: string | undefined
  InvoiceDeliveryPrefsEmail?: boolean | undefined
  InvoiceDeliveryPrefsPrint?: boolean | undefined
  InvoiceTemplateId?: string | undefined
  Name: string
  Notes?: string | undefined
  ParentId?: string | undefined
  PaymentGateway?: string | undefined
  PaymentTerm?: string | undefined
  PurchaseOrderNumber?: string | undefined
  SalesRepName?: string | undefined
  SoldToId?: string | undefined
  Status: 'Draft' | 'Active' | 'Canceled'
  TaxCompanyCode?: string | undefined
  TaxExemptCertificateID?: string | undefined
  TaxExemptCertificateType?: string | undefined
  TaxExemptDescription?: string | undefined
  TaxExemptEffectiveDate?: string | undefined
  TaxExemptExpirationDate?: string | undefined
  TaxExemptIssuingJurisdiction?: string | undefined
  TaxExemptStatus?: string | undefined
  VATId?: string | undefined
  communicationProfileId?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type ProxyCreateOrModifyResponse = { Id?: string | undefined; Success?: boolean | undefined }
type ProxyBadRequestResponse = {
  Errors?: { Code?: string | undefined; Message?: string | undefined }[] | undefined
  Success?: boolean | undefined
}
type ProxyDeleteResponse = { id?: string | undefined; success?: boolean | undefined }
type ProxyGetAccount = {
  AccountNumber?: string | undefined
  AdditionalEmailAddresses?: string | undefined
  AllowInvoiceEdit?: boolean | undefined
  AutoPay?: boolean | undefined
  Balance?: number | undefined
  Batch?: string | undefined
  BcdSettingOption?: string | undefined
  BillCycleDay?: number | undefined
  BillToId?: string | undefined
  CommunicationProfileId?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreditBalance?: number | undefined
  CrmId?: string | undefined
  Currency?: string | undefined
  CustomerServiceRepName?: string | undefined
  DefaultPaymentMethodId?: string | undefined
  Id?: string | undefined
  InvoiceDeliveryPrefsEmail?: boolean | undefined
  InvoiceDeliveryPrefsPrint?: boolean | undefined
  InvoiceTemplateId?: string | undefined
  LastInvoiceDate?: string | undefined
  Name?: string | undefined
  Notes?: string | undefined
  ParentId?: string | undefined
  PaymentGateway?: string | undefined
  PaymentTerm?: string | undefined
  PurchaseOrderNumber?: string | undefined
  SalesRepName?: string | undefined
  SoldToId?: string | undefined
  Status?: 'Draft' | 'Active' | 'Canceled' | undefined
  TaxCompanyCode?: string | undefined
  TaxExemptCertificateID?: string | undefined
  TaxExemptCertificateType?: string | undefined
  TaxExemptDescription?: string | undefined
  TaxExemptEffectiveDate?: string | undefined
  TaxExemptExpirationDate?: string | undefined
  TaxExemptIssuingJurisdiction?: string | undefined
  TaxExemptStatus?: string | undefined
  TotalInvoiceBalance?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  VATId?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type ProxyNoDataResponse = {
  done?: boolean | undefined
  records?: { [x: string]: unknown }[] | undefined
  size?: number | undefined
}
type ProxyModifyAccount = {
  AccountNumber?: string | undefined
  AdditionalEmailAddresses?: string | undefined
  AllowInvoiceEdit?: boolean | undefined
  AutoPay?: boolean | undefined
  Batch?: string | undefined
  BcdSettingOption?: string | undefined
  BillCycleDay?: number | undefined
  BillToId?: string | undefined
  CrmId?: string | undefined
  Currency?: string | undefined
  CustomerServiceRepName?: string | undefined
  DefaultPaymentMethodId?: string | undefined
  InvoiceDeliveryPrefsEmail?: boolean | undefined
  InvoiceDeliveryPrefsPrint?: boolean | undefined
  InvoiceTemplateId?: string | undefined
  Name?: string | undefined
  Notes?: string | undefined
  ParentId?: string | undefined
  PaymentGateway?: string | undefined
  PaymentTerm?: string | undefined
  PurchaseOrderNumber?: string | undefined
  SalesRepName?: string | undefined
  SoldToId?: string | undefined
  Status?: 'Draft' | 'Active' | 'Canceled' | undefined
  TaxCompanyCode?: string | undefined
  TaxExemptCertificateID?: string | undefined
  TaxExemptCertificateType?: string | undefined
  TaxExemptDescription?: string | undefined
  TaxExemptEffectiveDate?: string | undefined
  TaxExemptExpirationDate?: string | undefined
  TaxExemptIssuingJurisdiction?: string | undefined
  TaxExemptStatus?: string | undefined
  VATId?: string | undefined
  communicationProfileId?: string | undefined
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type ProxyGetAmendment = {
  AutoRenew?: boolean | undefined
  Code?: string | undefined
  ContractEffectiveDate?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CurrentTerm?: bigint | undefined
  CurrentTermPeriodType?: string | undefined
  CustomerAcceptanceDate?: string | undefined
  Description?: string | undefined
  EffectiveDate?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: bigint | undefined
  RenewalTermPeriodType?: string | undefined
  ServiceActivationDate?: string | undefined
  SpecificUpdateDate?: string | undefined
  Status?: string | undefined
  SubscriptionId?: string | undefined
  TermStartDate?: string | undefined
  TermType?: string | undefined
  Type?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyAmendment = {
  AutoRenew?: boolean | undefined
  ContractEffectiveDate?: string | undefined
  CurrentTerm?: bigint | undefined
  CurrentTermPeriodType?: string | undefined
  CustomerAcceptanceDate?: string | undefined
  Description?: string | undefined
  EffectiveDate?: string | undefined
  Name?: string | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: bigint | undefined
  RenewalTermPeriodType?: string | undefined
  ServiceActivationDate?: string | undefined
  SpecificUpdateDate?: string | undefined
  Status?: string | undefined
  SubscriptionId?: string | undefined
  TermStartDate?: string | undefined
  TermType?: string | undefined
  Type?: string | undefined
}
type ProxyCreateBillRun = {
  AccountId?: string | undefined
  AutoEmail?: boolean | undefined
  AutoPost?: boolean | undefined
  AutoRenewal?: boolean | undefined
  Batch?: string | undefined
  BillCycleDay?: string | undefined
  ChargeTypeToExclude?: string | undefined
  InvoiceDate: string
  NoEmailForZeroAmountInvoice?: boolean | undefined
  TargetDate: string
}
type ProxyGetBillRun = {
  AccountId?: string | undefined
  AutoEmail?: boolean | undefined
  AutoPost?: boolean | undefined
  AutoRenewal?: boolean | undefined
  Batch?: string | undefined
  BillCycleDay?: string | undefined
  BillRunNumber?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  ExecutedDate?: string | undefined
  Id?: string | undefined
  InvoiceDate?: string | undefined
  InvoicesEmailed?: boolean | undefined
  LastEmailSentTime?: string | undefined
  NoEmailForZeroAmountInvoice?: boolean | undefined
  NumberOfAccounts?: bigint | undefined
  NumberOfInvoices?: bigint | undefined
  Status?: string | undefined
  TargetDate?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyBillRun = { InvoiceDate?: string | undefined; Status: string }
type ProxyGetCommunicationProfile = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  Id?: string | undefined
  ProfileName?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyCreateContact = {
  AccountId: string
  Address1?: string | undefined
  Address2?: string | undefined
  City?: string | undefined
  Country?: string | undefined
  County?: string | undefined
  Description?: string | undefined
  Fax?: string | undefined
  FirstName: string
  HomePhone?: string | undefined
  LastName: string
  MobilePhone?: string | undefined
  NickName?: string | undefined
  OtherPhone?: string | undefined
  OtherPhoneType?: string | undefined
  PersonalEmail?: string | undefined
  PostalCode?: string | undefined
  State?: string | undefined
  TaxRegion?: string | undefined
  WorkEmail?: string | undefined
  WorkPhone?: string | undefined
}
type ProxyGetContact = {
  AccountId?: string | undefined
  Address1?: string | undefined
  Address2?: string | undefined
  City?: string | undefined
  Country?: string | undefined
  County?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  Fax?: string | undefined
  FirstName?: string | undefined
  HomePhone?: string | undefined
  Id?: string | undefined
  LastName?: string | undefined
  MobilePhone?: string | undefined
  NickName?: string | undefined
  OtherPhone?: string | undefined
  OtherPhoneType?: string | undefined
  PersonalEmail?: string | undefined
  PostalCode?: string | undefined
  State?: string | undefined
  TaxRegion?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  WorkEmail?: string | undefined
  WorkPhone?: string | undefined
}
type ProxyModifyContact = {
  AccountId?: string | undefined
  Address1?: string | undefined
  Address2?: string | undefined
  City?: string | undefined
  Country?: string | undefined
  County?: string | undefined
  Description?: string | undefined
  Fax?: string | undefined
  FirstName?: string | undefined
  HomePhone?: string | undefined
  LastName?: string | undefined
  MobilePhone?: string | undefined
  NickName?: string | undefined
  OtherPhone?: string | undefined
  OtherPhoneType?: string | undefined
  PersonalEmail?: string | undefined
  PostalCode?: string | undefined
  State?: string | undefined
  TaxRegion?: string | undefined
  WorkEmail?: string | undefined
  WorkPhone?: string | undefined
}
type ProxyCreateCreditBalanceAdjustment = {
  AccountingCode?: string | undefined
  AdjustmentDate?: string | undefined
  Amount: number
  Comment?: string | undefined
  ReasonCode?: string | undefined
  ReferenceId?: string | undefined
  SourceTransactionId?: string | undefined
  SourceTransactionNumber?: string | undefined
  Type: 'Decrease' | 'Increase'
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetCreditBalanceAdjustment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  AdjustmentDate?: string | undefined
  Amount?: number | undefined
  CancelledOn?: string | undefined
  Comment?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  Number?: string | undefined
  ReasonCode?: string | undefined
  ReferenceId?: string | undefined
  SourceTransactionId?: string | undefined
  SourceTransactionNumber?: string | undefined
  SourceTransactionType?: string | undefined
  Status?: string | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  Type?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifyCreditBalanceAdjustment = {
  ReasonCode?: string | undefined
  Status?: 'Processed' | 'Canceled' | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyCreateExport = {
  ConvertToCurrencies?: string | undefined
  Encrypted?: boolean | undefined
  FileId?: string | undefined
  Format: 'csv' | 'html' | 'Excel'
  Name?: string | undefined
  Query: string
  Size?: number | undefined
  Status?: string | undefined
  StatusReason?: string | undefined
  Zip?: boolean | undefined
}
type ProxyGetExport = {
  ConvertToCurrencies?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Encrypted?: boolean | undefined
  FileId?: string | undefined
  Format?: 'csv' | 'html' | 'Excel' | undefined
  Id?: string | undefined
  Name?: string | undefined
  Query?: string | undefined
  Size?: number | undefined
  Status?: string | undefined
  StatusReason?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  Zip?: boolean | undefined
}
type ProxyCreateFeature = {
  Description?: string | undefined
  FeatureCode: string
  Name: string
  Status?: 'Active' | 'Inactive' | undefined
}
type ProxyGetFeature = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  FeatureCode?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  Status?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyFeature = {
  Description?: string | undefined
  FeatureCode?: string | undefined
  Name?: string | undefined
  Status?: 'Active' | 'Inactive' | undefined
}
type ProxyPostImport = { Id?: string | undefined; Success?: boolean | undefined }
type ProxyGetImport = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  ImportType?: string | undefined
  ImportedCount?: number | undefined
  Md5?: string | undefined
  Name?: string | undefined
  OriginalResourceUrl?: string | undefined
  ResultResourceUrl?: string | undefined
  Status?: string | undefined
  StatusReason?: string | undefined
  TotalCount?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyCreateInvoiceAdjustment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  AdjustmentDate?: string | undefined
  AdjustmentNumber?: string | undefined
  Amount: number
  Comments?: string | undefined
  CustomerName?: string | undefined
  CustomerNumber?: string | undefined
  ImpactAmount?: number | undefined
  InvoiceId?: string | undefined
  InvoiceNumber?: string | undefined
  ReasonCode?: string | undefined
  ReferenceId?: string | undefined
  Status?: string | undefined
  Type: string
}
type ProxyGetInvoiceAdjustment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  AdjustmentDate?: string | undefined
  AdjustmentNumber?: string | undefined
  Amount?: number | undefined
  CancelledById?: string | undefined
  CancelledOn?: string | undefined
  Comments?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CustomerName?: string | undefined
  CustomerNumber?: string | undefined
  Id?: string | undefined
  ImpactAmount?: number | undefined
  InvoiceId?: string | undefined
  InvoiceNumber?: string | undefined
  ReasonCode?: string | undefined
  ReferenceId?: string | undefined
  Status?: string | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  Type?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyInvoiceAdjustment = {
  ReasonCode?: string | undefined
  Status?: string | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
}
type ProxyGetInvoiceItemAdjustment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  AdjustmentDate?: string | undefined
  AdjustmentNumber?: string | undefined
  Amount?: number | undefined
  CancelledById?: string | undefined
  CancelledDate?: string | undefined
  Comment?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CustomerName?: string | undefined
  CustomerNumber?: string | undefined
  Id?: string | undefined
  InvoiceId?: string | undefined
  InvoiceItemName?: string | undefined
  InvoiceNumber?: string | undefined
  ReasonCode?: string | undefined
  ReferenceId?: string | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  SourceId?: string | undefined
  SourceType?: string | undefined
  Status?: string | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  'InvoiceItemAdjustment.IntegrationId__NS'?: string | undefined
  'InvoiceItemAdjustment.IntegrationStatus__NS'?: string | undefined
  'InvoiceItemAdjustment.SyncDate__NS'?: string | undefined
}
type ProxyGetInvoiceItem = {
  AccountingCode?: string | undefined
  AppliedToInvoiceItemId?: string | undefined
  ChargeAmount?: number | undefined
  ChargeDate?: string | undefined
  ChargeName?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  InvoiceId?: string | undefined
  ProcessingType?: number | undefined
  ProductDescription?: string | undefined
  ProductName?: string | undefined
  Quantity?: number | undefined
  RatePlanChargeId?: string | undefined
  RevRecStartDate?: string | undefined
  SKU?: string | undefined
  ServiceEndDate?: string | undefined
  ServiceStartDate?: string | undefined
  SubscriptionId?: string | undefined
  TaxAmount?: number | undefined
  TaxCode?: string | undefined
  TaxExemptAmount?: number | undefined
  TaxMode?: string | undefined
  UOM?: string | undefined
  UnitPrice?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyCreateInvoicePayment = { Amount: number; InvoiceId: string; PaymentId: string }
type ProxyGetInvoicePayment = {
  Amount?: number | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  InvoiceId?: string | undefined
  PaymentId?: string | undefined
  RefundAmount?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyInvoicePayment = { Amount?: number | undefined }
type ProxyGetInvoiceSplitItem = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  InvoiceDate?: string | undefined
  InvoiceId?: string | undefined
  InvoiceSplitId?: string | undefined
  PaymentTerm?: string | undefined
  SplitPercentage?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyGetInvoiceSplit = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  InvoiceId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyGetInvoice = {
  AccountId?: string | undefined
  AdjustmentAmount?: number | undefined
  Amount?: number | undefined
  AmountWithoutTax?: number | undefined
  Balance?: number | undefined
  Body?: string | undefined
  Comments?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreditBalanceAdjustmentAmount?: number | undefined
  DueDate?: string | undefined
  Id?: string | undefined
  IncludesOneTime?: boolean | undefined
  IncludesRecurring?: boolean | undefined
  IncludesUsage?: boolean | undefined
  InvoiceDate?: string | undefined
  InvoiceNumber?: string | undefined
  LastEmailSentDate?: string | undefined
  PaymentAmount?: number | undefined
  PostedBy?: string | undefined
  PostedDate?: string | undefined
  RefundAmount?: number | undefined
  Status?: string | undefined
  TargetDate?: string | undefined
  TaxAmount?: number | undefined
  TaxExemptAmount?: number | undefined
  TransferredToAccounting?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifyInvoice = {
  RegenerateInvoicePDF?: boolean | undefined
  Status?: string | undefined
  TransferredToAccounting?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type InvoicePayment = { Amount: string; InvoiceId: string; PaymentId?: string | undefined }
type ProxyCreatePayment = {
  AccountId: string
  AccountingCode?: string | undefined
  Amount?: number | undefined
  AppliedCreditBalanceAmount?: number | undefined
  AppliedInvoiceAmount?: number | undefined
  AuthTransactionId?: string | undefined
  Comment?: string | undefined
  EffectiveDate: string
  Gateway?: string | undefined
  GatewayOptionData?: { GatewayOption: GatewayOption[] } | undefined
  GatewayOrderId?: string | undefined
  GatewayResponse?: string | undefined
  GatewayResponseCode?: string | undefined
  GatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  InvoiceId?: string | undefined
  InvoiceNumber?: string | undefined
  InvoicePaymentData?: { InvoicePayment: InvoicePayment[] } | undefined
  PaymentMethodId: string
  PaymentNumber?: string | undefined
  ReferenceId?: string | undefined
  SoftDescriptor?: string | undefined
  SoftDescriptorPhone?: string | undefined
  Status: 'Processed' | 'Error' | 'Voided' | 'Canceled'
  Type: 'External' | 'Electronic'
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type ProxyCreatePaymentMethod = {
  AccountId?: string | undefined
  AchAbaCode?: string | undefined
  AchAccountName?: string | undefined
  AchAccountNumber?: string | undefined
  AchAccountType?: string | undefined
  AchAddress1?: string | undefined
  AchAddress2?: string | undefined
  AchBankName?: string | undefined
  AchCity?: string | undefined
  AchCountry?: string | undefined
  AchPostalCode?: string | undefined
  AchState?: string | undefined
  BankBranchCode?: string | undefined
  BankCheckDigit?: string | undefined
  BankTransferAccountName?: string | undefined
  BankTransferAccountNumber?: string | undefined
  BankTransferAccountNumberMask?: string | undefined
  BankTransferType?: string | undefined
  BusinessIdentificationCode?: string | undefined
  City?: string | undefined
  CompanyName?: string | undefined
  Country?: string | undefined
  CreditCardAddress1?: string | undefined
  CreditCardAddress2?: string | undefined
  CreditCardCity?: string | undefined
  CreditCardCountry?: string | undefined
  CreditCardExpirationMonth?: number | undefined
  CreditCardExpirationYear?: number | undefined
  CreditCardHolderName?: string | undefined
  CreditCardNumber?: string | undefined
  CreditCardPostalCode?: string | undefined
  CreditCardSecurityCode?: string | undefined
  CreditCardState?: string | undefined
  CreditCardType?: string | undefined
  DeviceSessionId?: string | undefined
  Email?: string | undefined
  ExistingMandate?: string | undefined
  FirstName?: string | undefined
  GatewayOptionData?: { GatewayOption: GatewayOption[] } | undefined
  IBAN?: string | undefined
  IPAddress?: string | undefined
  IdentityNumber?: string | undefined
  IsCompany?: boolean | undefined
  LastName?: string | undefined
  LastTransactionDateTime?: string | undefined
  MandateCreationDate?: string | undefined
  MandateID?: string | undefined
  MandateReceived?: string | undefined
  MandateUpdateDate?: string | undefined
  MaxConsecutivePaymentFailures?: number | undefined
  NumConsecutiveFailures?: number | undefined
  PaymentRetryWindow?: number | undefined
  PaypalBaid?: string | undefined
  PaypalEmail?: string | undefined
  PaypalPreapprovalKey?: string | undefined
  PaypalType?: string | undefined
  Phone?: string | undefined
  PostalCode?: string | undefined
  SecondTokenId?: string | undefined
  SkipValidation?: boolean | undefined
  State?: string | undefined
  StreetName?: string | undefined
  StreetNumber?: string | undefined
  TokenId?: string | undefined
  Type?:
    | 'ACH'
    | 'BankTransfer'
    | 'CreditCard'
    | 'CreditCardReferenceTransaction'
    | 'DebitCard'
    | 'PayPal'
    | undefined
  UseDefaultRetryRule?: boolean | undefined
  currencyCode?: string | undefined
}
type ProxyGetPaymentMethodSnapshot = {
  AccountId?: string | undefined
  AchAbaCode?: string | undefined
  AchAccountName?: string | undefined
  AchAccountNumberMask?: string | undefined
  AchAccountType?: 'BusinessChecking' | 'Checking' | 'Saving' | undefined
  AchBankName?: string | undefined
  BankBranchCode?: string | undefined
  BankCheckDigit?: string | undefined
  BankCity?: string | undefined
  BankCode?: string | undefined
  BankIdentificationNumber?: string | undefined
  BankName?: string | undefined
  BankPostalCode?: string | undefined
  BankStreetName?: string | undefined
  BankStreetNumber?: string | undefined
  BankTransferAccountName?: string | undefined
  BankTransferAccountNumberMask?: string | undefined
  BankTransferAccountType?: string | undefined
  BankTransferType?:
    | 'AutomatischIncasso'
    | 'LastschriftDE'
    | 'LastschriftAT'
    | 'DemandeDePrelevement'
    | 'DirectDebitUK'
    | 'Domicil'
    | 'LastschriftCH'
    | 'RID'
    | 'OrdenDeDomiciliacion'
    | 'Autogiro'
    | 'Betalingsservice'
    | undefined
  BusinessIdentificationCode?: string | undefined
  City?: string | undefined
  CompanyName?: string | undefined
  Country?: string | undefined
  CreditCardAddress1?: string | undefined
  CreditCardAddress2?: string | undefined
  CreditCardCity?: string | undefined
  CreditCardCountry?: string | undefined
  CreditCardExpirationMonth?: number | undefined
  CreditCardExpirationYear?: number | undefined
  CreditCardHolderName?: string | undefined
  CreditCardMaskNumber?: string | undefined
  CreditCardPostalCode?: string | undefined
  CreditCardState?: string | undefined
  CreditCardType?: 'AmericanExpress' | 'Discover' | 'MasterCard' | 'Visa' | undefined
  DeviceSessionId?: string | undefined
  Email?: string | undefined
  ExistingMandate?: 'Yes' | 'No' | undefined
  FirstName?: string | undefined
  IBAN?: string | undefined
  IPAddress?: string | undefined
  Id?: string | undefined
  IdentityNumber?: string | undefined
  IsCompany?: boolean | undefined
  LastFailedSaleTransactionDate?: string | undefined
  LastName?: string | undefined
  LastTransactionDateTime?: string | undefined
  LastTransactionStatus?: string | undefined
  MandateCreationDate?: string | undefined
  MandateID?: string | undefined
  MandateReceived?: string | undefined
  MandateUpdateDate?: string | undefined
  MaxConsecutivePaymentFailures?: number | undefined
  Name?: string | undefined
  NumConsecutiveFailures?: number | undefined
  PaymentMethodId?: string | undefined
  PaymentMethodStatus?: 'Active' | 'Closed' | undefined
  PaymentRetryWindow?: number | undefined
  PaypalBaid?: string | undefined
  PaypalEmail?: string | undefined
  PaypalPreapprovalKey?: string | undefined
  PaypalType?: 'ExpressCheckout' | 'AdaptivePayments' | undefined
  Phone?: string | undefined
  PostalCode?: string | undefined
  SecondTokenId?: string | undefined
  State?: string | undefined
  StreetName?: string | undefined
  StreetNumber?: string | undefined
  TokenId?: string | undefined
  TotalNumberOfErrorPayments?: number | undefined
  TotalNumberOfProcessedPayments?: number | undefined
  Type?:
    | 'ACH'
    | 'ApplePay'
    | 'BankTransfer'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'CreditCardReferenceTransaction'
    | 'DebitCard'
    | 'Other'
    | 'PayPal'
    | 'WireTransfer'
    | undefined
  UseDefaultRetryRule?: boolean | undefined
}
type ProxyGetPaymentMethodTransactionLog = {
  Gateway?: string | undefined
  GatewayReasonCode?: string | undefined
  GatewayReasonCodeDescription?: string | undefined
  GatewayTransactionType?: string | undefined
  Id?: string | undefined
  PaymentMethodId?: string | undefined
  PaymentMethodType?: string | undefined
  RequestString?: string | undefined
  ResponseString?: string | undefined
  TransactionDate?: string | undefined
  TransactionId?: string | undefined
}
type ProxyGetPaymentMethod = {
  AccountId?: string | undefined
  AchAbaCode?: string | undefined
  AchAccountName?: string | undefined
  AchAccountNumberMask?: string | undefined
  AchAccountType?: string | undefined
  AchAddress1?: string | undefined
  AchAddress2?: string | undefined
  AchBankName?: string | undefined
  Active?: boolean | undefined
  BankBranchCode?: string | undefined
  BankCheckDigit?: string | undefined
  BankCity?: string | undefined
  BankCode?: string | undefined
  BankIdentificationNumber?: string | undefined
  BankName?: string | undefined
  BankPostalCode?: string | undefined
  BankStreetName?: string | undefined
  BankStreetNumber?: string | undefined
  BankTransferAccountName?: string | undefined
  BankTransferAccountNumber?: string | undefined
  BankTransferAccountNumberMask?: string | undefined
  BankTransferAccountType?: string | undefined
  BankTransferType?: string | undefined
  BusinessIdentificationCode?: string | undefined
  City?: string | undefined
  CompanyName?: string | undefined
  Country?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreditCardAddress1?: string | undefined
  CreditCardAddress2?: string | undefined
  CreditCardCity?: string | undefined
  CreditCardCountry?: string | undefined
  CreditCardExpirationMonth?: number | undefined
  CreditCardExpirationYear?: number | undefined
  CreditCardHolderName?: string | undefined
  CreditCardMaskNumber?: string | undefined
  CreditCardPostalCode?: string | undefined
  CreditCardState?: string | undefined
  CreditCardType?: string | undefined
  DeviceSessionId?: string | undefined
  Email?: string | undefined
  ExistingMandate?: string | undefined
  FirstName?: string | undefined
  IBAN?: string | undefined
  IPAddress?: string | undefined
  Id?: string | undefined
  IdentityNumber?: string | undefined
  IsCompany?: boolean | undefined
  LastFailedSaleTransactionDate?: string | undefined
  LastName?: string | undefined
  LastTransactionDateTime?: string | undefined
  LastTransactionStatus?: string | undefined
  MandateCreationDate?: string | undefined
  MandateID?: string | undefined
  MandateReceived?: string | undefined
  MandateUpdateDate?: string | undefined
  MaxConsecutivePaymentFailures?: number | undefined
  Name?: string | undefined
  NumConsecutiveFailures?: number | undefined
  PaymentMethodStatus?: string | undefined
  PaymentRetryWindow?: number | undefined
  PaypalBaid?: string | undefined
  PaypalEmail?: string | undefined
  PaypalPreapprovalKey?: string | undefined
  PaypalType?: string | undefined
  Phone?: string | undefined
  PostalCode?: string | undefined
  SecondTokenId?: string | undefined
  State?: string | undefined
  StreetName?: string | undefined
  StreetNumber?: string | undefined
  TokenId?: string | undefined
  TotalNumberOfErrorPayments?: number | undefined
  TotalNumberOfProcessedPayments?: number | undefined
  Type?:
    | 'ACH'
    | 'ApplePay'
    | 'BankTransfer'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'CreditCardReferenceTransaction'
    | 'DebitCard'
    | 'Other'
    | 'PayPal'
    | 'WireTransfer'
    | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  UseDefaultRetryRule?: boolean | undefined
}
type ProxyModifyPaymentMethod = {
  AccountId?: string | undefined
  AchAbaCode?: string | undefined
  AchAccountName?: string | undefined
  AchAccountType?: string | undefined
  AchAddress1?: string | undefined
  AchAddress2?: string | undefined
  AchBankName?: string | undefined
  AchCity?: string | undefined
  AchCountry?: string | undefined
  AchPostalCode?: string | undefined
  AchState?: string | undefined
  BankBranchCode?: string | undefined
  BankCheckDigit?: string | undefined
  BankTransferType?: string | undefined
  BusinessIdentificationCode?: string | undefined
  City?: string | undefined
  CompanyName?: string | undefined
  Country?: string | undefined
  CreditCardAddress1?: string | undefined
  CreditCardAddress2?: string | undefined
  CreditCardCity?: string | undefined
  CreditCardCountry?: string | undefined
  CreditCardExpirationMonth?: number | undefined
  CreditCardExpirationYear?: number | undefined
  CreditCardHolderName?: string | undefined
  CreditCardPostalCode?: string | undefined
  CreditCardSecurityCode?: string | undefined
  CreditCardState?: string | undefined
  CreditCardType?: string | undefined
  DeviceSessionId?: string | undefined
  Email?: string | undefined
  ExistingMandate?: string | undefined
  FirstName?: string | undefined
  IBAN?: string | undefined
  IPAddress?: string | undefined
  IdentityNumber?: string | undefined
  IsCompany?: boolean | undefined
  LastName?: string | undefined
  LastTransactionDateTime?: string | undefined
  MandateCreationDate?: string | undefined
  MandateID?: string | undefined
  MandateReceived?: string | undefined
  MandateUpdateDate?: string | undefined
  MaxConsecutivePaymentFailures?: number | undefined
  NumConsecutiveFailures?: number | undefined
  PaymentMethodStatus?: string | undefined
  PaymentRetryWindow?: number | undefined
  Phone?: string | undefined
  PostalCode?: string | undefined
  SecondTokenId?: string | undefined
  State?: string | undefined
  StreetName?: string | undefined
  StreetNumber?: string | undefined
  UseDefaultRetryRule?: boolean | undefined
}
type ProxyGetPaymentTransactionLog = {
  AVSResponseCode?: string | undefined
  BatchId?: string | undefined
  CVVResponseCode?: string | undefined
  Gateway?: string | undefined
  GatewayReasonCode?: string | undefined
  GatewayReasonCodeDescription?: string | undefined
  GatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  GatewayTransactionType?: 'Authorization' | 'Sale' | 'Void' | 'Inquiry' | 'VoidAuth' | undefined
  Id?: string | undefined
  PaymentId?: string | undefined
  RequestString?: string | undefined
  ResponseString?: string | undefined
  TransactionDate?: string | undefined
  TransactionId?: string | undefined
}
type ProxyGetPayment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  Amount?: number | undefined
  AppliedAmount?: number | undefined
  AppliedCreditBalanceAmount?: number | undefined
  AuthTransactionId?: string | undefined
  BankIdentificationNumber?: string | undefined
  CancelledOn?: string | undefined
  Comment?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  EffectiveDate?: string | undefined
  Gateway?: string | undefined
  GatewayOrderId?: string | undefined
  GatewayResponse?: string | undefined
  GatewayResponseCode?: string | undefined
  GatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  Id?: string | undefined
  MarkedForSubmissionOn?: string | undefined
  PaymentMethodId?: string | undefined
  PaymentMethodSnapshotId?: string | undefined
  PaymentNumber?: string | undefined
  ReferenceId?: string | undefined
  RefundAmount?: number | undefined
  SecondPaymentReferenceId?: string | undefined
  SettledOn?: string | undefined
  SoftDescriptor?: string | undefined
  SoftDescriptorPhone?: string | undefined
  Source?: 'PaymentRun' | 'Import' | 'Manually' | 'API' | undefined
  SourceName?: string | undefined
  Status?: 'Processed' | 'Error' | 'Voided' | 'Canceled' | undefined
  SubmittedOn?: string | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  Type?: 'External' | 'Electronic' | undefined
  UnappliedAmount?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type ProxyModifyPayment = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  Amount?: number | undefined
  EffectiveDate?: string | undefined
  PaymentMethodId?: string | undefined
  ReferenceId?: string | undefined
  Status?: 'Processed' | 'Error' | 'Voided' | 'Canceled' | undefined
  TransferredToAccounting?: 'Processing' | 'Yes' | 'Error' | 'Ignore' | undefined
  Type?: 'External' | 'Electronic' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type ProxyCreateProduct = {
  AllowFeatureChanges?: boolean | undefined
  Category?: string | undefined
  Description?: string | undefined
  EffectiveEndDate: string
  EffectiveStartDate: string
  Name: string
  SKU?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetProductFeature = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  FeatureId?: string | undefined
  Id?: string | undefined
  ProductId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyCreateProductRatePlan = {
  ActiveCurrencies?: string[] | undefined
  Description?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  Name: string
  ProductId: string
  BillingPeriod__NS?: 'Monthly' | 'Quarterly' | 'Annual' | 'Semi-Annual' | undefined
  Class__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  MultiCurrencyPrice__NS?: string | undefined
  Price__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyCreateOrModifyProductRatePlanChargeChargeModelConfigurationItem = {
  Key?: string | undefined
  Value?: string | undefined
}
type ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration = {
  ConfigurationItem?:
    | ProxyCreateOrModifyProductRatePlanChargeChargeModelConfigurationItem[]
    | undefined
}
type ProxyCreateOrModifyProductRatePlanChargeTierData = {
  ProductRatePlanChargeTier?:
    | {
        Currency?: string | undefined
        DiscountAmount?: number | undefined
        DiscountPercentage?: number | undefined
        EndingUnit?: number | undefined
        IsOveragePrice?: boolean | undefined
        Price?: number | undefined
        PriceFormat?: 'Flat Fee' | 'Per Unit' | undefined
        StartingUnit?: number | undefined
      }[]
    | undefined
}
type ProxyCreateProductRatePlanCharge = {
  AccountingCode?: string | undefined
  ApplyDiscountTo?: string | undefined
  BillCycleDay?: number | undefined
  BillCycleType?: string | undefined
  BillingPeriod?: string | undefined
  BillingPeriodAlignment?: string | undefined
  BillingTiming?: string | undefined
  ChargeModel?: string | undefined
  ChargeModelConfiguration?:
    | ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration
    | undefined
  ChargeType?: string | undefined
  DefaultQuantity?: number | undefined
  DeferredRevenueAccount?: string | undefined
  Description?: string | undefined
  DiscountLevel?: string | undefined
  EndDateCondition?: string | undefined
  IncludedUnits?: number | undefined
  LegacyRevenueReporting?: boolean | undefined
  ListPriceBase?: string | undefined
  MaxQuantity?: number | undefined
  MinQuantity?: number | undefined
  Name?: string | undefined
  NumberOfPeriod?: bigint | undefined
  OverageCalculationOption?: string | undefined
  OverageUnusedUnitsCreditOption?: string | undefined
  PriceChangeOption?: string | undefined
  PriceIncreaseOption?: 'FromTenantPercentageValue' | 'SpecificPercentageValue' | undefined
  PriceIncreasePercentage?: number | undefined
  ProductRatePlanChargeTierData?: ProxyCreateOrModifyProductRatePlanChargeTierData | undefined
  ProductRatePlanId?: string | undefined
  RatingGroup?: string | undefined
  RecognizedRevenueAccount?: string | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  SmoothingModel?: string | undefined
  SpecificBillingPeriod?: bigint | undefined
  TaxCode?: string | undefined
  TaxMode?: string | undefined
  Taxable?: boolean | undefined
  TriggerEvent?: string | undefined
  UOM?: string | undefined
  UpToPeriods?: bigint | undefined
  UpToPeriodsType?: string | undefined
  UsageRecordRatingOption?: 'EndOfBillingPeriod' | 'OnDemand' | undefined
  UseDiscountSpecificAccountingCode?: boolean | undefined
  UseTenantDefaultForPriceChange?: boolean | undefined
  WeeklyBillCycleDay?: string | undefined
  Class__NS?: string | undefined
  DeferredRevAccount__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  RecognizedRevAccount__NS?: string | undefined
  RevRecEnd__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecStart__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecTemplateType__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetProductRatePlanChargeTier = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Currency?: string | undefined
  EndingUnit?: number | undefined
  Id?: string | undefined
  Price?: number | undefined
  PriceFormat?: string | undefined
  StartingUnit?: number | undefined
  Tier?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyProductRatePlanChargeTier = { Price?: number | undefined }
type ProxyGetProductRatePlanCharge = {
  AccountingCode?: string | undefined
  ApplyDiscountTo?: string | undefined
  BillCycleDay?: number | undefined
  BillCycleType?: string | undefined
  BillingPeriod?: string | undefined
  BillingPeriodAlignment?: string | undefined
  BillingTiming?: string | undefined
  ChargeModel?: string | undefined
  ChargeType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  DefaultQuantity?: number | undefined
  DeferredRevenueAccount?: string | undefined
  Description?: string | undefined
  DiscountLevel?: string | undefined
  EndDateCondition?: string | undefined
  Id?: string | undefined
  IncludedUnits?: number | undefined
  LegacyRevenueReporting?: boolean | undefined
  ListPriceBase?: string | undefined
  MaxQuantity?: number | undefined
  MinQuantity?: number | undefined
  Name?: string | undefined
  NumberOfPeriod?: bigint | undefined
  OverageCalculationOption?: string | undefined
  OverageUnusedUnitsCreditOption?: string | undefined
  PriceChangeOption?: string | undefined
  PriceIncreasePercentage?: number | undefined
  ProductRatePlanId?: string | undefined
  RatingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | 'ByGroupId'
    | undefined
  RecognizedRevenueAccount?: string | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  SmoothingModel?: string | undefined
  SpecificBillingPeriod?: bigint | undefined
  TaxCode?: string | undefined
  TaxMode?: string | undefined
  Taxable?: boolean | undefined
  TriggerEvent?: string | undefined
  UOM?: string | undefined
  UpToPeriods?: bigint | undefined
  UpToPeriodsType?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  UseDiscountSpecificAccountingCode?: boolean | undefined
  UseTenantDefaultForPriceChange?: boolean | undefined
  WeeklyBillCycleDay?: string | undefined
  Class__NS?: string | undefined
  DeferredRevAccount__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  RecognizedRevAccount__NS?: string | undefined
  RevRecEnd__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecStart__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecTemplateType__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifyProductRatePlanCharge = {
  AccountingCode?: string | undefined
  ApplyDiscountTo?: string | undefined
  BillCycleDay?: number | undefined
  BillCycleType?: string | undefined
  BillingPeriod?: string | undefined
  BillingPeriodAlignment?: string | undefined
  BillingTiming?: string | undefined
  ChargeModel?: string | undefined
  ChargeModelConfiguration?:
    | ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration
    | undefined
  DefaultQuantity?: number | undefined
  DeferredRevenueAccount?: string | undefined
  Description?: string | undefined
  DiscountLevel?: string | undefined
  EndDateCondition?: string | undefined
  IncludedUnits?: number | undefined
  LegacyRevenueReporting?: boolean | undefined
  ListPriceBase?: string | undefined
  MaxQuantity?: number | undefined
  MinQuantity?: number | undefined
  Name?: string | undefined
  NumberOfPeriod?: bigint | undefined
  OverageCalculationOption?: string | undefined
  OverageUnusedUnitsCreditOption?: string | undefined
  PriceChangeOption?: string | undefined
  PriceIncreaseOption?: 'FromTenantPercentageValue' | 'SpecificPercentageValue' | undefined
  PriceIncreasePercentage?: number | undefined
  ProductRatePlanChargeTierData?: ProxyCreateOrModifyProductRatePlanChargeTierData | undefined
  ProductRatePlanId?: string | undefined
  RatingGroup?: string | undefined
  RecognizedRevenueAccount?: string | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  SmoothingModel?: string | undefined
  SpecificBillingPeriod?: bigint | undefined
  TaxCode?: string | undefined
  TaxMode?: string | undefined
  Taxable?: boolean | undefined
  TriggerEvent?: string | undefined
  UOM?: string | undefined
  UpToPeriods?: bigint | undefined
  UpToPeriodsType?: string | undefined
  UsageRecordRatingOption?: 'EndOfBillingPeriod' | 'OnDemand' | undefined
  UseDiscountSpecificAccountingCode?: boolean | undefined
  UseTenantDefaultForPriceChange?: boolean | undefined
  WeeklyBillCycleDay?: string | undefined
  Class__NS?: string | undefined
  DeferredRevAccount__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  RecognizedRevAccount__NS?: string | undefined
  RevRecEnd__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecStart__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecTemplateType__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetProductRatePlan = {
  ActiveCurrencies?: string[] | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  ProductId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  BillingPeriod__NS?: 'Monthly' | 'Quarterly' | 'Annual' | 'Semi-Annual' | undefined
  Class__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  MultiCurrencyPrice__NS?: string | undefined
  Price__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifyProductRatePlan = {
  ActiveCurrencies?: string[] | undefined
  Description?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  Name?: string | undefined
  ProductId?: string | undefined
  BillingPeriod__NS?: 'Monthly' | 'Quarterly' | 'Annual' | 'Semi-Annual' | undefined
  Class__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  MultiCurrencyPrice__NS?: string | undefined
  Price__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetProduct = {
  AllowFeatureChanges?: boolean | undefined
  Category?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  SKU?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifyProduct = {
  AllowFeatureChanges?: boolean | undefined
  Category?: string | undefined
  Description?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  Name?: string | undefined
  SKU?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  SyncDate__NS?: string | undefined
}
type ProxyGetRatePlanChargeTier = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  EndingUnit?: number | undefined
  Id?: string | undefined
  Price?: number | undefined
  PriceFormat?: string | undefined
  RatePlanChargeId?: string | undefined
  StartingUnit?: number | undefined
  Tier?: number | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyGetRatePlanCharge = {
  AccountingCode?: string | undefined
  ApplyDiscountTo?: string | undefined
  BillCycleDay?: number | undefined
  BillCycleType?: string | undefined
  BillingPeriod?: string | undefined
  BillingPeriodAlignment?: string | undefined
  BillingTiming?: string | undefined
  ChargeModel?: string | undefined
  ChargeNumber?: string | undefined
  ChargeType?: string | undefined
  ChargedThroughDate?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  DMRC?: number | undefined
  DTCV?: number | undefined
  Description?: string | undefined
  DiscountLevel?: string | undefined
  EffectiveEndDate?: string | undefined
  EffectiveStartDate?: string | undefined
  EndDateCondition?: string | undefined
  Id?: string | undefined
  IsLastSegment?: boolean | undefined
  ListPriceBase?: string | undefined
  MRR?: number | undefined
  Name?: string | undefined
  NumberOfPeriods?: bigint | undefined
  OriginalId?: string | undefined
  OverageCalculationOption?: string | undefined
  OverageUnusedUnitsCreditOption?: string | undefined
  PriceChangeOption?: string | undefined
  PriceIncreasePercentage?: number | undefined
  ProcessedThroughDate?: string | undefined
  Quantity?: number | undefined
  RatePlanId?: string | undefined
  RatingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | 'ByGroupId'
    | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  RolloverBalance?: number | undefined
  Segment?: number | undefined
  SpecificBillingPeriod?: bigint | undefined
  SpecificEndDate?: string | undefined
  TCV?: number | undefined
  TriggerDate?: string | undefined
  TriggerEvent?: string | undefined
  UOM?: string | undefined
  UpToPeriods?: bigint | undefined
  UpToPeriodsType?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  Version?: bigint | undefined
  WeeklyBillCycleDay?: string | undefined
}
type ProxyModifyRatePlanCharge = {
  BillingTiming?: string | undefined
  DiscountAmount?: number | undefined
  DiscountPercentage?: number | undefined
  EndDateCondition?: string | undefined
  ListPriceBase?: string | undefined
  PriceChangeOption?: string | undefined
  PriceIncreasePercentage?: number | undefined
  RatingGroup?:
    | 'ByBillingPeriod'
    | 'ByUsageStartDate'
    | 'ByUsageRecord'
    | 'ByUsageUpload'
    | 'ByGroupId'
    | undefined
  RevRecCode?: string | undefined
  RevRecTriggerCondition?: string | undefined
  RevenueRecognitionRuleName?: string | undefined
  SpecificEndDate?: string | undefined
  TriggerDate?: string | undefined
  TriggerEvent?: string | undefined
  UpToPeriodsType?: string | undefined
  WeeklyBillCycleDay?: string | undefined
}
type ProxyGetRatePlan = {
  AmendmentId?: string | undefined
  AmendmentType?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  SubscriptionId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type RefundInvoicePayment = { InvoiceId: string; RefundAmount: string }
type ProxyCreateRefund = {
  AccountId?: string | undefined
  Amount: number
  Comment?: string | undefined
  GatewayOptionData?: { GatewayOption: GatewayOption[] } | undefined
  GatewayState?: string | undefined
  MethodType?: string | undefined
  PaymentId?: string | undefined
  PaymentMethodId?: string | undefined
  ReasonCode?: string | undefined
  RefundDate?: string | undefined
  RefundInvoicePaymentData?: { RefundInvoicePayment: RefundInvoicePayment[] } | undefined
  SoftDescriptor?: string | undefined
  SoftDescriptorPhone?: string | undefined
  SourceType?: string | undefined
  Type: string
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type ProxyGetRefundInvoicePayment = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Id?: string | undefined
  InvoiceId?: string | undefined
  InvoicePaymentId?: string | undefined
  RefundAmount?: number | undefined
  RefundId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyGetRefundTransactionLog = {
  BatchId?: string | undefined
  Gateway?: string | undefined
  GatewayReasonCode?: string | undefined
  GatewayReasonCodeDescription?: string | undefined
  GatewayState?: string | undefined
  GatewayTransactionType?: string | undefined
  Id?: string | undefined
  RefundId?: string | undefined
  RequestString?: string | undefined
  ResponseString?: string | undefined
  TransactionDate?: string | undefined
  TransactionId?: string | undefined
}
type ProxyGetRefund = {
  AccountId?: string | undefined
  AccountingCode?: string | undefined
  Amount?: number | undefined
  CancelledOn?: string | undefined
  Comment?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Gateway?: string | undefined
  GatewayResponse?: string | undefined
  GatewayResponseCode?: string | undefined
  GatewayState?: string | undefined
  Id?: string | undefined
  MarkedForSubmissionOn?: string | undefined
  MethodType?: string | undefined
  PaymentId?: { [x: string]: unknown } | undefined
  PaymentMethodId?: string | undefined
  PaymentMethodSnapshotId?: string | undefined
  ReasonCode?: string | undefined
  ReferenceID?: string | undefined
  RefundDate?: string | undefined
  RefundNumber?: string | undefined
  RefundTransactionTime?: string | undefined
  SecondRefundReferenceId?: string | undefined
  SettledOn?: string | undefined
  SoftDescriptor?: string | undefined
  SoftDescriptorPhone?: string | undefined
  SourceType?: string | undefined
  Status?: string | undefined
  SubmittedOn?: string | undefined
  TransferredToAccounting?: string | undefined
  Type?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type ProxyModifyRefund = {
  ReasonCode?: string | undefined
  Status?: string | undefined
  TransferredToAccounting?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type ProxyGetSubscriptionProductFeature = {
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  FeatureCode?: string | undefined
  FeatureId?: string | undefined
  Id?: string | undefined
  Name?: string | undefined
  RatePlanId?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyGetSubscription = {
  AccountId?: string | undefined
  AutoRenew?: boolean | undefined
  CancelledDate?: string | undefined
  ContractAcceptanceDate?: string | undefined
  ContractEffectiveDate?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  CreatorAccountId?: string | undefined
  CreatorInvoiceOwnerId?: string | undefined
  CurrentTerm?: number | undefined
  CurrentTermPeriodType?: string | undefined
  Id?: string | undefined
  InitialTerm?: number | undefined
  InitialTermPeriodType?: string | undefined
  InvoiceOwnerId?: string | undefined
  IsInvoiceSeparate?: boolean | undefined
  Name?: string | undefined
  Notes?: string | undefined
  OriginalCreatedDate?: string | undefined
  OriginalId?: string | undefined
  PreviousSubscriptionId?: string | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: number | undefined
  RenewalTermPeriodType?: string | undefined
  Revision?: string | undefined
  ServiceActivationDate?: string | undefined
  Status?: string | undefined
  SubscriptionEndDate?: string | undefined
  SubscriptionStartDate?: string | undefined
  TermEndDate?: string | undefined
  TermStartDate?: string | undefined
  TermType?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
  Version?: number | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyModifySubscription = {
  AccountId?: string | undefined
  AutoRenew?: boolean | undefined
  CancelledDate?: string | undefined
  ContractAcceptanceDate?: string | undefined
  ContractEffectiveDate?: string | undefined
  CurrentTermPeriodType?: string | undefined
  InitialTerm?: number | undefined
  InitialTermPeriodType?: string | undefined
  InvoiceOwnerId?: string | undefined
  IsInvoiceSeparate?: boolean | undefined
  Name?: string | undefined
  Notes?: string | undefined
  RenewalSetting?: string | undefined
  RenewalTerm?: number | undefined
  RenewalTermPeriodType?: string | undefined
  ServiceActivationDate?: string | undefined
  Status?: string | undefined
  TermStartDate?: string | undefined
  TermType?: string | undefined
  Version?: number | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type ProxyCreateTaxationItem = {
  AccountingCode?: string | undefined
  ExemptAmount?: number | undefined
  InvoiceItemId: string
  Jurisdiction: string
  LocationCode?: string | undefined
  Name: string
  TaxAmount: number
  TaxCode?: string | undefined
  TaxCodeDescription?: string | undefined
  TaxDate: string
  TaxRate: number
  TaxRateDescription?: string | undefined
  TaxRateType: string
}
type ProxyGetTaxationItem = {
  AccountingCode?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  ExemptAmount?: number | undefined
  Id?: string | undefined
  InvoiceItemId?: string | undefined
  Jurisdiction?: string | undefined
  LocationCode?: string | undefined
  Name?: string | undefined
  TaxAmount?: number | undefined
  TaxCode?: string | undefined
  TaxCodeDescription?: string | undefined
  TaxDate?: string | undefined
  TaxRate?: number | undefined
  TaxRateDescription?: string | undefined
  TaxRateType?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyTaxationItem = {
  AccountingCode?: string | undefined
  ExemptAmount?: number | undefined
  Jurisdiction?: string | undefined
  LocationCode?: string | undefined
  Name?: string | undefined
  TaxAmount?: number | undefined
  TaxCode?: string | undefined
  TaxCodeDescription?: string | undefined
  TaxDate?: string | undefined
  TaxRate?: number | undefined
  TaxRateDescription?: string | undefined
  TaxRateType?: string | undefined
}
type ProxyCreateUnitOfMeasure = {
  Active?: boolean | undefined
  DecimalPlaces: bigint
  DisplayedAs?: string | undefined
  RoundingMode?: string | undefined
  UomName: string
}
type ProxyGetUnitOfMeasure = {
  Active?: boolean | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  DecimalPlaces?: bigint | undefined
  DisplayedAs?: string | undefined
  Id?: string | undefined
  RoundingMode?: string | undefined
  UomName?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyUnitOfMeasure = {
  Active?: boolean | undefined
  DecimalPlaces?: bigint | undefined
  DisplayedAs?: string | undefined
  RoundingMode?: string | undefined
  UomName?: string | undefined
}
type ProxyCreateUsage = {
  AccountId?: string | undefined
  AccountNumber?: string | undefined
  ChargeId?: string | undefined
  ChargeNumber?: string | undefined
  Description?: string | undefined
  EndDateTime?: string | undefined
  Quantity: number
  StartDateTime: string
  SubmissionDateTime?: string | undefined
  SubscriptionId?: string | undefined
  SubscriptionNumber?: string | undefined
  UOM: string
}
type ProxyGetUsage = {
  AccountId?: string | undefined
  AccountNumber?: string | undefined
  ChargeId?: string | undefined
  CreatedById?: string | undefined
  CreatedDate?: string | undefined
  Description?: string | undefined
  EndDateTime?: string | undefined
  Id?: string | undefined
  Quantity?: number | undefined
  RbeStatus?: string | undefined
  SourceType?: string | undefined
  StartDateTime?: string | undefined
  SubmissionDateTime?: string | undefined
  SubscriptionId?: string | undefined
  SubscriptionNumber?: string | undefined
  UOM?: string | undefined
  UpdatedById?: string | undefined
  UpdatedDate?: string | undefined
}
type ProxyModifyUsage = {
  EndDateTime?: string | undefined
  Quantity?: number | undefined
  RbeStatus?: string | undefined
  StartDateTime?: string | undefined
  SubmissionDateTime?: string | undefined
  UOM?: string | undefined
}
type PostBillingPreviewParam = {
  accountId: string
  assumeRenewal?: string | undefined
  chargeTypeToExclude?: string | undefined
  includingEvergreenSubscription?: boolean | undefined
  targetDate: string
}
type POSTBillingPreviewCreditMemoItem = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  appliedToItemId?: string | undefined
  chargeDate?: string | undefined
  chargeNumber?: string | undefined
  chargeType?: string | undefined
  comment?: string | undefined
  id?: string | undefined
  processingType?: string | undefined
  quantity?: string | undefined
  ratePlanChargeId?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  sku?: string | undefined
  skuName?: string | undefined
  subscriptionId?: string | undefined
  subscriptionNumber?: string | undefined
  unitOfMeasure?: string | undefined
}
type POSTBillingPreviewInvoiceItem = {
  appliedToItemId?: string | undefined
  chargeAmount?: string | undefined
  chargeDate?: string | undefined
  chargeDescription?: string | undefined
  chargeId?: string | undefined
  chargeName?: string | undefined
  chargeNumber?: string | undefined
  chargeType?: string | undefined
  id?: string | undefined
  processingType?: string | undefined
  productName?: string | undefined
  quantity?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  subscriptionId?: string | undefined
  subscriptionName?: string | undefined
  subscriptionNumber?: string | undefined
  taxAmount?: string | undefined
  unitOfMeasure?: string | undefined
}
type BillingPreviewResult = {
  accountId?: string | undefined
  creditMemoItems?: POSTBillingPreviewCreditMemoItem[] | undefined
  invoiceItems?: POSTBillingPreviewInvoiceItem[] | undefined
  success?: boolean | undefined
}
type POSTInvoiceCollectType = {
  accountKey: string
  documentDate?: string | undefined
  invoiceDate?: string | undefined
  invoiceId?: string | undefined
  invoiceTargetDate?: string | undefined
  paymentGateway?: string | undefined
  targetDate?: string | undefined
}
type POSTInvoiceCollectCreditMemosType = {
  id?: string | undefined
  memoAmount?: string | undefined
  memoNumber?: string | undefined
}
type POSTInvoiceCollectInvoicesType = {
  invoiceAmount?: string | undefined
  invoiceId?: string | undefined
  invoiceNumber?: string | undefined
}
type POSTInvoiceCollectResponseType = {
  amountCollected?: string | undefined
  creditMemos?: POSTInvoiceCollectCreditMemosType[] | undefined
  invoices?: POSTInvoiceCollectInvoicesType[] | undefined
  paymentId?: string | undefined
  success?: boolean | undefined
}
type PostOrderLineItemUpdateType = {
  id: string
  UOM?: string | undefined
  accountingCode?: string | undefined
  amountPerUnit?: number | undefined
  billTargetDate?: string | undefined
  customFields?: OrderLineItemCustomFields | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemName?: string | undefined
  itemNumber?: string | undefined
  itemState?: 'Executing' | 'SentToBilling' | 'Complete' | 'Cancelled' | undefined
  itemType?: 'Product' | 'Fee' | 'Services' | undefined
  listPricePerUnit?: number | undefined
  productCode?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: number | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revenueRecognitionRule?: string | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  transactionDate?: string | undefined
}
type PostOrderLineItemsRequestType = {
  orderLineItems?: PostOrderLineItemUpdateType[] | undefined
  processingOptions?: ProcessingOptions | undefined
}
type OrderLineItemCustomFieldsRetrieveOrderLineItem = { [x: string]: { [x: string]: unknown } }
type OrderContactRetrieveOrderLineItem = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
}
type OrderLineItem = {
  amount?: number | undefined
  id?: string | undefined
  UOM?: string | undefined
  accountingCode?: string | undefined
  amountPerUnit?: number | undefined
  billTargetDate?: string | undefined
  customFields?: OrderLineItemCustomFieldsRetrieveOrderLineItem | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemName?: string | undefined
  itemNumber?: string | undefined
  itemState?: 'Executing' | 'SentToBilling' | 'Complete' | 'Cancelled' | undefined
  itemType?: 'Product' | 'Fee' | 'Services' | undefined
  listPricePerUnit?: number | undefined
  productCode?: string | undefined
  productRatePlanChargeId?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: number | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revenueRecognitionRule?: string | undefined
  soldTo?: string | undefined
  soldToData?: OrderContactRetrieveOrderLineItem | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  transactionDate?: string | undefined
}
type GetOrderLineItemResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  orderLineItem?: OrderLineItem | undefined
}
type PutOrderLineItemUpdateType = {
  UOM?: string | undefined
  accountingCode?: string | undefined
  amountPerUnit?: number | undefined
  billTargetDate?: string | undefined
  customFields?: OrderLineItemCustomFields | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemName?: string | undefined
  itemNumber?: string | undefined
  itemState?: 'Executing' | 'SentToBilling' | 'Complete' | 'Cancelled' | undefined
  itemType?: 'Product' | 'Fee' | 'Services' | undefined
  listPricePerUnit?: number | undefined
  productCode?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: number | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revenueRecognitionRule?: string | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  transactionDate?: string | undefined
}
type OrderContactRetrieveOrder = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
}
type OrderLineItemRetrieveOrder = {
  amount?: number | undefined
  id?: string | undefined
  itemNumber?: string | undefined
  UOM?: string | undefined
  amountPerUnit?: number | undefined
  billTargetDate?: string | undefined
  customFields?: OrderLineItemCustomFields | undefined
  deferredRevenueAccountingCode?: string | undefined
  description?: string | undefined
  itemName?: string | undefined
  itemState?: 'Executing' | 'SentToBilling' | 'Complete' | 'Cancelled' | undefined
  itemType?: 'Product' | 'Fee' | 'Services' | undefined
  listPricePerUnit?: number | undefined
  productCode?: string | undefined
  productRatePlanChargeId?: string | undefined
  purchaseOrderNumber?: string | undefined
  quantity?: number | undefined
  recognizedRevenueAccountingCode?: string | undefined
  revenueRecognitionRule?: string | undefined
  soldTo?: string | undefined
  soldToData?: OrderContactRetrieveOrder | undefined
  taxCode?: string | undefined
  taxMode?: 'TaxInclusive' | 'TaxExclusive' | undefined
  transactionDate?: string | undefined
}
type TriggerParams = {
  specificTriggerDate?: string | undefined
  triggerEvent?: 'ContractEffective' | 'ServiceActivation' | 'CustomerAcceptance' | undefined
}
type ChargeOverride = {
  billing?:
    | {
        billCycleDay?: number | undefined
        billCycleType?:
          | 'DefaultFromCustomer'
          | 'SpecificDayofMonth'
          | 'SubscriptionStartDay'
          | 'ChargeTriggerDay'
          | 'SpecificDayofWeek'
          | undefined
        billingPeriod?:
          | 'Month'
          | 'Quarter'
          | 'Semi_Annual'
          | 'Annual'
          | 'Eighteen_Months'
          | 'Two_Years'
          | 'Three_Years'
          | 'Five_Years'
          | 'Specific_Months'
          | 'Subscription_Term'
          | 'Week'
          | 'Specific_Weeks'
          | undefined
        billingPeriodAlignment?:
          | 'AlignToCharge'
          | 'AlignToSubscriptionStart'
          | 'AlignToTermStart'
          | undefined
        billingTiming?: 'IN_ADVANCE' | 'IN_ARREARS' | undefined
        specificBillingPeriod?: number | undefined
        weeklyBillCycleDay?:
          | 'Sunday'
          | 'Monday'
          | 'Tuesday'
          | 'Wednesday'
          | 'Thursday'
          | 'Friday'
          | 'Saturday'
          | undefined
      }
    | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  endDate?: EndConditions | undefined
  pricing?:
    | {
        chargeModelData?: ChargeModelDataOverride | undefined
        discount?: DiscountPricingOverride | undefined
        oneTimeFlatFee?: OneTimeFlatFeePricingOverride | undefined
        oneTimePerUnit?: OneTimePerUnitPricingOverride | undefined
        oneTimeTiered?: OneTimeTieredPricingOverride | undefined
        oneTimeVolume?: OneTimeVolumePricingOverride | undefined
        recurringFlatFee?: RecurringFlatFeePricingOverride | undefined
        recurringPerUnit?: RecurringPerUnitPricingOverride | undefined
        recurringTiered?: RecurringTieredPricingOverride | undefined
        recurringVolume?: RecurringVolumePricingOverride | undefined
        usageFlatFee?: UsageFlatFeePricingOverride | undefined
        usageOverage?: UsageOveragePricingOverride | undefined
        usagePerUnit?: UsagePerUnitPricingOverride | undefined
        usageTiered?: UsageTieredPricingOverride | undefined
        usageTieredWithOverage?: UsageTieredWithOveragePricingOverride | undefined
        usageVolume?: UsageVolumePricingOverride | undefined
      }
    | undefined
  productRatePlanChargeId: string
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'Contract Effective Date'
    | 'Service Activation Date'
    | 'Customer Acceptance Date'
    | undefined
  revenueRecognitionRuleName?: 'Recognize upon invoicing' | 'Recognize daily over time' | undefined
  startDate?: TriggerParams | undefined
  uniqueToken?: string | undefined
}
type RatePlanOverride = {
  chargeOverrides?: ChargeOverride[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  newRatePlanId?: string | undefined
  productRatePlanId: string
  uniqueToken?: string | undefined
}
type BillToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: 'Work' | 'Mobile' | 'Home' | 'Other' | undefined
  personalEmail?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
}
type SoldToContact = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  fax?: string | undefined
  firstName: string
  homePhone?: string | undefined
  lastName: string
  mobilePhone?: string | undefined
  nickname?: string | undefined
  otherPhone?: string | undefined
  otherPhoneType?: 'Work' | 'Mobile' | 'Home' | 'Other' | undefined
  personalEmail?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  taxRegion?: string | undefined
  workEmail?: string | undefined
  workPhone?: string | undefined
}
type CreateSubscription = {
  invoiceSeparately?: boolean | undefined
  newSubscriptionOwnerAccount?:
    | {
        accountNumber?: string | undefined
        autoPay?: boolean | undefined
        batch?: string | undefined
        billCycleDay: number
        billToContact: BillToContact
        communicationProfileId?: string | undefined
        creditCard?: CreditCard | undefined
        crmId?: string | undefined
        currency: string
        customFields?: AccountObjectCustomFields | undefined
        hpmCreditCardPaymentMethodId?: string | undefined
        invoiceDeliveryPrefsEmail?: boolean | undefined
        invoiceDeliveryPrefsPrint?: boolean | undefined
        invoiceTemplateId?: string | undefined
        name: string
        notes?: string | undefined
        parentId?: string | undefined
        paymentGateway?: string | undefined
        paymentMethod?: PaymentMethod | undefined
        paymentTerm?: string | undefined
        soldToContact?: SoldToContact | undefined
        taxInfo?: TaxInfo | undefined
      }
    | undefined
  notes?: string | undefined
  subscribeToRatePlans?: RatePlanOverride[] | undefined
  subscriptionNumber?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  terms?:
    | {
        autoRenew?: boolean | undefined
        initialTerm: {
          period?: number | undefined
          periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
          startDate?: string | undefined
          termType: 'TERMED' | 'EVERGREEN'
        }
        renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
        renewalTerms: RenewalTerm[]
      }
    | undefined
}
type OrderItem = {
  endDate?: string | undefined
  id?: string | undefined
  orderActionId?: string | undefined
  quantity?: number | undefined
  scId?: string | undefined
  startDate?: string | undefined
}
type TimeSlicedElpNetMetrics = {
  amount?: number | undefined
  endDate?: string | undefined
  generatedReason?:
    | 'IncreaseQuantity'
    | 'DecreaseQuantity'
    | 'ChangePrice'
    | 'Extension'
    | 'Contraction'
    | undefined
  invoiceOwner?: string | undefined
  orderItemId?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  tax?: number | undefined
  termNumber?: number | undefined
  type?: 'Regular' | 'Discount' | undefined
}
type TimeSlicedNetMetrics = {
  amount?: number | undefined
  discountChargeNumber?: string | undefined
  endDate?: string | undefined
  generatedReason?:
    | 'IncreaseQuantity'
    | 'DecreaseQuantity'
    | 'ChangePrice'
    | 'Extension'
    | 'Contraction'
    | undefined
  invoiceOwner?: string | undefined
  orderItemId?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  termNumber?: number | undefined
  type?: 'Regular' | 'Discount' | undefined
}
type TimeSlicedMetrics = {
  amount?: number | undefined
  endDate?: string | undefined
  generatedReason?:
    | 'IncreaseQuantity'
    | 'DecreaseQuantity'
    | 'ChangePrice'
    | 'Extension'
    | 'Contraction'
    | undefined
  invoiceOwner?: string | undefined
  orderItemId?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  termNumber?: number | undefined
}
type TimeSlicedTcbNetMetrics = {
  amount?: number | undefined
  discountChargeNumber?: string | undefined
  endDate?: string | undefined
  generatedReason?:
    | 'IncreaseQuantity'
    | 'DecreaseQuantity'
    | 'ChangePrice'
    | 'Extension'
    | 'Contraction'
    | undefined
  invoiceOwner?: string | undefined
  orderItemId?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  tax?: number | undefined
  termNumber?: number | undefined
  type?: 'Regular' | 'Discount' | undefined
}
type OrderMetric = {
  chargeNumber?: string | undefined
  elp?: TimeSlicedElpNetMetrics[] | undefined
  mrr?: TimeSlicedNetMetrics[] | undefined
  originRatePlanId?: string | undefined
  productRatePlanChargeId?: string | undefined
  productRatePlanId?: string | undefined
  quantity?: TimeSlicedMetrics[] | undefined
  tcb?: TimeSlicedTcbNetMetrics[] | undefined
  tcv?: TimeSlicedNetMetrics[] | undefined
}
type GetOrderResume = {
  extendsTerm?: boolean | undefined
  resumeDate?: string | undefined
  resumePeriods?: number | undefined
  resumePeriodsType?: 'Day' | 'Week' | 'Month' | 'Year' | undefined
  resumePolicy?:
    | 'Today'
    | 'FixedPeriodsFromSuspendDate'
    | 'FixedPeriodsFromToday'
    | 'SpecificDate'
    | 'SuspendDate'
    | undefined
  resumeSpecificDate?: string | undefined
}
type GetOrderSuspend = {
  suspendDate?: string | undefined
  suspendPeriods?: number | undefined
  suspendPeriodsType?: 'Day' | 'Week' | 'Month' | 'Year' | undefined
  suspendPolicy?:
    | 'Today'
    | 'EndOfLastInvoicePeriod'
    | 'FixedPeriodsFromToday'
    | 'SpecificDate'
    | undefined
  suspendSpecificDate?: string | undefined
}
type InitialTerm = {
  period?: number | undefined
  periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
  startDate?: string | undefined
  termType: 'TERMED' | 'EVERGREEN'
}
type TermsAndConditions = {
  autoRenew?: boolean | undefined
  initialTerm?: InitialTerm | undefined
  renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
  renewalTerms?: RenewalTerm[] | undefined
}
type PricingUpdate = {
  chargeModelData?: ChargeModelDataOverride | undefined
  discount?: DiscountPricingUpdate | undefined
  recurringFlatFee?: RecurringFlatFeePricingUpdate | undefined
  recurringPerUnit?: RecurringPerUnitPricingUpdate | undefined
  recurringTiered?: RecurringTieredPricingUpdate | undefined
  recurringVolume?: RecurringVolumePricingUpdate | undefined
  usageFlatFee?: UsageFlatFeePricingUpdate | undefined
  usageOverage?: UsageOveragePricingUpdate | undefined
  usagePerUnit?: UsagePerUnitPricingUpdate | undefined
  usageTiered?: UsageTieredPricingUpdate | undefined
  usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate | undefined
  usageVolume?: UsageVolumePricingUpdate | undefined
}
type ChargeUpdate = {
  billing?: BillingUpdate | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  effectiveDate?: TriggerParams | undefined
  pricing?: PricingUpdate | undefined
  uniqueToken?: string | undefined
}
type RatePlanUpdate = {
  chargeUpdates?: ChargeUpdate[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  newRatePlanId?: string | undefined
  ratePlanId?: string | undefined
  specificUpdateDate?: string | undefined
  uniqueToken?: string | undefined
}
type OrderAction = {
  addProduct?: RatePlanOverride | undefined
  cancelSubscription?: CancelSubscription | undefined
  createSubscription?: CreateSubscription | undefined
  customFields?: OrderActionObjectCustomFields | undefined
  id?: string | undefined
  orderItems?: OrderItem[] | undefined
  orderMetrics?: OrderMetric[] | undefined
  ownerTransfer?: OwnerTransfer | undefined
  removeProduct?: RemoveProduct | undefined
  resume?: GetOrderResume | undefined
  sequence?: number | undefined
  suspend?: GetOrderSuspend | undefined
  termsAndConditions?: TermsAndConditions | undefined
  triggerDates?: TriggerDate[] | undefined
  type?:
    | 'CreateSubscription'
    | 'TermsAndConditions'
    | 'AddProduct'
    | 'UpdateProduct'
    | 'RemoveProduct'
    | 'RenewSubscription'
    | 'CancelSubscription'
    | 'OwnerTransfer'
    | 'Suspend'
    | 'Resume'
    | undefined
  updateProduct?: RatePlanUpdate | undefined
}
type Order = {
  createdBy?: string | undefined
  createdDate?: string | undefined
  currency?: string | undefined
  customFields?: OrderObjectCustomFields | undefined
  description?: string | undefined
  existingAccountNumber?: string | undefined
  orderDate?: string | undefined
  orderLineItems?: OrderLineItemRetrieveOrder[] | undefined
  orderNumber?: string | undefined
  status?: 'Completed' | 'Pending' | undefined
  subscriptions?:
    | {
        baseVersion?: number | undefined
        customFields?: SubscriptionObjectCustomFields | undefined
        newVersion?: number | undefined
        orderActions?: OrderAction[] | undefined
        quote?: QuoteObjectFields | undefined
        ramp?: { [x: string]: unknown } | undefined
        sequence?: number | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
  updatedBy?: string | undefined
  updatedDate?: string | undefined
}
type GetAllOrdersResponseType = {
  nextPage?: string | undefined
  orders?: Order[] | undefined
  success?: boolean | undefined
}
type PostOrderResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  accountId?: string | undefined
  accountNumber?: string | undefined
  creditMemoIds?: string[] | undefined
  creditMemoNumbers?: string[] | undefined
  invoiceIds?: string[] | undefined
  invoiceNumbers?: string[] | undefined
  orderId?: string | undefined
  orderLineItems?: { id?: string | undefined; itemNumber?: string | undefined }[] | undefined
  orderNumber?: string | undefined
  paidAmount?: string | undefined
  paymentId?: string | undefined
  paymentNumber?: string | undefined
  ramps?: { rampNumber?: string | undefined; subscriptionNumber?: string | undefined }[] | undefined
  status?: 'Completed' | 'Pending' | undefined
  subscriptionIds?: string[] | undefined
  subscriptionNumbers?: string[] | undefined
  subscriptions?:
    | {
        status?:
          | 'Active'
          | 'Pending Activation'
          | 'Pending Acceptance'
          | 'Cancelled'
          | 'Suspended'
          | undefined
        subscriptionId?: string | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
}
type GetOrdersResponse = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  nextPage?: string | undefined
  orders?: Order[] | undefined
}
type ChargePreviewMetrics = {
  chargeNumber?: string | undefined
  cmrr?:
    | {
        discount?: number | undefined
        discountDelta?: number | undefined
        regular?: number | undefined
        regularDelta?: number | undefined
      }
    | undefined
  originRatePlanId?: string | undefined
  productRatePlanChargeId?: string | undefined
  productRatePlanId?: string | undefined
  tax?:
    | {
        discount?: number | undefined
        discountDelta?: number | undefined
        regular?: number | undefined
        regularDelta?: number | undefined
      }
    | undefined
  tcb?:
    | {
        discount?: number | undefined
        discountDelta?: number | undefined
        regular?: number | undefined
        regularDelta?: number | undefined
      }
    | undefined
  tcv?:
    | {
        discount?: number | undefined
        discountDelta?: number | undefined
        regular?: number | undefined
        regularDelta?: number | undefined
      }
    | undefined
}
type InvoiceItemPreviewResult = {
  additionalInfo?: { quantity?: number | undefined; unitOfMeasure?: string | undefined } | undefined
  amountWithoutTax?: number | undefined
  appliedToChargeNumber?: string | undefined
  chargeDescription?: string | undefined
  chargeName?: string | undefined
  chargeNumber?: string | undefined
  processingType?: 'Charge' | 'Discount' | 'Tax' | undefined
  productName?: string | undefined
  productRatePlanChargeId?: string | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  subscriptionNumber?: string | undefined
  taxAmount?: number | undefined
}
type OrderDeltaMrr = {
  chargeNumber?: string | undefined
  currency?: string | undefined
  endDate?: string | undefined
  grossAmount?: number | undefined
  netAmount?: number | undefined
  orderActionId?: string | undefined
  orderActionSequence?: string | undefined
  orderActionType?: string | undefined
  productRatePlanChargeId?: string | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionNumber?: string | undefined
}
type OrderDeltaTcb = {
  chargeNumber?: string | undefined
  currency?: string | undefined
  endDate?: string | undefined
  grossAmount?: number | undefined
  netAmount?: number | undefined
  orderActionId?: string | undefined
  orderActionSequence?: string | undefined
  orderActionType?: string | undefined
  productRatePlanChargeId?: string | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionNumber?: string | undefined
  orderLineItemId?: string | undefined
}
type OrderDeltaTcv = {
  chargeNumber?: string | undefined
  currency?: string | undefined
  endDate?: string | undefined
  grossAmount?: number | undefined
  netAmount?: number | undefined
  orderActionId?: string | undefined
  orderActionSequence?: string | undefined
  orderActionType?: string | undefined
  productRatePlanChargeId?: string | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionNumber?: string | undefined
  orderLineItemId?: string | undefined
}
type RampIntervalChargeDeltaMetrics = {
  chargeNumber?: string | undefined
  deltaDiscountTcb?: number | undefined
  deltaDiscountTcv?: number | undefined
  deltaGrossTcb?: number | undefined
  deltaGrossTcv?: number | undefined
  deltaMrr?:
    | {
        discount?: number | undefined
        endDate?: string | undefined
        gross?: number | undefined
        net?: number | undefined
        startDate?: string | undefined
      }[]
    | undefined
  deltaNetTcb?: number | undefined
  deltaNetTcv?: number | undefined
  deltaQuantity?:
    | {
        amount?: number | undefined
        endDate?: string | undefined
        startDate?: string | undefined
      }[]
    | undefined
  productRatePlanChargeId?: string | undefined
  subscriptionNumber?: string | undefined
}
type RampIntervalChargeMetrics = {
  chargeNumber?: string | undefined
  discountTcb?: number | undefined
  discountTcv?: number | undefined
  endDate?: string | undefined
  grossTcb?: number | undefined
  grossTcv?: number | undefined
  mrr?:
    | {
        discount?: number | undefined
        endDate?: string | undefined
        gross?: number | undefined
        net?: number | undefined
        startDate?: string | undefined
      }[]
    | undefined
  netTcb?: number | undefined
  netTcv?: number | undefined
  productRatePlanChargeId?: string | undefined
  quantity?: number | undefined
  ratePlanChargeId?: string | undefined
  startDate?: string | undefined
  subscriptionNumber?: string | undefined
}
type OrderRampIntervalMetrics = {
  description?: string | undefined
  discountTcb?: number | undefined
  discountTcv?: number | undefined
  endDate?: string | undefined
  grossTcb?: number | undefined
  grossTcv?: number | undefined
  intervalDeltaMetrics?: RampIntervalChargeDeltaMetrics[] | undefined
  intervalMetrics?: RampIntervalChargeMetrics[] | undefined
  name?: string | undefined
  netTcb?: number | undefined
  netTcv?: number | undefined
  startDate?: string | undefined
}
type OrderRampMetrics = {
  description?: string | undefined
  discountTcb?: number | undefined
  discountTcv?: number | undefined
  grossTcb?: number | undefined
  grossTcv?: number | undefined
  intervals?: OrderRampIntervalMetrics[] | undefined
  name?: string | undefined
  netTcb?: number | undefined
  netTcv?: number | undefined
  number?: string | undefined
}
type PreviewResult = {
  chargeMetrics?:
    | { charges?: ChargePreviewMetrics[] | undefined; subscriptionNumber?: string | undefined }[]
    | undefined
  creditMemos?:
    | {
        amount?: number | undefined
        amountWithoutTax?: number | undefined
        creditMemoItems?: InvoiceItemPreviewResult[] | undefined
        targetDate?: string | undefined
        taxAmount?: number | undefined
      }[]
    | undefined
  invoices?:
    | {
        amount?: number | undefined
        amountWithoutTax?: number | undefined
        invoiceItems?: InvoiceItemPreviewResult[] | undefined
        targetDate?: string | undefined
        taxAmount?: number | undefined
      }[]
    | undefined
  orderDeltaMetrics?:
    | {
        orderDeltaMrr?: OrderDeltaMrr[] | undefined
        orderDeltaTcb?: OrderDeltaTcb[] | undefined
        orderDeltaTcv?: OrderDeltaTcv[] | undefined
      }
    | undefined
  orderMetrics?:
    | {
        orderActions?:
          | {
              orderItems?: OrderItem[] | undefined
              orderMetrics?: OrderMetric[] | undefined
              sequence?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
  rampMetrics?: OrderRampMetrics[] | undefined
}
type PostOrderPreviewResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  previewResult?: PreviewResult | undefined
}
type Term = {
  endDate?: string | undefined
  isEvergreen?: boolean | undefined
  startDate?: string | undefined
  termNumber?: number | undefined
}
type GetSubscriptionTermInfoResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  nextPage?: string | undefined
  terms?: Term[] | undefined
}
type GetOrderResponse = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  order?: Order | undefined
}
type PUTOrderPatchRequestType = {
  customFields?: OrderObjectCustomFields | undefined
  subscriptions?:
    | {
        orderActions?:
          | {
              customFields?: OrderActionObjectCustomFields | undefined
              orderActionId?: string | undefined
              sequence?: number | undefined
            }[]
          | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
}
type ChargeOverrideForEvergreen = {
  billing?:
    | {
        billCycleDay?: number | undefined
        billCycleType?:
          | 'DefaultFromCustomer'
          | 'SpecificDayofMonth'
          | 'SubscriptionStartDay'
          | 'ChargeTriggerDay'
          | 'SpecificDayofWeek'
          | undefined
        billingPeriod?:
          | 'Month'
          | 'Quarter'
          | 'Semi_Annual'
          | 'Annual'
          | 'Eighteen_Months'
          | 'Two_Years'
          | 'Three_Years'
          | 'Five_Years'
          | 'Specific_Months'
          | 'Subscription_Term'
          | 'Week'
          | 'Specific_Weeks'
          | undefined
        billingPeriodAlignment?:
          | 'AlignToCharge'
          | 'AlignToSubscriptionStart'
          | 'AlignToTermStart'
          | undefined
        billingTiming?: 'IN_ADVANCE' | 'IN_ARREARS' | undefined
        specificBillingPeriod?: number | undefined
        weeklyBillCycleDay?:
          | 'Sunday'
          | 'Monday'
          | 'Tuesday'
          | 'Wednesday'
          | 'Thursday'
          | 'Friday'
          | 'Saturday'
          | undefined
      }
    | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  endDate?: EndConditions | undefined
  pricing?:
    | {
        chargeModelData?: ChargeModelDataOverride | undefined
        discount?: DiscountPricingOverride | undefined
        oneTimeFlatFee?: OneTimeFlatFeePricingOverride | undefined
        oneTimePerUnit?: OneTimePerUnitPricingOverride | undefined
        oneTimeTiered?: OneTimeTieredPricingOverride | undefined
        oneTimeVolume?: OneTimeVolumePricingOverride | undefined
        recurringFlatFee?: RecurringFlatFeePricingOverride | undefined
        recurringPerUnit?: RecurringPerUnitPricingOverride | undefined
        recurringTiered?: RecurringTieredPricingOverride | undefined
        recurringVolume?: RecurringVolumePricingOverride | undefined
        usageFlatFee?: UsageFlatFeePricingOverride | undefined
        usageOverage?: UsageOveragePricingOverride | undefined
        usagePerUnit?: UsagePerUnitPricingOverride | undefined
        usageTiered?: UsageTieredPricingOverride | undefined
        usageTieredWithOverage?: UsageTieredWithOveragePricingOverride | undefined
        usageVolume?: UsageVolumePricingOverride | undefined
      }
    | undefined
  productRatePlanChargeId: string
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'Contract Effective Date'
    | 'Service Activation Date'
    | 'Customer Acceptance Date'
    | undefined
  revenueRecognitionRuleName?: 'Recognize upon invoicing' | 'Recognize daily over time' | undefined
  startDate?: TriggerParams | undefined
  uniqueToken?: string | undefined
}
type RatePlanOverrideForEvergreen = {
  chargeOverrides?: ChargeOverrideForEvergreen[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  newRatePlanId?: string | undefined
  productRatePlanId: string
  uniqueToken?: string | undefined
}
type CreateSubscriptionForEvergreen = {
  invoiceSeparately?: boolean | undefined
  newSubscriptionOwnerAccount?:
    | {
        accountNumber?: string | undefined
        autoPay?: boolean | undefined
        batch?: string | undefined
        billCycleDay: number
        billToContact: BillToContact
        communicationProfileId?: string | undefined
        creditCard?: CreditCard | undefined
        crmId?: string | undefined
        currency: string
        customFields?: AccountObjectCustomFields | undefined
        hpmCreditCardPaymentMethodId?: string | undefined
        invoiceDeliveryPrefsEmail?: boolean | undefined
        invoiceDeliveryPrefsPrint?: boolean | undefined
        invoiceTemplateId?: string | undefined
        name: string
        notes?: string | undefined
        parentId?: string | undefined
        paymentGateway?: string | undefined
        paymentMethod?: PaymentMethod | undefined
        paymentTerm?: string | undefined
        soldToContact?: SoldToContact | undefined
        taxInfo?: TaxInfo | undefined
      }
    | undefined
  notes?: string | undefined
  subscribeToRatePlans?: RatePlanOverrideForEvergreen[] | undefined
  subscriptionNumber?: string | undefined
  subscriptionOwnerAccountNumber?: string | undefined
  terms?:
    | {
        autoRenew?: boolean | undefined
        initialTerm: {
          period?: number | undefined
          periodType?: 'Month' | 'Year' | 'Day' | 'Week' | undefined
          startDate?: string | undefined
          termType: 'TERMED' | 'EVERGREEN'
        }
        renewalSetting?: 'RENEW_WITH_SPECIFIC_TERM' | 'RENEW_TO_EVERGREEN' | undefined
        renewalTerms: RenewalTerm[]
      }
    | undefined
}
type TimeSlicedNetMetricsForEvergreen = {
  amount?: number | undefined
  discountChargeNumber?: string | undefined
  endDate?: string | undefined
  invoiceOwner?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  termNumber?: number | undefined
  type?: 'Regular' | 'Discount' | undefined
}
type TimeSlicedMetricsForEvergreen = {
  amount?: number | undefined
  endDate?: string | undefined
  invoiceOwner?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  termNumber?: number | undefined
}
type TimeSlicedTcbNetMetricsForEvergreen = {
  amount?: number | undefined
  discountChargeNumber?: string | undefined
  endDate?: string | undefined
  invoiceOwner?: string | undefined
  startDate?: string | undefined
  subscriptionOwner?: string | undefined
  tax?: number | undefined
  termNumber?: number | undefined
  type?: 'Regular' | 'Discount' | undefined
}
type OrderMetricsForEvergreen = {
  chargeNumber?: string | undefined
  mrr?: TimeSlicedNetMetricsForEvergreen[] | undefined
  originRatePlanId?: string | undefined
  productRatePlanChargeId?: string | undefined
  productRatePlanId?: string | undefined
  quantity?: TimeSlicedMetricsForEvergreen[] | undefined
  tcb?: TimeSlicedTcbNetMetricsForEvergreen[] | undefined
  tcv?: TimeSlicedNetMetricsForEvergreen[] | undefined
}
type PricingUpdateForEvergreen = {
  chargeModelData?: ChargeModelDataOverride | undefined
  discount?: DiscountPricingUpdate | undefined
  recurringFlatFee?: RecurringFlatFeePricingUpdate | undefined
  recurringPerUnit?: RecurringPerUnitPricingUpdate | undefined
  recurringTiered?: RecurringTieredPricingUpdate | undefined
  recurringVolume?: RecurringVolumePricingUpdate | undefined
  usageFlatFee?: UsageFlatFeePricingUpdate | undefined
  usageOverage?: UsageOveragePricingUpdate | undefined
  usagePerUnit?: UsagePerUnitPricingUpdate | undefined
  usageTiered?: UsageTieredPricingUpdate | undefined
  usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate | undefined
  usageVolume?: UsageVolumePricingUpdate | undefined
}
type ChargeUpdateForEvergreen = {
  billing?: BillingUpdate | undefined
  chargeNumber?: string | undefined
  customFields?: RatePlanChargeObjectCustomFields | undefined
  description?: string | undefined
  effectiveDate?: TriggerParams | undefined
  pricing?: PricingUpdateForEvergreen | undefined
  uniqueToken?: string | undefined
}
type RatePlanUpdateForEvergreen = {
  chargeUpdates?: ChargeUpdateForEvergreen[] | undefined
  customFields?: RatePlanObjectCustomFields | undefined
  newRatePlanId?: string | undefined
  ratePlanId?: string | undefined
  specificUpdateDate?: string | undefined
  uniqueToken?: string | undefined
}
type OrderActionForEvergreen = {
  addProduct?: RatePlanOverrideForEvergreen | undefined
  cancelSubscription?: CancelSubscription | undefined
  createSubscription?: CreateSubscriptionForEvergreen | undefined
  customFields?: OrderActionObjectCustomFields | undefined
  id?: string | undefined
  orderMetrics?: OrderMetricsForEvergreen[] | undefined
  ownerTransfer?: OwnerTransfer | undefined
  removeProduct?: RemoveProduct | undefined
  resume?: GetOrderResume | undefined
  sequence?: number | undefined
  suspend?: GetOrderSuspend | undefined
  termsAndConditions?: TermsAndConditions | undefined
  triggerDates?: TriggerDate[] | undefined
  type?:
    | 'CreateSubscription'
    | 'TermsAndConditions'
    | 'AddProduct'
    | 'UpdateProduct'
    | 'RemoveProduct'
    | 'RenewSubscription'
    | 'CancelSubscription'
    | 'OwnerTransfer'
    | 'Suspend'
    | 'Resume'
    | undefined
  updateProduct?: RatePlanUpdateForEvergreen | undefined
}
type OrderForEvergreen = {
  createdBy?: string | undefined
  createdDate?: string | undefined
  currency?: string | undefined
  customFields?: OrderObjectCustomFields | undefined
  description?: string | undefined
  existingAccountNumber?: string | undefined
  orderDate?: string | undefined
  orderNumber?: string | undefined
  status?: string | undefined
  subscriptions?:
    | {
        baseVersion?: number | undefined
        customFields?: SubscriptionObjectCustomFields | undefined
        newVersion?: number | undefined
        orderActions?: OrderActionForEvergreen[] | undefined
        quote?: QuoteObjectFields | undefined
        sequence?: number | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
  updatedBy?: string | undefined
  updatedDate?: string | undefined
}
type GetOrderResponseForEvergreen = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  order?: OrderForEvergreen | undefined
}
type GETRampMetricsByOrderNumberResponseType = {
  rampMetrics?: OrderRampMetrics[] | undefined
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type PUTOrderActionTriggerDatesRequestType = {
  subscriptions?:
    | {
        orderActions?:
          | {
              charges?:
                | { chargeNumber?: string | undefined; specificTriggerDate?: string | undefined }[]
                | undefined
              sequence: number
              triggerDates?:
                | {
                    name?: 'ServiceActivation' | 'CustomerAcceptance' | undefined
                    triggerDate?: string | undefined
                  }[]
                | undefined
            }[]
          | undefined
        subscriptionNumber: string
      }[]
    | undefined
}
type PUTOrderTriggerDatesResponseType = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  accountNumber?: string | undefined
  orderNumber?: string | undefined
  status?: 'Completed' | 'Pending' | undefined
  subscriptions?:
    | {
        status?: 'Active' | 'Pending Activation' | 'Pending Acceptance' | undefined
        subscriptionNumber?: string | undefined
      }[]
    | undefined
}
type POSTPaymentMethodRequest = {
  type: string
  BAID?: string | undefined
  email?: string | undefined
  preapprovalKey?: string | undefined
  cardHolderInfo?: CreatePaymentMethodCardholderInfo | undefined
  cardNumber?: string | undefined
  cardType?: string | undefined
  checkDuplicated?: boolean | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  mitConsentAgreementRef?: string | undefined
  mitConsentAgreementSrc?: 'External' | undefined
  mitNetworkTransactionId?: string | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileAgreedOn?: string | undefined
  mitProfileType?: 'Recurring' | 'Unscheduled' | undefined
  securityCode?: string | undefined
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  bankABACode?: string | undefined
  bankAccountName?: string | undefined
  bankAccountNumber?: string | undefined
  bankAccountType?: 'BusinessChecking' | 'Checking' | 'Saving' | undefined
  bankName?: string | undefined
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
  accountKey?: string | undefined
  authGateway?: string | undefined
  makeDefault?: boolean | undefined
  IBAN?: string | undefined
  accountHolderInfo?:
    | {
        accountHolderName: string
        addressLine1?: string | undefined
        addressLine2?: string | undefined
        city?: string | undefined
        email?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        phone?: string | undefined
        state?: string | undefined
        zipCode?: string | undefined
      }
    | undefined
  accountNumber?: string | undefined
  bankCode?: string | undefined
  branchCode?: string | undefined
  businessIdentificationCode?: string | undefined
  currencyCode?: string | undefined
  identityNumber?: string | undefined
}
type POSTPaymentMethodResponse = {
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
  id?: string | undefined
}
type POSTPaymentMethodType = {
  accountKey?: string | undefined
  cardHolderInfo?: CreatePaymentMethodCardholderInfo | undefined
  creditCardNumber: string
  creditCardType: string
  defaultPaymentMethod?: boolean | undefined
  expirationMonth: number
  expirationYear: number
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  mitConsentAgreementRef?: string | undefined
  mitConsentAgreementSrc?: 'External' | undefined
  mitNetworkTransactionId?: string | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileAgreedOn?: string | undefined
  mitProfileType?: 'Recurring' | 'Unscheduled' | undefined
  numConsecutiveFailures?: number | undefined
  securityCode?: string | undefined
}
type POSTPaymentMethodResponseType = {
  paymentMethodId?: string | undefined
  success?: boolean | undefined
}
type GETPaymentMethodType = {
  cardHolderInfo?:
    | {
        addressLine1?: string | undefined
        addressLine2?: string | undefined
        cardHolderName?: string | undefined
        city?: string | undefined
        country?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        state?: string | undefined
        zipCode?: string | undefined
      }
    | undefined
  cardNumber?: string | undefined
  cardType?: string | undefined
  defaultPaymentMethod?: boolean | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  id?: string | undefined
}
type GETPaymentMethodsType = {
  creditCards?: GETPaymentMethodType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type PUTPaymentMethodType = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  cardHolderName?: string | undefined
  city?: string | undefined
  country?: string | undefined
  defaultPaymentMethod?: boolean | undefined
  email?: string | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  numConsecutiveFailures?: number | undefined
  phone?: string | undefined
  securityCode?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type PUTPaymentMethodResponseType = {
  paymentMethodId?: string | undefined
  success?: boolean | undefined
}
type POSTPaymentMethodDecryption = {
  accountID?: string | undefined
  cardHolderInfo?:
    | {
        addressLine1?: string | undefined
        addressLine2?: string | undefined
        cardHolderName?: string | undefined
        city?: string | undefined
        country?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        state?: string | undefined
        zipCode?: string | undefined
      }
    | undefined
  integrationType: string
  invoiceId?: string | undefined
  merchantID: string
  mitConsentAgreementSrc?: 'External' | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileType?: 'Recurring' | undefined
  paymentGateway?: string | undefined
  paymentToken: { [x: string]: unknown }
  processPayment?: boolean | undefined
}
type POSTPaymentMethodResponseDecryption = {
  amount?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  success?: boolean | undefined
}
type GETPMAccountHolderInfo = {
  accountHolderName?: string | undefined
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type POSTPMMandateInfo = {
  existingMandateStatus?: true | false | undefined
  mandateCreationDate?: string | undefined
  mandateId?: string | undefined
  mandateReason?: string | undefined
  mandateReceivedStatus?: true | false | undefined
  mandateStatus?: string | undefined
  mandateUpdateDate?: string | undefined
  mitConsentAgreementRef?: string | undefined
  mitConsentAgreementSrc?: 'External' | undefined
  mitProfileAction?: 'Activate' | 'Persist' | undefined
  mitProfileAgreedOn?: string | undefined
  mitProfileType?: string | undefined
  mitTransactionId?: string | undefined
}
type GETPaymentMethodResponse = {
  accountHolderInfo?: GETPMAccountHolderInfo | undefined
  id?: string | undefined
  isDefault?: boolean | undefined
  mandateInfo?: POSTPMMandateInfo | undefined
  status?: 'Active' | 'Closed' | 'Scrubbed' | undefined
  type?: string | undefined
  IBAN?: string | undefined
  accountNumber?: string | undefined
  bankCode?: string | undefined
  bankTransferType?: string | undefined
  branchCode?: string | undefined
  businessIdentificationCode?: string | undefined
  identityNumber?: string | undefined
  bankABACode?: string | undefined
  bankAccountName?: string | undefined
  bankAccountNumber?: string | undefined
  bankAccountType?: 'BusinessChecking' | 'Checking' | 'Saving' | undefined
  bankName?: string | undefined
  cardNumber?: string | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  securityCode?: string | undefined
  BAID?: string | undefined
  email?: string | undefined
  preapprovalKey?: string | undefined
}
type PUTPMAccountHolderInfo = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type PUTPaymentMethodRequest = {
  accountHolderInfo?: PUTPMAccountHolderInfo | undefined
  authGateway?: string | undefined
  currencyCode?: string | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  expirationMonth?: number | undefined
  expirationYear?: number | undefined
  securityCode?: string | undefined
}
type PUTPaymentMethodResponse = { id?: string | undefined; success?: boolean | undefined }
type POSTDelayAuthorizeCapture = {
  accountId: string
  accountNumber: string
  amount: number
  gatewayOrderId: string
  mitTransactionSource?: 'C_Unscheduled' | 'M_Recurring' | 'M_Unscheduled' | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
}
type POSTAuthorizeResponse = {
  gatewayOrderId?: string | undefined
  resultCode?: string | undefined
  resultMessage?: string | undefined
  success?: boolean | undefined
  transactionId?: string | undefined
}
type GetStoredCredentialProfilesResponse = {
  profiles?:
    | {
        activatedOn?: string | undefined
        agreedOn?: string | undefined
        brand?: string | undefined
        cancelledOn?: string | undefined
        consentAgreementRef?: string | undefined
        consentAgreementSrc?: 'External' | undefined
        expiredOn?: string | undefined
        number?: number | undefined
        paymentMethodId?: string | undefined
        status?: 'Agreed' | 'Active' | 'Cancelled' | 'Expired' | undefined
        type?: 'Recurring' | 'Unscheduled' | undefined
      }
    | undefined
  success?: boolean | undefined
}
type CreateStoredCredentialProfileRequest = {
  action?: 'Activate' | 'Persist' | undefined
  agreedOn?: string | undefined
  authGateway?: string | undefined
  cardSecurityCode?: string | undefined
  consentAgreementRef?: string | undefined
  consentAgreementSrc: 'External'
  networkTransactionId?: string | undefined
  status: 'Agreed' | 'Active'
  type: 'Recurring' | 'Unscheduled'
}
type ModifiedStoredCredentialProfileResponse = {
  number?: number | undefined
  paymentMethodId?: string | undefined
  success?: boolean | undefined
}
type PUTVerifyPaymentMethodType = {
  currencyCode?: string | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  paymentGatewayName?: string | undefined
  securityCode?: string | undefined
}
type PUTVerifyPaymentMethodResponseType = {
  paymentMethodId?: string | undefined
  success?: boolean | undefined
}
type POSTVoidAuthorize = {
  accountId?: string | undefined
  accountNumber?: string | undefined
  gatewayOrderId: string
  paymentGatewayId?: string | undefined
  transactionId: string
}
type POSTVoidAuthorizeResponse = {
  gatewayOrderId?: string | undefined
  resultCode?: string | undefined
  resultMessage?: string | undefined
  success?: boolean | undefined
  transactionId?: string | undefined
}
type GETPaymentRunType = {
  accountId?: string | undefined
  applyCreditBalance?: boolean | undefined
  autoApplyCreditMemo?: boolean | undefined
  autoApplyUnappliedPayment?: boolean | undefined
  batch?: string | undefined
  billCycleDay?: string | undefined
  billingRunId?: string | undefined
  collectPayment?: boolean | undefined
  completedOn?: string | undefined
  consolidatedPayment?: boolean | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  currency?: string | undefined
  executedOn?: string | undefined
  id?: string | undefined
  number?: string | undefined
  paymentGatewayId?: string | undefined
  processPaymentWithClosedPM?: boolean | undefined
  runDate?: string | undefined
  status?: 'Pending' | 'Processing' | 'Completed' | 'Error' | 'Canceled' | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETPaymentRunCollectionType = {
  nextPage?: string | undefined
  paymentRuns?: GETPaymentRunType[] | undefined
  success?: boolean | undefined
}
type POSTPaymentRunDataElementRequest = {
  accountId: string
  amount?: number | undefined
  comment?: string | undefined
  documentId?: string | undefined
  documentType?: 'Invoice' | 'DebitMemo' | undefined
  paymentGatewayId?: string | undefined
  paymentMethodId?: string | undefined
}
type POSTPaymentRunRequest = {
  accountId?: string | undefined
  applyCreditBalance?: boolean | undefined
  autoApplyCreditMemo?: boolean | undefined
  autoApplyUnappliedPayment?: boolean | undefined
  batch?: string | undefined
  billCycleDay?: string | undefined
  billingRunId?: string | undefined
  collectPayment?: boolean | undefined
  consolidatedPayment?: boolean | undefined
  currency?: string | undefined
  data?: POSTPaymentRunDataElementRequest[] | undefined
  paymentGatewayId?: string | undefined
  processPaymentWithClosedPM?: boolean | undefined
  runDate?: string | undefined
  targetDate?: string | undefined
}
type PUTPaymentRunRequest = {
  accountId?: string | undefined
  applyCreditBalance?: boolean | undefined
  autoApplyCreditMemo?: boolean | undefined
  autoApplyUnappliedPayment?: boolean | undefined
  batch?: string | undefined
  billCycleDay?: string | undefined
  billingRunId?: string | undefined
  collectPayment?: boolean | undefined
  consolidatedPayment?: boolean | undefined
  currency?: string | undefined
  paymentGatewayId?: string | undefined
  processPaymentWithClosedPM?: boolean | undefined
  runDate?: string | undefined
  targetDate?: string | undefined
}
type GETPaymentRunDataTransactionElementResponse = {
  amount?: number | undefined
  appliedAmount?: number | undefined
  errorCode?: string | undefined
  errorMessage?: string | undefined
  id?: string | undefined
  status?: 'Processed' | 'Processing' | 'Error' | undefined
  type?: 'Payment' | 'CreditMemo' | 'UnappliedPayment' | 'CreditBalanceAdjustment' | undefined
}
type GETPaymentRunDataElementResponse = {
  accountId?: string | undefined
  amount?: number | undefined
  amountCollected?: number | undefined
  amountToCollect?: number | undefined
  comment?: string | undefined
  documentId?: string | undefined
  documentType?: 'Invoice' | 'DebitMemo' | undefined
  errorCode?: string | undefined
  errorMessage?: string | undefined
  paymentGatewayId?: string | undefined
  paymentMethodId?: string | undefined
  result?: 'Processed' | 'Error' | undefined
  transactions?: GETPaymentRunDataTransactionElementResponse[] | undefined
}
type GETPaymentRunDataArrayResponse = {
  data?: GETPaymentRunDataElementResponse[] | undefined
  success?: boolean | undefined
}
type GETPaymentRunSummaryTotalValues = {
  totalValueOfCreditBalance?: string | undefined
  totalValueOfCreditMemos?: string | undefined
  totalValueOfDebitMemos?: string | undefined
  totalValueOfErrors?: string | undefined
  totalValueOfInvoices?: string | undefined
  totalValueOfPayments?: string | undefined
  totalValueOfReceivables?: string | undefined
  totalValueOfUnappliedPayments?: number | undefined
  totalValueOfUnprocessedDebitMemos?: string | undefined
  totalValueOfUnprocessedInvoices?: string | undefined
  totalValueOfUnprocessedReceivables?: string | undefined
}
type GETPaymentRunSummaryResponse = {
  numberOfCreditBalanceAdjustments?: number | undefined
  numberOfCreditMemos?: number | undefined
  numberOfDebitMemos?: number | undefined
  numberOfErrorInputData?: number | undefined
  numberOfErrors?: number | undefined
  numberOfInputData?: number | undefined
  numberOfInvoices?: number | undefined
  numberOfPayments?: number | undefined
  numberOfProcessedInputData?: number | undefined
  numberOfReceivables?: number | undefined
  numberOfUnappliedPayments?: number | undefined
  numberOfUnprocessedDebitMemos?: number | undefined
  numberOfUnprocessedInvoices?: number | undefined
  numberOfUnprocessedReceivables?: number | undefined
  success?: boolean | undefined
  totalValues?: GETPaymentRunSummaryTotalValues[] | undefined
}
type GETAPaymentGatwayResponse = {
  id?: string | undefined
  isActive?: boolean | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
  type?: string | undefined
}
type GETPaymentGatwaysResponse = {
  paymentgateways?: GETAPaymentGatwayResponse[] | undefined
  success?: boolean | undefined
}
type GETARPaymentTypewithSuccess = {
  accountId?: string | undefined
  amount?: number | undefined
  appliedAmount?: number | undefined
  authTransactionId?: string | undefined
  bankIdentificationNumber?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditBalanceAmount?: number | undefined
  currency?: string | undefined
  effectiveDate?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayOrderId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  number?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  referenceId?: string | undefined
  refundAmount?: number | undefined
  secondPaymentReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  standalone?: boolean | undefined
  status?: 'Draft' | 'Processing' | 'Processed' | 'Error' | 'Canceled' | 'Posted' | undefined
  submittedOn?: string | undefined
  type?: 'External' | 'Electronic' | undefined
  unappliedAmount?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type PaymentCollectionResponseType = {
  nextPage?: string | undefined
  payments?: GETARPaymentTypewithSuccess[] | undefined
  success?: boolean | undefined
}
type PaymentDebitMemoApplicationItemCreateRequestType = {
  amount: number
  debitMemoItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentDebitMemoApplicationCreateRequestType = {
  amount: number
  debitMemoId?: string | undefined
  items?: PaymentDebitMemoApplicationItemCreateRequestType[] | undefined
}
type PaymentInvoiceApplicationItemCreateRequestType = {
  amount: number
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentInvoiceApplicationCreateRequestType = {
  amount: number
  invoiceId?: string | undefined
  items?: PaymentInvoiceApplicationItemCreateRequestType[] | undefined
}
type CreatePaymentType = {
  accountId?: string | undefined
  amount: number
  authTransactionId?: string | undefined
  comment?: string | undefined
  currency: string
  debitMemos?: PaymentDebitMemoApplicationCreateRequestType[] | undefined
  effectiveDate?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  gatewayOrderId?: string | undefined
  invoices?: PaymentInvoiceApplicationCreateRequestType[] | undefined
  mitTransactionSource?: 'C_Unscheduled' | 'M_Recurring' | 'M_Unscheduled' | undefined
  paymentMethodId?: string | undefined
  referenceId?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  standalone?: boolean | undefined
  type: 'External' | 'Electronic'
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type GETARPaymentType = {
  accountId?: string | undefined
  amount?: number | undefined
  appliedAmount?: number | undefined
  authTransactionId?: string | undefined
  bankIdentificationNumber?: string | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditBalanceAmount?: number | undefined
  currency?: string | undefined
  effectiveDate?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayOrderId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  number?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  referenceId?: string | undefined
  refundAmount?: number | undefined
  secondPaymentReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  standalone?: boolean | undefined
  status?: 'Draft' | 'Processing' | 'Processed' | 'Error' | 'Canceled' | 'Posted' | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  unappliedAmount?: number | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type UpdatePaymentType = {
  comment?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
      }
    | undefined
  referenceId?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type PaymentDebitMemoApplicationItemApplyRequestType = {
  amount: number
  debitMemoItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentDebitMemoApplicationApplyRequestType = {
  amount: number
  debitMemoId?: string | undefined
  items?: PaymentDebitMemoApplicationItemApplyRequestType[] | undefined
}
type PaymentInvoiceApplicationItemApplyRequestType = {
  amount: number
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentInvoiceApplicationApplyRequestType = {
  amount: number
  invoiceId?: string | undefined
  items?: PaymentInvoiceApplicationItemApplyRequestType[] | undefined
}
type ApplyPaymentType = {
  debitMemos?: PaymentDebitMemoApplicationApplyRequestType[] | undefined
  effectiveDate?: string | undefined
  invoices?: PaymentInvoiceApplicationApplyRequestType[] | undefined
}
type GETPaymentPartTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoId?: string | undefined
  id?: string | undefined
  invoiceId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETPaymentPartsCollectionType = {
  nextPage?: string | undefined
  parts?: GETPaymentPartTypewithSuccess[] | undefined
  success?: boolean | undefined
}
type GETPaymentPartType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoId?: string | undefined
  id?: string | undefined
  invoiceId?: string | undefined
  success?: boolean | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETPaymentItemPartTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoItemId?: string | undefined
  id?: string | undefined
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETPaymentItemPartCollectionType = {
  itemParts?: GETPaymentItemPartTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETPaymentItemPartType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  debitMemoItemId?: string | undefined
  id?: string | undefined
  invoiceItemId?: string | undefined
  success?: boolean | undefined
  taxItemId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type PostRefundType = {
  comment?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
      }
    | undefined
  gatewayOptions?: { key?: string | undefined; value?: string | undefined } | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  secondRefundReferenceId?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  totalAmount: number
  type: 'External' | 'Electronic'
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type GETRefundPaymentType = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: 'Processed' | 'Canceled' | 'Error' | 'Processing' | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type TransferPaymentType = { accountId?: string | undefined }
type PaymentDebitMemoApplicationItemUnapplyRequestType = {
  amount: number
  debitMemoItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentDebitMemoApplicationUnapplyRequestType = {
  amount: number
  debitMemoId?: string | undefined
  items?: PaymentDebitMemoApplicationItemUnapplyRequestType[] | undefined
}
type PaymentInvoiceApplicationItemUnapplyRequestType = {
  amount: number
  invoiceItemId?: string | undefined
  taxItemId?: string | undefined
}
type PaymentInvoiceApplicationUnapplyRequestType = {
  amount: number
  invoiceId?: string | undefined
  items?: PaymentInvoiceApplicationItemUnapplyRequestType[] | undefined
}
type UnapplyPaymentType = {
  debitMemos?: PaymentDebitMemoApplicationUnapplyRequestType[] | undefined
  effectiveDate?: string | undefined
  invoices?: PaymentInvoiceApplicationUnapplyRequestType[] | undefined
}
type POSTQuoteDocType = {
  apiuser?: string | undefined
  documentType: string
  locale?: string | undefined
  password?: string | undefined
  quoteId: string
  sandbox?: string | undefined
  serverUrl: string
  sessionId: string
  templateId: string
  token?: string | undefined
  useSFDCLocale?: string | undefined
  username?: string | undefined
  zquotesMajorVersion?: string | undefined
  zquotesMinorVersion?: string | undefined
}
type POSTQuoteDocResponseType = { file?: string | undefined; success?: boolean | undefined }
type RampChargeResponse = { chargeNumber?: string | undefined }
type RampIntervalResponse = {
  description?: string | undefined
  endDate?: string | undefined
  name?: string | undefined
  startDate?: string | undefined
}
type RampResponse = {
  charges?: RampChargeResponse[] | undefined
  description?: string | undefined
  id?: string | undefined
  intervals?: RampIntervalResponse[] | undefined
  name?: string | undefined
  number?: string | undefined
  subscriptionNumber?: string | undefined
}
type GETRampByRampNumberResponseType = {
  ramp?: RampResponse | undefined
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type RampIntervalMetrics = {
  description?: string | undefined
  discountTcb?: number | undefined
  discountTcv?: number | undefined
  endDate?: string | undefined
  grossTcb?: number | undefined
  grossTcv?: number | undefined
  intervalMetrics?: RampIntervalChargeMetrics[] | undefined
  name?: string | undefined
  netTcb?: number | undefined
  netTcv?: number | undefined
  startDate?: string | undefined
}
type RampMetrics = {
  description?: string | undefined
  discountTcb?: number | undefined
  discountTcv?: number | undefined
  grossTcb?: number | undefined
  grossTcv?: number | undefined
  intervals?: RampIntervalMetrics[] | undefined
  name?: string | undefined
  netTcb?: number | undefined
  netTcv?: number | undefined
  number?: string | undefined
}
type GETRampMetricsByRampNumberResponseType = {
  rampMetrics?: RampMetrics | undefined
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type GETProductRatePlanChargePricingTierType = {
  endingUnit?: string | undefined
  price?: string | undefined
  priceFormat?: string | undefined
  startingUnit?: string | undefined
  tier?: bigint | undefined
}
type GETProductRatePlanChargePricingType = {
  currency?: string | undefined
  discountAmount?: string | undefined
  discountPercentage?: string | undefined
  includedUnits?: string | undefined
  overagePrice?: string | undefined
  price?: string | undefined
  tiers?: GETProductRatePlanChargePricingTierType[] | undefined
}
type GETProductDiscountApplyDetailsType = {
  appliedProductRatePlanChargeId?: string | undefined
  appliedProductRatePlanId?: string | undefined
}
type GETProductRatePlanChargeType = {
  applyDiscountTo?: string | undefined
  billingDay?: string | undefined
  billingPeriod?: string | undefined
  billingPeriodAlignment?: string | undefined
  billingTiming?: string | undefined
  chargeModelConfigurations?: { [x: string]: unknown } | undefined
  defaultQuantity?: string | undefined
  description?: string | undefined
  discountClass?: string | undefined
  discountLevel?: string | undefined
  endDateCondition?: string | undefined
  financeInformation?:
    | {
        adjustmentLiabilityAccountingCode?: string | undefined
        adjustmentLiabilityAccountingCodeType?: string | undefined
        adjustmentRevenueAccountingCode?: string | undefined
        adjustmentRevenueAccountingCodeType?: string | undefined
        contractAssetAccountingCode?: string | undefined
        contractAssetAccountingCodeType?: string | undefined
        contractLiabilityAccountingCode?: string | undefined
        contractLiabilityAccountingCodeType?: string | undefined
        contractRecognizedRevenueAccountingCode?: string | undefined
        contractRecognizedRevenueAccountingCodeType?: string | undefined
        deferredRevenueAccountingCode?: string | undefined
        deferredRevenueAccountingCodeType?: string | undefined
        recognizedRevenueAccountingCode?: string | undefined
        recognizedRevenueAccountingCodeType?: string | undefined
        unbilledReceivablesAccountingCode?: string | undefined
        unbilledReceivablesAccountingCodeType?: string | undefined
      }
    | undefined
  formula?: string | undefined
  id?: string | undefined
  includedUnits?: string | undefined
  listPriceBase?: string | undefined
  maxQuantity?: string | undefined
  minQuantity?: string | undefined
  model?: string | undefined
  name?: string | undefined
  numberOfPeriods?: bigint | undefined
  overageCalculationOption?: string | undefined
  overageUnusedUnitsCreditOption?: string | undefined
  prepayPeriods?: bigint | undefined
  priceChangeOption?: string | undefined
  priceIncreasePercentage?: string | undefined
  pricing?: GETProductRatePlanChargePricingType[] | undefined
  pricingSummary?: string[] | undefined
  productDiscountApplyDetails?: GETProductDiscountApplyDetailsType[] | undefined
  ratingGroup?: string | undefined
  revRecCode?: string | undefined
  revRecTriggerCondition?:
    | 'ContractEffectiveDate'
    | 'ServiceActivationDate'
    | 'CustomerAcceptanceDate'
    | undefined
  revenueRecognitionRuleName?: string | undefined
  smoothingModel?: string | undefined
  specificBillingPeriod?: bigint | undefined
  taxCode?: string | undefined
  taxMode?: string | undefined
  taxable?: boolean | undefined
  triggerEvent?: string | undefined
  type?: string | undefined
  uom?: string | undefined
  upToPeriods?: bigint | undefined
  upToPeriodsType?: string | undefined
  usageRecordRatingOption?: string | undefined
  useDiscountSpecificAccountingCode?: boolean | undefined
  useTenantDefaultForPriceChange?: boolean | undefined
  Class__NS?: string | undefined
  DeferredRevAccount__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  RecognizedRevAccount__NS?: string | undefined
  RevRecEnd__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecStart__NS?:
    | 'Charge Period Start'
    | 'Rev Rec Trigger Date'
    | 'Use NetSuite Rev Rec Template'
    | undefined
  RevRecTemplateType__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETProductRatePlanType = {
  description?: string | undefined
  effectiveEndDate?: string | undefined
  effectiveStartDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  productRatePlanCharges?: GETProductRatePlanChargeType[] | undefined
  status?: string | undefined
  BillingPeriod__NS?: 'Monthly' | 'Quarterly' | 'Annual' | 'Semi-Annual' | undefined
  Class__NS?: string | undefined
  Department__NS?: string | undefined
  IncludeChildren__NS?: 'Yes' | 'No' | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  ItemType__NS?: 'Inventory' | 'Non Inventory' | 'Service' | undefined
  Location__NS?: string | undefined
  MultiCurrencyPrice__NS?: string | undefined
  Price__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETProductRatePlansResponse = {
  nextPage?: string | undefined
  productRatePlans?: GETProductRatePlanType[] | undefined
  success?: boolean | undefined
}
type GETRefundTypewithSuccess = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: 'Processed' | 'Canceled' | 'Error' | 'Processing' | undefined
  submittedOn?: string | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type GETRefundCollectionType = {
  nextPage?: string | undefined
  refunds?: GETRefundTypewithSuccess[] | undefined
  success?: boolean | undefined
}
type POSTReconcileRefundRequest = {
  action?: 'settle' | 'reject' | undefined
  actionDate?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  payoutId?: string | undefined
}
type POSTReconcileRefundResponse = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?: 'Settled' | 'FailedToSettle' | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: string | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETRefundType = {
  accountId?: string | undefined
  amount?: number | undefined
  cancelledOn?: string | undefined
  comment?: string | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        bankAccountAccountingCodeType?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
        unappliedPaymentAccountingCodeType?: string | undefined
      }
    | undefined
  gatewayId?: string | undefined
  gatewayReconciliationReason?: string | undefined
  gatewayReconciliationStatus?: string | undefined
  gatewayResponse?: string | undefined
  gatewayResponseCode?: string | undefined
  gatewayState?:
    | 'MarkedForSubmission'
    | 'Submitted'
    | 'Settled'
    | 'NotSubmitted'
    | 'FailedToSettle'
    | undefined
  id?: string | undefined
  markedForSubmissionOn?: string | undefined
  methodType?:
    | 'ACH'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'PayPal'
    | 'WireTransfer'
    | 'DebitCard'
    | 'CreditCardReferenceTransaction'
    | 'BankTransfer'
    | 'Other'
    | undefined
  number?: string | undefined
  paymentId?: string | undefined
  paymentMethodId?: string | undefined
  paymentMethodSnapshotId?: string | undefined
  payoutId?: string | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  refundDate?: string | undefined
  refundTransactionTime?: string | undefined
  secondRefundReferenceId?: string | undefined
  settledOn?: string | undefined
  softDescriptor?: string | undefined
  softDescriptorPhone?: string | undefined
  status?: 'Processed' | 'Canceled' | 'Error' | 'Processing' | undefined
  submittedOn?: string | undefined
  success?: boolean | undefined
  type?: 'External' | 'Electronic' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type PUTRefundType = {
  comment?: string | undefined
  financeInformation?:
    | {
        bankAccountAccountingCode?: string | undefined
        transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
        unappliedPaymentAccountingCode?: string | undefined
      }
    | undefined
  reasonCode?: string | undefined
  referenceId?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: string | undefined
}
type RefundPartResponseTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  id?: string | undefined
  paymentId?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETRefundPartCollectionType = {
  parts?: RefundPartResponseTypewithSuccess[] | undefined
  success?: boolean | undefined
}
type RefundPartResponseType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoId?: string | undefined
  id?: string | undefined
  paymentId?: string | undefined
  success?: boolean | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETRefundItemPartTypewithSuccess = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  id?: string | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETRefundItemPartCollectionType = {
  itemParts?: GETRefundItemPartTypewithSuccess[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETRefundItemPartType = {
  amount?: number | undefined
  createdById?: string | undefined
  createdDate?: string | undefined
  creditMemoItemId?: string | undefined
  creditTaxItemId?: string | undefined
  id?: string | undefined
  success?: boolean | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type GETRevenueItemType = {
  accountingPeriodEndDate?: string | undefined
  accountingPeriodName?: string | undefined
  accountingPeriodStartDate?: string | undefined
  amount?: string | undefined
  currency?: string | undefined
  isAccountingPeriodClosed?: boolean | undefined
}
type GETRevenueEventDetailWithoutSuccessType = {
  accountId?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  notes?: string | undefined
  number?: string | undefined
  recognitionEnd?: string | undefined
  recognitionStart?: string | undefined
  revenueItems?: GETRevenueItemType[] | undefined
  subscriptionChargeId?: string | undefined
  subscriptionId?: string | undefined
}
type GETRevenueEventDetailsType = {
  nextPage?: string | undefined
  revenueEventDetails?: GETRevenueEventDetailWithoutSuccessType[] | undefined
  success?: boolean | undefined
}
type GETRevenueEventDetailType = {
  accountId?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  notes?: string | undefined
  number?: string | undefined
  recognitionEnd?: string | undefined
  recognitionStart?: string | undefined
  revenueItems?: GETRevenueItemType[] | undefined
  subscriptionChargeId?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
}
type GETRevenueItemsType = {
  nextPage?: string | undefined
  revenueItems?: GETRevenueItemType[] | undefined
  success?: boolean | undefined
}
type EventRevenueItemType = { accountingPeriodName: string }
type PUTEventRIDetailType = { revenueItems: EventRevenueItemType[] }
type GETRsRevenueItemType = {
  accountingPeriodEndDate?: string | undefined
  accountingPeriodName?: string | undefined
  accountingPeriodStartDate?: string | undefined
  amount?: string | undefined
  currency?: string | undefined
  deferredRevenueAccountingCode?: string | undefined
  deferredRevenueAccountingCodeType?: string | undefined
  isAccountingPeriodClosed?: boolean | undefined
  recognizedRevenueAccountingCode?: string | undefined
  recognizedRevenueAccountingCodeType?: string | undefined
}
type GETRsRevenueItemsType = {
  nextPage?: string | undefined
  revenueItems?: GETRsRevenueItemType[] | undefined
  success?: boolean | undefined
}
type RevenueScheduleItemType = { accountingPeriodName: string }
type PUTScheduleRIDetailType = { revenueItems: RevenueScheduleItemType[] }
type GETRevenueRecognitionRuleAssociationType = {
  revenueRecognitionRuleName?: string | undefined
  success?: boolean | undefined
}
type GETRSDetailType = {
  accountId?: string | undefined
  amount?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  linkedTransactionId?: string | undefined
  linkedTransactionNumber?: string | undefined
  linkedTransactionType?: string | undefined
  notes?: string | undefined
  number?: string | undefined
  recognitionRuleName?: string | undefined
  recognizedRevenue?: string | undefined
  referenceId?: string | undefined
  revenueItems?: GETRsRevenueItemType[] | undefined
  revenueScheduleDate?: string | undefined
  subscriptionChargeId?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  undistributedUnrecognizedRevenue?: string | undefined
  unrecognizedRevenue?: string | undefined
  updatedOn?: string | undefined
}
type POSTDistributionItemType = { accountingPeriodName: string; newAmount: string }
type POSTRevenueScheduleByTransactionTypeRevenueEvent = {
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
}
type POSTRevenueScheduleByTransactionType = {
  notes?: string | undefined
  revenueDistributions?: POSTDistributionItemType[] | undefined
  revenueEvent?: POSTRevenueScheduleByTransactionTypeRevenueEvent | undefined
}
type POSTRevenueScheduleByTransactionResponseType = {
  revenueScheduleNumber?: string | undefined
  success?: boolean | undefined
}
type POSTRevenueScheduleByTransactionRatablyTypeRevenueEvent = {
  eventType?: string | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
}
type POSTRevenueScheduleByTransactionRatablyCMType = {
  distributionType?: string | undefined
  notes?: string | undefined
  recognitionEnd: string
  recognitionStart: string
  revenueEvent?: POSTRevenueScheduleByTransactionRatablyTypeRevenueEvent | undefined
}
type POSTRevenueScheduleByTransactionRatablyDMType = {
  distributionType?: string | undefined
  notes?: string | undefined
  recognitionEnd: string
  recognitionStart: string
  revenueEvent?: POSTRevenueScheduleByTransactionRatablyTypeRevenueEvent | undefined
}
type POSTRevenueScheduleByDateRangeTypeRevenueEvent = {
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
}
type POSTRevenueScheduleByDateRangeType = {
  distributionType?:
    | 'Daily Distribution'
    | 'Monthly Distribution (Back Load)'
    | 'Monthly Distribution (Front Load)'
    | 'Monthly Distribution (Proration by Days)'
    | undefined
  notes?: string | undefined
  recognitionEnd: string
  recognitionStart: string
  revenueEvent: POSTRevenueScheduleByDateRangeTypeRevenueEvent
}
type GETRSDetailForProductChargeType = {
  accountId?: string | undefined
  amount?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  linkedTransactionId?: string | undefined
  linkedTransactionNumber?: string | undefined
  linkedTransactionType?: string | undefined
  notes?: string | undefined
  number?: string | undefined
  productChargeId?: string | undefined
  recognitionRuleName?: string | undefined
  recognizedRevenue?: string | undefined
  referenceId?: string | undefined
  revenueItems?: GETRsRevenueItemType[] | undefined
  revenueScheduleDate?: string | undefined
  undistributedUnrecognizedRevenue?: string | undefined
  unrecognizedRevenue?: string | undefined
  updatedOn?: string | undefined
}
type GETRSDetailsByProductChargeType = {
  nextPage?: string | undefined
  revenueSchedules?: GETRSDetailForProductChargeType[] | undefined
  success?: boolean | undefined
}
type GETRSDetailWithoutSuccessType = {
  accountId?: string | undefined
  amount?: string | undefined
  createdOn?: string | undefined
  currency?: string | undefined
  linkedTransactionId?: string | undefined
  linkedTransactionNumber?: string | undefined
  linkedTransactionType?: string | undefined
  notes?: string | undefined
  number?: string | undefined
  recognitionRuleName?: string | undefined
  recognizedRevenue?: string | undefined
  referenceId?: string | undefined
  revenueItems?: GETRsRevenueItemType[] | undefined
  revenueScheduleDate?: string | undefined
  subscriptionChargeId?: string | undefined
  subscriptionId?: string | undefined
  undistributedUnrecognizedRevenue?: string | undefined
  unrecognizedRevenue?: string | undefined
  updatedOn?: string | undefined
}
type GETRSDetailsByChargeType = {
  nextPage?: string | undefined
  revenueSchedules?: GETRSDetailWithoutSuccessType[] | undefined
  success?: boolean | undefined
}
type POSTRevenueScheduleByChargeTypeRevenueEvent = {
  eventType:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
  eventTypeSystemId: string
  notes?: string | undefined
}
type POSTRevenueScheduleByChargeType = {
  amount: string
  deferredRevenueAccountingCode?: string | undefined
  deferredRevenueAccountingCodeType?: string | undefined
  notes?: string | undefined
  overrideChargeAccountingCodes?: true | false | undefined
  recognizedRevenueAccountingCode?: string | undefined
  recognizedRevenueAccountingCodeType?: string | undefined
  referenceId?: string | undefined
  revenueDistributions?: POSTDistributionItemType[] | undefined
  revenueEvent?: POSTRevenueScheduleByChargeTypeRevenueEvent | undefined
  revenueScheduleDate: string
}
type POSTRevenueScheduleByChargeResponseType = {
  revenueScheduleNumber?: string | undefined
  success?: boolean | undefined
}
type PUTRSBasicInfoType = { notes?: string | undefined; referenceId?: string | undefined }
type PUTAllocateManuallyType = {
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
  revenueDistributions?: POSTDistributionItemType[] | undefined
}
type PUTRevenueScheduleResponseType = {
  revenueEventNumber?: string | undefined
  success?: boolean | undefined
}
type PUTSpecificDateAllocationType = {
  amount?: string | undefined
  distributeOn: string
  distributionType:
    | 'specific date (delta fixed amount)'
    | 'specific date (delta percent total)'
    | 'specific date (delta percent undistributed)'
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
  percentage?: string | undefined
}
type PUTRSTermType = {
  distributionType?:
    | 'Daily Distribution'
    | 'Monthly Distribution (Back Load)'
    | 'Monthly Distribution (Front Load)'
    | 'Monthly Distribution (Proration by Days)'
    | undefined
  eventType?:
    | 'Invoice Posted'
    | 'Invoice Item Adjustment Created'
    | 'Invoice Canceled'
    | 'Invoice Item Adjustment Canceled'
    | 'Revenue Distributed'
    | 'Credit Memo Posted'
    | 'Debit Memo Posted'
    | undefined
  eventTypeSystemId?: string | undefined
  notes?: string | undefined
  recognitionEnd: string
  recognitionStart: string
}
type RevproAccountingCodes = {
  adjustmentLiabilityAccount: string
  adjustmentRevenueAccount: string
  contractAssetAccount: string
  contractLiabilityAccount: string
  productRatePlanChargeId: string
  recognizedRevenueAccount: string
  unbilledReceivablesAccount: string
}
type PUTRevproAccCodeResponse = { success?: boolean | undefined }
type POSTRSASignatureType = { method: string; pageId: string; uri: string }
type POSTRSASignatureResponseType = {
  key?: string | undefined
  signature?: string | undefined
  success?: boolean | undefined
  tenantId?: string | undefined
  token?: string | undefined
}
type POSTDecryptionType = { method: string; publicKey: string; signature: string }
type POSTDecryptResponseType = {
  decryptedSignature?: string | undefined
  publicKey?: string | undefined
  signature?: string | undefined
  success?: boolean | undefined
}
type CreditMemoEntityPrefix = { prefix?: string | undefined; startNumber?: number | undefined }
type DebitMemoEntityPrefix = { prefix?: string | undefined; startNumber?: number | undefined }
type InvoiceEntityPrefix = { prefix?: string | undefined; startNumber?: number | undefined }
type PaymentEntityPrefix = { prefix?: string | undefined; startNumber?: number | undefined }
type RefundEntityPrefix = { prefix?: string | undefined; startNumber?: number | undefined }
type GETSequenceSetResponse = {
  creditMemo?: CreditMemoEntityPrefix | undefined
  debitMemo?: DebitMemoEntityPrefix | undefined
  id?: string | undefined
  invoice?: InvoiceEntityPrefix | undefined
  name?: string | undefined
  payment?: PaymentEntityPrefix | undefined
  refund?: RefundEntityPrefix | undefined
}
type GETSequenceSetsResponse = {
  sequenceSets?: GETSequenceSetResponse[] | undefined
  success?: boolean | undefined
}
type POSTSequenceSetRequest = {
  creditMemo: CreditMemoEntityPrefix
  debitMemo: DebitMemoEntityPrefix
  invoice: InvoiceEntityPrefix
  name: string
  payment?: PaymentEntityPrefix | undefined
  refund?: RefundEntityPrefix | undefined
}
type POSTSequenceSetsRequest = { sequenceSets?: POSTSequenceSetRequest[] | undefined }
type POSTSequenceSetsResponse = {
  sequenceSets?: GETSequenceSetResponse[] | undefined
  success?: boolean | undefined
}
type PUTSequenceSetRequest = {
  creditMemo?: CreditMemoEntityPrefix | undefined
  debitMemo?: DebitMemoEntityPrefix | undefined
  invoice?: InvoiceEntityPrefix | undefined
  name?: string | undefined
  payment?: PaymentEntityPrefix | undefined
  refund?: RefundEntityPrefix | undefined
}
type PUTSequenceSetResponse = { success?: boolean | undefined }
type GETRevenueStartDateSettingType = {
  startDate?: string | undefined
  success?: boolean | undefined
  updatedBy?: string | undefined
  updatedOn?: string | undefined
}
type POSTSubscriptionType = {
  accountKey: string
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  autoRenew?: boolean | undefined
  collect?: boolean | undefined
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  documentDate?: string | undefined
  gatewayId?: string | undefined
  initialTerm?: bigint | undefined
  initialTermPeriodType?: string | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceOwnerAccountKey?: string | undefined
  invoiceSeparately?: boolean | undefined
  invoiceTargetDate?: string | undefined
  notes?: string | undefined
  paymentMethodId?: string | undefined
  renewalSetting?: string | undefined
  renewalTerm: bigint
  renewalTermPeriodType?: string | undefined
  runBilling?: true | false | undefined
  serviceActivationDate?: string | undefined
  subscribeToRatePlans: POSTSrpCreateType[]
  subscriptionNumber?: string | undefined
  targetDate?: string | undefined
  termStartDate?: string | undefined
  termType: string
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type POSTSubscriptionResponseType = {
  contractedMrr?: number | undefined
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  subscriptionId?: string | undefined
  subscriptionNumber?: string | undefined
  success?: boolean | undefined
  totalContractedValue?: number | undefined
}
type GETDiscountApplyDetailsType = {
  appliedProductRatePlanChargeId?: string | undefined
  appliedProductRatePlanId?: string | undefined
}
type GETTierType = {
  endingUnit?: number | undefined
  price?: number | undefined
  priceFormat?: string | undefined
  startingUnit?: number | undefined
  tier?: bigint | undefined
}
type GETSubscriptionRatePlanChargesType = {
  applyDiscountTo?: string | undefined
  billingDay?: string | undefined
  billingPeriod?: string | undefined
  billingPeriodAlignment?: string | undefined
  billingTiming?: string | undefined
  chargeModelConfiguration?: ChargeModelConfigurationType | undefined
  chargedThroughDate?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  discountAmount?: number | undefined
  discountApplyDetails?: GETDiscountApplyDetailsType[] | undefined
  discountClass?: string | undefined
  discountLevel?: string | undefined
  discountPercentage?: number | undefined
  dmrc?: number | undefined
  done?: boolean | undefined
  dtcv?: number | undefined
  effectiveEndDate?: string | undefined
  effectiveStartDate?: string | undefined
  endDateCondition?: string | undefined
  id?: string | undefined
  includedUnits?: number | undefined
  listPriceBase?: string | undefined
  model?: string | undefined
  mrr?: number | undefined
  name?: string | undefined
  number?: string | undefined
  numberOfPeriods?: bigint | undefined
  originalChargeId?: string | undefined
  overageCalculationOption?: string | undefined
  overagePrice?: number | undefined
  overageUnusedUnitsCreditOption?: string | undefined
  price?: number | undefined
  priceChangeOption?: string | undefined
  priceIncreasePercentage?: number | undefined
  pricingSummary?: string | undefined
  processedThroughDate?: string | undefined
  productRatePlanChargeId?: string | undefined
  quantity?: number | undefined
  ratingGroup?: string | undefined
  segment?: bigint | undefined
  smoothingModel?: string | undefined
  specificBillingPeriod?: bigint | undefined
  specificEndDate?: string | undefined
  tcv?: number | undefined
  tiers?: GETTierType[] | undefined
  triggerDate?: string | undefined
  triggerEvent?: string | undefined
  type?: string | undefined
  unusedUnitsCreditRates?: number | undefined
  uom?: string | undefined
  upToPeriods?: string | undefined
  upToPeriodsType?: string | undefined
  usageRecordRatingOption?: string | undefined
  version?: bigint | undefined
}
type GETSubscriptionProductFeatureType = {
  description?: string | undefined
  featureCode?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type GETSubscriptionRatePlanType = {
  id?: string | undefined
  lastChangeType?: string | undefined
  productId?: string | undefined
  productName?: string | undefined
  productRatePlanId?: string | undefined
  productSku?: string | undefined
  ratePlanCharges?: GETSubscriptionRatePlanChargesType[] | undefined
  ratePlanName?: string | undefined
  subscriptionProductFeatures?: GETSubscriptionProductFeatureType[] | undefined
}
type GETSubscriptionType = {
  accountId?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  autoRenew?: boolean | undefined
  contractEffectiveDate?: string | undefined
  contractedMrr?: number | undefined
  currentTerm?: bigint | undefined
  currentTermPeriodType?: string | undefined
  customerAcceptanceDate?: string | undefined
  id?: string | undefined
  initialTerm?: bigint | undefined
  initialTermPeriodType?: string | undefined
  invoiceOwnerAccountId?: string | undefined
  invoiceOwnerAccountName?: string | undefined
  invoiceOwnerAccountNumber?: string | undefined
  invoiceSeparately?: string | undefined
  notes?: string | undefined
  orderNumber?: string | undefined
  ratePlans?: GETSubscriptionRatePlanType[] | undefined
  renewalSetting?: string | undefined
  renewalTerm?: bigint | undefined
  renewalTermPeriodType?: string | undefined
  revision?: string | undefined
  serviceActivationDate?: string | undefined
  status?: string | undefined
  subscriptionEndDate?: string | undefined
  subscriptionNumber?: string | undefined
  subscriptionStartDate?: string | undefined
  termEndDate?: string | undefined
  termStartDate?: string | undefined
  termType?: string | undefined
  totalContractedValue?: number | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETSubscriptionWrapper = {
  nextPage?: string | undefined
  subscriptions?: GETSubscriptionType[] | undefined
  success?: boolean | undefined
}
type POSTSubscriptionPreviewTypePreviewAccountInfo = {
  billCycleDay: bigint
  billToContact: {
    city?: string | undefined
    country?: string | undefined
    county?: string | undefined
    state?: string | undefined
    taxRegion?: string | undefined
    zipCode?: string | undefined
  }
  currency: string
  Class__NS?: string | undefined
  CustomerType__NS?: 'Company' | 'Individual' | undefined
  Department__NS?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Location__NS?: string | undefined
  Subsidiary__NS?: string | undefined
  SyncDate__NS?: string | undefined
  SynctoNetSuite__NS?: 'Yes' | 'No' | undefined
}
type POSTSubscriptionPreviewType = {
  accountKey?: string | undefined
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  includeExistingDraftDocItems?: boolean | undefined
  includeExistingDraftInvoiceItems?: boolean | undefined
  initialTerm?: bigint | undefined
  initialTermPeriodType?: string | undefined
  invoiceOwnerAccountKey?: string | undefined
  invoiceTargetDate?: string | undefined
  notes?: string | undefined
  previewAccountInfo?: POSTSubscriptionPreviewTypePreviewAccountInfo | undefined
  previewType?: string | undefined
  serviceActivationDate?: string | undefined
  subscribeToRatePlans: POSTSrpCreateType[]
  targetDate?: string | undefined
  termStartDate?: string | undefined
  termType: string
}
type POSTSubscriptionPreviewCreditMemoItemsType = {
  amountWithoutTax?: number | undefined
  chargeAmount?: number | undefined
  chargeDescription?: string | undefined
  chargeName?: string | undefined
  productName?: string | undefined
  productRatePlanChargeId?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  taxAmount?: number | undefined
  unitOfMeasure?: string | undefined
}
type POSTSubscriptionPreviewInvoiceItemsType = {
  chargeAmount?: number | undefined
  chargeDescription?: string | undefined
  chargeName?: string | undefined
  productName?: string | undefined
  productRatePlanChargeId?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  taxAmount?: number | undefined
  unitOfMeasure?: string | undefined
}
type POSTSubscriptionPreviewResponseType = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  chargeMetrics?:
    | {
        dmrr?: string | undefined
        dtcv?: string | undefined
        mrr?: string | undefined
        number?: string | undefined
        originRatePlanId?: string | undefined
        originalId?: string | undefined
        productRatePlanChargeId?: string | undefined
        productRatePlanId?: string | undefined
        tcv?: string | undefined
      }
    | undefined
  contractedMrr?: number | undefined
  creditMemo?:
    | {
        amount?: number | undefined
        amountWithoutTax?: number | undefined
        creditMemoItems?: POSTSubscriptionPreviewCreditMemoItemsType[] | undefined
        taxAmount?: number | undefined
      }
    | undefined
  invoice?: { [x: string]: unknown } | undefined
  invoiceItems?: POSTSubscriptionPreviewInvoiceItemsType[] | undefined
  invoiceTargetDate?: string | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  totalContractedValue?: number | undefined
}
type GETSubscriptionTypeWithSuccess = {
  accountId?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  autoRenew?: boolean | undefined
  contractEffectiveDate?: string | undefined
  contractedMrr?: number | undefined
  currentTerm?: bigint | undefined
  currentTermPeriodType?: string | undefined
  customerAcceptanceDate?: string | undefined
  id?: string | undefined
  initialTerm?: bigint | undefined
  initialTermPeriodType?: string | undefined
  invoiceOwnerAccountId?: string | undefined
  invoiceOwnerAccountName?: string | undefined
  invoiceOwnerAccountNumber?: string | undefined
  invoiceSeparately?: string | undefined
  notes?: string | undefined
  orderNumber?: string | undefined
  ratePlans?: GETSubscriptionRatePlanType[] | undefined
  renewalSetting?: string | undefined
  renewalTerm?: bigint | undefined
  renewalTermPeriodType?: string | undefined
  revision?: string | undefined
  serviceActivationDate?: string | undefined
  status?: string | undefined
  subscriptionEndDate?: string | undefined
  subscriptionNumber?: string | undefined
  subscriptionStartDate?: string | undefined
  success?: boolean | undefined
  termEndDate?: string | undefined
  termStartDate?: string | undefined
  termType?: string | undefined
  totalContractedValue?: number | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PUTScAddType = {
  applyDiscountTo?: string | undefined
  billCycleDay?: string | undefined
  billCycleType?: string | undefined
  billingPeriod?: string | undefined
  billingPeriodAlignment?: string | undefined
  billingTiming?: string | undefined
  chargeModelConfiguration?: ChargeModelConfigurationType | undefined
  description?: string | undefined
  discountAmount?: number | undefined
  discountLevel?: string | undefined
  discountPercentage?: number | undefined
  endDateCondition?: string | undefined
  includedUnits?: number | undefined
  listPriceBase?: string | undefined
  number?: string | undefined
  numberOfPeriods?: bigint | undefined
  overagePrice?: number | undefined
  overageUnusedUnitsCreditOption?: string | undefined
  price?: number | undefined
  priceChangeOption?: string | undefined
  priceIncreasePercentage?: number | undefined
  productRatePlanChargeId: string
  quantity?: number | undefined
  ratingGroup?: string | undefined
  specificBillingPeriod?: bigint | undefined
  specificEndDate?: string | undefined
  tiers?: POSTTierType[] | undefined
  triggerDate?: string | undefined
  triggerEvent?: string | undefined
  unusedUnitsCreditRates?: number | undefined
  upToPeriods?: bigint | undefined
  upToPeriodsType?: string | undefined
}
type PUTSrpAddType = {
  chargeOverrides?: PUTScAddType[] | undefined
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  productRatePlanId: string
  serviceActivationDate?: string | undefined
}
type PUTSrpRemoveType = {
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  ratePlanId: string
  serviceActivationDate?: string | undefined
}
type PUTScUpdateType = {
  billingPeriodAlignment?: string | undefined
  chargeModelConfiguration?: ChargeModelConfigurationType | undefined
  description?: string | undefined
  includedUnits?: number | undefined
  overagePrice?: number | undefined
  price?: number | undefined
  priceChangeOption?: string | undefined
  priceIncreasePercentage?: number | undefined
  quantity?: number | undefined
  ratePlanChargeId: string
  tiers?: POSTTierType[] | undefined
  triggerDate?: string | undefined
  triggerEvent?: string | undefined
}
type PUTSrpUpdateType = {
  chargeUpdateDetails?: PUTScUpdateType[] | undefined
  contractEffectiveDate: string
  customerAcceptanceDate?: string | undefined
  ratePlanId: string
  serviceActivationDate?: string | undefined
  specificUpdateDate?: string | undefined
}
type PUTSubscriptionType = {
  add?: PUTSrpAddType[] | undefined
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  autoRenew?: boolean | undefined
  collect?: boolean | undefined
  currentTerm?: bigint | undefined
  currentTermPeriodType?: string | undefined
  documentDate?: string | undefined
  includeExistingDraftDocItems?: boolean | undefined
  includeExistingDraftInvoiceItems?: boolean | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceSeparately?: boolean | undefined
  invoiceTargetDate?: string | undefined
  notes?: string | undefined
  preview?: boolean | undefined
  previewType?: string | undefined
  remove?: PUTSrpRemoveType[] | undefined
  renewalSetting?: string | undefined
  renewalTerm?: bigint | undefined
  renewalTermPeriodType?: string | undefined
  runBilling?: true | false | undefined
  targetDate?: string | undefined
  termStartDate?: string | undefined
  termType?: string | undefined
  update?: PUTSrpUpdateType[] | undefined
  CpqBundleJsonId__QT?: string | undefined
  OpportunityCloseDate__QT?: string | undefined
  OpportunityName__QT?: string | undefined
  QuoteBusinessType__QT?: string | undefined
  QuoteNumber__QT?: string | undefined
  QuoteType__QT?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Project__NS?: string | undefined
  SalesOrder__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type PUTSubscriptionPreviewInvoiceItemsType = {
  chargeAmount?: number | undefined
  chargeDescription?: string | undefined
  chargeName?: string | undefined
  productName?: string | undefined
  productRatePlanChargeId?: string | undefined
  quantity?: number | undefined
  serviceEndDate?: string | undefined
  serviceStartDate?: string | undefined
  unitOfMeasure?: string | undefined
}
type PUTSubscriptionResponseType = {
  amount?: number | undefined
  amountWithoutTax?: number | undefined
  chargeMetrics?:
    | {
        dmrr?: string | undefined
        dtcv?: string | undefined
        mrr?: string | undefined
        number?: string | undefined
        originRatePlanId?: string | undefined
        originalId?: string | undefined
        productRatePlanChargeId?: string | undefined
        productRatePlanId?: string | undefined
        tcv?: string | undefined
      }
    | undefined
  creditMemo?:
    | {
        amount?: number | undefined
        amountWithoutTax?: number | undefined
        creditMemoItems?: POSTSubscriptionPreviewCreditMemoItemsType[] | undefined
        taxAmount?: number | undefined
      }
    | undefined
  creditMemoId?: string | undefined
  invoice?: { [x: string]: unknown } | undefined
  invoiceId?: string | undefined
  invoiceItems?: PUTSubscriptionPreviewInvoiceItemsType[] | undefined
  invoiceTargetDate?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  targetDate?: string | undefined
  taxAmount?: number | undefined
  totalDeltaMrr?: number | undefined
  totalDeltaTcv?: number | undefined
}
type POSTSubscriptionCancellationType = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  cancellationEffectiveDate?: string | undefined
  cancellationPolicy: string
  collect?: boolean | undefined
  contractEffectiveDate?: string | undefined
  documentDate?: string | undefined
  invoice?: boolean | undefined
  invoiceCollect: boolean
  invoiceTargetDate?: string | undefined
  runBilling?: true | false | undefined
  targetDate?: string | undefined
}
type POSTSubscriptionCancellationResponseType = {
  cancelledDate?: string | undefined
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  totalDeltaMrr?: number | undefined
  totalDeltaTcv?: number | undefined
}
type PUTRenewSubscriptionType = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  collect?: boolean | undefined
  documentDate?: string | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceTargetDate?: string | undefined
  runBilling?: true | false | undefined
  targetDate?: string | undefined
}
type PUTRenewSubscriptionResponseType = {
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  success?: boolean | undefined
  termEndDate?: string | undefined
  termStartDate?: string | undefined
  totalDeltaMrr?: number | undefined
  totalDeltaTcv?: number | undefined
}
type PUTSubscriptionResumeType = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  collect?: boolean | undefined
  contractEffectiveDate?: string | undefined
  documentDate?: string | undefined
  extendsTerm?: boolean | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceTargetDate?: string | undefined
  resumePeriods?: string | undefined
  resumePeriodsType?: string | undefined
  resumePolicy: string
  resumeSpecificDate?: string | undefined
  runBilling?: true | false | undefined
  targetDate?: string | undefined
}
type PUTSubscriptionResumeResponseType = {
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  resumeDate?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  termEndDate?: string | undefined
  totalDeltaTcv?: number | undefined
}
type PUTSubscriptionSuspendType = {
  applicationOrder?: string[] | undefined
  applyCredit?: boolean | undefined
  applyCreditBalance?: boolean | undefined
  collect?: boolean | undefined
  contractEffectiveDate?: string | undefined
  documentDate?: string | undefined
  extendsTerm?: boolean | undefined
  invoice?: boolean | undefined
  invoiceCollect?: boolean | undefined
  invoiceTargetDate?: string | undefined
  resume?: boolean | undefined
  resumePeriods?: string | undefined
  resumePeriodsType?: string | undefined
  resumePolicy?: string | undefined
  resumeSpecificDate?: string | undefined
  runBilling?: true | false | undefined
  suspendPeriods?: string | undefined
  suspendPeriodsType?: string | undefined
  suspendPolicy: string
  suspendSpecificDate?: string | undefined
  targetDate?: string | undefined
}
type PUTSubscriptionSuspendResponseType = {
  creditMemoId?: string | undefined
  invoiceId?: string | undefined
  paidAmount?: number | undefined
  paymentId?: string | undefined
  resumeDate?: string | undefined
  subscriptionId?: string | undefined
  success?: boolean | undefined
  suspendDate?: string | undefined
  termEndDate?: string | undefined
  totalDeltaTcv?: number | undefined
}
type GETRampMetricsBySubscriptionKeyResponseType = {
  rampMetrics?: RampMetrics | undefined
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type GETRampsBySubscriptionKeyResponseType = {
  ramps?: RampResponse[] | undefined
  processId?: string | undefined
  reasons?: { code?: string | undefined; message?: string | undefined }[] | undefined
  success?: boolean | undefined
}
type PUTSubscriptionPatchRequestType = {
  customFields?: SubscriptionObjectCustomFields | undefined
  ratePlans?:
    | {
        charges?:
          | {
              chargeId?: string | undefined
              chargeNumber?: string | undefined
              customFields?: RatePlanChargeObjectCustomFields | undefined
            }[]
          | undefined
        customFields?: RatePlanObjectCustomFields | undefined
        ratePlanId: string
      }[]
    | undefined
}
type GETTaxationItemType = {
  createdById?: string | undefined
  createdDate?: string | undefined
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        onAccountAccountingCodeType?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
        salesTaxPayableAccountingCodeType?: string | undefined
      }
    | undefined
  id?: string | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  memoItemId?: string | undefined
  name?: string | undefined
  sourceTaxItemId?: string | undefined
  success?: boolean | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
  updatedById?: string | undefined
  updatedDate?: string | undefined
}
type PUTTaxationItemType = {
  exemptAmount?: number | undefined
  financeInformation?:
    | {
        onAccountAccountingCode?: string | undefined
        salesTaxPayableAccountingCode?: string | undefined
      }
    | undefined
  jurisdiction?: string | undefined
  locationCode?: string | undefined
  name?: string | undefined
  taxAmount?: number | undefined
  taxCode?: string | undefined
  taxCodeDescription?: string | undefined
  taxDate?: string | undefined
  taxRate?: number | undefined
  taxRateDescription?: string | undefined
  taxRateType?: 'Percentage' | 'FlatFee' | undefined
}
type GETInvoiceType = {
  accountId?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  amount?: string | undefined
  balance?: string | undefined
  body?: string | undefined
  createdBy?: string | undefined
  creditBalanceAdjustmentAmount?: string | undefined
  dueDate?: string | undefined
  id?: string | undefined
  invoiceDate?: string | undefined
  invoiceFiles?: string | undefined
  invoiceItems?: string | undefined
  invoiceNumber?: string | undefined
  invoiceTargetDate?: string | undefined
  reversed?: boolean | undefined
  status?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  SyncDate__NS?: string | undefined
}
type GETInvoiceFileWrapper = {
  invoices?: GETInvoiceType[] | undefined
  nextPage?: string | undefined
  success?: boolean | undefined
}
type GETPaidInvoicesType = {
  appliedPaymentAmount?: string | undefined
  invoiceId?: string | undefined
  invoiceNumber?: string | undefined
}
type GETPaymentType = {
  accountID?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  amount?: string | undefined
  effectiveDate?: string | undefined
  gatewayTransactionNumber?: string | undefined
  id?: string | undefined
  paidInvoices?: GETPaidInvoicesType[] | undefined
  paymentMethodID?: string | undefined
  paymentNumber?: string | undefined
  status?: string | undefined
  type?: string | undefined
  IntegrationId__NS?: string | undefined
  IntegrationStatus__NS?: string | undefined
  Origin__NS?: string | undefined
  SyncDate__NS?: string | undefined
  Transaction__NS?: string | undefined
}
type GETPaymentsType = {
  nextPage?: string | undefined
  payments?: GETPaymentType[] | undefined
  success?: boolean | undefined
}
type POSTUsageResponseType = {
  checkImportStatus?: string | undefined
  size?: bigint | undefined
  success?: boolean | undefined
}
type GETUsageType = {
  accountId?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  chargeNumber?: string | undefined
  id?: string | undefined
  quantity?: string | undefined
  sourceName?: string | undefined
  startDateTime?: string | undefined
  status?: string | undefined
  submissionDateTime?: string | undefined
  subscriptionNumber?: string | undefined
  unitOfMeasure?: string | undefined
}
type GETUsageWrapper = {
  nextPage?: string | undefined
  success?: boolean | undefined
  usage?: GETUsageType[] | undefined
}
type PUTAcceptUserAccessResponseType = { success?: boolean | undefined }
type GETEntitiesUserAccessibleResponseType = {
  entities?: GETEntitiesType[] | undefined
  success?: boolean | undefined
}
type PUTDenyUserAccessResponseType = { success?: boolean | undefined }
type PUTSendUserAccessRequestType = { targetEntityIds: string[] }
type PUTSendUserAccessRequestResponseType = { success?: boolean | undefined }
type Workflow = {
  calloutTrigger?: boolean | undefined
  createdAt?: string | undefined
  description?: string | undefined
  id?: number | undefined
  interval?: string | undefined
  name?: string | undefined
  ondemandTrigger?: boolean | undefined
  scheduledTrigger?: boolean | undefined
  timezone?: string | undefined
  type?: 'Workflow::Setup' | 'Workflow::Instance' | undefined
  updatedAt?: string | undefined
}
type GetWorkflowsResponse = {
  data?: Workflow[] | undefined
  pagination?:
    | {
        next_page?: string | undefined
        page?: number | undefined
        page_length?: number | undefined
      }
    | undefined
}
type Linkage = {
  linkage_type?:
    | 'Start'
    | 'Success'
    | 'Failure'
    | 'Iterate'
    | true
    | false
    | 'Approve'
    | 'Reject'
    | undefined
  source_task_id?: number | undefined
  source_workflow_id?: number | undefined
  target_task_id?: number | undefined
}
type Task = {
  action_type?:
    | 'Approval'
    | 'Attachment'
    | 'Billing::BillRun'
    | 'Billing::CurrencyConversion'
    | 'Billing::CustomInvoice'
    | 'Callout'
    | 'Cancel'
    | 'Create'
    | 'CustomObject::Create'
    | 'CustomObject::Delete'
    | 'CustomObject::Query'
    | 'CustomObject::Update'
    | 'Data::BillingPreviewRun'
    | 'Data::Link'
    | 'Delay'
    | 'Delete'
    | 'Download::SFTP'
    | 'Email'
    | 'Export'
    | 'File::CustomPDF::CustomDocument'
    | 'If'
    | 'InvoiceGenerate'
    | 'Iterate'
    | 'Logic::CSVTranslator'
    | 'Logic::Case'
    | 'Logic::CustomCode'
    | 'Logic::JSONTransform'
    | 'Logic::Lambda'
    | 'Logic::ResponseFormatter'
    | 'Logic::XMLTransform'
    | 'NewProduct'
    | 'Notifications::GoogleCloudPrint'
    | 'Notifications::PhoneCall'
    | 'Notifications::SMS'
    | 'Payment::GatewayReconciliation'
    | 'Payment::PaymentRun'
    | 'Query'
    | 'RemoveProduct'
    | 'Reporting::ReportData'
    | 'Reporting::RunReport'
    | 'Resume'
    | 'Suspend'
    | 'UI::Page'
    | 'UI::Stop'
    | 'Update'
    | 'Upload::FTP'
    | 'Upload::SFTP'
    | 'WriteOff'
    | undefined
  call_type?: string | undefined
  concurrent_limit?: number | undefined
  data?: { [x: string]: unknown } | undefined
  end_time?: string | undefined
  error?: string | undefined
  error_class?: string | undefined
  error_details?: string | undefined
  id?: number | undefined
  instance?: boolean | undefined
  name?: string | undefined
  object?: string | undefined
  object_id?: string | undefined
  original_task_id?: number | undefined
  original_workflow_id?: number | undefined
  parameters?: { [x: string]: unknown } | undefined
  start_time?: string | undefined
  status?: 'Queued' | 'Processing' | 'Pending' | 'Success' | 'Stopped' | 'Error' | undefined
  tags?: string[] | undefined
  task_id?: number | undefined
  workflow_id?: number | undefined
}
type Usage = { date?: string | undefined; values?: { taskCount?: number | undefined } | undefined }
type UsagesResponse = { metrics?: Usage[] | undefined }
type TasksResponse = {
  data?: Task[] | undefined
  pagination?:
    | {
        next_page?: string | undefined
        page?: number | undefined
        page_length?: number | undefined
      }
    | undefined
}
type UpdateTask = {
  action_type?: string | undefined
  call_type?: string | undefined
  concurrent_limit?: number | undefined
  id: number
  name?: string | undefined
  object?: string | undefined
  object_id?: string | undefined
  status?: 'Queued' | 'Processing' | 'Pending' | 'Success' | 'Stopped' | 'Error' | undefined
  tags?: string[] | undefined
  workflow_id?: number | undefined
}
type PutTasksRequest = { data?: UpdateTask[] | undefined }
type BadRequestResponse = {
  Errors?:
    | { code?: string | undefined; status?: string | undefined; title?: string | undefined }[]
    | undefined
}
type DeleteWorkflowSuccess = { id?: string | undefined; success?: boolean | undefined }
type DeleteWorkflowError = { Errors?: string[] | undefined }
type GetWorkflowResponse = {
  cpuTime?: string | undefined
  createdAt?: string | undefined
  finishedAt?: string | undefined
  id?: number | undefined
  messages?: { [x: string]: unknown } | undefined
  name?: string | undefined
  originalWorkflowId?: string | undefined
  runTime?: number | undefined
  status?: 'Queued' | 'Processing' | 'Stopping' | 'Stopped' | 'Finished' | undefined
  tasks?:
    | {
        error?: number | undefined
        pending?: number | undefined
        processing?: number | undefined
        queued?: number | undefined
        stopped?: number | undefined
        success?: number | undefined
        total?: number | undefined
      }
    | undefined
  type?: string | undefined
  updatedAt?: string | undefined
}
type GetWorkflowSetupResponse = {
  callout_trigger?: boolean | undefined
  createdAt?: string | undefined
  description?: string | undefined
  id?: number | undefined
  interval?: string | undefined
  name?: string | undefined
  ondemand_trigger?: boolean | undefined
  priority?: string | undefined
  scheduled_trigger?: boolean | undefined
  status?: string | undefined
  timezone?: string | undefined
  updatedAt?: string | undefined
}
type ValidationReasons = { fieldName?: string | undefined; title?: string | undefined }
type ValidationErrors = { reasons?: ValidationReasons[] | undefined; success?: boolean | undefined }
type WorkflowInstance = {
  createdAt?: string | undefined
  id?: number | undefined
  name?: string | undefined
  originalWorkflowId?: number | undefined
  status?: 'Queued' | 'Processing' | undefined
  updatedAt?: string | undefined
}
type WorkflowError = {
  code?: 'invalid' | undefined
  status?: number | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/charge-metrics/data/charge-metrics': {
      $get:
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: ChargeMetricsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/charge-metrics/data/charge-metrics-discount-allocation-detail': {
      $get:
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: ChargeMetricsDiscountAllocationDetailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { fromTimestamp: string; toTimestamp: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: CommonReasonsErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/events/event-triggers': {
      $get:
        | {
            input: {
              query: {
                baseObject?: string | undefined
                eventTypeName?: string | undefined
                active?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: { data?: EventTrigger[] | undefined; next?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                baseObject?: string | undefined
                eventTypeName?: string | undefined
                active?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                baseObject?: string | undefined
                eventTypeName?: string | undefined
                active?: string | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PostEventTriggerRequest }
            output: EventTrigger
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PostEventTriggerRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PostEventTriggerRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/events/event-triggers/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: EventTrigger
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutEventTriggerRequest }
            output: EventTrigger
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutEventTriggerRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutEventTriggerRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/notifications/email-templates': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                eventTypeName?: string | undefined
                name?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: {
              data?: GETPublicEmailTemplateResponse[] | undefined
              next?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                eventTypeName?: string | undefined
                name?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                eventTypeName?: string | undefined
                name?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                eventTypeName?: string | undefined
                name?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                eventTypeName?: string | undefined
                name?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: GETPublicEmailTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/notifications/email-templates/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: GETPublicEmailTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: GETPublicEmailTemplateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicEmailTemplateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/notifications/history': {
      $delete:
        | {
            input: { query: { accountId: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: NotificationsHistoryDeletionTaskResponse
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { accountId: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { accountId: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/notifications/history/tasks/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: NotificationsHistoryDeletionTaskResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/notifications/notification-definitions': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                profileId?: string | undefined
                eventTypeName?: string | undefined
                emailTemplateId?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: {
              data?: GETPublicNotificationDefinitionResponse[] | undefined
              next?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                profileId?: string | undefined
                eventTypeName?: string | undefined
                emailTemplateId?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                profileId?: string | undefined
                eventTypeName?: string | undefined
                emailTemplateId?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                profileId?: string | undefined
                eventTypeName?: string | undefined
                emailTemplateId?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                profileId?: string | undefined
                eventTypeName?: string | undefined
                emailTemplateId?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: GETPublicNotificationDefinitionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: POSTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/notifications/notification-definitions/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: GETPublicNotificationDefinitionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: GETPublicNotificationDefinitionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 405
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: {
                Authorization: string
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            } & { json: PUTPublicNotificationDefinitionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: { header: { 'Zuora-Track-Id'?: string | undefined } } & {
              json: { client_id: string; client_secret: string; grant_type: 'client_credentials' }
            } & {
              form: { client_id: string; client_secret: string; grant_type: 'client_credentials' }
            }
            output: TokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Zuora-Track-Id'?: string | undefined } } & {
              json: { client_id: string; client_secret: string; grant_type: 'client_credentials' }
            } & {
              form: { client_id: string; client_secret: string; grant_type: 'client_credentials' }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/objects/batch/default/:object': {
      $post:
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordBatchRequest }
            output: CustomObjectRecordsBatchUpdatePartialSuccessResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordBatchRequest }
            output: CustomObjectRecordsErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordBatchRequest }
            output: ErrorResponse401Record
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordBatchRequest }
            output: CustomObjectRecordsThrottledResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/objects/definitions/default': {
      $get: {
        input: { query: { select?: 'type' | undefined } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        }
        output: GETAllCustomObjectDefinitionsInNamespaceResponse
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectDefinitionsRequest }
            output: GETAllCustomObjectDefinitionsInNamespaceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectDefinitionsRequest }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/objects/definitions/default/:object': {
      $delete: {
        input: { param: { object: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get:
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CustomObjectDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/objects/jobs': {
      $get: {
        input: { query: { pageSize?: number | undefined; cursor?: string | undefined } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        }
        output: CustomObjectBulkJobResponseCollection
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectBulkJobRequest }
            output: CustomObjectBulkJobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectBulkJobRequest }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectBulkJobRequest }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/objects/jobs/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CustomObjectBulkJobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/objects/jobs/:id/errors': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CustomObjectBulkJobErrorResponseCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/objects/jobs/:id/files': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
                'Content-Type': string
              }
            } & { json: string }
            output: CustomObjectBulkJobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
                'Content-Type': string
              }
            } & { json: string }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
                'Content-Type': string
              }
            } & { json: string }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
                'Content-Type': string
              }
            } & { json: string }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/objects/migrations': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        } & { json: MigrationUpdateCustomObjectDefinitionsRequest }
        output: MigrationUpdateCustomObjectDefinitionsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/objects/records/default/:object': {
      $get: {
        input: { param: { object: string } } & {
          query: {
            q?: string | undefined
            ids?: string | undefined
            pageSize?: number | undefined
            cursor?: string | undefined
          }
        } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        }
        output: QueryCustomObjectRecordsResponse
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectRecordsRequest }
            output: PostCustomObjectRecordsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectRecordsRequest }
            output: CustomObjectRecordsErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectRecordsRequest }
            output: ErrorResponse401Record
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: PostCustomObjectRecordsRequest }
            output: CustomObjectRecordsThrottledResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/objects/records/default/:object/:id': {
      $delete: {
        input: { param: { object: string; id: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Version'?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get:
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CustomObjectRecordWithAllFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
      $patch:
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordWithOnlyCustomFields }
            output: CustomObjectRecordWithAllFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordWithOnlyCustomFields }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'If-Match'?: string | undefined
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordWithOnlyCustomFields }
            output: CustomObjectRecordWithAllFields
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string; id: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
                Authorization: string
                'If-Match'?: string | undefined
                'Zuora-Version'?: string | undefined
              }
            } & { json: CustomObjectRecordWithOnlyCustomFields }
            output: CommonErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/query/jobs': {
      $get: {
        input: {
          query: {
            queryStatus?:
              | 'accepted'
              | 'in_progress'
              | 'completed'
              | 'failed'
              | 'cancelled'
              | undefined
            pageSize?: number | undefined
          }
        } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: GetDataQueryJobsResponse
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: SubmitDataQueryRequest }
            output: SubmitDataQueryResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: SubmitDataQueryRequest }
            output: DataQueryErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/query/jobs/:job-id': {
      $delete:
        | {
            input: { param: { 'job-id': string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DeleteDataQueryJobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { 'job-id': string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DataQueryErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { 'job-id': string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: GetDataQueryJobResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { 'job-id': string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DataQueryErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { 'job-id': string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DataQueryErrorResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/settings/batch-requests': {
      $post: {
        input: {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        } & { json: SettingsBatchRequest }
        output: SettingsBatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/listing': {
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: ListAllSettingsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                Accept?: string | undefined
              }
            }
            output: ListAllSettingsResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/accounting-codes': {
      $get: {
        input: { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountingCodesType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTAccountingCodeType }
        output: POSTAccountingCodeResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-codes/:ac-id': {
      $delete: {
        input: { param: { 'ac-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'ac-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountingCodeItemType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'ac-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTAccountingCodeType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-codes/:ac-id/activate': {
      $put: {
        input: { param: { 'ac-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-codes/:ac-id/deactivate': {
      $put: {
        input: { param: { 'ac-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods': {
      $get: {
        input: { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountingPeriodsType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTAccountingPeriodType }
        output: POSTAccountingPeriodResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods/:ap-id': {
      $delete: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountingPeriodType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTAccountingPeriodType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods/:ap-id/close': {
      $put: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods/:ap-id/pending-close': {
      $put: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods/:ap-id/reopen': {
      $put: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounting-periods/:ap-id/run-trial-balance': {
      $put: {
        input: { param: { 'ap-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTAccountType }
        output: POSTAccountResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts/billing-documents/files/deletion-jobs': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTBillingDocumentFilesDeletionJobRequest }
        output: POSTBillingDocumentFilesDeletionJobResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts/billing-documents/files/deletion-jobs/:jobId': {
      $get: {
        input: { param: { jobId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETBillingDocumentFilesDeletionJobResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'account-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTAccountType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:account-key/summary': {
      $get: {
        input: { param: { 'account-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAccountSummaryType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:id/billing-documents/generate': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostGenerateBillingDocumentType }
        output: GenerateBillingDocumentResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/action/amend': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionamendRequest }
            output: ProxyActionamendResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionamendRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/create': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActioncreateRequest }
            output: SaveResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActioncreateRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/delete': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActiondeleteRequest }
            output: DeleteResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActiondeleteRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/execute': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionexecuteRequest }
            output: ExecuteResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionexecuteRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/generate': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActiongenerateRequest }
            output: SaveResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActiongenerateRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/query': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionqueryRequest }
            output: ProxyActionqueryResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionqueryRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/queryMore': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionqueryMoreRequest }
            output: ProxyActionqueryMoreResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionqueryMoreRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/subscribe': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionsubscribeRequest }
            output: SubscribeResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionsubscribeRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/action/update': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionupdateRequest }
            output: SaveResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyActionupdateRequest }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/amendments/subscriptions/:subscription-id': {
      $get: {
        input: { param: { 'subscription-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAmendmentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/amendments/:amendment-key': {
      $get: {
        input: { param: { 'amendment-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAmendmentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/async-jobs/:jobId': {
      $get: {
        input: { param: { jobId: string } } & { header: { 'Zuora-Track-Id'?: string | undefined } }
        output: {
          errors?: string | undefined
          result?: JobResult | undefined
          status?: 'Processing' | 'Failed' | 'Completed' | undefined
          success?: boolean | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/async/orders': {
      $post: {
        input: { query: { returnIds?: boolean | undefined } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTOrderRequestType }
        output: { jobId?: string | undefined; success?: boolean | undefined }
        outputFormat: 'text'
        status: 202
      }
    }
  } & {
    '/v1/async/orders/preview': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTOrderPreviewRequestType }
        output: { jobId?: string | undefined }
        outputFormat: 'text'
        status: 202
      }
    }
  } & {
    '/v1/attachments': {
      $post: {
        input: {
          query: {
            description?: string | undefined
            associatedObjectType:
              | 'Account'
              | 'Invoice'
              | 'Subscription'
              | 'CreditMemo'
              | 'DebitMemo'
            associatedObjectKey: string
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { form: { file: File } }
        output: POSTAttachmentResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/attachments/:attachment-id': {
      $delete: {
        input: { param: { 'attachment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'attachment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAttachmentResponseType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'attachment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTAttachmentType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/attachments/:object-type/:object-key': {
      $get: {
        input: {
          param: {
            'object-type': 'account' | 'invoice' | 'subscription' | 'creditmemo' | 'debitmemo'
            'object-key': string
          }
        } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETAttachmentsResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/bill-runs/:billRunId/emails': {
      $post: {
        input: { param: { billRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTEmailBillingDocfromBillRunType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/billing-documents': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            accountId: string
            documentDate?: string | undefined
            status?: 'Draft' | 'Posted' | 'Canceled' | 'Error' | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: BillingDocumentQueryResponseElementType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/billing-preview-runs': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostBillingPreviewRunParam }
        output: { billingPreviewRunId?: string | undefined; success?: boolean | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/billing-preview-runs/:billingPreviewRunId': {
      $get: {
        input: { param: { billingPreviewRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetBillingPreviewRunResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/bulk': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { form: { file: File; params: string } }
        output: POSTMassUpdateResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/bulk/:bulk-key': {
      $get: {
        input: { param: { 'bulk-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETMassUpdateType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/bulk/:bulk-key/stop': {
      $put: {
        input: { param: { 'bulk-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/catalog/product/:product-id': {
      $get: {
        input: { param: { 'product-id': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETProductType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/catalog/products': {
      $get: {
        input: { query: { page?: number | undefined; pageSize?: number | undefined } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETCatalogType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/catalog/products/:product-id/share': {
      $post: {
        input: { param: { 'product-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTCatalogType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/charge-revenue-summaries/subscription-charges/:charge-key': {
      $get: {
        input: { param: { 'charge-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETChargeRSDetailType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/charge-revenue-summaries/:crs-number': {
      $get: {
        input: { param: { 'crs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETChargeRSDetailType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/connections': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            apiAccessKeyId: string
            apiSecretAccessKey: string
            'Content-Type': string
          }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/contacts/:contactId/scrub': {
      $put: {
        input: { param: { contactId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            accountId?: string | undefined
            amount?: number | undefined
            appliedAmount?: number | undefined
            autoApplyUponPosting?: boolean | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            creditMemoDate?: string | undefined
            currency?: string | undefined
            excludeFromAutoApplyRules?: boolean | undefined
            number?: string | undefined
            referredInvoiceId?: string | undefined
            refundAmount?: number | undefined
            status?:
              | 'Draft'
              | 'Posted'
              | 'Canceled'
              | 'Error'
              | 'PendingForTax'
              | 'Generating'
              | 'CancelInProgress'
              | undefined
            targetDate?: string | undefined
            taxAmount?: number | undefined
            totalTaxExemptAmount?: number | undefined
            transferredToAccounting?: 'Processing' | 'Yes' | 'No' | 'Error' | 'Ignore' | undefined
            unappliedAmount?: number | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoCollectionType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: CreditMemoFromChargeType }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId': {
      $delete: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTCreditMemoType }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/apply': {
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: ApplyCreditMemoType }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/cancel': {
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/emails': {
      $post: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostCreditMemoEmailRequestType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/files': {
      $post: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { form: { file?: File | undefined } }
        output: POSTUploadFileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/items': {
      $get: {
        input: { param: { creditMemoId: string } } & {
          query: {
            pageSize?: number | undefined
            amount?: number | undefined
            appliedAmount?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            id?: string | undefined
            refundAmount?: number | undefined
            serviceEndDate?: string | undefined
            serviceStartDate?: string | undefined
            sku?: string | undefined
            skuName?: string | undefined
            sourceItemId?: string | undefined
            subscriptionId?: string | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETCreditMemoItemsListType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/items/:cmitemid': {
      $get: {
        input: { param: { cmitemid: string; creditMemoId: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETCreditMemoItemType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/items/:cmitemid/taxation-items': {
      $get: {
        input: { param: { cmitemid: string; creditMemoId: string } } & {
          query: { pageSize?: number | undefined; page?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETTaxationItemsOfCreditMemoItemType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/parts': {
      $get: {
        input: { param: { creditMemoId: string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoPartsCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/parts/:partid': {
      $get: {
        input: { param: { partid: string; creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoPartType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts': {
      $get: {
        input: { param: { partid: string; creditMemoId: string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoItemPartsCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/parts/:partid/itemparts/:itempartid': {
      $get: {
        input: { param: { partid: string; itempartid: string; creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoItemPartType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/pdfs': {
      $post: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: POSTMemoPdfResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/post': {
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/taxationitems': {
      $post: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTTaxationItemListForCMType }
        output: GETTaxationItemListType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/unapply': {
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: UnapplyCreditMemoType }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditMemoId/unpost': {
      $put: {
        input: { param: { creditMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/creditmemos/:creditmemoId/refunds': {
      $post: {
        input: { param: { creditmemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostNonRefRefundType }
        output: GETRefundCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/custom-exchange-rates/:currency': {
      $get: {
        input: { param: { currency: string } } & {
          query: { startDate: string; endDate: string }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCustomExchangeRatesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            accountId?: string | undefined
            amount?: number | undefined
            balance?: number | undefined
            beAppliedAmount?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            currency?: string | undefined
            debitMemoDate?: string | undefined
            dueDate?: string | undefined
            number?: string | undefined
            referredInvoiceId?: string | undefined
            status?:
              | 'Draft'
              | 'Posted'
              | 'Canceled'
              | 'Error'
              | 'PendingForTax'
              | 'Generating'
              | 'CancelInProgress'
              | undefined
            targetDate?: string | undefined
            taxAmount?: number | undefined
            totalTaxExemptAmount?: number | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETDebitMemoCollectionType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: DebitMemoFromChargeType }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTBatchDebitMemosRequest }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId': {
      $delete: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTDebitMemoType }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/application-parts': {
      $get: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetDebitMemoApplicationPartCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/cancel': {
      $put: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/collect': {
      $post: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: DebitMemoCollectRequest }
        output: DebitMemoCollectResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/emails': {
      $post: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostDebitMemoEmailType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/files': {
      $post: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { form: { file?: File | undefined } }
        output: POSTUploadFileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/items': {
      $get: {
        input: { param: { debitMemoId: string } } & {
          query: {
            pageSize?: number | undefined
            amount?: number | undefined
            beAppliedAmount?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            id?: string | undefined
            serviceEndDate?: string | undefined
            serviceStartDate?: string | undefined
            sku?: string | undefined
            skuName?: string | undefined
            sourceItemId?: string | undefined
            subscriptionId?: string | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETDebitMemoItemCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/items/:dmitemid': {
      $get: {
        input: { param: { dmitemid: string; debitMemoId: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        }
        output: GETDebitMemoItemType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/items/:dmitemid/taxation-items': {
      $get: {
        input: { param: { dmitemid: string; debitMemoId: string } } & {
          query: { pageSize?: number | undefined; page?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETTaxationItemsOfDebitMemoItemType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/pdfs': {
      $post: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: POSTMemoPdfResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/post': {
      $put: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/taxationitems': {
      $post: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTTaxationItemListForDMType }
        output: GETTaxationItemListType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/debitmemos/:debitMemoId/unpost': {
      $put: {
        input: { param: { debitMemoId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/describe/:object': {
      $get:
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { object: string } } & {
              header: {
                'Zuora-Track-Id'?: string | undefined
                'Zuora-Entity-Ids'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/document-properties': {
      $post: {
        input: {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { json: POSTDocumentPropertiesType }
        output: GETDocumentPropertiesResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/document-properties/:documentPropertiesId': {
      $delete: {
        input: { param: { documentPropertiesId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { documentPropertiesId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { json: PUTDocumentPropertiesType }
        output: GETDocumentPropertiesResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/document-properties/:documentType/:documentId': {
      $get: {
        input: {
          param: { documentType: 'Invoice' | 'CreditMemo' | 'DebitMemo'; documentId: string }
        } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: GETDocumentPropertiesResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entities': {
      $get: {
        input: { query: { provisioned?: string | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETEntitiesResponseType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: CreateEntityType }
        output: CreateEntityResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entities/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: DELETEntityResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETEntitiesResponseTypeWithId
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: UpdateEntityType }
        output: UpdateEntityResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entities/:id/provision': {
      $put: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: ProvisionEntityResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entity-connections': {
      $get: {
        input: {
          query: { pageSize?: number | undefined; type?: 'inbound' | 'outbound' | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETEntityConnectionsResponseType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTEntityConnectionsType }
        output: POSTEntityConnectionsResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entity-connections/:connection-id/accept': {
      $put: {
        input: { param: { 'connection-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PUTEntityConnectionsAcceptResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entity-connections/:connection-id/deny': {
      $put: {
        input: { param: { 'connection-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PUTEntityConnectionsDenyResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/entity-connections/:connection-id/disconnect': {
      $put: {
        input: { param: { 'connection-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PUTEntityConnectionsDisconnectResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/files/:file-id': {
      $get: {
        input: { param: { 'file-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/gateway-settlement/payments/:payment-id/chargeback': {
      $post: {
        input: { param: { 'payment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTReversePaymentRequest }
        output: POSTReversePaymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/gateway-settlement/payments/:payment-id/reject': {
      $post: {
        input: { param: { 'payment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRejectPaymentRequest }
        output: POSTRejectPaymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/gateway-settlement/payments/:payment-id/settle': {
      $post: {
        input: { param: { 'payment-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTSettlePaymentRequest }
        output: POSTSettlePaymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/hmac-signatures': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTHMACSignatureType }
        output: POSTHMACSignatureResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/hostedpages': {
      $get: {
        input: { query: { versionNumber?: string | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetHostedPagesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostInvoiceType }
        output: PostInvoiceResponse
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PutBatchInvoiceType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId': {
      $put: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PutInvoiceType }
        output: PutInvoiceResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/application-parts': {
      $get: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetInvoiceApplicationPartCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/creditmemos': {
      $post: {
        input: { param: { invoiceId: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: CreditMemoFromInvoiceType }
        output: GETCreditMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/debitmemos': {
      $post: {
        input: { param: { invoiceId: string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: DebitMemoFromInvoiceType }
        output: GETDebitMemoType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/emails': {
      $post: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostInvoiceEmailRequestType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/files': {
      $get: {
        input: { param: { invoiceId: string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETInvoiceFilesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { form: { file?: File | undefined } }
        output: POSTUploadFileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/items': {
      $get: {
        input: { param: { invoiceId: string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETInvoiceItemsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/items/:itemId/taxation-items': {
      $get: {
        input: { param: { invoiceId: string; itemId: string } } & {
          query: { pageSize?: number | undefined; page?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETInvoiceTaxationItemsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/reverse': {
      $put: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PutReverseInvoiceType }
        output: PutReverseInvoiceResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/invoices/:invoiceId/write-off': {
      $put: {
        input: { param: { invoiceId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTWriteOffInvoiceRequest }
        output: PUTWriteOffInvoiceResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-entries': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTJournalEntryType }
        output: POSTJournalEntryResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-entries/journal-runs/:jr-number': {
      $get: {
        input: { param: { 'jr-number': string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETJournalEntriesInJournalRunType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-entries/:je-number': {
      $delete: {
        input: { param: { 'je-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'je-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETJournalEntryDetailType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-entries/:je-number/basic-information': {
      $put: {
        input: { param: { 'je-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTBasicSummaryJournalEntryType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-entries/:je-number/cancel': {
      $put: {
        input: { param: { 'je-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-runs': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTJournalRunType }
        output: POSTJournalRunResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-runs/:jr-number': {
      $delete: {
        input: { param: { 'jr-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'jr-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETJournalRunType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/journal-runs/:jr-number/cancel': {
      $put: {
        input: { param: { 'jr-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/notification-history/callout': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            endTime?: string | undefined
            startTime?: string | undefined
            objectId?: string | undefined
            failedOnly?: boolean | undefined
            eventCategory?: string | undefined
            includeResponseContent?: boolean | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETCalloutHistoryVOsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/notification-history/email': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            endTime?: string | undefined
            startTime?: string | undefined
            objectId?: string | undefined
            failedOnly?: boolean | undefined
            eventCategory?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETEmailHistoryVOsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/object/account': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateAccount }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateAccount }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateAccount }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/account/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetAccount
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyAccount }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyAccount }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/amendment/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetAmendment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyAmendment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyAmendment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/bill-run': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateBillRun }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateBillRun }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateBillRun }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/bill-run/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetBillRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyBillRun }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyBillRun }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/communication-profile/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetCommunicationProfile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/contact': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateContact }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateContact }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateContact }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/contact/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetContact
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyContact }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyContact }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/credit-balance-adjustment': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateCreditBalanceAdjustment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateCreditBalanceAdjustment }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateCreditBalanceAdjustment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/credit-balance-adjustment/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetCreditBalanceAdjustment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyCreditBalanceAdjustment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyCreditBalanceAdjustment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/export': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateExport }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateExport }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateExport }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/export/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/feature': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateFeature }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateFeature }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateFeature }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/feature/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyFeature }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyFeature }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyFeature }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/import': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & {
              form: {
                File: File
                ImportType:
                  | 'Usage'
                  | 'Payment'
                  | 'Quote'
                  | 'TaxationDetail'
                  | 'UpdateAccountingCode'
                  | 'CreateRevenueSchedule'
                  | 'UpdateRevenueSchedule'
                  | 'DeleteRevenueSchedule'
                  | 'ImportFXRate'
                Name: string
              }
            }
            output: ProxyPostImport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & {
              form: {
                File: File
                ImportType:
                  | 'Usage'
                  | 'Payment'
                  | 'Quote'
                  | 'TaxationDetail'
                  | 'UpdateAccountingCode'
                  | 'CreateRevenueSchedule'
                  | 'UpdateRevenueSchedule'
                  | 'DeleteRevenueSchedule'
                  | 'ImportFXRate'
                Name: string
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/import/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetImport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/invoice-adjustment': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoiceAdjustment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoiceAdjustment }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoiceAdjustment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/invoice-adjustment/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoiceAdjustment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoiceAdjustment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoiceAdjustment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/invoice-item-adjustment/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoiceItemAdjustment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/invoice-item/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoiceItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/invoice-payment': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoicePayment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoicePayment }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateInvoicePayment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/invoice-payment/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoicePayment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoicePayment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoicePayment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/invoice-split-item/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoiceSplitItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/invoice-split/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoiceSplit
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/invoice/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetInvoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoice }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyInvoice }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/payment': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePayment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePayment }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePayment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/payment-method': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePaymentMethod }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePaymentMethod }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreatePaymentMethod }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/payment-method-snapshot/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetPaymentMethodSnapshot
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/payment-method-transaction-log/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetPaymentMethodTransactionLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/payment-method/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetPaymentMethod
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyPaymentMethod }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyPaymentMethod }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/payment-transaction-log/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetPaymentTransactionLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/payment/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetPayment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyPayment }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyPayment }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProduct }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProduct }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProduct }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product-feature/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetProductFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/product-rate-plan': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProductRatePlan }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProductRatePlan }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateProductRatePlan }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product-rate-plan-charge': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyCreateProductRatePlanCharge }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyCreateProductRatePlanCharge }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product-rate-plan-charge-tier/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetProductRatePlanChargeTier
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlanChargeTier }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlanChargeTier }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product-rate-plan-charge/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetProductRatePlanCharge
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlanCharge }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlanCharge }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlanCharge }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/product-rate-plan/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetProductRatePlan
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlan }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProductRatePlan }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/product/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetProduct
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProduct }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyProduct }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/rate-plan-charge-tier/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRatePlanChargeTier
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/rate-plan-charge/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRatePlanCharge
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyRatePlanCharge }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyRatePlanCharge }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/rate-plan/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRatePlan
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/refund': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateRefund }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateRefund }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateRefund }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/refund-invoice-payment/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRefundInvoicePayment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/refund-transaction-log/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRefundTransactionLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/refund/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetRefund
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyRefund }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyRefund }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/subscription-product-feature/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetSubscriptionProductFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/object/subscription/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            }
            output: ProxyGetSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
                'X-Zuora-WSDL-Version'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifySubscription }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifySubscription }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/taxation-item': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateTaxationItem }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateTaxationItem }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateTaxationItem }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/taxation-item/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetTaxationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyTaxationItem }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyTaxationItem }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/unit-of-measure': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUnitOfMeasure }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUnitOfMeasure }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUnitOfMeasure }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/unit-of-measure/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetUnitOfMeasure
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyUnitOfMeasure }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyUnitOfMeasure }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/usage': {
      $post:
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUsage }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUsage }
            output: ProxyBadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { rejectUnknownFields?: boolean | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyCreateUsage }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/object/usage/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyDeleteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyGetUsage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string | undefined } } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: ProxyNoDataResponse
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyUsage }
            output: ProxyCreateOrModifyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { rejectUnknownFields?: boolean | undefined }
            } & {
              header: {
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: ProxyModifyUsage }
            output: ProxyUnauthorizedResponse
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/operations/billing-preview': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostBillingPreviewParam }
        output: BillingPreviewResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/operations/invoice-collect': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTInvoiceCollectType }
        output: POSTInvoiceCollectResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/order-line-items/bulk': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostOrderLineItemsRequestType }
        output: GetOrderLineItemResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/order-line-items/:itemId': {
      $get: {
        input: { param: { itemId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrderLineItemResponseType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { itemId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PutOrderLineItemUpdateType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            dateFilterOption?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetAllOrdersResponseType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { returnIds?: boolean | undefined } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTOrderRequestType }
        output: PostOrderResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/invoiceOwner/:accountNumber': {
      $get: {
        input: { param: { accountNumber: string } } & {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            dateFilterOption?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrdersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/preview': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTOrderPreviewRequestType }
        output: PostOrderPreviewResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/subscription/:subscriptionNumber': {
      $get: {
        input: { param: { subscriptionNumber: string } } & {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            dateFilterOption?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrdersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/subscriptionOwner/:accountNumber': {
      $get: {
        input: { param: { accountNumber: string } } & {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            dateFilterOption?: string | undefined
            startDate?: string | undefined
            endDate?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrdersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/term/:subscriptionNumber': {
      $get: {
        input: { param: { subscriptionNumber: string } } & {
          query: {
            version?: number | undefined
            page?: number | undefined
            pageSize?: number | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetSubscriptionTermInfoResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/:orderNumber': {
      $delete: {
        input: { param: { orderNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { orderNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/:orderNumber/customFields': {
      $put: {
        input: { param: { orderNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTOrderPatchRequestType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/:orderNumber/evergreenMetrics/:subscriptionNumber': {
      $get: {
        input: { param: { orderNumber: string; subscriptionNumber: string } } & {
          query: { startDate: string; endDate: string }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetOrderResponseForEvergreen
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/:orderNumber/ramp-metrics': {
      $get: {
        input: { param: { orderNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRampMetricsByOrderNumberResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/orders/:orderNumber/triggerDates': {
      $put: {
        input: { param: { orderNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTOrderActionTriggerDatesRequestType }
        output: PUTOrderTriggerDatesResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTPaymentMethodRequest }
        output: POSTPaymentMethodResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/credit-cards': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTPaymentMethodType }
        output: POSTPaymentMethodResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/credit-cards/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentMethodsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/credit-cards/:payment-method-id': {
      $put: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTPaymentMethodType }
        output: PUTPaymentMethodResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/decryption': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTPaymentMethodDecryption }
        output: POSTPaymentMethodResponseDecryption
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id': {
      $delete: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentMethodResponse
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTPaymentMethodRequest }
        output: PUTPaymentMethodResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/authorize': {
      $post: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTDelayAuthorizeCapture }
        output: POSTAuthorizeResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/profiles': {
      $get: {
        input: { param: { 'payment-method-id': string } } & {
          query: { includeAll?: boolean | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GetStoredCredentialProfilesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: CreateStoredCredentialProfileRequest }
        output: ModifiedStoredCredentialProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/cancel': {
      $post: {
        input: { param: { 'payment-method-id': string; 'profile-number': number } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: ModifiedStoredCredentialProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/profiles/:profile-number/expire': {
      $post: {
        input: { param: { 'payment-method-id': string; 'profile-number': number } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: ModifiedStoredCredentialProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/scrub': {
      $put: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/verify': {
      $put: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined }
        } & { json: PUTVerifyPaymentMethodType }
        output: PUTVerifyPaymentMethodResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-methods/:payment-method-id/voidAuthorize': {
      $post: {
        input: { param: { 'payment-method-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTVoidAuthorize }
        output: POSTVoidAuthorizeResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-runs': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            status?: 'Pending' | 'Processing' | 'Completed' | 'Error' | 'Canceled' | undefined
            targetDate?: string | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentRunCollectionType
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTPaymentRunRequest }
        output: GETPaymentRunType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-runs/:paymentRunId': {
      $delete: {
        input: { param: { paymentRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { paymentRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentRunType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { paymentRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTPaymentRunRequest }
        output: GETPaymentRunType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payment-runs/:paymentRunId/data': {
      $get: {
        input: { param: { paymentRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined }
        }
        output: GETPaymentRunDataArrayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payment-runs/:paymentRunId/summary': {
      $get: {
        input: { param: { paymentRunId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined }
        }
        output: GETPaymentRunSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/paymentgateways': {
      $get: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentGatwaysResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            accountId?: string | undefined
            amount?: number | undefined
            appliedAmount?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            creditBalanceAmount?: number | undefined
            currency?: string | undefined
            effectiveDate?: string | undefined
            number?: string | undefined
            refundAmount?: number | undefined
            status?:
              | 'Draft'
              | 'Processing'
              | 'Processed'
              | 'Error'
              | 'Canceled'
              | 'Posted'
              | undefined
            type?: 'External' | 'Electronic' | undefined
            unappliedAmount?: number | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PaymentCollectionResponseType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: CreatePaymentType }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId': {
      $delete: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: UpdatePaymentType }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/apply': {
      $put: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: ApplyPaymentType }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/cancel': {
      $put: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/parts': {
      $get: {
        input: { param: { paymentId: string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentPartsCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/parts/:partid': {
      $get: {
        input: { param: { partid: string; paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentPartType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/parts/:partid/itemparts': {
      $get: {
        input: { param: { partid: string; paymentId: string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentItemPartCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/parts/:partid/itemparts/:itempartid': {
      $get: {
        input: { param: { partid: string; itempartid: string; paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentItemPartType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/refunds': {
      $post: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PostRefundType }
        output: GETRefundPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/transfer': {
      $put: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: TransferPaymentType }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentId/unapply': {
      $put: {
        input: { param: { paymentId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: UnapplyPaymentType }
        output: GETARPaymentType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/quotes/document': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTQuoteDocType }
        output: POSTQuoteDocResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/ramps/:rampNumber': {
      $get: {
        input: { param: { rampNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRampByRampNumberResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/ramps/:rampNumber/ramp-metrics': {
      $get: {
        input: { param: { rampNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRampMetricsByRampNumberResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/rateplan/:product_id/productRatePlan': {
      $get: {
        input: { param: { product_id: string } } & {
          query: { page?: number | undefined; pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETProductRatePlansResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            accountId?: string | undefined
            amount?: number | undefined
            createdById?: string | undefined
            createdDate?: string | undefined
            methodType?:
              | 'ACH'
              | 'Cash'
              | 'Check'
              | 'CreditCard'
              | 'PayPal'
              | 'WireTransfer'
              | 'DebitCard'
              | 'CreditCardReferenceTransaction'
              | 'BankTransfer'
              | 'Other'
              | undefined
            number?: string | undefined
            paymentId?: string | undefined
            refundDate?: string | undefined
            status?: 'Processed' | 'Canceled' | 'Error' | 'Processing' | undefined
            type?: 'External' | 'Electronic' | undefined
            updatedById?: string | undefined
            updatedDate?: string | undefined
            sort?: string | undefined
          }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refund-id/reconcile': {
      $post: {
        input: { param: { 'refund-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTReconcileRefundRequest }
        output: POSTReconcileRefundResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId': {
      $delete: {
        input: { param: { refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTRefundType }
        output: GETRefundType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId/cancel': {
      $put: {
        input: { param: { refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId/parts': {
      $get: {
        input: { param: { refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundPartCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId/parts/:refundpartid': {
      $get: {
        input: { param: { refundpartid: string; refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: RefundPartResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId/parts/:refundpartid/itemparts': {
      $get: {
        input: { param: { refundpartid: string; refundId: string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundItemPartCollectionType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/refunds/:refundId/parts/:refundpartid/itemparts/:itempartid': {
      $get: {
        input: { param: { itempartid: string; refundpartid: string; refundId: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRefundItemPartType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-events/revenue-schedules/:rs-number': {
      $get: {
        input: { param: { 'rs-number': string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueEventDetailsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-events/:event-number': {
      $get: {
        input: { param: { 'event-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueEventDetailType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-items/charge-revenue-summaries/:crs-number': {
      $get: {
        input: { param: { 'crs-number': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueItemsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-items/revenue-events/:event-number': {
      $get: {
        input: { param: { 'event-number': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueItemsType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'event-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTEventRIDetailType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-items/revenue-schedules/:rs-number': {
      $get: {
        input: { param: { 'rs-number': string } } & { query: { pageSize?: number | undefined } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRsRevenueItemsType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTScheduleRIDetailType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-recognition-rules/product-charges/:charge-key': {
      $get: {
        input: { param: { 'charge-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueRecognitionRuleAssociationType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-recognition-rules/subscription-charges/:charge-key': {
      $get: {
        input: { param: { 'charge-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueRecognitionRuleAssociationType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/credit-memo-items/:cmi-id': {
      $get: {
        input: { param: { 'cmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'cmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/credit-memo-items/:cmi-id/distribute-revenue-with-date-range': {
      $post: {
        input: { param: { 'cmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionRatablyCMType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/debit-memo-items/:dmi-id': {
      $get: {
        input: { param: { 'dmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'dmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/debit-memo-items/:dmi-id/distribute-revenue-with-date-range': {
      $post: {
        input: { param: { 'dmi-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionRatablyDMType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key': {
      $get: {
        input: { param: { 'invoice-item-adj-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'invoice-item-adj-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/invoice-item-adjustments/:invoice-item-adj-key/distribute-revenue-with-date-range': {
      $post: {
        input: { param: { 'invoice-item-adj-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByDateRangeType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/invoice-items/:invoice-item-id': {
      $get: {
        input: { param: { 'invoice-item-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'invoice-item-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByTransactionType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/invoice-items/:invoice-item-id/distribute-revenue-with-date-range': {
      $post: {
        input: { param: { 'invoice-item-id': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByDateRangeType }
        output: POSTRevenueScheduleByTransactionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/product-charges/:charge-key/:account-key': {
      $get: {
        input: { param: { 'account-key': string; 'charge-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailsByProductChargeType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/subscription-charges/:charge-key': {
      $get: {
        input: { param: { 'charge-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailsByChargeType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { 'charge-key': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRevenueScheduleByChargeType }
        output: POSTRevenueScheduleByChargeResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/:rs-number': {
      $delete: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRSDetailType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/:rs-number/basic-information': {
      $put: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTRSBasicInfoType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/:rs-number/distribute-revenue-across-accounting-periods': {
      $put: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTAllocateManuallyType }
        output: PUTRevenueScheduleResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/:rs-number/distribute-revenue-on-specific-date': {
      $put: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTSpecificDateAllocationType }
        output: PUTRevenueScheduleResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revenue-schedules/:rs-number/distribute-revenue-with-date-range': {
      $put: {
        input: { param: { 'rs-number': string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTRSTermType }
        output: PUTRevenueScheduleResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/revpro-accounting-codes': {
      $put: {
        input: {
          header: {
            'Zuora-Entity-Ids'?: string | undefined
            Authorization: string
            'Zuora-Track-Id'?: string | undefined
          }
        } & { json: RevproAccountingCodes }
        output: PUTRevproAccCodeResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/rsa-signatures': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTRSASignatureType }
        output: POSTRSASignatureResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/rsa-signatures/decrypt': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: POSTDecryptionType }
        output: POSTDecryptResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/sequence-sets': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            page?: number | undefined
            name?: string | undefined
          }
        } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: GETSequenceSetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { json: POSTSequenceSetsRequest }
        output: POSTSequenceSetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/sequence-sets/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        }
        output: GETSequenceSetResponse
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Entity-Ids'?: string | undefined; 'Zuora-Track-Id'?: string | undefined }
        } & { json: PUTSequenceSetRequest }
        output: PUTSequenceSetResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/settings/finance/revenue-automation-start-date': {
      $get: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRevenueStartDateSettingType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTSubscriptionType }
        output: POSTSubscriptionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          query: { pageSize?: number | undefined; 'charge-detail'?: string | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETSubscriptionWrapper
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/preview': {
      $post: {
        input: {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTSubscriptionPreviewType }
        output: POSTSubscriptionPreviewResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key': {
      $get: {
        input: { param: { 'subscription-key': string } } & {
          query: { 'charge-detail'?: string | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETSubscriptionTypeWithSuccess
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { 'subscription-key': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: PUTSubscriptionType }
        output: PUTSubscriptionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key/cancel': {
      $put: {
        input: { param: { 'subscription-key': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: POSTSubscriptionCancellationType }
        output: POSTSubscriptionCancellationResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key/renew': {
      $put: {
        input: { param: { 'subscription-key': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: PUTRenewSubscriptionType }
        output: PUTRenewSubscriptionResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key/resume': {
      $put: {
        input: { param: { 'subscription-key': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: PUTSubscriptionResumeType }
        output: PUTSubscriptionResumeResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key/suspend': {
      $put: {
        input: { param: { 'subscription-key': string } } & {
          header: {
            'Zuora-Track-Id'?: string | undefined
            'Zuora-Entity-Ids'?: string | undefined
            'zuora-version'?: string | undefined
          }
        } & { json: PUTSubscriptionSuspendType }
        output: PUTSubscriptionSuspendResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscription-key/versions/:version': {
      $get: {
        input: { param: { 'subscription-key': string; version: string } } & {
          query: { 'charge-detail'?: string | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETSubscriptionTypeWithSuccess
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscriptionKey/ramp-metrics': {
      $get: {
        input: { param: { subscriptionKey: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRampMetricsBySubscriptionKeyResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscriptionKey/ramps': {
      $get: {
        input: { param: { subscriptionKey: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETRampsBySubscriptionKeyResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscriptionNumber/customFields': {
      $put: {
        input: { param: { subscriptionNumber: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTSubscriptionPatchRequestType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/subscriptions/:subscriptionNumber/versions/:version/customFields': {
      $put: {
        input: { param: { subscriptionNumber: string; version: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTSubscriptionPatchRequestType }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/taxationitems/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: CommonResponseType
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETTaxationItemType
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTTaxationItemType }
        output: GETTaxationItemType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/transactions/invoices/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETInvoiceFileWrapper
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/transactions/payments/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETPaymentsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/usage': {
      $post: {
        input: {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { form: { file: File } }
        output: POSTUsageResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/usage/accounts/:account-key': {
      $get: {
        input: { param: { 'account-key': string } } & {
          query: { pageSize?: number | undefined }
        } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETUsageWrapper
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/users/:username/accept-access': {
      $put: {
        input: { param: { username: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PUTAcceptUserAccessResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/users/:username/accessible-entities': {
      $get: {
        input: { param: { username: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: GETEntitiesUserAccessibleResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/users/:username/deny-access': {
      $put: {
        input: { param: { username: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        }
        output: PUTDenyUserAccessResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/users/:username/request-access': {
      $put: {
        input: { param: { username: string } } & {
          header: { 'Zuora-Track-Id'?: string | undefined; 'Zuora-Entity-Ids'?: string | undefined }
        } & { json: PUTSendUserAccessRequestType }
        output: PUTSendUserAccessRequestResponseType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows': {
      $get: {
        input: {
          query: {
            callout_trigger?: boolean | undefined
            interval?: string | undefined
            name?: string | undefined
            ondemand_trigger?: boolean | undefined
            scheduled_trigger?: boolean | undefined
            page?: number | undefined
            page_length?: number | undefined
          }
        } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: GetWorkflowsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/import': {
      $post: {
        input: { header: { 'Zuora-Track-Id'?: string | undefined } } & {
          json: {
            linkages?: Linkage[] | undefined
            tasks?: Task[] | undefined
            workflow?: Workflow | undefined
          }
        }
        output: Workflow
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/metrics.json': {
      $get: {
        input: { query: { startDate: string; endDate: string; metrics: string } } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: UsagesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/tasks': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            instance?: boolean | undefined
            action_type?: string | undefined
            object?: string | undefined
            object_id?: string | undefined
            call_type?: string | undefined
            workflow_id?: string | undefined
            tags?: string | undefined
            page?: number | undefined
            page_length?: number | undefined
          }
        } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: TasksResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/tasks/batch_update': {
      $put:
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutTasksRequest }
            output: TasksResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutTasksRequest }
            output: BadRequestResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: PutTasksRequest }
            output: BadRequestResponse
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/workflows/tasks/:task_id': {
      $get: {
        input: { param: { task_id: string } } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: Task
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/tasks/:task_id/rerun': {
      $post: {
        input: { param: { task_id: string } } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: Task
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/:workflow_id': {
      $delete:
        | {
            input: { param: { workflow_id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DeleteWorkflowSuccess
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workflow_id: string } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            }
            output: DeleteWorkflowError
            outputFormat: 'text'
            status: 404
          }
      $get: {
        input: { param: { workflow_id: string } } & {
          header: {
            Authorization: string
            'Zuora-Entity-Ids'?: string | undefined
            'Zuora-Track-Id'?: string | undefined
          }
        }
        output: GetWorkflowResponse
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { workflow_id: string } } & {
              header: { 'Zuora-Entity-Ids'?: string | undefined; Authorization: string }
            } & {
              json: {
                callout_trigger?: boolean | undefined
                description?: string | undefined
                interval?: string | undefined
                name?: string | undefined
                ondemand_trigger?: boolean | undefined
                priority?: string | undefined
                scheduled_trigger?: boolean | undefined
                status?: string | undefined
                timezone?: string | undefined
              }
            }
            output: GetWorkflowSetupResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workflow_id: string } } & {
              header: { 'Zuora-Entity-Ids'?: string | undefined; Authorization: string }
            } & {
              json: {
                callout_trigger?: boolean | undefined
                description?: string | undefined
                interval?: string | undefined
                name?: string | undefined
                ondemand_trigger?: boolean | undefined
                priority?: string | undefined
                scheduled_trigger?: boolean | undefined
                status?: string | undefined
                timezone?: string | undefined
              }
            }
            output: DeleteWorkflowError
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & {
              header: { 'Zuora-Entity-Ids'?: string | undefined; Authorization: string }
            } & {
              json: {
                callout_trigger?: boolean | undefined
                description?: string | undefined
                interval?: string | undefined
                name?: string | undefined
                ondemand_trigger?: boolean | undefined
                priority?: string | undefined
                scheduled_trigger?: boolean | undefined
                status?: string | undefined
                timezone?: string | undefined
              }
            }
            output: ValidationErrors
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/workflows/:workflow_id/export': {
      $get: {
        input: { param: { workflow_id: number } } & {
          header: { 'Zuora-Track-Id'?: string | undefined }
        }
        output: {
          linkages?: Linkage[] | undefined
          tasks?: Task[] | undefined
          workflow?: Workflow | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workflows/:workflow_id/run': {
      $post:
        | {
            input: { param: { workflow_id: number } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: WorkflowInstance
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workflow_id: number } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { errors?: WorkflowError[] | undefined }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { workflow_id: number } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {
              errors?: WorkflowError[] | undefined
              parameters?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'text'
            status: 406
          }
        | {
            input: { param: { workflow_id: number } } & {
              header: {
                Authorization: string
                'Zuora-Entity-Ids'?: string | undefined
                'Zuora-Track-Id'?: string | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { errors?: WorkflowError[] | undefined }
            outputFormat: 'text'
            status: 409
          }
    }
  },
  '/'
>
export default routes
