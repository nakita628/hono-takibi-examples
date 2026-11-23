import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVersionApplicationIDConnectedClientBusinesses(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['connected_client_businesses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Application-ID'].connected_client_businesses.$get(args, options),
  )
}

export async function postVersionApplicationIDWhatsappBusinessSolution(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Application-ID'].whatsapp_business_solution.$post(args, options),
  )
}

export async function getVersionApplicationIDWhatsappBusinessSolutions(
  args: InferRequestType<
    (typeof client)[':Version'][':Application-ID']['whatsapp_business_solutions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Application-ID'].whatsapp_business_solutions.$get(args, options),
  )
}

export async function postVersionBusinessIDAddPhoneNumbers(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['add_phone_numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].add_phone_numbers.$post(args, options),
  )
}

export async function getVersionBusinessID(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Business-ID'].$get(args, options))
}

export async function getVersionBusinessIDPreverifiedNumbers(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['preverified_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].preverified_numbers.$get(args, options),
  )
}

export async function getVersionBusinessIDClientWhatsappBusinessAccounts(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['client_whatsapp_business_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].client_whatsapp_business_accounts.$get(args, options),
  )
}

export async function postVersionBusinessIDOnboardPartnersToMmLite(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['onboard_partners_to_mm_lite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].onboard_partners_to_mm_lite.$post(args, options),
  )
}

export async function getVersionBusinessIDOwnedWhatsappBusinessAccounts(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['owned_whatsapp_business_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].owned_whatsapp_business_accounts.$get(args, options),
  )
}

export async function postVersionBusinessIDSharePreverifiedNumbers(
  args: InferRequestType<
    (typeof client)[':Version'][':Business-ID']['share_preverified_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Business-ID'].share_preverified_numbers.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDBlockUsers(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].block_users.$get(args, options))
}

export async function postVersionPhoneNumberIDBlockUsers(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].block_users.$post(args, options),
  )
}

export async function deleteVersionPhoneNumberIDBlockUsers(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['block_users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].block_users.$delete(args, options),
  )
}

export async function getVersionPhoneNumberIDCallPermissions(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['call_permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].call_permissions.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDCalls(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['calls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].calls.$post(args, options))
}

export async function getVersionPhoneNumberIDGroups(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].groups.$get(args, options))
}

export async function postVersionPhoneNumberIDGroups(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].groups.$post(args, options))
}

export async function postVersionPhoneNumberIDMarketingMessages(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['marketing_messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].marketing_messages.$post(args, options),
  )
}

export async function postVersionPhoneNumberIDMedia(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].media.$post(args, options))
}

export async function postVersionPhoneNumberIDMessages(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].messages.$post(args, options))
}

export async function getVersionPhoneNumberIDMessageQrdls(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].message_qrdls.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDMessageQrdls(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['message_qrdls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].message_qrdls.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDMessageQrdlsQRCodeID(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$get(args, options),
  )
}

export async function deleteVersionPhoneNumberIDMessageQrdlsQRCodeID(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_qrdls'][':QR-Code-ID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].message_qrdls[':QR-Code-ID'].$delete(args, options),
  )
}

export async function postVersionPhoneNumberIDMessagesEncrypted(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['messages_encrypted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].messages_encrypted.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDOfficialBusinessAccount(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].official_business_account.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDOfficialBusinessAccount(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['official_business_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].official_business_account.$post(args, options),
  )
}

export async function getVersionPhoneNumberID(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].$get(args, options))
}

export async function postVersionPhoneNumberID(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].$post(args, options))
}

export async function postVersionPhoneNumberIDDeregister(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['deregister']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].deregister.$post(args, options))
}

export async function getVersionPhoneNumberIDMessageHistory(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['message_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].message_history.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDRegister(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].register.$post(args, options))
}

export async function postVersionPhoneNumberIDRequestCode(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['request_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].request_code.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDSettings(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].settings.$get(args, options))
}

export async function postVersionPhoneNumberIDSettings(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Phone-Number-ID'].settings.$post(args, options))
}

export async function postVersionPhoneNumberIDVerifyCode(
  args: InferRequestType<(typeof client)[':Version'][':Phone-Number-ID']['verify_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].verify_code.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDWhatsappBusinessEncryption(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDWhatsappBusinessEncryption(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_encryption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_business_encryption.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDWhatsappBusinessProfile(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDWhatsappBusinessProfile(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_business_profile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_business_profile.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDWhatsappCommerceSettings(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDWhatsappCommerceSettings(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['whatsapp_commerce_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].whatsapp_commerce_settings.$post(args, options),
  )
}

export async function getVersionPhoneNumberIDBusinessComplianceInfo(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].business_compliance_info.$get(args, options),
  )
}

export async function postVersionPhoneNumberIDBusinessComplianceInfo(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['business_compliance_info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].business_compliance_info.$post(args, options),
  )
}

