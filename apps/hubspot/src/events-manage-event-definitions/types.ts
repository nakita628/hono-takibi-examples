type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type AssociationDefinition = {
  allowsCustomLabels: boolean
  cardinality: 'ONE_TO_MANY' | 'ONE_TO_ONE'
  category: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  fromObjectType?:
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
  fromObjectTypeId: string
  hasAllAssociatedObjects: boolean
  hasCascadingDeletes: boolean
  hasUserEnforcedMaxFromObjectIds: boolean
  hasUserEnforcedMaxToObjectIds: boolean
  hidden: boolean
  hiddenReason?: 'DEFAULT' | 'INTERNAL' | 'USER_CONFIGURED' | undefined
  id: number
  inverseAllowsCustomLabels: boolean
  inverseCardinality: 'ONE_TO_MANY' | 'ONE_TO_ONE'
  inverseHasAllAssociatedObjects: boolean
  inverseId: number
  inverseLabel?: string | undefined
  inverseName: string
  isDefault: boolean
  isInversePrimary: boolean
  isPrimary: boolean
  label?: string | undefined
  maxFromObjectIds: number
  maxToObjectIds: number
  name: string
  portalUniqueIdentifier: string
  readOnly: boolean
  toObjectType?:
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
  toObjectTypeId: string
}
type PropertyFilterContext = { objectTypeId: string }
type BoolPropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'HAS_EVER_BEEN_EQUAL_TO' | 'HAS_NEVER_BEEN_EQUAL_TO' | 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO'
  operatorName: string
  propertyType: 'bool'
  renderSpec?: string | undefined
  value: boolean
}
type NumberPropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_BEEN_EQUAL_TO'
    | 'IS_EQUAL_TO'
    | 'IS_GREATER_THAN'
    | 'IS_GREATER_THAN_OR_EQUAL_TO'
    | 'IS_LESS_THAN'
    | 'IS_LESS_THAN_OR_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
  operatorName: string
  propertyType: 'number'
  renderSpec?: string | undefined
  value: number
}
type StringPropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'CONTAINS'
    | 'DOES_NOT_CONTAIN'
    | 'ENDS_WITH'
    | 'HAS_EVER_BEEN_EQUAL_TO'
    | 'HAS_EVER_CONTAINED'
    | 'HAS_NEVER_BEEN_EQUAL_TO'
    | 'HAS_NEVER_CONTAINED'
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'STARTS_WITH'
  operatorName: string
  propertyType: 'string'
  renderSpec?: string | undefined
  value: string
}
type DateTimePropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_AFTER' | 'IS_AFTER_DATE' | 'IS_BEFORE' | 'IS_BEFORE_DATE' | 'IS_EQUAL_TO'
  operatorName: string
  propertyType: 'datetime'
  renderSpec?: string | undefined
  requiresTimeZoneConversion: boolean
  timestamp: bigint
}
type RangedDatePropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  lowerBoundTimestamp: bigint
  operationType: string
  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN'
  operatorName: string
  propertyType: 'datetime-ranged'
  renderSpec?: string | undefined
  requiresTimeZoneConversion: boolean
  upperBoundTimestamp: bigint
}
type ComparativeDatePropertyOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_AFTER' | 'IS_BEFORE'
  operatorName: string
  propertyType: 'datetime-comparative'
  renderSpec?: string | undefined
}
type ComparativeBoolPropertyOperation = {
  comparisonPropertyName: string
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_EQUAL_TO' | 'IS_NOT_EQUAL_TO'
  operatorName: string
  propertyType: 'bool-comparative'
  renderSpec?: string | undefined
}
type ComparativeNumberPropertyOperation = {
  comparisonPropertyName: string
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'IS_EQUAL_TO'
    | 'IS_GREATER_THAN'
    | 'IS_GREATER_THAN_OR_EQUAL_TO'
    | 'IS_LESS_THAN'
    | 'IS_LESS_THAN_OR_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
  operatorName: string
  propertyType: 'number-comparative'
  renderSpec?: string | undefined
}
type ComparativeStringPropertyOperation = {
  comparisonPropertyName: string
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'CONTAINS'
    | 'DOES_NOT_CONTAIN'
    | 'ENDS_WITH'
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'STARTS_WITH'
  operatorName: string
  propertyType: 'string-comparative'
  renderSpec?: string | undefined
}
type ComparativePropertyUpdatedOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_AFTER' | 'IS_BEFORE'
  operatorName: string
  propertyType: 'property-updated-comparative'
  renderSpec?: string | undefined
}
type RollingDateRangePropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  numberOfDays: number
  operationType: string
  operator:
    | 'IS_LESS_THAN_X_DAYS_AGO'
    | 'IS_LESS_THAN_X_DAYS_FROM_NOW'
    | 'IS_MORE_THAN_X_DAYS_AGO'
    | 'IS_MORE_THAN_X_DAYS_FROM_NOW'
  operatorName: string
  propertyType: 'datetime-rolling'
  renderSpec?: string | undefined
  requiresTimeZoneConversion: boolean
}
type RollingPropertyUpdatedOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  numberOfDays: number
  operationType: string
  operator: 'NOT_UPDATED_IN_LAST_X_DAYS' | 'UPDATED_IN_LAST_X_DAYS'
  operatorName: string
  propertyType: 'rolling-property-updated'
  renderSpec?: string | undefined
}
type EnumerationPropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'CONTAINS_ALL'
    | 'DOES_NOT_CONTAIN_ALL'
    | 'HAS_EVER_BEEN_ANY_OF'
    | 'HAS_EVER_BEEN_EXACTLY'
    | 'HAS_EVER_CONTAINED_ALL'
    | 'HAS_NEVER_BEEN_ANY_OF'
    | 'HAS_NEVER_BEEN_EXACTLY'
    | 'HAS_NEVER_CONTAINED_ALL'
    | 'IS_ANY_OF'
    | 'IS_EXACTLY'
    | 'IS_NONE_OF'
    | 'IS_NOT_EXACTLY'
  operatorName: string
  propertyType: 'enumeration'
  renderSpec?: string | undefined
  values: string[]
}
type NumOccurrencesRefineBy = {
  maxOccurrences?: number | undefined
  minOccurrences?: number | undefined
  type: 'NumOccurrencesRefineBy'
}
type SetOccurrencesRefineBy = {
  setType: 'ALL' | 'ALL_INCLUDE_EMPTY' | 'ANY' | 'ANY_INCLUDE_EMPTY' | 'NONE' | 'NONE_EXCLUDE_EMPTY'
  type: 'SetOccurrencesRefineBy'
}
type TimeOffset = {
  amount: bigint
  offsetDirection: 'FUTURE' | 'PAST'
  timeUnit: 'DAYS' | 'HOURS' | 'MINUTES' | 'WEEKS'
}
type RelativeComparativeTimestampRefineBy = {
  comparison: 'AFTER' | 'BEFORE'
  timeOffset: TimeOffset
  type: 'RelativeComparativeTimestampRefineBy'
}
type RelativeRangedTimestampRefineBy = {
  lowerBoundOffset: TimeOffset
  rangeType: 'BETWEEN' | 'NOT_BETWEEN'
  type: 'RelativeRangedTimestampRefineBy'
  upperBoundOffset: TimeOffset
}
type AbsoluteComparativeTimestampRefineBy = {
  comparison: 'AFTER' | 'BEFORE'
  timestamp: bigint
  type: 'AbsoluteComparativeTimestampRefineBy'
}
type AbsoluteRangedTimestampRefineBy = {
  lowerTimestamp: bigint
  rangeType: 'BETWEEN' | 'NOT_BETWEEN'
  type: 'AbsoluteRangedTimestampRefineBy'
  upperTimestamp: bigint
}
type AllHistoryRefineBy = { type: 'AllHistoryRefineBy' }
type DatePoint = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  second?: number | undefined
  timeType: 'DATE'
  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER'
  year: number
  zoneId: string
}
type NowReference = {
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'NOW'
  second?: number | undefined
}
type TodayReference = {
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'TODAY'
  second?: number | undefined
}
type WeekReference = {
  dayOfWeek: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY'
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'WEEK'
  second?: number | undefined
}
type MonthReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'MONTH'
  second?: number | undefined
}
type QuarterReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'QUARTER'
  second?: number | undefined
}
type FiscalQuarter = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'FISCAL_QUARTER'
  second?: number | undefined
}
type YearReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'YEAR'
  second?: number | undefined
}
type FiscalYear = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'FISCAL_YEAR'
  second?: number | undefined
}
type IndexOffset = {
  days?: number | undefined
  hours?: number | undefined
  milliseconds?: number | undefined
  minutes?: number | undefined
  months?: number | undefined
  quarters?: number | undefined
  seconds?: number | undefined
  weeks?: number | undefined
  years?: number | undefined
}
type IndexedTimePoint = {
  indexReference:
    | NowReference
    | TodayReference
    | WeekReference
    | MonthReference
    | QuarterReference
    | FiscalQuarter
    | YearReference
    | FiscalYear
  offset?: IndexOffset | undefined
  shouldGenerateRefreshTime?: boolean | undefined
  timeType: 'INDEXED'
  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER'
  zoneId: string
}
type PropertyReferencedTime = {
  property: string
  referenceType:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
  timeType: 'PROPERTY_REFERENCED'
  timezoneSource: 'CUSTOM' | 'PORTAL' | 'USER'
  zoneId: string
}
type TimePointOperation = {
  defaultValue?: string | undefined
  endpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE'
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_AFTER' | 'IS_BEFORE'
  operatorName: string
  propertyParser:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
  propertyType: 'timepoint'
  renderSpec?: string | undefined
  timePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime
  type: string
}
type RangedTimeOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  lowerBoundEndpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE'
  lowerBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime
  operationType: string
  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN'
  operatorName: string
  propertyParser:
    | 'ANNIVERSARY'
    | 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'
    | 'UPDATED_AT'
    | 'VALUE'
    | 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION'
  propertyType: 'rangedtime'
  renderSpec?: string | undefined
  type: string
  upperBoundEndpointBehavior: 'EXCLUSIVE' | 'INCLUSIVE'
  upperBoundTimePoint: DatePoint | IndexedTimePoint | PropertyReferencedTime
}
type AllPropertyTypesOperation = {
  coalescingRefineBy: NumOccurrencesRefineBy | SetOccurrencesRefineBy
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'IS_BLANK' | 'IS_KNOWN' | 'IS_NOT_BLANK' | 'IS_UNKNOWN'
  operatorName: string
  propertyType: 'alltypes'
  pruningRefineBy?:
    | RelativeComparativeTimestampRefineBy
    | RelativeRangedTimestampRefineBy
    | AbsoluteComparativeTimestampRefineBy
    | AbsoluteRangedTimestampRefineBy
    | AllHistoryRefineBy
    | TimePointOperation
    | RangedTimeOperation
    | undefined
  renderSpec?: string | undefined
}
type RangedNumberPropertyOperation = {
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  lowerBound: number
  operationType: string
  operator: 'IS_BETWEEN' | 'IS_NOT_BETWEEN'
  operatorName: string
  propertyType: 'number-ranged'
  renderSpec?: string | undefined
  upperBound: number
}
type MultiStringPropertyOperation = {
  coalescingRefineBy: NumOccurrencesRefineBy | SetOccurrencesRefineBy
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'CONTAINS'
    | 'CONTAINS_EXACTLY'
    | 'DOES_NOT_CONTAIN'
    | 'DOES_NOT_CONTAIN_EXACTLY'
    | 'ENDS_WITH'
    | 'IS_EQUAL_TO'
    | 'IS_NOT_EQUAL_TO'
    | 'STARTS_WITH'
  operatorName: string
  propertyType: 'multistring'
  pruningRefineBy?:
    | RelativeComparativeTimestampRefineBy
    | RelativeRangedTimestampRefineBy
    | AbsoluteComparativeTimestampRefineBy
    | AbsoluteRangedTimestampRefineBy
    | AllHistoryRefineBy
    | TimePointOperation
    | RangedTimeOperation
    | undefined
  renderSpec?: string | undefined
  values: string[]
}
type DatePropertyOperation = {
  day: number
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  month:
    | 'APR'
    | 'AUG'
    | 'DEC'
    | 'FEB'
    | 'JAN'
    | 'JUL'
    | 'JUN'
    | 'MAR'
    | 'MAY'
    | 'NOV'
    | 'OCT'
    | 'SEP'
  operationType: string
  operator: 'AFTER' | 'BEFORE' | 'EQUAL'
  operatorName: string
  propertyType: 'date'
  renderSpec?: string | undefined
  year: number
}
type CalendarDatePropertyOperation = {
  defaultValue?: string | undefined
  fiscalYearStart?:
    | 'APRIL'
    | 'AUGUST'
    | 'DECEMBER'
    | 'FEBRUARY'
    | 'JANUARY'
    | 'JULY'
    | 'JUNE'
    | 'MARCH'
    | 'MAY'
    | 'NOVEMBER'
    | 'OCTOBER'
    | 'SEPTEMBER'
    | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator:
    | 'IN_LAST_TIME_UNIT'
    | 'IN_LAST_TIME_UNIT_SO_FAR'
    | 'IN_NEXT_TIME_UNIT'
    | 'IN_THIS_TIME_UNIT'
    | 'IN_THIS_TIME_UNIT_SO_FAR'
  operatorName: string
  propertyType: 'calendar-date'
  renderSpec?: string | undefined
  timeUnit: 'DAY' | 'MONTH' | 'QUARTER' | 'WEEK' | 'YEAR'
  timeUnitCount: number
  useFiscalYear: boolean
}
type RegexPropertyOperation = {
  caseSensitive: boolean
  defaultValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: string
  operator: 'DOES_NOT_MATCH_REGEX' | 'MATCHES_REGEX'
  operatorName: string
  pattern: string
  propertyType: 'regex'
  renderSpec?: string | undefined
}
type PropertyFilter = {
  context?: PropertyFilterContext | undefined
  filterInsightsId?: number | undefined
  filterType: 'PROPERTY'
  frameworkFilterId?: bigint | undefined
  operation:
    | BoolPropertyOperation
    | NumberPropertyOperation
    | StringPropertyOperation
    | DateTimePropertyOperation
    | RangedDatePropertyOperation
    | ComparativeDatePropertyOperation
    | ComparativeBoolPropertyOperation
    | ComparativeNumberPropertyOperation
    | ComparativeStringPropertyOperation
    | ComparativePropertyUpdatedOperation
    | RollingDateRangePropertyOperation
    | RollingPropertyUpdatedOperation
    | EnumerationPropertyOperation
    | AllPropertyTypesOperation
    | RangedNumberPropertyOperation
    | MultiStringPropertyOperation
    | DatePropertyOperation
    | CalendarDatePropertyOperation
    | TimePointOperation
    | RangedTimeOperation
    | RegexPropertyOperation
  property: string
}
type ComboEventRule = {
  count: number
  eventTypeId: string
  lookbackWindowDays?: number | undefined
  propertyFilters: PropertyFilter[]
}
type ComboEventRuleBranch = {
  composingRules: ComboEventRule[]
  operationType: 'AND' | 'OR'
  ruleBranches: ComboEventRuleBranch[]
}
type ExternalPrimaryObjectResolutionRule = {
  eventPropertyName: string
  targetObjectPropertyName: string
}
type ExternalObjectResolutionMappingResponse = {
  primaryObjectRule: ExternalPrimaryObjectResolutionRule
}
type BehavioralEventTypeDefinitionLabels = { plural?: string | undefined; singular: string }
type PropertyModificationMetadata = {
  archivable: boolean
  readOnlyDefinition: boolean
  readOnlyOptions?: boolean | undefined
  readOnlyValue: boolean
}
type Option = {
  description?: string | undefined
  displayOrder?: number | undefined
  hidden: boolean
  label: string
  value: string
}
type Property = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  calculated?: boolean | undefined
  calculationFormula?: string | undefined
  createdAt?: string | undefined
  createdUserId?: string | undefined
  currencyPropertyName?: string | undefined
  dataSensitivity?: 'highly_sensitive' | 'non_sensitive' | 'sensitive' | undefined
  dateDisplayHint?: 'absolute' | 'absolute_with_relative' | 'time_since' | 'time_until' | undefined
  description: string
  displayOrder?: number | undefined
  externalOptions?: boolean | undefined
  fieldType: string
  formField?: boolean | undefined
  groupName: string
  hasUniqueValue?: boolean | undefined
  hidden?: boolean | undefined
  hubspotDefined?: boolean | undefined
  label: string
  modificationMetadata?: PropertyModificationMetadata | undefined
  name: string
  numberDisplayHint?:
    | 'currency'
    | 'duration'
    | 'formatted'
    | 'percentage'
    | 'probability'
    | 'unformatted'
    | undefined
  options: Option[]
  referencedObjectType?: string | undefined
  sensitiveDataCategories?: string[] | undefined
  showCurrencySymbol?: boolean | undefined
  textDisplayHint?:
    | 'domain_name'
    | 'email'
    | 'ip_address'
    | 'multi_line'
    | 'phone_number'
    | 'physical_address'
    | 'postal_code'
    | 'unformatted_single_line'
    | undefined
  type: string
  updatedAt?: string | undefined
  updatedUserId?: string | undefined
}
type ExternalBehavioralEventTypeDefinition = {
  archived: boolean
  associations: AssociationDefinition[]
  comboEventRules?: ComboEventRuleBranch | undefined
  createdAt?: string | undefined
  createdUserId?: number | undefined
  customMatchingId?: ExternalObjectResolutionMappingResponse | undefined
  description?: string | undefined
  detailTemplate?: string | undefined
  fullyQualifiedName: string
  headerTemplate?: string | undefined
  id: string
  labels: BehavioralEventTypeDefinitionLabels
  name: string
  objectTypeId: string
  primaryObject?: string | undefined
  primaryObjectId?: string | undefined
  properties: Property[]
  trackingType?:
    | 'APP_EVENT'
    | 'AUTOCAPTURE_EVENT'
    | 'CLICKED_ELEMENT'
    | 'COMBO_EVENT'
    | 'CUSTOM_SCRIPT'
    | 'CUSTOM_SIGNAL'
    | 'IMPORT'
    | 'MANUAL'
    | 'POLLING'
    | 'PROPERTY_CHANGE'
    | 'VISITED_URL'
    | 'WEBHOOK'
    | undefined
  updatedAt?: string | undefined
  updatedUserId?: number | undefined
}
type CollectionResponseWithTotalExternalBehavioralEventTypeDefinition = {
  paging?: Paging | undefined
  results: ExternalBehavioralEventTypeDefinition[]
  total: number
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
type ExternalObjectResolutionMappingRequest = {
  primaryObjectRule: ExternalPrimaryObjectResolutionRule
}
type OptionInput = {
  description?: string | undefined
  displayOrder: number
  hidden: boolean
  label: string
  value: string
}
type ExternalBehavioralEventPropertyCreate = {
  description?: string | undefined
  label: string
  name?: string | undefined
  options?: OptionInput[] | undefined
  type: string
}
type ExternalBehavioralEventTypeDefinitionEgg = {
  customMatchingId?: ExternalObjectResolutionMappingRequest | undefined
  description?: string | undefined
  includeDefaultProperties: boolean
  label: string
  name?: string | undefined
  primaryObject?: string | undefined
  propertyDefinitions: ExternalBehavioralEventPropertyCreate[]
}
type PropertyPatch = {
  description?: string | undefined
  displayOrder?: number | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  name: string
  options?: OptionInput[] | undefined
}
type ExternalBehavioralEventTypeDefinitionPatch = {
  description?: string | undefined
  detailTemplate?: string | undefined
  headerTemplate?: string | undefined
  label?: string | undefined
  propertyOrder: PropertyPatch[]
}
type ExternalBehavioralEventPropertyDefinitionPatch = {
  description?: string | undefined
  displayOrder?: number | undefined
  hidden?: boolean | undefined
  label?: string | undefined
  options?: OptionInput[] | undefined
}
type BehavioralEventHttpCompletionRequest = {
  email?: string | undefined
  eventName: string
  objectId?: string | undefined
  occurredAt?: string | undefined
  properties: { [x: string]: string }
  utk?: string | undefined
  uuid?: string | undefined
}
type BatchedBehavioralEventHttpCompletionRequest = {
  inputs: BehavioralEventHttpCompletionRequest[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events/2026-09/event-definitions': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                includeProperties?: boolean | undefined
                limit?: number | undefined
                searchString?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: CollectionResponseWithTotalExternalBehavioralEventTypeDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                includeProperties?: boolean | undefined
                limit?: number | undefined
                searchString?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ExternalBehavioralEventTypeDefinitionEgg }
            output: ExternalBehavioralEventTypeDefinition
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExternalBehavioralEventTypeDefinitionEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/2026-09/event-definitions/:eventName': {
      $get:
        | {
            input: { param: { eventName: string } }
            output: ExternalBehavioralEventTypeDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { eventName: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { eventName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { eventName: string } } & {
              json: ExternalBehavioralEventTypeDefinitionPatch
            }
            output: ExternalBehavioralEventTypeDefinition
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eventName: string } } & {
              json: ExternalBehavioralEventTypeDefinitionPatch
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/2026-09/event-definitions/:eventName/property': {
      $post:
        | {
            input: { param: { eventName: string } } & {
              json: ExternalBehavioralEventPropertyCreate
            }
            output: Property
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eventName: string } } & {
              json: ExternalBehavioralEventPropertyCreate
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/2026-09/event-definitions/:eventName/property/:propertyName': {
      $delete:
        | {
            input: { param: { eventName: string; propertyName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { eventName: string; propertyName: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { eventName: string; propertyName: string } } & {
              json: ExternalBehavioralEventPropertyDefinitionPatch
            }
            output: Property
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eventName: string; propertyName: string } } & {
              json: ExternalBehavioralEventPropertyDefinitionPatch
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/events/2026-09/send/batch': {
      $post:
        | {
            input: { json: BatchedBehavioralEventHttpCompletionRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: BatchedBehavioralEventHttpCompletionRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
