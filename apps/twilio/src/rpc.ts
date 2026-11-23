import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20100401AccountsJson(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2010-04-01']['Accounts.json'].$get(args, options))
}

export async function post20100401AccountsJson(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2010-04-01']['Accounts.json'].$post(args, options))
}

export async function get20100401AccountsSidJson(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$get(args, options))
}

export async function post20100401AccountsSidJson(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$post(args, options))
}

export async function get20100401AccountsAccountSidAddressesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidAddressesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidApplicationsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidApplicationsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidApplicationsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidApplicationsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidApplicationsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[':ConnectAppSid.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidAuthorizedConnectAppsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'Local.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'MachineToMachine.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'Mobile.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'National.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'SharedCost.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'TollFree.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
      'Voip.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidBalanceJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidCallsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidCallsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidCallsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidCallsCallSidEventsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidCallsCallSidNotificationsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidCallsCallSidNotificationsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidCallsCallSidRecordingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidRecordingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidCallsCallSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidCallsCallSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidConferencesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidConferencesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidConferencesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidConferencesConferenceSidRecordingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
      'Recordings.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
      ':Sid.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
      ':Sid.json'
    ].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
      ':Sid.json'
    ].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidConnectAppsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidConnectAppsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidConnectAppsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidConnectAppsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
      'DependentPhoneNumbers.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidIncomingPhoneNumbersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
      ':ResourceSid'
    ].AssignedAddOns[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
      ':ResourceSid'
    ].AssignedAddOns[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
      'AssignedAddOns.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
      'AssignedAddOns.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
      ':ResourceSid'
    ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
      ':ResourceSid'
    ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersLocalJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersLocalJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersMobileJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersMobileJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidKeysJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidKeysJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidMessagesMessageSidMediaSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidMessagesMessageSidMediaSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidMessagesMessageSidMediaJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[':CallSid.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[':CallSid.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidQueuesQueueSidMembersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidMessagesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidMessagesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidMessagesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidMessagesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidMessagesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$delete(args, options),
  )
}

export async function post20100401AccountsAccountSidMessagesMessageSidFeedbackJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Feedback.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidSigningKeysJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSigningKeysJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidNotificationsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidNotificationsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidOutgoingCallerIdsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidOutgoingCallerIdsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidOutgoingCallerIdsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidOutgoingCallerIdsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidOutgoingCallerIdsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
      ':CallSid.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
      ':CallSid.json'
    ].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
      ':CallSid.json'
    ].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidConferencesConferenceSidParticipantsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
      'Participants.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidConferencesConferenceSidParticipantsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
      'Participants.json'
    ].$post(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidPaymentsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Payments.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidPaymentsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Payments[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidQueuesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidQueuesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidQueuesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidQueuesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidQueuesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$post(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidTranscriptionsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Transcriptions.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Transcriptions[
      ':Sid.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidRecordingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':Sid.json'
    ].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':Sid.json'
    ].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
      'AddOnResults.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':AddOnResultSid'
    ].Payloads[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':AddOnResultSid'
    ].Payloads[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':AddOnResultSid'
    ]['Payloads.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
      ':AddOnResultSid'
    ].Payloads[':PayloadSid']['Data.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
      ':Sid.json'
    ].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
      ':Sid.json'
    ].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
      'Transcriptions.json'
    ].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidSMSShortCodesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSMSShortCodesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSMSShortCodesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidSigningKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSigningKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidSigningKeysSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
      'CredentialListMappings.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
      'CredentialListMappings.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Calls.CredentialListMappings[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
      'IpAccessControlListMappings.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
      'IpAccessControlListMappings.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
      'CredentialListMappings.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
      'CredentialListMappings.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].Auth.Registrations.CredentialListMappings[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
      'Credentials.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
      'Credentials.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
      ':CredentialListSid'
    ].Credentials[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
      ':CredentialListSid'
    ].Credentials[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
      ':CredentialListSid'
    ].Credentials[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPCredentialListsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPCredentialListsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPCredentialListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidSIPCredentialListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidSIPCredentialListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
      'CredentialListMappings.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
      'CredentialListMappings.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].CredentialListMappings[
      ':Sid.json'
    ].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].CredentialListMappings[
      ':Sid.json'
    ].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPIpAccessControlListsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidSIPIpAccessControlListsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$post(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidSIPIpAccessControlListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidSIPIpAccessControlListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function delete20100401AccountsAccountSidSIPIpAccessControlListsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$delete(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].IpAccessControlListMappings[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
      ':DomainSid'
    ].IpAccessControlListMappings[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
      'IpAccessControlListMappings.json'
    ].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
      'IpAccessControlListMappings.json'
    ].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
      ':IpAccessControlListSid'
    ]['IpAddresses.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
      ':IpAccessControlListSid'
    ]['IpAddresses.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
      ':IpAccessControlListSid'
    ].IpAddresses[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
      ':IpAccessControlListSid'
    ].IpAddresses[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
      ':IpAccessControlListSid'
    ].IpAddresses[':Sid.json'].$delete(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidSiprecJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Siprec.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidSiprecSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Siprec[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidStreamsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Streams.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidStreamsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Streams[':Sid.json'].$post(
      args,
      options,
    ),
  )
}

export async function post20100401AccountsAccountSidTokensJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Tokens.json'].$post(args, options),
  )
}

export async function get20100401AccountsAccountSidTranscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(args, options),
  )
}

export async function delete20100401AccountsAccountSidTranscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidTranscriptionsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsAllTimeJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsDailyJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsLastMonthJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsMonthlyJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsThisMonthJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsTodayJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsYearlyJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageRecordsYesterdayJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(
      args,
      options,
    ),
  )
}

export async function get20100401AccountsAccountSidUsageTriggersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidUsageTriggersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidUsageTriggersSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$delete(args, options),
  )
}

export async function get20100401AccountsAccountSidUsageTriggersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(args, options),
  )
}

export async function post20100401AccountsAccountSidUsageTriggersJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$post(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
      'UserDefinedMessages.json'
    ].$post(args, options),
  )
}

export async function post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
      'UserDefinedMessageSubscriptions.json'
    ].$post(args, options),
  )
}

export async function delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJson(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].UserDefinedMessageSubscriptions[
      ':Sid.json'
    ].$delete(args, options),
  )
}
