import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postActionsBulkTelephonyCredentials(
  args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.bulk.telephony_credentials.$post(args, options))
}

export async function deleteActionsBulkTelephonyCredentials(
  args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.bulk.telephony_credentials.$delete(args, options))
}

export async function patchActionsBulkTelephonyCredentials(
  args: InferRequestType<typeof client.actions.bulk.telephony_credentials.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.bulk.telephony_credentials.$patch(args, options))
}

export async function putActionsNetworkPreferencesSimCards(
  args: InferRequestType<typeof client.actions.network_preferences.sim_cards.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.network_preferences.sim_cards.$put(args, options))
}

export async function postActionsRegisterSimCards(
  args: InferRequestType<typeof client.actions.register.sim_cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.register.sim_cards.$post(args, options))
}

export async function postActionsActionTelephonyCredentials(
  args: InferRequestType<(typeof client.actions)[':action']['telephony_credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':action'].telephony_credentials.$post(args, options))
}

export async function getAddresses(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$get(args, options))
}

export async function postAddresses(
  args: InferRequestType<typeof client.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$post(args, options))
}

export async function postAddressesActionsValidate(
  args: InferRequestType<typeof client.addresses.actions.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.actions.validate.$post(args, options))
}

export async function getAddressesId(
  args: InferRequestType<(typeof client.addresses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':id'].$get(args, options))
}

export async function deleteAddressesId(
  args: InferRequestType<(typeof client.addresses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':id'].$delete(args, options))
}

export async function getAuthenticationProviders(
  args: InferRequestType<typeof client.authentication_providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers.$get(args, options))
}

export async function postAuthenticationProviders(
  args: InferRequestType<typeof client.authentication_providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers.$post(args, options))
}

export async function getAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$get(args, options))
}

export async function deleteAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$delete(args, options))
}

export async function patchAuthenticationProvidersId(
  args: InferRequestType<(typeof client.authentication_providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication_providers[':id'].$patch(args, options))
}

export async function getAvailablePhoneNumberBlocks(
  args: InferRequestType<typeof client.available_phone_number_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.available_phone_number_blocks.$get(args, options))
}

export async function getAvailablePhoneNumbers(
  args: InferRequestType<typeof client.available_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.available_phone_numbers.$get(args, options))
}

export async function getBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.balance.$get(undefined, options))
}

export async function getBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$get(args, options))
}

export async function postBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$post(args, options))
}

export async function getBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$get(args, options))
}

export async function deleteBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$delete(args, options))
}

export async function patchBillingGroupsId(
  args: InferRequestType<(typeof client.billing_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':id'].$patch(args, options))
}

export async function getCallControlApplications(
  args: InferRequestType<typeof client.call_control_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications.$get(args, options))
}

export async function postCallControlApplications(
  args: InferRequestType<typeof client.call_control_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications.$post(args, options))
}

export async function getCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$get(args, options))
}

export async function deleteCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$delete(args, options))
}

export async function patchCallControlApplicationsId(
  args: InferRequestType<(typeof client.call_control_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_control_applications[':id'].$patch(args, options))
}

export async function getCallEvents(
  args: InferRequestType<typeof client.call_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.call_events.$get(args, options))
}

export async function postCalls(
  args: InferRequestType<typeof client.calls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.$post(args, options))
}

export async function getCallsCallControlId(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].$get(args, options))
}

export async function postCallsCallControlIdActionsAnswer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['answer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.answer.$post(args, options))
}

export async function postCallsCallControlIdActionsBridge(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['bridge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.bridge.$post(args, options))
}

export async function postCallsCallControlIdActionsEnqueue(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['enqueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.enqueue.$post(args, options))
}

export async function postCallsCallControlIdActionsForkStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['fork_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.fork_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsForkStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['fork_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.fork_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherUsingAudio(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_using_audio']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_using_audio.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsGatherUsingSpeak(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['gather_using_speak']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.gather_using_speak.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsHangup(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['hangup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.hangup.$post(args, options))
}

export async function postCallsCallControlIdActionsLeaveQueue(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['leave_queue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.leave_queue.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsPlaybackStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['playback_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.playback_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsPlaybackStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['playback_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.playback_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordPause(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_pause.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordResume(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_resume.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRecordStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['record_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.record_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsRefer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['refer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.refer.$post(args, options))
}

export async function postCallsCallControlIdActionsReject(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.reject.$post(args, options))
}

export async function postCallsCallControlIdActionsSendDtmf(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['send_dtmf']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.send_dtmf.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsSpeak(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['speak']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.speak.$post(args, options))
}

export async function postCallsCallControlIdActionsTranscriptionStart(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['transcription_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.transcription_start.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsTranscriptionStop(
  args: InferRequestType<
    (typeof client.calls)[':call_control_id']['actions']['transcription_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calls[':call_control_id'].actions.transcription_stop.$post(args, options),
  )
}

export async function postCallsCallControlIdActionsTransfer(
  args: InferRequestType<(typeof client.calls)[':call_control_id']['actions']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_control_id'].actions.transfer.$post(args, options))
}

export async function getComments(
  args: InferRequestType<typeof client.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$get(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function getCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$get(args, options))
}

export async function patchCommentsIdRead(
  args: InferRequestType<(typeof client.comments)[':id']['read']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].read.$patch(args, options))
}

export async function getConferences(
  args: InferRequestType<typeof client.conferences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences.$get(args, options))
}

export async function postConferences(
  args: InferRequestType<typeof client.conferences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences.$post(args, options))
}

export async function getConferencesConferenceIdParticipants(
  args: InferRequestType<(typeof client.conferences)[':conference_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':conference_id'].participants.$get(args, options))
}

export async function getConferencesId(
  args: InferRequestType<(typeof client.conferences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].$get(args, options))
}

export async function postConferencesIdActionsDialParticipant(
  args: InferRequestType<
    (typeof client.conferences)[':id']['actions']['dial_participant']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conferences[':id'].actions.dial_participant.$post(args, options),
  )
}

