import type { RouteHandler } from '@hono/zod-openapi'
import type {
  delete20100401AccountsAccountSidAddressesSidJsonRoute,
  delete20100401AccountsAccountSidApplicationsSidJsonRoute,
  delete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
  delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonRoute,
  delete20100401AccountsAccountSidCallsSidJsonRoute,
  delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
  delete20100401AccountsAccountSidConnectAppsSidJsonRoute,
  delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
  delete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
  delete20100401AccountsAccountSidKeysSidJsonRoute,
  delete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute,
  delete20100401AccountsAccountSidMessagesSidJsonRoute,
  delete20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
  delete20100401AccountsAccountSidQueuesSidJsonRoute,
  delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute,
  delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRoute,
  delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute,
  delete20100401AccountsAccountSidRecordingsSidJsonRoute,
  delete20100401AccountsAccountSidSigningKeysSidJsonRoute,
  delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
  delete20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
  delete20100401AccountsAccountSidSIPDomainsSidJsonRoute,
  delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
  delete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
  delete20100401AccountsAccountSidTranscriptionsSidJsonRoute,
  delete20100401AccountsAccountSidUsageTriggersSidJsonRoute,
  get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonRoute,
  get20100401AccountsAccountSidAddressesJsonRoute,
  get20100401AccountsAccountSidAddressesSidJsonRoute,
  get20100401AccountsAccountSidApplicationsJsonRoute,
  get20100401AccountsAccountSidApplicationsSidJsonRoute,
  get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonRoute,
  get20100401AccountsAccountSidAuthorizedConnectAppsJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersJsonRoute,
  get20100401AccountsAccountSidBalanceJsonRoute,
  get20100401AccountsAccountSidCallsCallSidEventsJsonRoute,
  get20100401AccountsAccountSidCallsCallSidNotificationsJsonRoute,
  get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonRoute,
  get20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute,
  get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidCallsJsonRoute,
  get20100401AccountsAccountSidCallsSidJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidConferencesJsonRoute,
  get20100401AccountsAccountSidConferencesSidJsonRoute,
  get20100401AccountsAccountSidConnectAppsJsonRoute,
  get20100401AccountsAccountSidConnectAppsSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute,
  get20100401AccountsAccountSidKeysJsonRoute,
  get20100401AccountsAccountSidKeysSidJsonRoute,
  get20100401AccountsAccountSidMessagesJsonRoute,
  get20100401AccountsAccountSidMessagesMessageSidMediaJsonRoute,
  get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute,
  get20100401AccountsAccountSidMessagesSidJsonRoute,
  get20100401AccountsAccountSidNotificationsJsonRoute,
  get20100401AccountsAccountSidNotificationsSidJsonRoute,
  get20100401AccountsAccountSidOutgoingCallerIdsJsonRoute,
  get20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
  get20100401AccountsAccountSidQueuesJsonRoute,
  get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute,
  get20100401AccountsAccountSidQueuesQueueSidMembersJsonRoute,
  get20100401AccountsAccountSidQueuesSidJsonRoute,
  get20100401AccountsAccountSidRecordingsJsonRoute,
  get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonRoute,
  get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidSigningKeysJsonRoute,
  get20100401AccountsAccountSidSigningKeysSidJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute,
  get20100401AccountsAccountSidSIPDomainsJsonRoute,
  get20100401AccountsAccountSidSIPDomainsSidJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
  get20100401AccountsAccountSidSMSShortCodesJsonRoute,
  get20100401AccountsAccountSidSMSShortCodesSidJsonRoute,
  get20100401AccountsAccountSidTranscriptionsJsonRoute,
  get20100401AccountsAccountSidTranscriptionsSidJsonRoute,
  get20100401AccountsAccountSidUsageRecordsAllTimeJsonRoute,
  get20100401AccountsAccountSidUsageRecordsDailyJsonRoute,
  get20100401AccountsAccountSidUsageRecordsJsonRoute,
  get20100401AccountsAccountSidUsageRecordsLastMonthJsonRoute,
  get20100401AccountsAccountSidUsageRecordsMonthlyJsonRoute,
  get20100401AccountsAccountSidUsageRecordsThisMonthJsonRoute,
  get20100401AccountsAccountSidUsageRecordsTodayJsonRoute,
  get20100401AccountsAccountSidUsageRecordsYearlyJsonRoute,
  get20100401AccountsAccountSidUsageRecordsYesterdayJsonRoute,
  get20100401AccountsAccountSidUsageTriggersJsonRoute,
  get20100401AccountsAccountSidUsageTriggersSidJsonRoute,
  get20100401AccountsJsonRoute,
  get20100401AccountsSidJsonRoute,
  post20100401AccountsAccountSidAddressesJsonRoute,
  post20100401AccountsAccountSidAddressesSidJsonRoute,
  post20100401AccountsAccountSidApplicationsJsonRoute,
  post20100401AccountsAccountSidApplicationsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidPaymentsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidPaymentsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidSiprecJsonRoute,
  post20100401AccountsAccountSidCallsCallSidSiprecSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidStreamsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidStreamsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidTranscriptionsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonRoute,
  post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonRoute,
  post20100401AccountsAccountSidCallsJsonRoute,
  post20100401AccountsAccountSidCallsSidJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
  post20100401AccountsAccountSidConferencesSidJsonRoute,
  post20100401AccountsAccountSidConnectAppsSidJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute,
  post20100401AccountsAccountSidKeysJsonRoute,
  post20100401AccountsAccountSidKeysSidJsonRoute,
  post20100401AccountsAccountSidMessagesJsonRoute,
  post20100401AccountsAccountSidMessagesMessageSidFeedbackJsonRoute,
  post20100401AccountsAccountSidMessagesSidJsonRoute,
  post20100401AccountsAccountSidOutgoingCallerIdsJsonRoute,
  post20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
  post20100401AccountsAccountSidQueuesJsonRoute,
  post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute,
  post20100401AccountsAccountSidQueuesSidJsonRoute,
  post20100401AccountsAccountSidSigningKeysJsonRoute,
  post20100401AccountsAccountSidSigningKeysSidJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsJsonRoute,
  post20100401AccountsAccountSidSIPDomainsSidJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
  post20100401AccountsAccountSidSMSShortCodesSidJsonRoute,
  post20100401AccountsAccountSidTokensJsonRoute,
  post20100401AccountsAccountSidUsageTriggersJsonRoute,
  post20100401AccountsAccountSidUsageTriggersSidJsonRoute,
  post20100401AccountsJsonRoute,
  post20100401AccountsSidJsonRoute,
} from '../routes'