export async function postVersionGroupIdInviteLink(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].invite_link.$post(args, options))
}

export async function deleteVersionGroupIdInviteLink(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['invite_link']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].invite_link.$delete(args, options))
}

export async function getVersionGroupIdJoinRequests(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].join_requests.$get(args, options))
}

export async function postVersionGroupIdJoinRequests(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].join_requests.$post(args, options))
}

export async function deleteVersionGroupIdJoinRequests(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['join_requests']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].join_requests.$delete(args, options))
}

export async function postVersionGroupIdParticipants(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].participants.$post(args, options))
}

export async function deleteVersionGroupIdParticipants(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['participants']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].participants.$delete(args, options))
}

export async function getVersionGroupId(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].$get(args, options))
}

export async function postVersionGroupId(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].$post(args, options))
}

export async function deleteVersionGroupId(
  args: InferRequestType<(typeof client)[':Version'][':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':group_id'].$delete(args, options))
}

export async function getVersionMediaID(
  args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Media-ID'].$get(args, options))
}

export async function deleteVersionMediaID(
  args: InferRequestType<(typeof client)[':Version'][':Media-ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Media-ID'].$delete(args, options))
}

export async function getVersionMediaURL(
  args: InferRequestType<(typeof client)[':Version'][':Media-URL']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Media-URL'].$get(args, options))
}

export async function getVersionMessageHistoryIDEvents(
  args: InferRequestType<(typeof client)[':Version'][':Message-History-ID']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Message-History-ID'].events.$get(args, options))
}

export async function getVersionMigrationIntentID(
  args: InferRequestType<(typeof client)[':Version'][':Migration-Intent-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Migration-Intent-ID'].$get(args, options))
}

export async function getVersionPreVerifiedPhoneNumberID(
  args: InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Pre-Verified-Phone-Number-ID'].$get(args, options),
  )
}

export async function deleteVersionPreVerifiedPhoneNumberID(
  args: InferRequestType<(typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Pre-Verified-Phone-Number-ID'].$delete(args, options),
  )
}

export async function getVersionPreVerifiedPhoneNumberIDPartners(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['partners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Pre-Verified-Phone-Number-ID'].partners.$get(args, options),
  )
}

export async function postVersionPreVerifiedPhoneNumberIDRequestCode(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['request_code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Pre-Verified-Phone-Number-ID'].request_code.$post(args, options),
  )
}

export async function postVersionPreVerifiedPhoneNumberIDVerifyCode(
  args: InferRequestType<
    (typeof client)[':Version'][':Pre-Verified-Phone-Number-ID']['verify_code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Pre-Verified-Phone-Number-ID'].verify_code.$post(args, options),
  )
}

export async function getVersionSolutionIDAccessToken(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['access_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Solution-ID'].access_token.$get(args, options))
}

export async function postVersionSolutionIDAcceptDeactivationRequest(
  args: InferRequestType<
    (typeof client)[':Version'][':Solution-ID']['accept_deactivation_request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Solution-ID'].accept_deactivation_request.$post(args, options),
  )
}

export async function postVersionSolutionIDAccept(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Solution-ID'].accept.$post(args, options))
}

export async function getVersionSolutionID(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Solution-ID'].$get(args, options))
}

export async function postVersionSolutionIDRejectDeactivationRequest(
  args: InferRequestType<
    (typeof client)[':Version'][':Solution-ID']['reject_deactivation_request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Solution-ID'].reject_deactivation_request.$post(args, options),
  )
}

export async function postVersionSolutionIDReject(
  args: InferRequestType<(typeof client)[':Version'][':Solution-ID']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Solution-ID'].reject.$post(args, options))
}

export async function postVersionSolutionIDSendDeactivationRequest(
  args: InferRequestType<
    (typeof client)[':Version'][':Solution-ID']['send_deactivation_request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Solution-ID'].send_deactivation_request.$post(args, options),
  )
}

export async function getVersionUserIDAssignedWhatsappBusinessAccounts(
  args: InferRequestType<
    (typeof client)[':Version'][':User-ID']['assigned_whatsapp_business_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':User-ID'].assigned_whatsapp_business_accounts.$get(args, options),
  )
}

export async function getVersionWhatsAppAccountNumberID(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Account-Number-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WhatsApp-Account-Number-ID'].$get(args, options))
}

export async function getVersionWhatsAppBusinessAccountIDAssignedUsers(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$get(args, options),
  )
}

export async function postVersionWhatsAppBusinessAccountIDAssignedUsers(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$post(args, options),
  )
}

export async function deleteVersionWhatsAppBusinessAccountIDAssignedUsers(
  args: InferRequestType<
    (typeof client)[':Version'][':WhatsApp-Business-Account-ID']['assigned_users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WhatsApp-Business-Account-ID'].assigned_users.$delete(args, options),
  )
}