export async function postConferencesIdActionsHold(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['hold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.hold.$post(args, options))
}

export async function postConferencesIdActionsJoin(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.join.$post(args, options))
}

export async function postConferencesIdActionsLeave(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.leave.$post(args, options))
}

export async function postConferencesIdActionsMute(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.mute.$post(args, options))
}

export async function postConferencesIdActionsPlay(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['play']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.play.$post(args, options))
}

export async function postConferencesIdActionsRecordStart(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_start.$post(args, options))
}

export async function postConferencesIdActionsRecordStop(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['record_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.record_stop.$post(args, options))
}

export async function postConferencesIdActionsSpeak(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['speak']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.speak.$post(args, options))
}

export async function postConferencesIdActionsStop(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.stop.$post(args, options))
}

export async function postConferencesIdActionsUnhold(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['unhold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.unhold.$post(args, options))
}

export async function postConferencesIdActionsUnmute(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['unmute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.unmute.$post(args, options))
}

export async function postConferencesIdActionsUpdate(
  args: InferRequestType<(typeof client.conferences)[':id']['actions']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conferences[':id'].actions.update.$post(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function getConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$get(args, options))
}

export async function getCredentialConnections(
  args: InferRequestType<typeof client.credential_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections.$get(args, options))
}

export async function postCredentialConnections(
  args: InferRequestType<typeof client.credential_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections.$post(args, options))
}

export async function getCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$get(args, options))
}

export async function deleteCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$delete(args, options))
}

export async function patchCredentialConnectionsId(
  args: InferRequestType<(typeof client.credential_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credential_connections[':id'].$patch(args, options))
}

export async function getDetailRecords(
  args: InferRequestType<typeof client.detail_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detail_records.$get(args, options))
}

export async function getDocumentLinks(
  args: InferRequestType<typeof client.document_links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document_links.$get(args, options))
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$post(args, options))
}

export async function getDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$get(args, options))
}

export async function deleteDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$delete(args, options))
}

export async function patchDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$patch(args, options))
}

export async function getDocumentsIdDownload(
  args: InferRequestType<(typeof client.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].download.$get(args, options))
}

export async function getFaxApplications(
  args: InferRequestType<typeof client.fax_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications.$get(args, options))
}

export async function postFaxApplications(
  args: InferRequestType<typeof client.fax_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications.$post(args, options))
}

export async function getFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$get(args, options))
}

export async function deleteFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$delete(args, options))
}

export async function patchFaxApplicationsId(
  args: InferRequestType<(typeof client.fax_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_applications[':id'].$patch(args, options))
}

export async function getFaxes(
  args: InferRequestType<typeof client.faxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes.$get(args, options))
}

export async function postFaxes(
  args: InferRequestType<typeof client.faxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes.$post(args, options))
}

export async function getFaxesId(
  args: InferRequestType<(typeof client.faxes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].$get(args, options))
}

export async function deleteFaxesId(
  args: InferRequestType<(typeof client.faxes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].$delete(args, options))
}

export async function postFaxesIdActionsRefresh(
  args: InferRequestType<(typeof client.faxes)[':id']['actions']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faxes[':id'].actions.refresh.$post(args, options))
}

export async function getFqdnConnections(
  args: InferRequestType<typeof client.fqdn_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections.$get(args, options))
}

export async function postFqdnConnections(
  args: InferRequestType<typeof client.fqdn_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections.$post(args, options))
}

export async function getFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$get(args, options))
}

export async function deleteFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$delete(args, options))
}

export async function patchFqdnConnectionsId(
  args: InferRequestType<(typeof client.fqdn_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdn_connections[':id'].$patch(args, options))
}

export async function getFqdns(
  args: InferRequestType<typeof client.fqdns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns.$get(args, options))
}

export async function postFqdns(
  args: InferRequestType<typeof client.fqdns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns.$post(args, options))
}

export async function getFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$get(args, options))
}

export async function deleteFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$delete(args, options))
}

export async function patchFqdnsId(
  args: InferRequestType<(typeof client.fqdns)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fqdns[':id'].$patch(args, options))
}

export async function getInventoryCoverage(
  args: InferRequestType<typeof client.inventory_coverage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory_coverage.$get(args, options))
}

export async function getIpConnections(
  args: InferRequestType<typeof client.ip_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections.$get(args, options))
}

export async function postIpConnections(
  args: InferRequestType<typeof client.ip_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections.$post(args, options))
}

export async function getIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$get(args, options))
}

export async function deleteIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$delete(args, options))
}

export async function patchIpConnectionsId(
  args: InferRequestType<(typeof client.ip_connections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_connections[':id'].$patch(args, options))
}