export const post20100401AccountsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidAddressesJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidAddressesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAddressesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAddressesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidAddressesSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAddressesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidAddressesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidApplicationsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidApplicationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidApplicationsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidApplicationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidApplicationsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidApplicationsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidApplicationsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidApplicationsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidApplicationsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidApplicationsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAuthorizedConnectAppsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAuthorizedConnectAppsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidBalanceJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidBalanceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidCallsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidCallsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsCallSidEventsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsCallSidEventsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsCallSidNotificationsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsCallSidNotificationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidRecordingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsCallSidRecordingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidConferencesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidConferencesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConnectAppsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConnectAppsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidConnectAppsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidConnectAppsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidConnectAppsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidConnectAppsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConnectAppsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConnectAppsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidKeysSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidKeysSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidKeysSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidKeysJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidKeysJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidKeysJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidKeysJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidMessagesMessageSidMediaJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidMessagesMessageSidMediaJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidQueuesQueueSidMembersJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidQueuesQueueSidMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidMessagesJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidMessagesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidMessagesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidMessagesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidMessagesSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidMessagesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidMessagesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidMessagesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidMessagesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidMessagesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidMessagesMessageSidFeedbackJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidMessagesMessageSidFeedbackJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSigningKeysJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSigningKeysJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSigningKeysJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSigningKeysJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidNotificationsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidNotificationsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidNotificationsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidNotificationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidOutgoingCallerIdsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidOutgoingCallerIdsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidOutgoingCallerIdsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidOutgoingCallerIdsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidOutgoingCallerIdsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidOutgoingCallerIdsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidOutgoingCallerIdsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidPaymentsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidPaymentsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidPaymentsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidPaymentsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidQueuesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidQueuesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidQueuesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidQueuesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidQueuesSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidQueuesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidQueuesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidQueuesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidQueuesJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidQueuesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidTranscriptionsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidTranscriptionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidRecordingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidRecordingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSMSShortCodesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSMSShortCodesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSMSShortCodesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSMSShortCodesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSMSShortCodesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSMSShortCodesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSigningKeysSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSigningKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSigningKeysSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSigningKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSigningKeysSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSigningKeysSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPCredentialListsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPCredentialListsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPCredentialListsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPCredentialListsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPCredentialListsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPCredentialListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPCredentialListsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPCredentialListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPCredentialListsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPCredentialListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPIpAccessControlListsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPIpAccessControlListsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidSiprecJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidSiprecJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidSiprecSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidSiprecSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidStreamsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidStreamsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidStreamsSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidStreamsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidTokensJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidTokensJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidTranscriptionsSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidTranscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidTranscriptionsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidTranscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidTranscriptionsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidTranscriptionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsAllTimeJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsAllTimeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsDailyJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsDailyJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsLastMonthJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsLastMonthJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsMonthlyJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsMonthlyJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsThisMonthJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsThisMonthJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsTodayJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsTodayJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsYearlyJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsYearlyJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageRecordsYesterdayJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageRecordsYesterdayJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageTriggersSidJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageTriggersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidUsageTriggersSidJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidUsageTriggersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidUsageTriggersSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidUsageTriggersSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidUsageTriggersJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidUsageTriggersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get20100401AccountsAccountSidUsageTriggersJsonRouteHandler: RouteHandler<
  typeof get20100401AccountsAccountSidUsageTriggersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonRouteHandler: RouteHandler<
  typeof post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonRouteHandler: RouteHandler<
  typeof delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
