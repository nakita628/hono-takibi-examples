type PublicNumOccurrencesRefineBy = {
  maxOccurrences?: number | undefined
  minOccurrences?: number | undefined
  type: 'NUM_OCCURRENCES'
}
type PublicSetOccurrencesRefineBy = { setType: string; type: 'SET_OCCURRENCES' }
type PublicTimeOffset = { amount: bigint; offsetDirection: string; timeUnit: string }
type PublicRelativeComparativeTimestampRefineBy = {
  comparison: string
  timeOffset: PublicTimeOffset
  type: 'RELATIVE_COMPARATIVE'
}
type PublicRelativeRangedTimestampRefineBy = {
  lowerBoundOffset: PublicTimeOffset
  rangeType: string
  type: 'RELATIVE_RANGED'
  upperBoundOffset: PublicTimeOffset
}
type PublicAbsoluteComparativeTimestampRefineBy = {
  comparison: string
  timestamp: bigint
  type: 'ABSOLUTE_COMPARATIVE'
}
type PublicAbsoluteRangedTimestampRefineBy = {
  lowerTimestamp: bigint
  rangeType: string
  type: 'ABSOLUTE_RANGED'
  upperTimestamp: bigint
}
type PublicAllHistoryRefineBy = { type: 'ALL_HISTORY' }
type PublicDatePoint = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  second?: number | undefined
  timeType: 'DATE'
  timezoneSource?: string | undefined
  year: number
  zoneId: string
}
type PublicNowReference = {
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'NOW'
  second?: number | undefined
}
type PublicTodayReference = {
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'TODAY'
  second?: number | undefined
}
type PublicWeekReference = {
  dayOfWeek: 'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY'
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'WEEK'
  second?: number | undefined
}
type PublicFiscalQuarterReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'FISCAL_QUARTER'
  second?: number | undefined
}
type PublicFiscalYearReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'FISCAL_YEAR'
  second?: number | undefined
}
type PublicYearReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'YEAR'
  second?: number | undefined
}
type PublicQuarterReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  month: number
  referenceType: 'QUARTER'
  second?: number | undefined
}
type PublicMonthReference = {
  day: number
  hour?: number | undefined
  millisecond?: number | undefined
  minute?: number | undefined
  referenceType: 'MONTH'
  second?: number | undefined
}
type PublicIndexOffset = {
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
type PublicIndexedTimePoint = {
  indexReference:
    | PublicNowReference
    | PublicTodayReference
    | PublicWeekReference
    | PublicFiscalQuarterReference
    | PublicFiscalYearReference
    | PublicYearReference
    | PublicQuarterReference
    | PublicMonthReference
  offset?: PublicIndexOffset | undefined
  timeType: 'INDEXED'
  timezoneSource?: string | undefined
  zoneId: string
}
type PublicPropertyReferencedTime = {
  property: string
  referenceType: string
  timeType: 'PROPERTY_REFERENCED'
  timezoneSource?: string | undefined
  zoneId: string
}
type PublicTimePointOperation = {
  endpointBehavior?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: 'TIME_POINT'
  operator: string
  propertyParser?: string | undefined
  timePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime
  type: string
}
type PublicRangedTimeOperation = {
  includeObjectsWithNoValueSet: boolean
  lowerBoundEndpointBehavior?: string | undefined
  lowerBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime
  operationType: string
  operator: string
  propertyParser?: string | undefined
  type: 'TIME_RANGED'
  upperBoundEndpointBehavior?: string | undefined
  upperBoundTimePoint: PublicDatePoint | PublicIndexedTimePoint | PublicPropertyReferencedTime
}
type PublicBoolPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'BOOL'
  operator: string
  value: boolean
}
type PublicNumberPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'NUMBER'
  operator: string
  value: number
}
type PublicStringPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'STRING'
  operator: string
  value: string
}
type PublicDateTimePropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'DATETIME'
  operator: string
  requiresTimeZoneConversion: boolean
  timestamp: bigint
}
type PublicRangedDatePropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  lowerBound: bigint
  operationType: 'RANGED_DATE'
  operator: string
  requiresTimeZoneConversion: boolean
  upperBound: bigint
}
type PublicComparativePropertyUpdatedOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: 'COMPARATIVE_PROPERTY_UPDATED'
  operator: string
}
type PublicComparativeDatePropertyOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: 'COMPARATIVE_DATE'
  operator: string
}
type PublicRollingDateRangePropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  numberOfDays: number
  operationType: 'ROLLING_DATE_RANGE'
  operator: string
  requiresTimeZoneConversion: boolean
}
type PublicRollingPropertyUpdatedOperation = {
  includeObjectsWithNoValueSet: boolean
  numberOfDays: number
  operationType: 'ROLLING_PROPERTY_UPDATED'
  operator: string
}
type PublicEnumerationPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'ENUMERATION'
  operator: string
  values: string[]
}
type PublicAllPropertyTypesOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'ALL_PROPERTY'
  operator: string
}
type PublicRangedNumberPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  lowerBound: bigint
  operationType: 'NUMBER_RANGED'
  operator: string
  upperBound: bigint
}
type PublicMultiStringPropertyOperation = {
  includeObjectsWithNoValueSet: boolean
  operationType: 'MULTISTRING'
  operator: string
  values: string[]
}
type PublicDatePropertyOperation = {
  day: number
  includeObjectsWithNoValueSet: boolean
  month: string
  operationType: 'DATE'
  operator: string
  year: number
}
type PublicCalendarDatePropertyOperation = {
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
  operationType: 'CALENDAR_DATE'
  operator: string
  timeUnit: string
  timeUnitCount?: number | undefined
  useFiscalYear?: boolean | undefined
}
type PublicComparativeStringPropertyOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: 'COMPARATIVE_STRING'
  operator: string
}
type PublicComparativeNumberPropertyOperation = {
  comparisonPropertyName: string
  defaultComparisonValue?: string | undefined
  includeObjectsWithNoValueSet: boolean
  operationType: 'COMPARATIVE_NUMBER'
  operator: string
}
type PublicPropertyFilter = {
  filterType: 'PROPERTY'
  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | PublicComparativeStringPropertyOperation
    | PublicComparativeNumberPropertyOperation
  property: string
}
type PublicAssociationInListFilter = {
  associationCategory: string
  associationTypeId: number
  coalescingRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
  filterType: 'ASSOCIATION'
  listId: string
  operator: string
  toObjectType?: string | undefined
  toObjectTypeId?: string | undefined
}
type PublicPageViewAnalyticsFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  enableTracking?: boolean | undefined
  filterType: 'PAGE_VIEW'
  operator: string
  pageUrl: string
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicCtaAnalyticsFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  ctaName: string
  filterType: 'CTA'
  operator: string
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicEventAnalyticsFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  eventId: string
  filterType: 'EVENT'
  operator: string
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicFormSubmissionFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  filterType: 'FORM_SUBMISSION'
  formId?: string | undefined
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT'
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicFormSubmissionOnPageFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  filterType: 'FORM_SUBMISSION_ON_PAGE'
  formId?: string | undefined
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT'
  pageId: string
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicEventFilterMetadata = {
  operation:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | PublicComparativeStringPropertyOperation
    | PublicComparativeNumberPropertyOperation
  property: string
}
type PublicIntegrationEventFilter = {
  eventTypeId: number
  filterLines: PublicEventFilterMetadata[]
  filterType: 'INTEGRATION_EVENT'
}
type PublicEmailSubscriptionFilter = {
  acceptedStatuses: string[]
  filterType: 'EMAIL_SUBSCRIPTION'
  subscriptionIds: string[]
  subscriptionType?: string | undefined
}
type PublicCommunicationSubscriptionFilter = {
  acceptedOptStates: string[]
  businessUnitId?: string | undefined
  channel: string
  filterType: 'COMMUNICATION_SUBSCRIPTION'
  subscriptionIds: string[]
  subscriptionType: string
}
type PublicSurveyMonkeyFilter = { filterType: 'SURVEY_MONKEY'; operator: string; surveyId: string }
type PublicSurveyMonkeyValueFilter = {
  filterType: 'SURVEY_MONKEY_VALUE'
  operator: string
  surveyAnswerColId?: string | undefined
  surveyAnswerRowId?: string | undefined
  surveyId: string
  surveyQuestion: string
  valueComparison:
    | PublicBoolPropertyOperation
    | PublicNumberPropertyOperation
    | PublicStringPropertyOperation
    | PublicDateTimePropertyOperation
    | PublicRangedDatePropertyOperation
    | PublicComparativePropertyUpdatedOperation
    | PublicComparativeDatePropertyOperation
    | PublicRollingDateRangePropertyOperation
    | PublicRollingPropertyUpdatedOperation
    | PublicEnumerationPropertyOperation
    | PublicAllPropertyTypesOperation
    | PublicRangedNumberPropertyOperation
    | PublicMultiStringPropertyOperation
    | PublicDatePropertyOperation
    | PublicCalendarDatePropertyOperation
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | PublicComparativeStringPropertyOperation
    | PublicComparativeNumberPropertyOperation
}
type PublicWebinarFilter = {
  filterType: 'WEBINAR'
  operator: string
  webinarId?: string | undefined
}
type PublicEmailEventFilter = {
  appId: string
  clickUrl?: string | undefined
  emailId: string
  filterType: 'EMAIL_EVENT'
  level: string
  operator:
    | 'BOUNCED'
    | 'LINK_CLICKED'
    | 'MARKED_SPAM'
    | 'OPENED'
    | 'OPENED_BUT_LINK_NOT_CLICKED'
    | 'OPENED_BUT_NOT_REPLIED'
    | 'RECEIVED'
    | 'RECEIVED_BUT_NOT_OPENED'
    | 'REPLIED'
    | 'SENT'
    | 'SENT_BUT_LINK_NOT_CLICKED'
    | 'SENT_BUT_NOT_RECEIVED'
    | 'UNSUBSCRIBED'
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicPrivacyAnalyticsFilter = { filterType: 'PRIVACY'; operator: string; privacyName: string }
type PublicAdsSearchFilter = {
  adNetwork: string
  entityType: string
  filterType: 'ADS_SEARCH'
  operator: string
  searchTermType: string
  searchTerms: string[]
}
type PublicAdsTimeFilter = {
  filterType: 'ADS_TIME'
  pruningRefineBy:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
}
type PublicInListFilterMetadata = { id: string; inListType: string }
type PublicInListFilter = {
  filterType: 'IN_LIST'
  listId: string
  metadata?: PublicInListFilterMetadata | undefined
  operator: string
}
type PublicUnifiedEventsFilter = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  eventTypeId?: string | undefined
  filterLines: PublicEventFilterMetadata[]
  filterType: 'UNIFIED_EVENTS'
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicConstantFilter = {
  filterType: 'CONSTANT'
  shouldAccept: boolean
  source?: string | undefined
}
type PublicAssociationFilterBranch = {
  associationCategory: string
  associationTypeId: number
  filterBranchOperator: string
  filterBranchType: 'ASSOCIATION'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
  objectTypeId: string
  operator: string
}
type PublicUnifiedEventsFilterBranch = {
  coalescingRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
  eventTypeId: string
  filterBranchOperator: string
  filterBranchType: 'UNIFIED_EVENTS'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED'
  pruningRefineBy?:
    | PublicNumOccurrencesRefineBy
    | PublicSetOccurrencesRefineBy
    | PublicRelativeComparativeTimestampRefineBy
    | PublicRelativeRangedTimestampRefineBy
    | PublicAbsoluteComparativeTimestampRefineBy
    | PublicAbsoluteRangedTimestampRefineBy
    | PublicAllHistoryRefineBy
    | PublicTimePointOperation
    | PublicRangedTimeOperation
    | undefined
}
type PublicRestrictedFilterBranch = {
  filterBranchOperator: string
  filterBranchType: 'RESTRICTED'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
}
type PublicNotAnyFilterBranch = {
  filterBranchOperator: string
  filterBranchType: 'NOT_ANY'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
}
type PublicNotAllFilterBranch = {
  filterBranchOperator: string
  filterBranchType: 'NOT_ALL'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
}
type PublicAndFilterBranch = {
  filterBranchOperator: string
  filterBranchType: 'AND'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
}
type PublicOrFilterBranch = {
  filterBranchOperator: string
  filterBranchType: 'OR'
  filterBranches: (
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
  )[]
  filters: (
    | PublicPropertyFilter
    | PublicAssociationInListFilter
    | PublicPageViewAnalyticsFilter
    | PublicCtaAnalyticsFilter
    | PublicEventAnalyticsFilter
    | PublicFormSubmissionFilter
    | PublicFormSubmissionOnPageFilter
    | PublicIntegrationEventFilter
    | PublicEmailSubscriptionFilter
    | PublicCommunicationSubscriptionFilter
    | PublicSurveyMonkeyFilter
    | PublicSurveyMonkeyValueFilter
    | PublicWebinarFilter
    | PublicEmailEventFilter
    | PublicPrivacyAnalyticsFilter
    | PublicAdsSearchFilter
    | PublicAdsTimeFilter
    | PublicInListFilter
    | PublicUnifiedEventsFilter
    | PublicConstantFilter
  )[]
}
type PublicListPermissions = { teamsWithEditAccess: number[]; usersWithEditAccess: number[] }
type PublicMembershipSettings = {
  includeUnassigned?: boolean | undefined
  membershipTeamId?: number | undefined
}
type PublicObjectList = {
  createdAt?: string | undefined
  createdById?: string | undefined
  deletedAt?: string | undefined
  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
    | undefined
  filtersUpdatedAt?: string | undefined
  listId: string
  listPermissions?: PublicListPermissions | undefined
  listVersion: number
  membershipSettings?: PublicMembershipSettings | undefined
  name: string
  objectTypeId: string
  processingStatus: string
  processingType: string
  size?: bigint | undefined
  updatedAt?: string | undefined
  updatedById?: string | undefined
}
type ListsByIdResponse = { lists: PublicObjectList[] }
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
type ListCreateRequest = {
  customProperties?: { [x: string]: string } | undefined
  filterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
    | undefined
  listFolderId?: number | undefined
  listPermissions?: PublicListPermissions | undefined
  membershipSettings?: PublicMembershipSettings | undefined
  name: string
  objectTypeId: string
  processingType: string
}
type ListCreateResponse = { list: PublicObjectList }
type PublicListFolder = {
  childLists: number[]
  childNodes: PublicListFolder[]
  createdAt?: string | undefined
  id: string
  name?: string | undefined
  parentFolderId: string
  updatedAt?: string | undefined
  updatedContentsAt?: string | undefined
  userId?: number | undefined
}
type ListFolderFetchResponse = { folder: PublicListFolder }
type ListFolderCreateRequest = { name: string; parentFolderId?: string | undefined }
type ListFolderCreateResponse = { folder: PublicListFolder }
type ListMoveRequest = { listId: string; newFolderId: string }
type PublicMigrationMapping = { legacyListId: string; listId: string }
type PublicBatchMigrationMapping = {
  legacyListIdsToIdsMapping: PublicMigrationMapping[]
  missingLegacyListIds: string[]
}
type ListFetchResponse = { list: PublicObjectList }
type RecordIdInput = { objectTypeId: string; recordId: string }
type BatchInputRecordIdInput = { inputs: RecordIdInput[] }
type RecordListMembership = {
  firstAddedTimestamp: string
  isPublicList?: boolean | undefined
  lastAddedTimestamp: string
  listId: string
  listVersion: number
}
type RecordIdWithMemberships = {
  objectTypeId: string
  recordId: string
  recordListMemberships: RecordListMembership[]
}
type BatchResponseRecordIdWithMemberships = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: RecordIdWithMemberships[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
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
type BatchResponseRecordIdWithMembershipsWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: RecordIdWithMemberships[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type ApiCollectionResponseRecordListMembership = {
  paging?: Paging | undefined
  results: RecordListMembership[]
  total?: bigint | undefined
}
type ListSearchRequest = {
  additionalProperties: string[]
  count?: number | undefined
  listIds: string[]
  objectTypeId?: string | undefined
  offset: number
  processingTypes: string[]
  query?: string | undefined
  sort?: string | undefined
}
type PublicObjectListSearchResult = {
  additionalProperties: { [x: string]: string }
  createdAt?: string | undefined
  createdById?: string | undefined
  deletedAt?: string | undefined
  filtersUpdatedAt?: string | undefined
  listId: string
  listVersion: number
  name: string
  objectTypeId: string
  processingStatus: string
  processingType: string
  updatedAt?: string | undefined
  updatedById?: string | undefined
}
type ListSearchResponse = {
  hasMore: boolean
  lists: PublicObjectListSearchResult[]
  offset: number
  total: number
}
type JoinTimeAndRecordId = { membershipTimestamp: string; recordId: string }
type ApiCollectionResponseJoinTimeAndRecordId = {
  paging?: Paging | undefined
  results: JoinTimeAndRecordId[]
  total?: bigint | undefined
}
type MembershipsUpdateResponse = {
  recordIdsMissing: string[]
  recordIdsRemoved: string[]
  recordsIdsAdded: string[]
}
type MembershipChangeRequest = { recordIdsToAdd: string[]; recordIdsToRemove: string[] }
type PublicListConversionDate = {
  conversionType: 'CONVERSION_DATE'
  day: number
  month: number
  year: number
}
type PublicListConversionInactivity = {
  conversionType: 'INACTIVITY'
  offset: number
  timeUnit: 'DAY' | 'MONTH' | 'WEEK'
}
type PublicListConversionResponse = {
  convertedAt?: string | undefined
  listId: string
  requestedConversionTime?: PublicListConversionDate | PublicListConversionInactivity | undefined
}
type PublicListConversionTime = PublicListConversionDate | PublicListConversionInactivity
type ListSizeDataPoint = { size: bigint; timestamp: string }
type ListSizeAndEditHistoryResponse = { editHistory: string[]; sizeHistory: ListSizeDataPoint[] }
type ListFilterUpdateRequest = {
  filterBranch:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
}
type ListUpdateResponse = { updatedList?: PublicObjectList | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/lists/2026-09': {
      $get:
        | {
            input: {
              query: { includeFilters?: boolean | undefined; listIds?: string[] | undefined }
            }
            output: ListsByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { includeFilters?: boolean | undefined; listIds?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ListCreateRequest }
            output: ListCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ListCreateRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/lists/2026-09/folders': {
      $get:
        | {
            input: { query: { folderId?: string | undefined } }
            output: ListFolderFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { folderId?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ListFolderCreateRequest }
            output: ListFolderCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListFolderCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/folders/move-list': {
      $put: { input: { json: ListMoveRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/lists/2026-09/folders/:folderId': {
      $delete: {
        input: { param: { folderId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/folders/:folderId/move/:newParentFolderId': {
      $put:
        | {
            input: { param: { folderId: string; newParentFolderId: string } }
            output: ListFolderFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string; newParentFolderId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/folders/:folderId/rename': {
      $put:
        | {
            input: { param: { folderId: string } } & {
              query: { newFolderName?: string | undefined }
            }
            output: ListFolderFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } } & {
              query: { newFolderName?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/idmapping': {
      $get:
        | {
            input: { query: { legacyListId?: string | undefined } }
            output: PublicMigrationMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { legacyListId?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: string[] }
            output: PublicBatchMigrationMapping
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: string[] }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/lists/2026-09/object-type-id/:objectTypeId/name/:listName': {
      $get:
        | {
            input: { param: { listName: string; objectTypeId: string } } & {
              query: { includeFilters?: boolean | undefined }
            }
            output: ListFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listName: string; objectTypeId: string } } & {
              query: { includeFilters?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/records/memberships/batch/read': {
      $post:
        | {
            input: { json: BatchInputRecordIdInput }
            output: BatchResponseRecordIdWithMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchInputRecordIdInput }
            output: BatchResponseRecordIdWithMembershipsWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: BatchInputRecordIdInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/records/:objectTypeId/:recordId/memberships': {
      $get:
        | {
            input: { param: { objectTypeId: string; recordId: string } }
            output: ApiCollectionResponseRecordListMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; recordId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/search': {
      $post:
        | {
            input: { json: ListSearchRequest }
            output: ListSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ListSearchRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/lists/2026-09/:listId': {
      $get:
        | {
            input: { param: { listId: string } } & {
              query: { includeFilters?: boolean | undefined }
            }
            output: ListFetchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: { includeFilters?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { listId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships': {
      $get:
        | {
            input: { param: { listId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
              }
            }
            output: ApiCollectionResponseJoinTimeAndRecordId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { listId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships/add': {
      $put:
        | {
            input: { param: { listId: string } } & { json: string[] }
            output: MembershipsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & { json: string[] }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships/add-and-remove': {
      $put:
        | {
            input: { param: { listId: string } } & { json: MembershipChangeRequest }
            output: MembershipsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & { json: MembershipChangeRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships/add-from/:sourceListId': {
      $put: {
        input: { param: { listId: string; sourceListId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships/join-order': {
      $get:
        | {
            input: { param: { listId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
              }
            }
            output: ApiCollectionResponseJoinTimeAndRecordId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/memberships/remove': {
      $put:
        | {
            input: { param: { listId: string } } & { json: string[] }
            output: MembershipsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & { json: string[] }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/restore': {
      $put: {
        input: { param: { listId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/:listId/schedule-conversion': {
      $get:
        | {
            input: { param: { listId: string } }
            output: PublicListConversionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { listId: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { param: { listId: string } } & { json: PublicListConversionTime }
            output: PublicListConversionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & { json: PublicListConversionTime }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { listId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/crm/lists/2026-09/:listId/size-and-edits-history/between': {
      $get:
        | {
            input: { param: { listId: string } } & {
              query: { endDate?: string | undefined; startDate?: string | undefined }
            }
            output: ListSizeAndEditHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: { endDate?: string | undefined; startDate?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/update-list-filters': {
      $put:
        | {
            input: { param: { listId: string } } & {
              query: { enrollObjectsInWorkflows?: boolean | undefined }
            } & { json: ListFilterUpdateRequest }
            output: ListUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: { enrollObjectsInWorkflows?: boolean | undefined }
            } & { json: ListFilterUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/lists/2026-09/:listId/update-list-name': {
      $put:
        | {
            input: { param: { listId: string } } & {
              query: { includeFilters?: boolean | undefined; listName?: string | undefined }
            }
            output: ListUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: string } } & {
              query: { includeFilters?: boolean | undefined; listName?: string | undefined }
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