export async function getIps(
  args: InferRequestType<typeof client.ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$get(args, options))
}

export async function postIps(
  args: InferRequestType<typeof client.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.$post(args, options))
}

export async function getIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$get(args, options))
}

export async function deleteIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$delete(args, options))
}

export async function patchIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$patch(args, options))
}

export async function postLedgerBillingGroupReports(
  args: InferRequestType<typeof client.ledger_billing_group_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_billing_group_reports.$post(args, options))
}

export async function getLedgerBillingGroupReportsId(
  args: InferRequestType<(typeof client.ledger_billing_group_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_billing_group_reports[':id'].$get(args, options))
}

export async function getManagedAccounts(
  args: InferRequestType<typeof client.managed_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts.$get(args, options))
}

export async function postManagedAccounts(
  args: InferRequestType<typeof client.managed_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts.$post(args, options))
}

export async function getManagedAccountsId(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].$get(args, options))
}

export async function postManagedAccountsIdActionsDisable(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['actions']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].actions.disable.$post(args, options))
}

export async function postManagedAccountsIdActionsEnable(
  args: InferRequestType<(typeof client.managed_accounts)[':id']['actions']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed_accounts[':id'].actions.enable.$post(args, options))
}

export async function getMedia(options?: ClientRequestOptions) {
  return await parseResponse(client.media.$get(undefined, options))
}

export async function postMedia(
  args: InferRequestType<typeof client.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$post(args, options))
}

export async function getMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$get(args, options))
}

export async function putMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$put(args, options))
}

export async function deleteMediaMediaName(
  args: InferRequestType<(typeof client.media)[':media_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].$delete(args, options))
}

export async function getMediaMediaNameDownload(
  args: InferRequestType<(typeof client.media)[':media_name']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':media_name'].download.$get(args, options))
}

export async function getMessageDetailRecords(
  args: InferRequestType<typeof client.message_detail_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_detail_records.$get(args, options))
}

export async function getMessageDetailRecordsIdMessageBody(
  args: InferRequestType<(typeof client.message_detail_records)[':id']['message_body']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.message_detail_records[':id'].message_body.$get(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function postMessagesLongCode(
  args: InferRequestType<typeof client.messages.long_code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.long_code.$post(args, options))
}

export async function postMessagesNumberPool(
  args: InferRequestType<typeof client.messages.number_pool.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.number_pool.$post(args, options))
}

export async function postMessagesShortCode(
  args: InferRequestType<typeof client.messages.short_code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.short_code.$post(args, options))
}

export async function getMessagesId(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':id'].$get(args, options))
}

export async function getMessagingHostedNumberOrders(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders.$get(args, options))
}

export async function postMessagingHostedNumberOrders(
  args: InferRequestType<typeof client.messaging_hosted_number_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders.$post(args, options))
}

export async function getMessagingHostedNumberOrdersId(
  args: InferRequestType<(typeof client.messaging_hosted_number_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_number_orders[':id'].$get(args, options))
}

export async function postMessagingHostedNumberOrdersIdActionsFileUpload(
  args: InferRequestType<
    (typeof client.messaging_hosted_number_orders)[':id']['actions']['file_upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging_hosted_number_orders[':id'].actions.file_upload.$post(args, options),
  )
}

export async function deleteMessagingHostedNumbersId(
  args: InferRequestType<(typeof client.messaging_hosted_numbers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_hosted_numbers[':id'].$delete(args, options))
}

export async function getMessagingProfileMetrics(
  args: InferRequestType<typeof client.messaging_profile_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profile_metrics.$get(args, options))
}

export async function getMessagingProfiles(
  args: InferRequestType<typeof client.messaging_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles.$get(args, options))
}

export async function postMessagingProfiles(
  args: InferRequestType<typeof client.messaging_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles.$post(args, options))
}

export async function getMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$get(args, options))
}

export async function deleteMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$delete(args, options))
}

export async function patchMessagingProfilesId(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].$patch(args, options))
}

export async function getMessagingProfilesIdMetrics(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].metrics.$get(args, options))
}

export async function getMessagingProfilesIdPhoneNumbers(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].phone_numbers.$get(args, options))
}

export async function getMessagingProfilesIdShortCodes(
  args: InferRequestType<(typeof client.messaging_profiles)[':id']['short_codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_profiles[':id'].short_codes.$get(args, options))
}

export async function getMessagingUrlDomains(
  args: InferRequestType<typeof client.messaging_url_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging_url_domains.$get(args, options))
}

export async function getMobileOperatorNetworks(
  args: InferRequestType<typeof client.mobile_operator_networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile_operator_networks.$get(args, options))
}

export async function getNotificationChannels(
  args: InferRequestType<typeof client.notification_channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels.$get(args, options))
}

export async function postNotificationChannels(
  args: InferRequestType<typeof client.notification_channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels.$post(args, options))
}

export async function getNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$get(args, options))
}

export async function deleteNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$delete(args, options))
}

export async function patchNotificationChannelsId(
  args: InferRequestType<(typeof client.notification_channels)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_channels[':id'].$patch(args, options))
}

export async function getNotificationEventConditions(
  args: InferRequestType<typeof client.notification_event_conditions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_event_conditions.$get(args, options))
}

