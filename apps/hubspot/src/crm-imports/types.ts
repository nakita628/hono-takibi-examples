type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type ImportTemplate = {
  templateId: bigint
  templateType: 'admin_defined' | 'previous_import' | 'user_file'
}
type PublicObjectListRecord = { listId: string; objectType: string }
type PublicImportMetadata = {
  counters: { [x: string]: number }
  fileIds: string[]
  objectLists: PublicObjectListRecord[]
}
type PublicImportResponse = {
  createdAt: string
  id: string
  importName?: string | undefined
  importRequestJson?: { [x: string]: unknown } | undefined
  importSource?:
    | 'API'
    | 'CRM_UI'
    | 'IMPORT'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'SALESFORCE'
    | undefined
  importTemplate?: ImportTemplate | undefined
  mappedObjectTypeIds: string[]
  metadata: PublicImportMetadata
  optOutImport: boolean
  state: 'CANCELED' | 'DEFERRED' | 'DONE' | 'FAILED' | 'PROCESSING' | 'REVERTED' | 'STARTED'
  updatedAt: string
}
type CollectionResponsePublicImportResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicImportResponse[]
}
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
type ActionResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type MaskedSubstring = { end: number; label: string; start: number }
type MaskedSubstrings = { substrings: MaskedSubstring[] }
type PropertyValue = {
  dataSensitivity: 'high' | 'none' | 'standard'
  isEncrypted: boolean
  isLargeValue: boolean
  maskedSubstrings: MaskedSubstrings
  name: string
  persistenceTimestamp: bigint
  requestId: string
  selectedByUser: boolean
  selectedByUserTimestamp: bigint
  source:
    | 'ACADEMY'
    | 'ACCEPTANCE_TEST'
    | 'ACTIVITY_AUTO_ASSOCIATE'
    | 'ACTIVITY_LOG_REVERT'
    | 'ADS'
    | 'AI_GROUP'
    | 'ANALYTICS'
    | 'API'
    | 'APPROVALS'
    | 'ASSISTS'
    | 'ASSOCIATIONS'
    | 'AUTO_ASSOCIATE_BY_DOMAIN'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM'
    | 'AVATARS_SERVICE'
    | 'BATCH_UPDATE'
    | 'BCC_TO_CRM'
    | 'BEHAVIORAL_EVENTS'
    | 'BET_ASSIGNMENT'
    | 'BET_CRM_CONNECTOR'
    | 'BIDEN'
    | 'BILLING'
    | 'BOT'
    | 'BREEZE_AGENT'
    | 'CALCULATED'
    | 'CENTRAL_EXCHANGE_RATES'
    | 'CHATSPOT'
    | 'CLONE_OBJECTS'
    | 'COMMUNICATOR'
    | 'COMPANIES'
    | 'COMPANY_FAMILIES'
    | 'COMPANY_INSIGHTS'
    | 'CONNECTED_ACCOUNT'
    | 'CONTACTS'
    | 'CONTACTS_WEB'
    | 'CONTENT_MEMBERSHIP'
    | 'CONVERSATIONAL_ENRICHMENT'
    | 'CONVERSATIONS'
    | 'CRM_PROCESSES_PLATFORM'
    | 'CRM_UI'
    | 'CRM_UI_BULK_ACTION'
    | 'CUSTOMER_AGENT'
    | 'CUSTOMER_PORTAL'
    | 'DATA_ENRICHMENT'
    | 'DATA_QUALITY'
    | 'DATASET'
    | 'DEALS'
    | 'DEFAULT'
    | 'DELETE_OBJECTS'
    | 'DI_WRITE_TO_CRM'
    | 'EMAIL'
    | 'EMAIL_INBOX_IMPORT'
    | 'EMAIL_INTEGRATION'
    | 'ENGAGEMENTS'
    | 'EXTENSION'
    | 'FILE_MANAGER'
    | 'FLYWHEEL_PRODUCT_DATA_SYNC'
    | 'FORECASTING'
    | 'FORM'
    | 'FORWARD_TO_CRM'
    | 'GMAIL_INTEGRATION'
    | 'GOALS'
    | 'HEISENBERG'
    | 'HELP_DESK'
    | 'HELP_DESK_AI'
    | 'IMPORT'
    | 'INTEGRATION'
    | 'INTEGRATIONS_PLATFORM'
    | 'INTEGRATIONS_SYNC'
    | 'INTENT'
    | 'INTERNAL_PROCESSING'
    | 'LEADIN'
    | 'LEGAL_BASIS_REMEDIATION'
    | 'MARKET_SOURCING'
    | 'MARKETPLACE'
    | 'MARKETS'
    | 'MEETINGS'
    | 'MERGE_COMPANIES'
    | 'MERGE_CONTACTS'
    | 'MERGE_OBJECTS'
    | 'MERGE_REVERT_OBJECTS'
    | 'MICROAPPS'
    | 'MIGRATION'
    | 'MOBILE_ANDROID'
    | 'MOBILE_IOS'
    | 'PAYMENTS'
    | 'PIPELINE_SETTINGS'
    | 'PLAYBOOKS'
    | 'PORTAL_OBJECT_SYNC'
    | 'PORTAL_USER_ASSOCIATOR'
    | 'PRESENTATIONS'
    | 'PRIMARY_AUTOMATION'
    | 'PROPERTY_DEFAULT_VALUE'
    | 'PROPERTY_RESTORE'
    | 'PROPERTY_SETTINGS'
    | 'PROSPECTING_AGENT'
    | 'QUOTAS'
    | 'QUOTES'
    | 'RECYCLING_BIN'
    | 'RESTORE_OBJECTS'
    | 'REVENUE_PLATFORM'
    | 'SALES'
    | 'SALES_MESSAGES'
    | 'SALESFORCE'
    | 'SEQUENCES'
    | 'SETTINGS'
    | 'SIDEKICK'
    | 'SIGNALS'
    | 'SLACK_INTEGRATION'
    | 'SMART_DATA_CAPTURE'
    | 'SOCIAL'
    | 'SUCCESS'
    | 'TALLY'
    | 'TASK'
    | 'UNKNOWN'
    | 'WAL_INCREMENTAL'
    | 'WORK_UI'
    | 'WORKFLOW_CONTACT_DELETE_ACTION'
    | 'WORKFLOWS'
  sourceId: string
  sourceLabel: string
  sourceMetadata: string
  sourceUpstreamDeployable: string
  sourceVid: bigint[]
  timestamp: bigint
  unit: string
  updatedByUserId: number
  useTimestampAsPersistenceTimestamp: boolean
  value: string
}
type ImportRowCore = {
  additionalRowData: string[]
  containsEncryptedProperties: boolean
  fileId: bigint
  lineNumber: number
  pageName?: string | undefined
  rowData: string[]
}
type PublicImportError = {
  createdAt: bigint
  errorMessage?: string | undefined
  errorType:
    | 'AMBIGUOUS_ENUMERATION_OPTION'
    | 'ASSOCIATION_LABEL_NOT_FOUND'
    | 'ASSOCIATION_LIMIT_EXCEEDED'
    | 'ASSOCIATION_RECORD_NOT_FOUND'
    | 'COLUMN_TOO_LARGE'
    | 'COULD_NOT_FIND_BUSINESS_UNIT'
    | 'COULD_NOT_FIND_OWNER'
    | 'COULD_NOT_PARSE_DATE'
    | 'COULD_NOT_PARSE_NUMBER'
    | 'COULD_NOT_PARSE_ROW'
    | 'COULD_NOT_PARSE_TERM'
    | 'CREATE_ONLY_IMPORT'
    | 'DUPLICATE_ALTERNATE_ID'
    | 'DUPLICATE_ASSOCIATION_ID'
    | 'DUPLICATE_EVENT'
    | 'DUPLICATE_OBJECT_ID'
    | 'DUPLICATE_RECORD_ID'
    | 'DUPLICATE_ROW_CONTENT'
    | 'DUPLICATE_UNIQUE_CREATION_KEY'
    | 'DUPLICATE_UNIQUE_PROPERTY_VALUE'
    | 'FAILED_TO_CREATE_ASSOCIATION'
    | 'FAILED_TO_FIND_RECORD_FOR_ASSOCIATIONS'
    | 'FAILED_TO_OPT_OUT_CONTACT'
    | 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES'
    | 'FAILED_VALIDATION'
    | 'FILE_NOT_FOUND'
    | 'GDPR_BLACKLISTED_EMAIL'
    | 'INCORRECT_NUMBER_OF_COLUMNS'
    | 'INVALID_ALTERNATE_ID'
    | 'INVALID_ASSOCIATION_IDENTIFIER'
    | 'INVALID_ASSOCIATION_KEY'
    | 'INVALID_COLUMN_CONFIGURATION'
    | 'INVALID_CUSTOM_PROPERTY_VALIDATION'
    | 'INVALID_DOMAIN'
    | 'INVALID_EMAIL'
    | 'INVALID_ENUM_FILE_ID_OR_URL'
    | 'INVALID_ENUMERATION_OPTION'
    | 'INVALID_EVENT'
    | 'INVALID_EVENT_TIMESTAMP'
    | 'INVALID_FILE_TYPE'
    | 'INVALID_NUMBER_SIZE'
    | 'INVALID_OBJECT_ID'
    | 'INVALID_PROPERTY_VALUE_FORMAT'
    | 'INVALID_RECORD_ID'
    | 'INVALID_REQUIRED_PROPERTY'
    | 'INVALID_SHEET_COUNT'
    | 'INVALID_SPREADSHEET'
    | 'LIMIT_EXCEEDED'
    | 'LINE_ITEM_MULTIPLE_PARENTS_IN_ROW'
    | 'MANY_DUPLICATE_ERRORS'
    | 'MANY_ERRORS_IN_ROW'
    | 'MISSING_EVENT_DEFINITION'
    | 'MISSING_EVENT_TIMESTAMP'
    | 'MISSING_OBJECT_DEFINITION'
    | 'MISSING_REQUIRED_PROPERTY'
    | 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN'
    | 'MULTIPLE_OWNERS_FOUND'
    | 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER'
    | 'OUTSIDE_VALID_TERM_RANGE'
    | 'OUTSIDE_VALID_TIME_RANGE'
    | 'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED'
    | 'PROPERTY_DEFINITION_NOT_FOUND'
    | 'PROPERTY_VALUE_NOT_FOUND'
    | 'ROW_DATA_TOO_LARGE'
    | 'SECONDARY_EMAIL_WRITE_FAILURE'
    | 'UNKNOWN_ASSOCIATION_RECORD_ID'
    | 'UNKNOWN_BAD_REQUEST'
    | 'UNKNOWN_ERROR'
    | 'UPDATE_ONLY_IMPORT'
  extraContext?: string | undefined
  id: string
  invalidPropertyValue?: PropertyValue | undefined
  invalidValue?: string | undefined
  invalidValueToDisplay?: string | undefined
  knownColumnNumber?: number | undefined
  objectType?:
    | 'ABANDONED_CART'
    | 'ACCEPTANCE_TEST'
    | 'AD'
    | 'AD_ACCOUNT'
    | 'AD_CAMPAIGN'
    | 'AD_GROUP'
    | 'AI_FORECAST'
    | 'ALL_PAGES'
    | 'APPROVAL'
    | 'APPROVAL_STEP'
    | 'ATTRIBUTION'
    | 'AUDIENCE'
    | 'AUTOMATION_JOURNEY'
    | 'AUTOMATION_PLATFORM_FLOW'
    | 'AUTOMATION_PLATFORM_FLOW_ACTION'
    | 'BET_ALERT'
    | 'BET_DELIVERABLE_SERVICE'
    | 'BLOG_LISTING_PAGE'
    | 'BLOG_POST'
    | 'CALL'
    | 'CAMPAIGN'
    | 'CAMPAIGN_BUDGET_ITEM'
    | 'CAMPAIGN_SPEND_ITEM'
    | 'CAMPAIGN_STEP'
    | 'CAMPAIGN_TEMPLATE'
    | 'CAMPAIGN_TEMPLATE_STEP'
    | 'CART'
    | 'CASE_STUDY'
    | 'CHATFLOW'
    | 'CLIP'
    | 'CMS_URL'
    | 'COMBO_EVENT_CONFIGURATION'
    | 'COMMERCE_PAYMENT'
    | 'COMMUNICATION'
    | 'COMPANY'
    | 'CONTACT'
    | 'CONTACT_CREATE_ATTRIBUTION'
    | 'CONTENT'
    | 'CONTENT_AUDIT'
    | 'CONTENT_AUDIT_PAGE'
    | 'CONVERSATION'
    | 'CONVERSATION_INBOX'
    | 'CONVERSATION_SESSION'
    | 'CRM_OBJECTS_DUMMY_TYPE'
    | 'CRM_PIPELINES_DUMMY_TYPE'
    | 'CTA'
    | 'CTA_VARIANT'
    | 'DATA_PRIVACY_CONSENT'
    | 'DATA_SYNC_STATE'
    | 'DEAL'
    | 'DEAL_CREATE_ATTRIBUTION'
    | 'DEAL_REGISTRATION'
    | 'DEAL_SPLIT'
    | 'DISCOUNT'
    | 'DISCOUNT_CODE'
    | 'DISCOUNT_TEMPLATE'
    | 'EMAIL'
    | 'ENGAGEMENT'
    | 'EXPORT'
    | 'EXTERNAL_WEB_URL'
    | 'FEE'
    | 'FEEDBACK_SUBMISSION'
    | 'FEEDBACK_SURVEY'
    | 'FILE_MANAGER_FILE'
    | 'FILE_MANAGER_FOLDER'
    | 'FOLDER'
    | 'FORECAST'
    | 'FORM'
    | 'FORM_SUBMISSION_INBOUNDDB'
    | 'GOAL_TARGET'
    | 'GOAL_TARGET_GROUP'
    | 'GOAL_TEMPLATE'
    | 'GSC_PROPERTY'
    | 'HUB'
    | 'IMPORT'
    | 'INVOICE'
    | 'KEYWORD'
    | 'KNOWLEDGE_ARTICLE'
    | 'LANDING_PAGE'
    | 'LEAD'
    | 'LINE_ITEM'
    | 'MARKETING_CALENDAR'
    | 'MARKETING_CAMPAIGN_UTM'
    | 'MARKETING_EMAIL'
    | 'MARKETING_EVENT'
    | 'MARKETING_EVENT_ATTENDANCE'
    | 'MARKETING_SMS'
    | 'MEDIA_BRIDGE'
    | 'MEETING_EVENT'
    | 'MIC'
    | 'NOTE'
    | 'OBJECT_LIST'
    | 'ORDER'
    | 'OWNER'
    | 'PARTNER_ACCOUNT'
    | 'PARTNER_CLIENT'
    | 'PARTNER_CLIENT_REVENUE'
    | 'PARTNER_SERVICE'
    | 'PAYMENT_LINK'
    | 'PAYMENT_SCHEDULE'
    | 'PAYMENT_SCHEDULE_INSTALLMENT'
    | 'PERMISSIONS_TESTING'
    | 'PLAYBOOK'
    | 'PLAYBOOK_QUESTION'
    | 'PLAYBOOK_SUBMISSION'
    | 'PLAYBOOK_SUBMISSION_ANSWER'
    | 'PLAYLIST'
    | 'PLAYLIST_FOLDER'
    | 'PODCAST_EPISODE'
    | 'PORTAL'
    | 'PORTAL_OBJECT_SYNC_MESSAGE'
    | 'POSTAL_MAIL'
    | 'PRIVACY_SCANNER_COOKIE'
    | 'PRODUCT'
    | 'PRODUCT_OR_FOLDER'
    | 'PROPERTY_INFO'
    | 'PROSPECTING_AGENT_CONTACT_ASSIGNMENT'
    | 'PUBLISHING_TASK'
    | 'QUARANTINED_SUBMISSION'
    | 'QUOTA'
    | 'QUOTE'
    | 'QUOTE_FIELD'
    | 'QUOTE_MODULE'
    | 'QUOTE_MODULE_FIELD'
    | 'QUOTE_TEMPLATE'
    | 'RESTORABLE_CRM_OBJECT'
    | 'ROSTER'
    | 'ROSTER_MEMBER'
    | 'SALES_DOCUMENT'
    | 'SALES_TASK'
    | 'SALES_WORKLOAD'
    | 'SALESFORCE_SYNC_ERROR'
    | 'SCHEDULING_PAGE'
    | 'SCHEMAS_BACKEND_TEST'
    | 'SCORE_CONFIGURATION'
    | 'SEQUENCE'
    | 'SEQUENCE_ENROLLMENT'
    | 'SEQUENCE_STEP'
    | 'SEQUENCE_STEP_ENROLLMENT'
    | 'SERVICE'
    | 'SITE_PAGE'
    | 'SNIPPET'
    | 'SOCIAL_BROADCAST'
    | 'SOCIAL_CHANNEL'
    | 'SOCIAL_POST'
    | 'SOCIAL_PROFILE'
    | 'SOX_PROTECTED_DUMMY_TYPE'
    | 'SOX_PROTECTED_TEST_TYPE'
    | 'SUBMISSION_TAG'
    | 'SUBSCRIPTION'
    | 'TASK'
    | 'TASK_TEMPLATE'
    | 'TAX'
    | 'TEMPLATE'
    | 'TICKET'
    | 'UNKNOWN'
    | 'UNSUBSCRIBE'
    | 'USER'
    | 'VIEW'
    | 'VIEW_BLOCK'
    | 'WEB_INTERACTIVE'
    | undefined
  objectTypeId?: string | undefined
  sourceData: ImportRowCore
}
type CollectionResponsePublicImportErrorForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicImportError[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/imports/2026-09': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponsePublicImportResponseForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { form: { files?: File | undefined; importRequest?: string | undefined } }
            output: PublicImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { files?: File | undefined; importRequest?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/imports/2026-09/:importId': {
      $get:
        | {
            input: { param: { importId: bigint } }
            output: PublicImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { importId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/imports/2026-09/:importId/cancel': {
      $post:
        | {
            input: { param: { importId: bigint } }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { importId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/imports/2026-09/:importId/errors': {
      $get:
        | {
            input: { param: { importId: bigint } } & {
              query: {
                after?: string | undefined
                includeErrorMessage?: boolean | undefined
                includeRowData?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: CollectionResponsePublicImportErrorForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { importId: bigint } } & {
              query: {
                after?: string | undefined
                includeErrorMessage?: boolean | undefined
                includeRowData?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
