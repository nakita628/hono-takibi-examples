type PublicObjectId = { id: string }
type AssociationSpec = {
  associationCategory: 'HUBSPOT_DEFINED' | 'INTEGRATOR_DEFINED' | 'USER_DEFINED' | 'WORK'
  associationTypeId: number
}
type ExternalAssociationCreateRequest = { to: PublicObjectId; types: AssociationSpec[] }
type ExternalReminder = {
  numberOfTimeUnits: number
  timeUnit: 'DAYS' | 'HOURS' | 'MINUTES' | 'WEEKS'
}
type ExternalEmailReminderSchedule = {
  reminders: ExternalReminder[]
  shouldIncludeInviteDescription: boolean
}
type ExternalCalendarMeetingEventCreateProperties = {
  hs_activity_type?: string | undefined
  hs_attachment_ids?: string[] | undefined
  hs_attendee_owner_ids?: string[] | undefined
  hs_internal_meeting_notes?: string | undefined
  hs_meeting_body?: string | undefined
  hs_meeting_end_time: string
  hs_meeting_location?: string | undefined
  hs_meeting_location_type?: 'ADDRESS' | 'CUSTOM' | 'PHONE' | undefined
  hs_meeting_outcome: string
  hs_meeting_start_time: string
  hs_meeting_title: string
  hs_timestamp: string
  hubspot_owner_id: string
}
type ExternalCalendarMeetingEventCreateRequest = {
  associations: ExternalAssociationCreateRequest[]
  emailReminderSchedule: ExternalEmailReminderSchedule
  properties: ExternalCalendarMeetingEventCreateProperties
  timezone: string
}
type ExternalCalendarMeetingEventResponseProperties = {
  hs_activity_type?: string | undefined
  hs_attachment_ids?: string[] | undefined
  hs_attendee_owner_ids?: string[] | undefined
  hs_engagement_source:
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
  hs_engagement_source_id: string
  hs_include_description_in_reminder?: string | undefined
  hs_internal_meeting_notes?: string | undefined
  hs_meeting_body?: string | undefined
  hs_meeting_end_time: string
  hs_meeting_external_url?: string | undefined
  hs_meeting_location?: string | undefined
  hs_meeting_location_type?: 'ADDRESS' | 'CUSTOM' | 'PHONE' | undefined
  hs_meeting_outcome: string
  hs_meeting_start_time: string
  hs_meeting_title: string
  hs_timestamp: string
  hs_unique_id?: string | undefined
  hubspot_owner_id?: string | undefined
}
type ExternalCalenderMeetingEventResponse = {
  createdAt: string
  id: string
  lastUpdatedAt: string
  properties: ExternalCalendarMeetingEventResponseProperties
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
type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type ExternalLinkMetadata = {
  createdAt: string
  defaultLink: boolean
  id: string
  link: string
  name?: string | undefined
  organizerUserId: string
  paymentLinkId?: string | undefined
  slug: string
  type: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR'
  updatedAt?: string | undefined
  userIdsOfLinkMembers: string[]
}
type CollectionResponseWithTotalExternalLinkMetadata = {
  paging?: Paging | undefined
  results: ExternalLinkMetadata[]
  total: number
}
type ExternalBookingFormField = { name: string; value: string }
type ExternalLegalConsentResponse = { communicationTypeId: string; consented: boolean }
type ExternalMeetingBooking = {
  duration: bigint
  email: string
  firstName: string
  formFields: ExternalBookingFormField[]
  lastName: string
  legalConsentResponses: ExternalLegalConsentResponse[]
  likelyAvailableUserIds: string[]
  locale?: string | undefined
  slug: string
  startTime: string
  timezone?: string | undefined
}
type ExternalValidatedFormField = {
  fieldType?: string | undefined
  isCustom: boolean
  label: string
  name: string
  translatedLabel?: string | undefined
  value: string
  valueLabel?: string | undefined
}
type ExternalMeetingBookingResponse = {
  bookingTimezone: string
  calendarEventId: string
  contactId: string
  duration: bigint
  end: string
  formFields: ExternalValidatedFormField[]
  guestEmails: string[]
  isOffline: boolean
  legalConsentResponses: ExternalLegalConsentResponse[]
  locale?: string | undefined
  location?: string | undefined
  start: string
  subject: string
  webConferenceMeetingId?: string | undefined
  webConferenceUrl?: string | undefined
}
type ExternalTimeRange = { end: bigint; start: bigint }
type ExternalUserProfile = {
  email: string
  firstName?: string | undefined
  fullName?: string | undefined
  lastName?: string | undefined
}
type ExternalMeetingsUser = {
  calendarProvider: 'EXCHANGE' | 'GOOGLE' | 'OFFICE365' | 'UNKNOWN'
  id: string
  isSalesStarter: boolean
  userId: string
  userProfile: ExternalUserProfile
}
type ExternalUserBusyTimes = {
  busyTimes: ExternalTimeRange[]
  isOffline: boolean
  meetingsUser: ExternalMeetingsUser
}
type ExternalMeetingAvailability = { endMillisUtc: bigint; startMillisUtc: bigint }
type ExternalLinkAvailabilityForDuration = {
  availabilities: ExternalMeetingAvailability[]
  meetingDurationMillis: bigint
}
type ExternalLinkAvailability = {
  hasMore: boolean
  linkAvailabilityByDuration: { [x: string]: ExternalLinkAvailabilityForDuration }
}
type ExternalLinkAvailabilityAndBusyTimes = {
  allUsersBusyTimes: ExternalUserBusyTimes[]
  linkAvailability?: ExternalLinkAvailability | undefined
}
type ExternalBrandingMetadata = {
  accent2Color?: string | undefined
  accentColor?: string | undefined
  companyAddressLine1?: string | undefined
  companyAddressLine2?: string | undefined
  companyAvatar?: string | undefined
  companyCity?: string | undefined
  companyCountry?: string | undefined
  companyDomain?: string | undefined
  companyName?: string | undefined
  companyState?: string | undefined
  companyZip?: string | undefined
  logoAltText: string
  logoHeight?: number | undefined
  logoUrl?: string | undefined
  logoWidth?: number | undefined
  primaryColor?: string | undefined
  secondaryColor?: string | undefined
  showMarketingAd: boolean
  showSalesAd: boolean
}
type ExternalClosedRange = { end: bigint; start: bigint }
type ExternalLinkDisplayInfo = {
  avatar?: string | undefined
  companyAvatar?: string | undefined
  headline?: string | undefined
  publicDisplayAvatarOption?: 'COMPANY_LOGO' | 'CUSTOM_AVATAR' | 'PROFILE_IMAGE' | undefined
}
type ExternalOption = {
  description: string
  displayOrder: number
  doubleData: number
  hidden: boolean
  label: string
  readOnly: boolean
  value: string
}
type ExternalLinkFormField = {
  fieldType: string
  isCustom: boolean
  isRequired: boolean
  label: string
  name: string
  options: ExternalOption[]
  type: string
}
type ExternalGuestSettings = { canAddGuests: boolean; maxGuestCount: number }
type ExternalCommunicationConsentCheckbox = {
  communicationTypeId: string
  label: string
  required: boolean
}
type ExternalLegalConsentOptions = {
  communicationConsentCheckboxes: ExternalCommunicationConsentCheckbox[]
  communicationConsentText: string
  isLegitimateInterest: boolean
  legitimateInterestLegalBasis?:
    | 'CONSENT_WITH_NOTICE'
    | 'LEGITIMATE_INTEREST_CLIENT'
    | 'LEGITIMATE_INTEREST_OTHER'
    | 'LEGITIMATE_INTEREST_PQL'
    | 'NON_GDPR'
    | 'PERFORMANCE_OF_CONTRACT'
    | 'PROCESS_AND_STORE'
    | undefined
  legitimateInterestSubscriptionTypes: bigint[]
  privacyPolicyText: string
  processingConsentCheckboxLabel: string
  processingConsentFooterText: string
  processingConsentText: string
  processingConsentType: 'IMPLICIT' | 'REQUIRED_CHECKBOX'
}
type ExternalMeetingsWelcomeScreenInfo = {
  description?: string | undefined
  logoUrl?: string | undefined
  showWelcomeScreen?: boolean | undefined
  title?: string | undefined
  useCompanyLogo?: boolean | undefined
}
type ExternalMeetingsLinkSettings = {
  availability: { [x: string]: ExternalClosedRange }
  customAvailabilityEndDate?: bigint | undefined
  customAvailabilityStartDate?: bigint | undefined
  displayInfo?: ExternalLinkDisplayInfo | undefined
  durations: bigint[]
  formFields: ExternalLinkFormField[]
  guestSettings?: ExternalGuestSettings | undefined
  language?: string | undefined
  legalConsentEnabled: boolean
  legalConsentOptions?: ExternalLegalConsentOptions | undefined
  locale?: string | undefined
  location?: string | undefined
  meetingBufferTime: bigint
  ownerPrioritized: boolean
  redirectUrl?: string | undefined
  startTimeIncrementMinutes:
    | 'FIFTEEN'
    | 'FIVE'
    | 'FORTY_FIVE'
    | 'MEETING_DURATION'
    | 'NINETY'
    | 'ONE_HUNDRED_TWENTY'
    | 'SIXTY'
    | 'TEN'
    | 'THIRTY'
    | 'TWENTY'
  weeksToAdvertise: number
  welcomeScreenInfo?: ExternalMeetingsWelcomeScreenInfo | undefined
}
type ExternalBookingInfo = {
  allUsersBusyTimes: ExternalUserBusyTimes[]
  brandingMetadata?: ExternalBrandingMetadata | undefined
  customParams: ExternalMeetingsLinkSettings
  isOffline: boolean
  linkAvailability?: ExternalLinkAvailability | undefined
  linkId: string
  linkType: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/scheduler/2026-09/meetings/calendar': {
      $post:
        | {
            input: { query: { organizerUserId: string } } & {
              json: ExternalCalendarMeetingEventCreateRequest
            }
            output: ExternalCalenderMeetingEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { organizerUserId: string } } & {
              json: ExternalCalendarMeetingEventCreateRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scheduler/2026-09/meetings/meeting-links': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                organizerUserId?: string | undefined
                type?: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR' | undefined
              }
            }
            output: CollectionResponseWithTotalExternalLinkMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                organizerUserId?: string | undefined
                type?: 'GROUP_CALENDAR' | 'PERSONAL_LINK' | 'ROUND_ROBIN_CALENDAR' | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scheduler/2026-09/meetings/meeting-links/book': {
      $post:
        | {
            input: { json: ExternalMeetingBooking }
            output: ExternalMeetingBookingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExternalMeetingBooking }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scheduler/2026-09/meetings/meeting-links/book/availability-page/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & {
              query: { timezone: string; monthOffset?: number | undefined }
            }
            output: ExternalLinkAvailabilityAndBusyTimes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              query: { timezone: string; monthOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scheduler/2026-09/meetings/meeting-links/book/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & { query: { timezone: string } }
            output: ExternalBookingInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { query: { timezone: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