export async function getNotificationEvents(
  args: InferRequestType<typeof client.notification_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_events.$get(args, options))
}

export async function getNotificationProfiles(
  args: InferRequestType<typeof client.notification_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles.$get(args, options))
}

export async function postNotificationProfiles(
  args: InferRequestType<typeof client.notification_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles.$post(args, options))
}

export async function getNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$get(args, options))
}

export async function deleteNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$delete(args, options))
}

export async function patchNotificationProfilesId(
  args: InferRequestType<(typeof client.notification_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_profiles[':id'].$patch(args, options))
}

export async function getNotificationSettings(
  args: InferRequestType<typeof client.notification_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings.$get(args, options))
}

export async function postNotificationSettings(
  args: InferRequestType<typeof client.notification_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings.$post(args, options))
}

export async function getNotificationSettingsId(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings[':id'].$get(args, options))
}

export async function deleteNotificationSettingsId(
  args: InferRequestType<(typeof client.notification_settings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_settings[':id'].$delete(args, options))
}

export async function getNumberBlockOrders(
  args: InferRequestType<typeof client.number_block_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_block_orders.$get(args, options))
}

export async function postNumberBlockOrders(
  args: InferRequestType<typeof client.number_block_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_block_orders.$post(args, options))
}

export async function getNumberBlockOrdersNumberBlockOrderId(
  args: InferRequestType<(typeof client.number_block_orders)[':number_block_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_block_orders[':number_block_order_id'].$get(args, options),
  )
}

export async function getNumberLookupPhoneNumber(
  args: InferRequestType<(typeof client.number_lookup)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_lookup[':phone_number'].$get(args, options))
}

export async function getNumberOrderDocuments(
  args: InferRequestType<typeof client.number_order_documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_order_documents.$get(args, options))
}

export async function postNumberOrderDocuments(
  args: InferRequestType<typeof client.number_order_documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_order_documents.$post(args, options))
}

export async function getNumberOrderDocumentsNumberOrderDocumentId(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_documents[':number_order_document_id'].$get(args, options),
  )
}

export async function patchNumberOrderDocumentsNumberOrderDocumentId(
  args: InferRequestType<
    (typeof client.number_order_documents)[':number_order_document_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_documents[':number_order_document_id'].$patch(args, options),
  )
}

export async function getNumberOrderPhoneNumbers(options?: ClientRequestOptions) {
  return await parseResponse(client.number_order_phone_numbers.$get(undefined, options))
}

export async function getNumberOrderPhoneNumbersNumberOrderPhoneNumberId(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_phone_numbers[':number_order_phone_number_id'].$get(args, options),
  )
}

export async function patchNumberOrderPhoneNumbersNumberOrderPhoneNumberId(
  args: InferRequestType<
    (typeof client.number_order_phone_numbers)[':number_order_phone_number_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_order_phone_numbers[':number_order_phone_number_id'].$patch(args, options),
  )
}

export async function getNumberOrders(
  args: InferRequestType<typeof client.number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders.$get(args, options))
}

export async function postNumberOrders(
  args: InferRequestType<typeof client.number_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders.$post(args, options))
}

export async function getNumberOrdersNumberOrderId(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders[':number_order_id'].$get(args, options))
}

export async function patchNumberOrdersNumberOrderId(
  args: InferRequestType<(typeof client.number_orders)[':number_order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_orders[':number_order_id'].$patch(args, options))
}

export async function getNumberReservations(
  args: InferRequestType<typeof client.number_reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_reservations.$get(args, options))
}

export async function postNumberReservations(
  args: InferRequestType<typeof client.number_reservations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number_reservations.$post(args, options))
}

export async function getNumberReservationsNumberReservationId(
  args: InferRequestType<(typeof client.number_reservations)[':number_reservation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_reservations[':number_reservation_id'].$get(args, options),
  )
}

export async function postNumberReservationsNumberReservationIdActionsExtend(
  args: InferRequestType<
    (typeof client.number_reservations)[':number_reservation_id']['actions']['extend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.number_reservations[':number_reservation_id'].actions.extend.$post(args, options),
  )
}

export async function getOtaUpdates(
  args: InferRequestType<typeof client.ota_updates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ota_updates.$get(args, options))
}

export async function getOtaUpdatesId(
  args: InferRequestType<(typeof client.ota_updates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ota_updates[':id'].$get(args, options))
}

export async function getOutboundVoiceProfiles(
  args: InferRequestType<typeof client.outbound_voice_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles.$get(args, options))
}

export async function postOutboundVoiceProfiles(
  args: InferRequestType<typeof client.outbound_voice_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles.$post(args, options))
}

export async function getOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$get(args, options))
}

export async function deleteOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$delete(args, options))
}

export async function patchOutboundVoiceProfilesId(
  args: InferRequestType<(typeof client.outbound_voice_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outbound_voice_profiles[':id'].$patch(args, options))
}

export async function getPhoneNumberBlocksJobs(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_number_blocks.jobs.$get(args, options))
}

export async function postPhoneNumberBlocksJobsDeletePhoneNumberBlock(
  args: InferRequestType<typeof client.phone_number_blocks.jobs.delete_phone_number_block.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_number_blocks.jobs.delete_phone_number_block.$post(args, options),
  )
}