export async function postVersionPhoneNumberIDConversationalAutomation(
  args: InferRequestType<
    (typeof client)[':Version'][':Phone-Number-ID']['conversational_automation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':Phone-Number-ID'].conversational_automation.$post(args, options),
  )
}

export async function getVersionBusinessIDExtendedcredits(
  args: InferRequestType<(typeof client)[':Version'][':Business-ID']['extendedcredits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Business-ID'].extendedcredits.$get(args, options))
}

export async function getVersionWABAIDFlows(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].flows.$get(args, options))
}

export async function postVersionWABAIDFlows(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].flows.$post(args, options))
}

export async function postVersionWABAIDMigrateFlows(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['migrate_flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].migrate_flows.$post(args, options))
}

export async function getVersionFlowID(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].$get(args, options))
}

export async function postVersionFlowID(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].$post(args, options))
}

export async function deleteVersionFlowID(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].$delete(args, options))
}

export async function getVersionFlowIDAssets(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].assets.$get(args, options))
}

export async function postVersionFlowIDAssets(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].assets.$post(args, options))
}

export async function postVersionFlowIDPublish(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].publish.$post(args, options))
}

export async function postVersionFlowIDDeprecate(
  args: InferRequestType<(typeof client)[':Version'][':Flow-ID']['deprecate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':Flow-ID'].deprecate.$post(args, options))
}

export async function getVersionWABAIDInProgressOnbehalfRequest(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['in_progress_onbehalf_request']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WABA-ID'].in_progress_onbehalf_request.$get(args, options),
  )
}

export async function getVersionOBOMobilityIntentID(
  args: InferRequestType<(typeof client)[':Version'][':OBO-Mobility-Intent-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':OBO-Mobility-Intent-ID'].$get(args, options))
}

export async function postVersionWABAIDOboMobilityIntent(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['obo_mobility_intent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WABA-ID'].obo_mobility_intent.$post(args, options),
  )
}

export async function getVersionWABAIDPhoneNumbers(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$get(args, options))
}

export async function postVersionWABAIDPhoneNumbers(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['phone_numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].phone_numbers.$post(args, options))
}

export async function getVersionWABAIDSchedules(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].schedules.$get(args, options))
}

export async function postVersionWABAIDSchedules(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].schedules.$post(args, options))
}

export async function postVersionWABAIDSetOboMobilityIntent(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['set_obo_mobility_intent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WABA-ID'].set_obo_mobility_intent.$post(args, options),
  )
}

export async function postVersionWABAIDSetSolutionMigrationIntent(
  args: InferRequestType<
    (typeof client)[':Version'][':WABA-ID']['set_solution_migration_intent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WABA-ID'].set_solution_migration_intent.$post(args, options),
  )
}

export async function getVersionWABAIDSolutions(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['solutions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].solutions.$get(args, options))
}

export async function getVersionWABAIDSubscribedApps(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$get(args, options))
}

export async function postVersionWABAIDSubscribedApps(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$post(args, options))
}

export async function deleteVersionWABAIDSubscribedApps(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['subscribed_apps']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].subscribed_apps.$delete(args, options))
}

export async function getVersionTEMPLATEID(
  args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':TEMPLATE_ID'].$get(args, options))
}

export async function postVersionTEMPLATEID(
  args: InferRequestType<(typeof client)[':Version'][':TEMPLATE_ID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':TEMPLATE_ID'].$post(args, options))
}

export async function getVersionWABAIDMessageTemplates(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].message_templates.$get(args, options))
}

export async function postVersionWABAIDMessageTemplates(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].message_templates.$post(args, options))
}

export async function deleteVersionWABAIDMessageTemplates(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['message_templates']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WABA-ID'].message_templates.$delete(args, options),
  )
}

export async function getVersionWABAIDActivities(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].activities.$get(args, options))
}

export async function getVersionWABAID(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].$get(args, options))
}

export async function postVersionWABAID(
  args: InferRequestType<(typeof client)[':Version'][':WABA-ID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-ID'].$post(args, options))
}

export async function getVersionWABABotID(
  args: InferRequestType<(typeof client)[':Version'][':WABA-Bot-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Version'][':WABA-Bot-ID'].$get(args, options))
}

export async function getVersionWhatsAppBusinessProfileID(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WhatsApp-Business-Profile-ID'].$get(args, options),
  )
}

export async function postVersionWhatsAppBusinessProfileID(
  args: InferRequestType<(typeof client)[':Version'][':WhatsApp-Business-Profile-ID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Version'][':WhatsApp-Business-Profile-ID'].$post(args, options),
  )
}

export async function postWhatsappWebhooks(
  args: InferRequestType<typeof client.whatsapp.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.webhooks.$post(args, options))
}
