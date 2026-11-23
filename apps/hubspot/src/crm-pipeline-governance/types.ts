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
type PublicApprovalStageRule = {
  approvalComment?: string | undefined
  approvalMode: 'ALL' | 'ANY'
  approverUserIds: string[]
  conditionalApprovalFilterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
    | undefined
  pipelineStageId: string
}
type PublicSequenceValidationRule = { enabledForAllStages: boolean; pipelineStageIds: string[] }
type PublicObjectCreationRule = { pipelineStageIds: string[] }
type PublicGovernanceValidationRules = {
  noBackwardsMovementRule: PublicSequenceValidationRule
  noSkippingStagesRule: PublicSequenceValidationRule
  objectCreationRule: PublicObjectCreationRule
}
type PublicPipelineRules = {
  approvalStage?: PublicApprovalStageRule | undefined
  createdAt: string
  governanceValidationRules: PublicGovernanceValidationRules
  id: string
  objectTypeId: string
  pipelineId: string
  updatedAt: string
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
type PublicApprovalStageRuleRequest = {
  approvalComment?: string | undefined
  approvalMode: 'ALL' | 'ANY'
  approverUserIds: string[]
  conditionalApprovalFilterBranch?:
    | PublicOrFilterBranch
    | PublicAndFilterBranch
    | PublicNotAllFilterBranch
    | PublicNotAnyFilterBranch
    | PublicRestrictedFilterBranch
    | PublicUnifiedEventsFilterBranch
    | PublicAssociationFilterBranch
    | undefined
  pipelineStageId: string
}
type PublicPipelineRulesUpdateRequest = {
  approvalStage?: PublicApprovalStageRuleRequest | undefined
  governanceValidationRules: PublicGovernanceValidationRules
}
type PublicPipelineRulesPatchRequest = {
  approvalStage?: { [x: string]: unknown } | undefined
  noBackwardsMovementRule?: { [x: string]: unknown } | undefined
  noSkippingStagesRule?: { [x: string]: unknown } | undefined
  objectCreationRule?: { [x: string]: unknown } | undefined
}
type PublicCreateApprovalRequest = { objectId: bigint }
type PublicObjectApprovalStatus = {
  approvalId?: string | undefined
  approvalStatus: 'APPROVED' | 'NO_APPROVAL_NEEDED' | 'NOT_APPLICABLE' | 'PENDING' | 'REJECTED'
  createdAt: string
  id: string
  objectId: string
  objectTypeId: string
  pipelineId: string
  pipelineStageId: string
  updatedAt: string
}
type PublicStagePermission = {
  label: string
  permissionMode: 'OPEN' | 'RESTRICTED'
  pipelineStageId: string
  superAdmin: boolean
  teamIds: string[]
  userIds: string[]
}
type PublicPipelineStagePermissions = {
  createdAt: string
  id: string
  objectTypeId: string
  pipelineId: string
  stages: PublicStagePermission[]
  updatedAt: string
}
type PublicStagePermissionRequest = {
  permissionMode: 'OPEN' | 'RESTRICTED'
  pipelineStageId: string
  superAdmin: boolean
  teamIds: string[]
  userIds: string[]
}
type PublicPipelineStagePermissionsUpdateRequest = { stages: PublicStagePermissionRequest[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId': {
      $get:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } }
            output: PublicPipelineRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineRulesUpdateRequest
            }
            output: PublicPipelineRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineRulesUpdateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { objectTypeId: string; pipelineId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineRulesPatchRequest
            }
            output: PublicPipelineRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineRulesPatchRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/start': {
      $post:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicCreateApprovalRequest
            }
            output: PublicObjectApprovalStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicCreateApprovalRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/approvals/:objectId': {
      $get:
        | {
            input: { param: { objectId: bigint; objectTypeId: string; pipelineId: string } }
            output: PublicObjectApprovalStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: bigint; objectTypeId: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/pipelines-rules/2026-09/:objectTypeId/:pipelineId/stage-edit-permissions': {
      $get:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } }
            output: PublicPipelineStagePermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineStagePermissionsUpdateRequest
            }
            output: PublicPipelineStagePermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectTypeId: string; pipelineId: string } } & {
              json: PublicPipelineStagePermissionsUpdateRequest
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