export async function getPhoneNumberBlocksJobsId(
  args: InferRequestType<(typeof client.phone_number_blocks.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_number_blocks.jobs[':id'].$get(args, options))
}

export async function getPhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.$get(args, options))
}

export async function getPhoneNumbersCsvDownloads(
  args: InferRequestType<typeof client.phone_numbers.csv_downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.csv_downloads.$get(args, options))
}

export async function postPhoneNumbersCsvDownloads(options?: ClientRequestOptions) {
  return await parseResponse(client.phone_numbers.csv_downloads.$post(undefined, options))
}

export async function getPhoneNumbersCsvDownloadsId(
  args: InferRequestType<(typeof client.phone_numbers.csv_downloads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.csv_downloads[':id'].$get(args, options))
}

export async function getPhoneNumbersInboundChannels(options?: ClientRequestOptions) {
  return await parseResponse(client.phone_numbers.inbound_channels.$get(undefined, options))
}

export async function patchPhoneNumbersInboundChannels(
  args: InferRequestType<typeof client.phone_numbers.inbound_channels.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.inbound_channels.$patch(args, options))
}

export async function getPhoneNumbersJobs(
  args: InferRequestType<typeof client.phone_numbers.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.$get(args, options))
}

export async function postPhoneNumbersJobsDeletePhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.jobs.delete_phone_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.delete_phone_numbers.$post(args, options))
}

export async function postPhoneNumbersJobsUpdateEmergencySettings(
  args: InferRequestType<typeof client.phone_numbers.jobs.update_emergency_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers.jobs.update_emergency_settings.$post(args, options),
  )
}

export async function postPhoneNumbersJobsUpdatePhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.jobs.update_phone_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs.update_phone_numbers.$post(args, options))
}

export async function getPhoneNumbersJobsId(
  args: InferRequestType<(typeof client.phone_numbers.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.jobs[':id'].$get(args, options))
}

export async function getPhoneNumbersMessaging(
  args: InferRequestType<typeof client.phone_numbers.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.messaging.$get(args, options))
}

export async function getPhoneNumbersVoice(
  args: InferRequestType<typeof client.phone_numbers.voice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.voice.$get(args, options))
}

export async function getPhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$get(args, options))
}

export async function deletePhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$delete(args, options))
}

export async function patchPhoneNumbersId(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].$patch(args, options))
}

export async function postPhoneNumbersIdActionsEnableEmergency(
  args: InferRequestType<
    (typeof client.phone_numbers)[':id']['actions']['enable_emergency']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone_numbers[':id'].actions.enable_emergency.$post(args, options),
  )
}

export async function getPhoneNumbersIdMessaging(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].messaging.$get(args, options))
}

export async function patchPhoneNumbersIdMessaging(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['messaging']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].messaging.$patch(args, options))
}

export async function getPhoneNumbersIdVoice(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].voice.$get(args, options))
}

export async function patchPhoneNumbersIdVoice(
  args: InferRequestType<(typeof client.phone_numbers)[':id']['voice']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers[':id'].voice.$patch(args, options))
}

export async function postPortabilityChecks(
  args: InferRequestType<typeof client.portability_checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portability_checks.$post(args, options))
}

export async function getPortingOrders(
  args: InferRequestType<typeof client.porting_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.$get(args, options))
}

export async function postPortingOrders(
  args: InferRequestType<typeof client.porting_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders.$post(args, options))
}

export async function getPortingOrdersExceptionTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.porting_orders.exception_types.$get(undefined, options))
}

export async function getPortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$get(args, options))
}

export async function deletePortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$delete(args, options))
}

export async function patchPortingOrdersId(
  args: InferRequestType<(typeof client.porting_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].$patch(args, options))
}

export async function postPortingOrdersIdActionsActivate(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.activate.$post(args, options))
}

export async function postPortingOrdersIdActionsCancel(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.cancel.$post(args, options))
}

export async function postPortingOrdersIdActionsConfirm(
  args: InferRequestType<(typeof client.porting_orders)[':id']['actions']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].actions.confirm.$post(args, options))
}

export async function getPortingOrdersIdActivationJobs(
  args: InferRequestType<(typeof client.porting_orders)[':id']['activation_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].activation_jobs.$get(args, options))
}

export async function getPortingOrdersIdActivationJobsActivationJobId(
  args: InferRequestType<
    (typeof client.porting_orders)[':id']['activation_jobs'][':activationJobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.porting_orders[':id'].activation_jobs[':activationJobId'].$get(args, options),
  )
}

export async function getPortingOrdersIdComments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].comments.$get(args, options))
}

export async function postPortingOrdersIdComments(
  args: InferRequestType<(typeof client.porting_orders)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].comments.$post(args, options))
}

export async function getPortingOrdersIdLoaTemplate(
  args: InferRequestType<(typeof client.porting_orders)[':id']['loa_template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_orders[':id'].loa_template.$get(args, options))
}

export async function getPortingPhoneNumbers(
  args: InferRequestType<typeof client.porting_phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.porting_phone_numbers.$get(args, options))
}

export async function getPortouts(
  args: InferRequestType<typeof client.portouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts.$get(args, options))
}

export async function getPortoutsId(
  args: InferRequestType<(typeof client.portouts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].$get(args, options))
}

export async function getPortoutsIdComments(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].comments.$get(args, options))
}

