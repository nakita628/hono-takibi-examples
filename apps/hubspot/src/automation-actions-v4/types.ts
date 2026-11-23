type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PublicExecutionTranslationRule = {
  conditions: { [x: string]: { [x: string]: unknown } }
  labelName: string
}
type PublicActionFunctionIdentifier = {
  functionType:
    | 'POST_ACTION_EXECUTION'
    | 'POST_FETCH_OPTIONS'
    | 'PRE_ACTION_EXECUTION'
    | 'PRE_FETCH_OPTIONS'
  id?: string | undefined
}
type PublicSingleFieldDependency = {
  controllingFieldName: string
  dependencyType: 'SINGLE_FIELD'
  dependentFieldNames: string[]
}
type PublicConditionalSingleFieldDependency = {
  controllingFieldName: string
  controllingFieldValue: string
  dependencyType: 'CONDITIONAL_SINGLE_FIELD'
  dependentFieldNames: string[]
}
type PublicOption = {
  description?: string | undefined
  displayOrder?: number | undefined
  label: string
  value: string
}
type PublicFieldTypeDefinition = {
  description?: string | undefined
  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
    | undefined
  helpText?: string | undefined
  label?: string | undefined
  name: string
  options: PublicOption[]
  optionsUrl?: string | undefined
  referencedObjectType?: 'OWNER' | undefined
  type:
    | 'bool'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'json'
    | 'number'
    | 'object_coordinates'
    | 'phone_number'
    | 'string'
}
type PublicInputFieldDefinition = {
  isRequired: boolean
  supportedValueTypes?: ('STATIC_VALUE' | 'OBJECT_PROPERTY')[] | undefined
  typeDefinition: PublicFieldTypeDefinition
}
type PublicActionLabels = {
  actionCardContent?: string | undefined
  actionDescription?: string | undefined
  actionName: string
  appDisplayName?: string | undefined
  executionRules?: { [x: string]: string } | undefined
  inputFieldDescriptions?: { [x: string]: string } | undefined
  inputFieldLabels?: { [x: string]: string } | undefined
  inputFieldOptionLabels?: { [x: string]: { [x: string]: string } } | undefined
  outputFieldLabels?: { [x: string]: string } | undefined
}
type PublicObjectRequestOptions = { properties: string[] }
type Option = {
  description: string
  displayOrder: number
  doubleData: number
  hidden: boolean
  label: string
  readOnly: boolean
  value: string
}
type IntegerFieldSchema = {
  maximum?: number | undefined
  minimum?: number | undefined
  type: 'INTEGER'
}
type LongFieldSchema = { maximum?: bigint | undefined; minimum?: bigint | undefined; type: 'LONG' }
type DoubleFieldSchema = {
  maximum?: number | undefined
  minimum?: number | undefined
  type: 'DOUBLE'
}
type StringFieldSchema = {
  allowedObjectTypeIds?: string[] | undefined
  format?:
    | 'DATE'
    | 'DATE_TIME'
    | 'MONTH_AND_DAY'
    | 'OBJECT_COORDINATE'
    | 'OBJECT_PROPERTY'
    | 'OBJECT_TYPE'
    | 'TIME'
    | 'URI'
    | undefined
  type: 'STRING'
}
type BooleanFieldSchema = { type: 'BOOLEAN' }
type ObjectFieldSchema = { properties: { [x: string]: unknown }; type: 'OBJECT' }
type UnknownFieldSchema = { type: 'UNKNOWN' }
type ArrayFieldSchema = {
  items:
    | IntegerFieldSchema
    | LongFieldSchema
    | DoubleFieldSchema
    | StringFieldSchema
    | BooleanFieldSchema
    | ArrayFieldSchema
    | ObjectFieldSchema
    | UnknownFieldSchema
  type: 'ARRAY'
}
type FieldTypeDefinition = {
  description?: string | undefined
  externalOptions: boolean
  externalOptionsReferenceType?: string | undefined
  fieldType?:
    | 'booleancheckbox'
    | 'calculation_equation'
    | 'calculation_read_time'
    | 'calculation_rollup'
    | 'calculation_score'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'html'
    | 'number'
    | 'phonenumber'
    | 'radio'
    | 'select'
    | 'text'
    | 'textarea'
    | 'unknown'
    | undefined
  helpText?: string | undefined
  label?: string | undefined
  name: string
  options: Option[]
  optionsUrl?: string | undefined
  referencedObjectType?:
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
  schema:
    | IntegerFieldSchema
    | LongFieldSchema
    | DoubleFieldSchema
    | StringFieldSchema
    | BooleanFieldSchema
    | ArrayFieldSchema
    | ObjectFieldSchema
    | UnknownFieldSchema
  type:
    | 'bool'
    | 'currency_number'
    | 'date'
    | 'datetime'
    | 'enumeration'
    | 'json'
    | 'number'
    | 'object_coordinates'
    | 'phone_number'
    | 'string'
    | 'time_range'
  useChirp: boolean
}
type OutputFieldDefinition = { typeDefinition: FieldTypeDefinition }
type PublicActionDefinition = {
  actionUrl: string
  archivedAt?: bigint | undefined
  executionRules?: PublicExecutionTranslationRule[] | undefined
  functions: PublicActionFunctionIdentifier[]
  id: string
  inputFieldDependencies?:
    | (PublicSingleFieldDependency | PublicConditionalSingleFieldDependency)[]
    | undefined
  inputFields: PublicInputFieldDefinition[]
  labels: { [x: string]: PublicActionLabels }
  objectRequestOptions?: PublicObjectRequestOptions | undefined
  objectTypes: string[]
  outputFields?: OutputFieldDefinition[] | undefined
  published: boolean
  revisionId: string
}
type CollectionResponsePublicActionDefinitionForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicActionDefinition[]
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
type PublicActionFunction = {
  functionSource: string
  functionType:
    | 'POST_ACTION_EXECUTION'
    | 'POST_FETCH_OPTIONS'
    | 'PRE_ACTION_EXECUTION'
    | 'PRE_FETCH_OPTIONS'
  id?: string | undefined
}
type PublicActionDefinitionEgg = {
  actionUrl: string
  archivedAt?: bigint | undefined
  executionRules?: PublicExecutionTranslationRule[] | undefined
  functions: PublicActionFunction[]
  inputFieldDependencies?:
    | (PublicSingleFieldDependency | PublicConditionalSingleFieldDependency)[]
    | undefined
  inputFields: PublicInputFieldDefinition[]
  labels: { [x: string]: PublicActionLabels }
  objectRequestOptions?: PublicObjectRequestOptions | undefined
  objectTypes: string[]
  outputFields?: OutputFieldDefinition[] | undefined
  published: boolean
}
type PublicActionDefinitionPatch = {
  actionUrl?: string | undefined
  executionRules?: PublicExecutionTranslationRule[] | undefined
  inputFieldDependencies?:
    | (PublicSingleFieldDependency | PublicConditionalSingleFieldDependency)[]
    | undefined
  inputFields?: PublicInputFieldDefinition[] | undefined
  labels?: { [x: string]: PublicActionLabels } | undefined
  objectRequestOptions?: PublicObjectRequestOptions | undefined
  objectTypes?: string[] | undefined
  outputFields?: OutputFieldDefinition[] | undefined
  published?: boolean | undefined
}
type CollectionResponsePublicActionFunctionIdentifierNoPaging = {
  results: PublicActionFunctionIdentifier[]
}
type PublicActionDefinitionRequiresObjectResponse = { requiresObject: boolean }
type PublicActionDefinitionRequiresObjectRequest = { requiresObject: boolean }
type PublicActionRevision = {
  createdAt: string
  definition: PublicActionDefinition
  id: string
  revisionId: string
}
type CollectionResponsePublicActionRevisionForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicActionRevision[]
}
type CallbackCompletionBatchRequest = {
  callbackId: string
  failureReasonType?: string | undefined
  outputFields: { [x: string]: string }
  typedOutputs: { [x: string]: unknown }
}
type BatchInputCallbackCompletionBatchRequest = { inputs: CallbackCompletionBatchRequest[] }
type CallbackCompletionRequest = {
  failureReasonType?: string | undefined
  outputFields: { [x: string]: string }
  typedOutputs: { [x: string]: unknown }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/automation/actions/2026-09/:appId': {
      $get:
        | {
            input: { param: { appId: number } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: CollectionResponsePublicActionDefinitionForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { appId: number } } & { json: PublicActionDefinitionEgg }
            output: PublicActionDefinition
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { appId: number } } & { json: PublicActionDefinitionEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId': {
      $get:
        | {
            input: { param: { appId: number; definitionId: string } } & {
              query: { archived?: boolean | undefined }
            }
            output: PublicActionDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string } } & {
              query: { archived?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { appId: number; definitionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { appId: number; definitionId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { appId: number; definitionId: string } } & {
              json: PublicActionDefinitionPatch
            }
            output: PublicActionDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string } } & {
              json: PublicActionDefinitionPatch
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/functions': {
      $get:
        | {
            input: { param: { appId: number; definitionId: string } }
            output: CollectionResponsePublicActionFunctionIdentifierNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType': {
      $get:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: PublicActionFunction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            } & { json: string }
            output: PublicActionFunctionIdentifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            } & { json: string }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId': {
      $get:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: PublicActionFunction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            } & { json: string }
            output: PublicActionFunctionIdentifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            } & { json: string }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                appId: number
                definitionId: string
                functionId: string
                functionType:
                  | 'POST_ACTION_EXECUTION'
                  | 'POST_FETCH_OPTIONS'
                  | 'PRE_ACTION_EXECUTION'
                  | 'PRE_FETCH_OPTIONS'
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/requires-object': {
      $get:
        | {
            input: { param: { appId: number; definitionId: string } }
            output: PublicActionDefinitionRequiresObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { appId: number; definitionId: string } } & {
              json: PublicActionDefinitionRequiresObjectRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { appId: number; definitionId: string } } & {
              json: PublicActionDefinitionRequiresObjectRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/revisions': {
      $get:
        | {
            input: { param: { appId: number; definitionId: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: CollectionResponsePublicActionRevisionForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/2026-09/:appId/:definitionId/revisions/:revisionId': {
      $get:
        | {
            input: { param: { appId: number; definitionId: string; revisionId: string } }
            output: PublicActionRevision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; definitionId: string; revisionId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/callbacks/2026-09/complete': {
      $post:
        | {
            input: { json: BatchInputCallbackCompletionBatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: BatchInputCallbackCompletionBatchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/actions/callbacks/2026-09/:callbackId/complete': {
      $post:
        | {
            input: { param: { callbackId: string } } & { json: CallbackCompletionRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { callbackId: string } } & { json: CallbackCompletionRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