export async function postPortoutsIdComments(
  args: InferRequestType<(typeof client.portouts)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'].comments.$post(args, options))
}

export async function patchPortoutsIdStatus(
  args: InferRequestType<(typeof client.portouts)[':id'][':status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portouts[':id'][':status'].$patch(args, options))
}

export async function getPrivateWirelessGateways(
  args: InferRequestType<typeof client.private_wireless_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways.$get(args, options))
}

export async function postPrivateWirelessGateways(
  args: InferRequestType<typeof client.private_wireless_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways.$post(args, options))
}

export async function getPrivateWirelessGatewaysId(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways[':id'].$get(args, options))
}

export async function deletePrivateWirelessGatewaysId(
  args: InferRequestType<(typeof client.private_wireless_gateways)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.private_wireless_gateways[':id'].$delete(args, options))
}

export async function getQueuesQueueName(
  args: InferRequestType<(typeof client.queues)[':queue_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].$get(args, options))
}

export async function getQueuesQueueNameCalls(
  args: InferRequestType<(typeof client.queues)[':queue_name']['calls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queue_name'].calls.$get(args, options))
}

export async function getQueuesQueueNameCallsCallControlId(
  args: InferRequestType<
    (typeof client.queues)[':queue_name']['calls'][':call_control_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queue_name'].calls[':call_control_id'].$get(args, options),
  )
}

export async function getRecordings(
  args: InferRequestType<typeof client.recordings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.$get(args, options))
}

export async function getRecordingsId(
  args: InferRequestType<(typeof client.recordings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings[':id'].$get(args, options))
}

export async function getReportsBatchMdrReports(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.batch_mdr_reports.$get(args, options))
}

export async function postReportsBatchMdrReports(
  args: InferRequestType<typeof client.reports.batch_mdr_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.batch_mdr_reports.$post(args, options))
}

export async function getReportsBatchMdrReportsId(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.batch_mdr_reports[':id'].$get(args, options))
}

export async function deleteReportsBatchMdrReportsId(
  args: InferRequestType<(typeof client.reports.batch_mdr_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.batch_mdr_reports[':id'].$delete(args, options))
}

export async function getReportsCdrUsageReportsSync(
  args: InferRequestType<typeof client.reports.cdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.cdr_usage_reports.sync.$get(args, options))
}

export async function getReportsMdrUsageReports(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.$get(args, options))
}

export async function postReportsMdrUsageReports(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.$post(args, options))
}

export async function getReportsMdrUsageReportsSync(
  args: InferRequestType<typeof client.reports.mdr_usage_reports.sync.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports.sync.$get(args, options))
}

export async function getReportsMdrUsageReportsId(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports[':id'].$get(args, options))
}

export async function deleteReportsMdrUsageReportsId(
  args: InferRequestType<(typeof client.reports.mdr_usage_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdr_usage_reports[':id'].$delete(args, options))
}

export async function getReportsMdrs(
  args: InferRequestType<typeof client.reports.mdrs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.mdrs.$get(args, options))
}

export async function getReportsWdrs(
  args: InferRequestType<typeof client.reports.wdrs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.wdrs.$get(args, options))
}

export async function getRequirementTypes(
  args: InferRequestType<typeof client.requirement_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_types.$get(args, options))
}

export async function getRequirementTypesId(
  args: InferRequestType<(typeof client.requirement_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirement_types[':id'].$get(args, options))
}

export async function getRequirements(
  args: InferRequestType<typeof client.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements.$get(args, options))
}

export async function getRequirementsId(
  args: InferRequestType<(typeof client.requirements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requirements[':id'].$get(args, options))
}

export async function getRoomParticipants(
  args: InferRequestType<typeof client.room_participants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_participants.$get(args, options))
}

export async function getRoomParticipantsRoomParticipantId(
  args: InferRequestType<(typeof client.room_participants)[':room_participant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_participants[':room_participant_id'].$get(args, options))
}

export async function getRoomSessions(
  args: InferRequestType<typeof client.room_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_sessions.$get(args, options))
}

export async function getRoomSessionsRoomSessionId(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.room_sessions[':room_session_id'].$get(args, options))
}

export async function getRoomSessionsRoomSessionIdParticipants(
  args: InferRequestType<(typeof client.room_sessions)[':room_session_id']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.room_sessions[':room_session_id'].participants.$get(args, options),
  )
}

export async function getRooms(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$get(args, options))
}

export async function postRooms(
  args: InferRequestType<typeof client.rooms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$post(args, options))
}

export async function getRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].$get(args, options))
}

export async function deleteRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':room_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].$delete(args, options))
}

export async function postRoomsRoomIdActionsGenerateJoinClientToken(
  args: InferRequestType<
    (typeof client.rooms)[':room_id']['actions']['generate_join_client_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rooms[':room_id'].actions.generate_join_client_token.$post(args, options),
  )
}

export async function postRoomsRoomIdActionsRefreshClientToken(
  args: InferRequestType<
    (typeof client.rooms)[':room_id']['actions']['refresh_client_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rooms[':room_id'].actions.refresh_client_token.$post(args, options),
  )
}

export async function getRoomsRoomIdSessions(
  args: InferRequestType<(typeof client.rooms)[':room_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':room_id'].sessions.$get(args, options))
}

export async function getShortCodes(
  args: InferRequestType<typeof client.short_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes.$get(args, options))
}

export async function getShortCodesId(
  args: InferRequestType<(typeof client.short_codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes[':id'].$get(args, options))
}

export async function patchShortCodesId(
  args: InferRequestType<(typeof client.short_codes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.short_codes[':id'].$patch(args, options))
}

export async function getSimCardGroupActions(
  args: InferRequestType<typeof client.sim_card_group_actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_group_actions.$get(args, options))
}

export async function getSimCardGroupActionsId(
  args: InferRequestType<(typeof client.sim_card_group_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_group_actions[':id'].$get(args, options))
}

export async function getSimCardGroups(
  args: InferRequestType<typeof client.sim_card_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups.$get(args, options))
}

export async function postSimCardGroups(
  args: InferRequestType<typeof client.sim_card_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups.$post(args, options))
}

export async function getSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$get(args, options))
}

export async function deleteSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$delete(args, options))
}

export async function patchSimCardGroupsId(
  args: InferRequestType<(typeof client.sim_card_groups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_groups[':id'].$patch(args, options))
}

export async function postSimCardGroupsIdActionsRemovePrivateWirelessGateway(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['remove_private_wireless_gateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.remove_private_wireless_gateway.$post(args, options),
  )
}

export async function postSimCardGroupsIdActionsSetPrivateWirelessGateway(
  args: InferRequestType<
    (typeof client.sim_card_groups)[':id']['actions']['set_private_wireless_gateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_card_groups[':id'].actions.set_private_wireless_gateway.$post(args, options),
  )
}

export async function postSimCardOrderPreview(
  args: InferRequestType<typeof client.sim_card_order_preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_order_preview.$post(args, options))
}

export async function getSimCardOrders(
  args: InferRequestType<typeof client.sim_card_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders.$get(args, options))
}

export async function postSimCardOrders(
  args: InferRequestType<typeof client.sim_card_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders.$post(args, options))
}

export async function getSimCardOrdersId(
  args: InferRequestType<(typeof client.sim_card_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_card_orders[':id'].$get(args, options))
}

export async function getSimCards(
  args: InferRequestType<typeof client.sim_cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards.$get(args, options))
}

export async function postSimCardsActionsValidateRegistrationCodes(
  args: InferRequestType<typeof client.sim_cards.actions.validate_registration_codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards.actions.validate_registration_codes.$post(args, options),
  )
}

export async function getSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$get(args, options))
}

export async function deleteSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$delete(args, options))
}

export async function patchSimCardsId(
  args: InferRequestType<(typeof client.sim_cards)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].$patch(args, options))
}

export async function postSimCardsIdActionsDisable(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.disable.$post(args, options))
}

export async function postSimCardsIdActionsEnable(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.enable.$post(args, options))
}

export async function postSimCardsIdActionsSetStandby(
  args: InferRequestType<(typeof client.sim_cards)[':id']['actions']['set_standby']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':id'].actions.set_standby.$post(args, options))
}

export async function getSimCardsSimCardIdNetworkPreferences(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards[':sim_card_id'].network_preferences.$get(args, options),
  )
}

export async function putSimCardsSimCardIdNetworkPreferences(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['network_preferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards[':sim_card_id'].network_preferences.$put(args, options),
  )
}

export async function deleteSimCardsSimCardIdNetworkPreferences(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['network_preferences']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards[':sim_card_id'].network_preferences.$delete(args, options),
  )
}

export async function getSimCardsSimCardIdPublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':sim_card_id'].public_ip.$get(args, options))
}

export async function postSimCardsSimCardIdPublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':sim_card_id'].public_ip.$post(args, options))
}

export async function deleteSimCardsSimCardIdPublicIp(
  args: InferRequestType<(typeof client.sim_cards)[':sim_card_id']['public_ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sim_cards[':sim_card_id'].public_ip.$delete(args, options))
}

export async function getSimCardsSimCardIdWirelessConnectivityLogs(
  args: InferRequestType<
    (typeof client.sim_cards)[':sim_card_id']['wireless_connectivity_logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sim_cards[':sim_card_id'].wireless_connectivity_logs.$get(args, options),
  )
}

export async function getSubNumberOrders(
  args: InferRequestType<typeof client.sub_number_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders.$get(args, options))
}

export async function getSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders[':sub_number_order_id'].$get(args, options))
}

export async function patchSubNumberOrdersSubNumberOrderId(
  args: InferRequestType<(typeof client.sub_number_orders)[':sub_number_order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_number_orders[':sub_number_order_id'].$patch(args, options))
}

export async function getTelephonyCredentials(
  args: InferRequestType<typeof client.telephony_credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials.$get(args, options))
}

export async function postTelephonyCredentials(
  args: InferRequestType<typeof client.telephony_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials.$post(args, options))
}

export async function getTelephonyCredentialsTags(
  args: InferRequestType<typeof client.telephony_credentials.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials.tags.$get(args, options))
}

export async function getTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$get(args, options))
}

export async function deleteTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$delete(args, options))
}

export async function patchTelephonyCredentialsId(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].$patch(args, options))
}

export async function postTelephonyCredentialsIdActionsAction(
  args: InferRequestType<
    (typeof client.telephony_credentials)[':id']['actions'][':action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telephony_credentials[':id'].actions[':action'].$post(args, options),
  )
}

export async function postTelephonyCredentialsIdToken(
  args: InferRequestType<(typeof client.telephony_credentials)[':id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telephony_credentials[':id'].token.$post(args, options))
}

export async function getTexmlApplications(
  args: InferRequestType<typeof client.texml_applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications.$get(args, options))
}

export async function postTexmlApplications(
  args: InferRequestType<typeof client.texml_applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications.$post(args, options))
}

export async function getTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$get(args, options))
}

export async function deleteTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$delete(args, options))
}

export async function patchTexmlApplicationsId(
  args: InferRequestType<(typeof client.texml_applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.texml_applications[':id'].$patch(args, options))
}

export async function getVerificationsByPhoneNumberPhoneNumber(
  args: InferRequestType<(typeof client.verifications.by_phone_number)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verifications.by_phone_number[':phone_number'].$get(args, options),
  )
}

export async function postVerificationsByPhoneNumberPhoneNumberActionsVerify(
  args: InferRequestType<
    (typeof client.verifications.by_phone_number)[':phone_number']['actions']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.verifications.by_phone_number[':phone_number'].actions.verify.$post(args, options),
  )
}

export async function postVerificationsCall(
  args: InferRequestType<typeof client.verifications.call.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.call.$post(args, options))
}

export async function postVerificationsFlashcall(
  args: InferRequestType<typeof client.verifications.flashcall.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.flashcall.$post(args, options))
}

export async function postVerificationsPsd2(
  args: InferRequestType<typeof client.verifications.psd2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.psd2.$post(args, options))
}

export async function postVerificationsSms(
  args: InferRequestType<typeof client.verifications.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.sms.$post(args, options))
}

export async function postVerificationsWhatsapp(
  args: InferRequestType<typeof client.verifications.whatsapp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.whatsapp.$post(args, options))
}

export async function getVerificationsVerificationId(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications[':verification_id'].$get(args, options))
}

export async function getVerifyProfiles(
  args: InferRequestType<typeof client.verify_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.$get(args, options))
}

export async function postVerifyProfiles(
  args: InferRequestType<typeof client.verify_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles.$post(args, options))
}

export async function getVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$get(args, options))
}

export async function deleteVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$delete(args, options))
}

export async function patchVerifyProfilesVerifyProfileId(
  args: InferRequestType<(typeof client.verify_profiles)[':verify_profile_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verify_profiles[':verify_profile_id'].$patch(args, options))
}

export async function getWebhookDeliveries(
  args: InferRequestType<typeof client.webhook_deliveries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_deliveries.$get(args, options))
}

export async function getWebhookDeliveriesId(
  args: InferRequestType<(typeof client.webhook_deliveries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_deliveries[':id'].$get(args, options))
}

export async function postWhatsappContacts(
  args: InferRequestType<typeof client.whatsapp_contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_contacts.$post(args, options))
}

export async function getWhatsappDetailRecordReports(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_detail_record_reports.$get(args, options))
}

export async function postWhatsappDetailRecordReports(
  args: InferRequestType<typeof client.whatsapp_detail_record_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_detail_record_reports.$post(args, options))
}

export async function getWhatsappDetailRecordReportsId(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_detail_record_reports[':id'].$get(args, options))
}

export async function deleteWhatsappDetailRecordReportsId(
  args: InferRequestType<(typeof client.whatsapp_detail_record_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_detail_record_reports[':id'].$delete(args, options))
}

export async function postWhatsappMedia(
  args: InferRequestType<typeof client.whatsapp_media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_media.$post(args, options))
}

export async function getWhatsappMediaWhatsappUserIdMediaId(
  args: InferRequestType<(typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp_media[':whatsapp_user_id'][':media_id'].$get(args, options),
  )
}

export async function deleteWhatsappMediaWhatsappUserIdMediaId(
  args: InferRequestType<
    (typeof client.whatsapp_media)[':whatsapp_user_id'][':media_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsapp_media[':whatsapp_user_id'][':media_id'].$delete(args, options),
  )
}

export async function postWhatsappMessages(
  args: InferRequestType<typeof client.whatsapp_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_messages.$post(args, options))
}

export async function patchWhatsappMessagesMessageId(
  args: InferRequestType<(typeof client.whatsapp_messages)[':message_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_messages[':message_id'].$patch(args, options))
}

export async function getWhatsappUsageAggregations(
  args: InferRequestType<typeof client.whatsapp_usage_aggregations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_usage_aggregations.$get(args, options))
}

export async function getWhatsappUsersWhatsappUserId(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_users[':whatsapp_user_id'].$get(args, options))
}

export async function patchWhatsappUsersWhatsappUserId(
  args: InferRequestType<(typeof client.whatsapp_users)[':whatsapp_user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp_users[':whatsapp_user_id'].$patch(args, options))
}

export async function getWirelessDetailRecordsReports(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports.$get(args, options))
}

export async function postWirelessDetailRecordsReports(
  args: InferRequestType<typeof client.wireless.detail_records_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports.$post(args, options))
}

export async function getWirelessDetailRecordsReportsId(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports[':id'].$get(args, options))
}

export async function deleteWirelessDetailRecordsReportsId(
  args: InferRequestType<(typeof client.wireless.detail_records_reports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wireless.detail_records_reports[':id'].$delete(args, options))
}
