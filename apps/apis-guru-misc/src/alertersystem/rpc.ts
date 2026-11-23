import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAlertLog(
  args: InferRequestType<(typeof client.api)['alert-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-log'].$get(args, options))
}

export async function getApiAlertLogStatusCode(
  args: InferRequestType<(typeof client.api)['alert-log-status-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-log-status-code'].$get(args, options))
}

export async function getApiAlertLogStatusCodeId(
  args: InferRequestType<(typeof client.api)['alert-log-status-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-log-status-code'][':id'].$get(args, options))
}

export async function getApiAlertLogId(
  args: InferRequestType<(typeof client.api)['alert-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-log'][':id'].$get(args, options))
}

export async function getApiAlertService(
  args: InferRequestType<(typeof client.api)['alert-service']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service'].$get(args, options))
}

export async function postApiAlertService(
  args: InferRequestType<(typeof client.api)['alert-service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service'].$post(args, options))
}

export async function getApiAlertServiceTransportCode(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service-transport-code'].$get(args, options))
}

export async function getApiAlertServiceTransportCodeId(
  args: InferRequestType<(typeof client.api)['alert-service-transport-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service-transport-code'][':id'].$get(args, options))
}

export async function getApiAlertServiceId(
  args: InferRequestType<(typeof client.api)['alert-service'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service'][':id'].$get(args, options))
}

export async function putApiAlertServiceId(
  args: InferRequestType<(typeof client.api)['alert-service'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service'][':id'].$put(args, options))
}

export async function deleteApiAlertServiceId(
  args: InferRequestType<(typeof client.api)['alert-service'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['alert-service'][':id'].$delete(args, options))
}

export async function getApiCreditsConsumption(
  args: InferRequestType<(typeof client.api)['credits-consumption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['credits-consumption'].$get(args, options))
}

export async function getApiCreditsConsumptionId(
  args: InferRequestType<(typeof client.api)['credits-consumption'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['credits-consumption'][':id'].$get(args, options))
}

export async function getApiHttpMethodCode(
  args: InferRequestType<(typeof client.api)['http-method-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['http-method-code'].$get(args, options))
}

export async function getApiHttpMethodCodeId(
  args: InferRequestType<(typeof client.api)['http-method-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['http-method-code'][':id'].$get(args, options))
}

export async function getApiMediaObject(
  args: InferRequestType<(typeof client.api)['media-object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['media-object'].$get(args, options))
}

export async function postApiMediaObject(
  args: InferRequestType<(typeof client.api)['media-object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['media-object'].$post(args, options))
}

export async function getApiMediaObjectId(
  args: InferRequestType<(typeof client.api)['media-object'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['media-object'][':id'].$get(args, options))
}

export async function deleteApiMediaObjectId(
  args: InferRequestType<(typeof client.api)['media-object'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['media-object'][':id'].$delete(args, options))
}

export async function getApiMonitor(
  args: InferRequestType<typeof client.api.monitor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monitor.$get(args, options))
}

export async function postApiMonitor(
  args: InferRequestType<typeof client.api.monitor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monitor.$post(args, options))
}

export async function getApiMonitorStatusCode(
  args: InferRequestType<(typeof client.api)['monitor-status-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-status-code'].$get(args, options))
}

export async function getApiMonitorStatusCodeId(
  args: InferRequestType<(typeof client.api)['monitor-status-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-status-code'][':id'].$get(args, options))
}

export async function getApiMonitorStatusLog(
  args: InferRequestType<(typeof client.api)['monitor-status-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-status-log'].$get(args, options))
}

export async function getApiMonitorStatusLogId(
  args: InferRequestType<(typeof client.api)['monitor-status-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-status-log'][':id'].$get(args, options))
}

export async function getApiMonitorTypeCode(
  args: InferRequestType<(typeof client.api)['monitor-type-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-type-code'].$get(args, options))
}

export async function getApiMonitorTypeCodeId(
  args: InferRequestType<(typeof client.api)['monitor-type-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['monitor-type-code'][':id'].$get(args, options))
}

export async function getApiMonitorId(
  args: InferRequestType<(typeof client.api.monitor)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monitor[':id'].$get(args, options))
}

export async function putApiMonitorId(
  args: InferRequestType<(typeof client.api.monitor)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monitor[':id'].$put(args, options))
}

export async function deleteApiMonitorId(
  args: InferRequestType<(typeof client.api.monitor)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monitor[':id'].$delete(args, options))
}

export async function getApiPartition(
  args: InferRequestType<typeof client.api.partition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.partition.$get(args, options))
}

export async function postApiPartition(
  args: InferRequestType<typeof client.api.partition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.partition.$post(args, options))
}

export async function getApiPartitionId(
  args: InferRequestType<(typeof client.api.partition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.partition[':id'].$get(args, options))
}

export async function putApiPartitionId(
  args: InferRequestType<(typeof client.api.partition)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.partition[':id'].$put(args, options))
}

export async function deleteApiPartitionId(
  args: InferRequestType<(typeof client.api.partition)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.partition[':id'].$delete(args, options))
}

export async function getApiPing(
  args: InferRequestType<typeof client.api.ping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ping.$get(args, options))
}

export async function postApiPing(
  args: InferRequestType<typeof client.api.ping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ping.$post(args, options))
}

export async function getApiPingMethodCode(
  args: InferRequestType<(typeof client.api)['ping-method-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ping-method-code'].$get(args, options))
}

export async function getApiPingMethodCodeId(
  args: InferRequestType<(typeof client.api)['ping-method-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ping-method-code'][':id'].$get(args, options))
}

export async function getApiPingId(
  args: InferRequestType<(typeof client.api.ping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ping[':id'].$get(args, options))
}

export async function getApiTeamInvitation(
  args: InferRequestType<(typeof client.api)['team-invitation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-invitation'].$get(args, options))
}

export async function postApiTeamInvitation(
  args: InferRequestType<(typeof client.api)['team-invitation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-invitation'].$post(args, options))
}

export async function getApiTeamInvitationId(
  args: InferRequestType<(typeof client.api)['team-invitation'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-invitation'][':id'].$get(args, options))
}

export async function deleteApiTeamInvitationId(
  args: InferRequestType<(typeof client.api)['team-invitation'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-invitation'][':id'].$delete(args, options))
}

export async function getApiTeamMember(
  args: InferRequestType<(typeof client.api)['team-member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member'].$get(args, options))
}

export async function getApiTeamMemberRoleCode(
  args: InferRequestType<(typeof client.api)['team-member-role-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member-role-code'].$get(args, options))
}

export async function getApiTeamMemberRoleCodeId(
  args: InferRequestType<(typeof client.api)['team-member-role-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member-role-code'][':id'].$get(args, options))
}

export async function getApiTeamMemberId(
  args: InferRequestType<(typeof client.api)['team-member'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member'][':id'].$get(args, options))
}

export async function putApiTeamMemberId(
  args: InferRequestType<(typeof client.api)['team-member'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member'][':id'].$put(args, options))
}

export async function deleteApiTeamMemberId(
  args: InferRequestType<(typeof client.api)['team-member'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['team-member'][':id'].$delete(args, options))
}

export async function getApiTimezoneCode(
  args: InferRequestType<(typeof client.api)['timezone-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['timezone-code'].$get(args, options))
}

export async function getApiTimezoneCodeId(
  args: InferRequestType<(typeof client.api)['timezone-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['timezone-code'][':id'].$get(args, options))
}

export async function getApiTransportAlerta(
  args: InferRequestType<(typeof client.api)['transport-alerta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-alerta'].$get(args, options))
}

export async function postApiTransportAlerta(
  args: InferRequestType<(typeof client.api)['transport-alerta']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-alerta'].$post(args, options))
}

export async function getApiTransportAlertaId(
  args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-alerta'][':id'].$get(args, options))
}

export async function putApiTransportAlertaId(
  args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-alerta'][':id'].$put(args, options))
}

export async function deleteApiTransportAlertaId(
  args: InferRequestType<(typeof client.api)['transport-alerta'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-alerta'][':id'].$delete(args, options))
}

export async function getApiTransportAllMySms(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-all-my-sms'].$get(args, options))
}

export async function postApiTransportAllMySms(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-all-my-sms'].$post(args, options))
}

export async function getApiTransportAllMySmsId(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-all-my-sms'][':id'].$get(args, options))
}

export async function putApiTransportAllMySmsId(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-all-my-sms'][':id'].$put(args, options))
}

export async function deleteApiTransportAllMySmsId(
  args: InferRequestType<(typeof client.api)['transport-all-my-sms'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-all-my-sms'][':id'].$delete(args, options))
}

export async function getApiTransportAmazonSns(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-amazon-sns'].$get(args, options))
}

export async function postApiTransportAmazonSns(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-amazon-sns'].$post(args, options))
}

export async function getApiTransportAmazonSnsId(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-amazon-sns'][':id'].$get(args, options))
}

export async function putApiTransportAmazonSnsId(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-amazon-sns'][':id'].$put(args, options))
}

export async function deleteApiTransportAmazonSnsId(
  args: InferRequestType<(typeof client.api)['transport-amazon-sns'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-amazon-sns'][':id'].$delete(args, options))
}

export async function getApiTransportBandwidth(
  args: InferRequestType<(typeof client.api)['transport-bandwidth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-bandwidth'].$get(args, options))
}

export async function postApiTransportBandwidth(
  args: InferRequestType<(typeof client.api)['transport-bandwidth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-bandwidth'].$post(args, options))
}

export async function getApiTransportBandwidthId(
  args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-bandwidth'][':id'].$get(args, options))
}

export async function putApiTransportBandwidthId(
  args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-bandwidth'][':id'].$put(args, options))
}

export async function deleteApiTransportBandwidthId(
  args: InferRequestType<(typeof client.api)['transport-bandwidth'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-bandwidth'][':id'].$delete(args, options))
}

export async function getApiTransportChatwork(
  args: InferRequestType<(typeof client.api)['transport-chatwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-chatwork'].$get(args, options))
}

export async function postApiTransportChatwork(
  args: InferRequestType<(typeof client.api)['transport-chatwork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-chatwork'].$post(args, options))
}

export async function getApiTransportChatworkId(
  args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-chatwork'][':id'].$get(args, options))
}

export async function putApiTransportChatworkId(
  args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-chatwork'][':id'].$put(args, options))
}

export async function deleteApiTransportChatworkId(
  args: InferRequestType<(typeof client.api)['transport-chatwork'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-chatwork'][':id'].$delete(args, options))
}

export async function getApiTransportClickSend(
  args: InferRequestType<(typeof client.api)['transport-click-send']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-click-send'].$get(args, options))
}

export async function postApiTransportClickSend(
  args: InferRequestType<(typeof client.api)['transport-click-send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-click-send'].$post(args, options))
}

export async function getApiTransportClickSendId(
  args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-click-send'][':id'].$get(args, options))
}

export async function putApiTransportClickSendId(
  args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-click-send'][':id'].$put(args, options))
}

export async function deleteApiTransportClickSendId(
  args: InferRequestType<(typeof client.api)['transport-click-send'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-click-send'][':id'].$delete(args, options))
}

export async function getApiTransportClickatell(
  args: InferRequestType<(typeof client.api)['transport-clickatell']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-clickatell'].$get(args, options))
}

export async function postApiTransportClickatell(
  args: InferRequestType<(typeof client.api)['transport-clickatell']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-clickatell'].$post(args, options))
}

export async function getApiTransportClickatellId(
  args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-clickatell'][':id'].$get(args, options))
}

export async function putApiTransportClickatellId(
  args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-clickatell'][':id'].$put(args, options))
}

export async function deleteApiTransportClickatellId(
  args: InferRequestType<(typeof client.api)['transport-clickatell'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-clickatell'][':id'].$delete(args, options))
}

export async function getApiTransportContactEveryone(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-contact-everyone'].$get(args, options))
}

export async function postApiTransportContactEveryone(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-contact-everyone'].$post(args, options))
}

export async function getApiTransportContactEveryoneId(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-contact-everyone'][':id'].$get(args, options))
}

export async function putApiTransportContactEveryoneId(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-contact-everyone'][':id'].$put(args, options))
}

export async function deleteApiTransportContactEveryoneId(
  args: InferRequestType<(typeof client.api)['transport-contact-everyone'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-contact-everyone'][':id'].$delete(args, options))
}

export async function getApiTransportDiscord(
  args: InferRequestType<(typeof client.api)['transport-discord']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-discord'].$get(args, options))
}

export async function postApiTransportDiscord(
  args: InferRequestType<(typeof client.api)['transport-discord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-discord'].$post(args, options))
}

export async function getApiTransportDiscordId(
  args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-discord'][':id'].$get(args, options))
}

export async function putApiTransportDiscordId(
  args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-discord'][':id'].$put(args, options))
}

export async function deleteApiTransportDiscordId(
  args: InferRequestType<(typeof client.api)['transport-discord'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-discord'][':id'].$delete(args, options))
}

export async function getApiTransportEmail(
  args: InferRequestType<(typeof client.api)['transport-email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-email'].$get(args, options))
}

export async function postApiTransportEmail(
  args: InferRequestType<(typeof client.api)['transport-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-email'].$post(args, options))
}

export async function getApiTransportEmailId(
  args: InferRequestType<(typeof client.api)['transport-email'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-email'][':id'].$get(args, options))
}

export async function putApiTransportEmailId(
  args: InferRequestType<(typeof client.api)['transport-email'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-email'][':id'].$put(args, options))
}

export async function deleteApiTransportEmailId(
  args: InferRequestType<(typeof client.api)['transport-email'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-email'][':id'].$delete(args, options))
}

export async function getApiTransportEngagespot(
  args: InferRequestType<(typeof client.api)['transport-engagespot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-engagespot'].$get(args, options))
}

export async function postApiTransportEngagespot(
  args: InferRequestType<(typeof client.api)['transport-engagespot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-engagespot'].$post(args, options))
}

export async function getApiTransportEngagespotId(
  args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-engagespot'][':id'].$get(args, options))
}

export async function putApiTransportEngagespotId(
  args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-engagespot'][':id'].$put(args, options))
}

export async function deleteApiTransportEngagespotId(
  args: InferRequestType<(typeof client.api)['transport-engagespot'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-engagespot'][':id'].$delete(args, options))
}

export async function getApiTransportEsendex(
  args: InferRequestType<(typeof client.api)['transport-esendex']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-esendex'].$get(args, options))
}

export async function postApiTransportEsendex(
  args: InferRequestType<(typeof client.api)['transport-esendex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-esendex'].$post(args, options))
}

export async function getApiTransportEsendexId(
  args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-esendex'][':id'].$get(args, options))
}

export async function putApiTransportEsendexId(
  args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-esendex'][':id'].$put(args, options))
}

export async function deleteApiTransportEsendexId(
  args: InferRequestType<(typeof client.api)['transport-esendex'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-esendex'][':id'].$delete(args, options))
}

export async function getApiTransportExpo(
  args: InferRequestType<(typeof client.api)['transport-expo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-expo'].$get(args, options))
}

export async function postApiTransportExpo(
  args: InferRequestType<(typeof client.api)['transport-expo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-expo'].$post(args, options))
}

export async function getApiTransportExpoId(
  args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-expo'][':id'].$get(args, options))
}

export async function putApiTransportExpoId(
  args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-expo'][':id'].$put(args, options))
}

export async function deleteApiTransportExpoId(
  args: InferRequestType<(typeof client.api)['transport-expo'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-expo'][':id'].$delete(args, options))
}

export async function getApiTransportFirebase(
  args: InferRequestType<(typeof client.api)['transport-firebase']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-firebase'].$get(args, options))
}

export async function postApiTransportFirebase(
  args: InferRequestType<(typeof client.api)['transport-firebase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-firebase'].$post(args, options))
}

export async function getApiTransportFirebaseId(
  args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-firebase'][':id'].$get(args, options))
}

export async function putApiTransportFirebaseId(
  args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-firebase'][':id'].$put(args, options))
}

export async function deleteApiTransportFirebaseId(
  args: InferRequestType<(typeof client.api)['transport-firebase'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-firebase'][':id'].$delete(args, options))
}

export async function getApiTransportFortySixElks(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-forty-six-elks'].$get(args, options))
}

export async function postApiTransportFortySixElks(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-forty-six-elks'].$post(args, options))
}

export async function getApiTransportFortySixElksId(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-forty-six-elks'][':id'].$get(args, options))
}

export async function putApiTransportFortySixElksId(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-forty-six-elks'][':id'].$put(args, options))
}

export async function deleteApiTransportFortySixElksId(
  args: InferRequestType<(typeof client.api)['transport-forty-six-elks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-forty-six-elks'][':id'].$delete(args, options))
}

export async function getApiTransportFreeMobile(
  args: InferRequestType<(typeof client.api)['transport-free-mobile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-free-mobile'].$get(args, options))
}

export async function postApiTransportFreeMobile(
  args: InferRequestType<(typeof client.api)['transport-free-mobile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-free-mobile'].$post(args, options))
}

export async function getApiTransportFreeMobileId(
  args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-free-mobile'][':id'].$get(args, options))
}

export async function putApiTransportFreeMobileId(
  args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-free-mobile'][':id'].$put(args, options))
}

export async function deleteApiTransportFreeMobileId(
  args: InferRequestType<(typeof client.api)['transport-free-mobile'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-free-mobile'][':id'].$delete(args, options))
}

export async function getApiTransportFreshdesk(
  args: InferRequestType<(typeof client.api)['transport-freshdesk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-freshdesk'].$get(args, options))
}

export async function postApiTransportFreshdesk(
  args: InferRequestType<(typeof client.api)['transport-freshdesk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-freshdesk'].$post(args, options))
}

export async function getApiTransportFreshdeskId(
  args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-freshdesk'][':id'].$get(args, options))
}

export async function putApiTransportFreshdeskId(
  args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-freshdesk'][':id'].$put(args, options))
}

export async function deleteApiTransportFreshdeskId(
  args: InferRequestType<(typeof client.api)['transport-freshdesk'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-freshdesk'][':id'].$delete(args, options))
}

export async function getApiTransportGatewayApi(
  args: InferRequestType<(typeof client.api)['transport-gateway-api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gateway-api'].$get(args, options))
}

export async function postApiTransportGatewayApi(
  args: InferRequestType<(typeof client.api)['transport-gateway-api']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gateway-api'].$post(args, options))
}

export async function getApiTransportGatewayApiId(
  args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gateway-api'][':id'].$get(args, options))
}

export async function putApiTransportGatewayApiId(
  args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gateway-api'][':id'].$put(args, options))
}

export async function deleteApiTransportGatewayApiId(
  args: InferRequestType<(typeof client.api)['transport-gateway-api'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gateway-api'][':id'].$delete(args, options))
}

export async function getApiTransportGitter(
  args: InferRequestType<(typeof client.api)['transport-gitter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gitter'].$get(args, options))
}

export async function postApiTransportGitter(
  args: InferRequestType<(typeof client.api)['transport-gitter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gitter'].$post(args, options))
}

export async function getApiTransportGitterId(
  args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gitter'][':id'].$get(args, options))
}

export async function putApiTransportGitterId(
  args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gitter'][':id'].$put(args, options))
}

export async function deleteApiTransportGitterId(
  args: InferRequestType<(typeof client.api)['transport-gitter'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gitter'][':id'].$delete(args, options))
}

export async function getApiTransportGoogleChat(
  args: InferRequestType<(typeof client.api)['transport-google-chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-google-chat'].$get(args, options))
}

export async function postApiTransportGoogleChat(
  args: InferRequestType<(typeof client.api)['transport-google-chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-google-chat'].$post(args, options))
}

export async function getApiTransportGoogleChatId(
  args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-google-chat'][':id'].$get(args, options))
}

export async function putApiTransportGoogleChatId(
  args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-google-chat'][':id'].$put(args, options))
}

export async function deleteApiTransportGoogleChatId(
  args: InferRequestType<(typeof client.api)['transport-google-chat'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-google-chat'][':id'].$delete(args, options))
}

export async function getApiTransportGotify(
  args: InferRequestType<(typeof client.api)['transport-gotify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gotify'].$get(args, options))
}

export async function postApiTransportGotify(
  args: InferRequestType<(typeof client.api)['transport-gotify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gotify'].$post(args, options))
}

export async function getApiTransportGotifyId(
  args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gotify'][':id'].$get(args, options))
}

export async function putApiTransportGotifyId(
  args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gotify'][':id'].$put(args, options))
}

export async function deleteApiTransportGotifyId(
  args: InferRequestType<(typeof client.api)['transport-gotify'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-gotify'][':id'].$delete(args, options))
}

export async function getApiTransportHelpScout(
  args: InferRequestType<(typeof client.api)['transport-help-scout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-help-scout'].$get(args, options))
}

export async function postApiTransportHelpScout(
  args: InferRequestType<(typeof client.api)['transport-help-scout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-help-scout'].$post(args, options))
}

export async function getApiTransportHelpScoutId(
  args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-help-scout'][':id'].$get(args, options))
}

export async function putApiTransportHelpScoutId(
  args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-help-scout'][':id'].$put(args, options))
}

export async function deleteApiTransportHelpScoutId(
  args: InferRequestType<(typeof client.api)['transport-help-scout'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-help-scout'][':id'].$delete(args, options))
}

export async function getApiTransportInfobip(
  args: InferRequestType<(typeof client.api)['transport-infobip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-infobip'].$get(args, options))
}

export async function postApiTransportInfobip(
  args: InferRequestType<(typeof client.api)['transport-infobip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-infobip'].$post(args, options))
}

export async function getApiTransportInfobipId(
  args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-infobip'][':id'].$get(args, options))
}

export async function putApiTransportInfobipId(
  args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-infobip'][':id'].$put(args, options))
}

export async function deleteApiTransportInfobipId(
  args: InferRequestType<(typeof client.api)['transport-infobip'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-infobip'][':id'].$delete(args, options))
}

export async function getApiTransportIqsms(
  args: InferRequestType<(typeof client.api)['transport-iqsms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-iqsms'].$get(args, options))
}

export async function postApiTransportIqsms(
  args: InferRequestType<(typeof client.api)['transport-iqsms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-iqsms'].$post(args, options))
}

export async function getApiTransportIqsmsId(
  args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-iqsms'][':id'].$get(args, options))
}

export async function putApiTransportIqsmsId(
  args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-iqsms'][':id'].$put(args, options))
}

export async function deleteApiTransportIqsmsId(
  args: InferRequestType<(typeof client.api)['transport-iqsms'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-iqsms'][':id'].$delete(args, options))
}

export async function getApiTransportKazInfoTeh(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-kaz-info-teh'].$get(args, options))
}

export async function postApiTransportKazInfoTeh(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-kaz-info-teh'].$post(args, options))
}

export async function getApiTransportKazInfoTehId(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-kaz-info-teh'][':id'].$get(args, options))
}

export async function putApiTransportKazInfoTehId(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-kaz-info-teh'][':id'].$put(args, options))
}

export async function deleteApiTransportKazInfoTehId(
  args: InferRequestType<(typeof client.api)['transport-kaz-info-teh'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-kaz-info-teh'][':id'].$delete(args, options))
}

export async function getApiTransportLightSms(
  args: InferRequestType<(typeof client.api)['transport-light-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-light-sms'].$get(args, options))
}

export async function postApiTransportLightSms(
  args: InferRequestType<(typeof client.api)['transport-light-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-light-sms'].$post(args, options))
}

export async function getApiTransportLightSmsId(
  args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-light-sms'][':id'].$get(args, options))
}

export async function putApiTransportLightSmsId(
  args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-light-sms'][':id'].$put(args, options))
}

export async function deleteApiTransportLightSmsId(
  args: InferRequestType<(typeof client.api)['transport-light-sms'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-light-sms'][':id'].$delete(args, options))
}

export async function getApiTransportLineNotify(
  args: InferRequestType<(typeof client.api)['transport-line-notify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-line-notify'].$get(args, options))
}

export async function postApiTransportLineNotify(
  args: InferRequestType<(typeof client.api)['transport-line-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-line-notify'].$post(args, options))
}

export async function getApiTransportLineNotifyId(
  args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-line-notify'][':id'].$get(args, options))
}

export async function putApiTransportLineNotifyId(
  args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-line-notify'][':id'].$put(args, options))
}

export async function deleteApiTransportLineNotifyId(
  args: InferRequestType<(typeof client.api)['transport-line-notify'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-line-notify'][':id'].$delete(args, options))
}

export async function getApiTransportLinkedIn(
  args: InferRequestType<(typeof client.api)['transport-linked-in']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-linked-in'].$get(args, options))
}

export async function postApiTransportLinkedIn(
  args: InferRequestType<(typeof client.api)['transport-linked-in']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-linked-in'].$post(args, options))
}

export async function getApiTransportLinkedInId(
  args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-linked-in'][':id'].$get(args, options))
}

export async function putApiTransportLinkedInId(
  args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-linked-in'][':id'].$put(args, options))
}

export async function deleteApiTransportLinkedInId(
  args: InferRequestType<(typeof client.api)['transport-linked-in'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-linked-in'][':id'].$delete(args, options))
}

export async function getApiTransportMailjet(
  args: InferRequestType<(typeof client.api)['transport-mailjet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mailjet'].$get(args, options))
}

export async function postApiTransportMailjet(
  args: InferRequestType<(typeof client.api)['transport-mailjet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mailjet'].$post(args, options))
}

export async function getApiTransportMailjetId(
  args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mailjet'][':id'].$get(args, options))
}

export async function putApiTransportMailjetId(
  args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mailjet'][':id'].$put(args, options))
}

export async function deleteApiTransportMailjetId(
  args: InferRequestType<(typeof client.api)['transport-mailjet'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mailjet'][':id'].$delete(args, options))
}

export async function getApiTransportMastodon(
  args: InferRequestType<(typeof client.api)['transport-mastodon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mastodon'].$get(args, options))
}

export async function postApiTransportMastodon(
  args: InferRequestType<(typeof client.api)['transport-mastodon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mastodon'].$post(args, options))
}

export async function getApiTransportMastodonId(
  args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mastodon'][':id'].$get(args, options))
}

export async function putApiTransportMastodonId(
  args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mastodon'][':id'].$put(args, options))
}

export async function deleteApiTransportMastodonId(
  args: InferRequestType<(typeof client.api)['transport-mastodon'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mastodon'][':id'].$delete(args, options))
}

export async function getApiTransportMattermost(
  args: InferRequestType<(typeof client.api)['transport-mattermost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mattermost'].$get(args, options))
}

export async function postApiTransportMattermost(
  args: InferRequestType<(typeof client.api)['transport-mattermost']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mattermost'].$post(args, options))
}

export async function getApiTransportMattermostId(
  args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mattermost'][':id'].$get(args, options))
}

export async function putApiTransportMattermostId(
  args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mattermost'][':id'].$put(args, options))
}

export async function deleteApiTransportMattermostId(
  args: InferRequestType<(typeof client.api)['transport-mattermost'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mattermost'][':id'].$delete(args, options))
}

export async function getApiTransportMercure(
  args: InferRequestType<(typeof client.api)['transport-mercure']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mercure'].$get(args, options))
}

export async function postApiTransportMercure(
  args: InferRequestType<(typeof client.api)['transport-mercure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mercure'].$post(args, options))
}

export async function getApiTransportMercureId(
  args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mercure'][':id'].$get(args, options))
}

export async function putApiTransportMercureId(
  args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mercure'][':id'].$put(args, options))
}

export async function deleteApiTransportMercureId(
  args: InferRequestType<(typeof client.api)['transport-mercure'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mercure'][':id'].$delete(args, options))
}

export async function getApiTransportMessageBird(
  args: InferRequestType<(typeof client.api)['transport-message-bird']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-bird'].$get(args, options))
}

export async function postApiTransportMessageBird(
  args: InferRequestType<(typeof client.api)['transport-message-bird']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-bird'].$post(args, options))
}

export async function getApiTransportMessageBirdId(
  args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-bird'][':id'].$get(args, options))
}

export async function putApiTransportMessageBirdId(
  args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-bird'][':id'].$put(args, options))
}

export async function deleteApiTransportMessageBirdId(
  args: InferRequestType<(typeof client.api)['transport-message-bird'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-bird'][':id'].$delete(args, options))
}

export async function getApiTransportMessageMedia(
  args: InferRequestType<(typeof client.api)['transport-message-media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-media'].$get(args, options))
}

export async function postApiTransportMessageMedia(
  args: InferRequestType<(typeof client.api)['transport-message-media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-media'].$post(args, options))
}

export async function getApiTransportMessageMediaId(
  args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-media'][':id'].$get(args, options))
}

export async function putApiTransportMessageMediaId(
  args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-media'][':id'].$put(args, options))
}

export async function deleteApiTransportMessageMediaId(
  args: InferRequestType<(typeof client.api)['transport-message-media'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-message-media'][':id'].$delete(args, options))
}

export async function getApiTransportMicrosoftTeams(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-microsoft-teams'].$get(args, options))
}

export async function postApiTransportMicrosoftTeams(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-microsoft-teams'].$post(args, options))
}

export async function getApiTransportMicrosoftTeamsId(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-microsoft-teams'][':id'].$get(args, options))
}

export async function putApiTransportMicrosoftTeamsId(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-microsoft-teams'][':id'].$put(args, options))
}

export async function deleteApiTransportMicrosoftTeamsId(
  args: InferRequestType<(typeof client.api)['transport-microsoft-teams'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-microsoft-teams'][':id'].$delete(args, options))
}

export async function getApiTransportMobyt(
  args: InferRequestType<(typeof client.api)['transport-mobyt']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mobyt'].$get(args, options))
}

export async function postApiTransportMobyt(
  args: InferRequestType<(typeof client.api)['transport-mobyt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mobyt'].$post(args, options))
}

export async function getApiTransportMobytId(
  args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mobyt'][':id'].$get(args, options))
}

export async function putApiTransportMobytId(
  args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mobyt'][':id'].$put(args, options))
}

export async function deleteApiTransportMobytId(
  args: InferRequestType<(typeof client.api)['transport-mobyt'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-mobyt'][':id'].$delete(args, options))
}

export async function getApiTransportOctopush(
  args: InferRequestType<(typeof client.api)['transport-octopush']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-octopush'].$get(args, options))
}

export async function postApiTransportOctopush(
  args: InferRequestType<(typeof client.api)['transport-octopush']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-octopush'].$post(args, options))
}

export async function getApiTransportOctopushId(
  args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-octopush'][':id'].$get(args, options))
}

export async function putApiTransportOctopushId(
  args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-octopush'][':id'].$put(args, options))
}

export async function deleteApiTransportOctopushId(
  args: InferRequestType<(typeof client.api)['transport-octopush'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-octopush'][':id'].$delete(args, options))
}

export async function getApiTransportOneSignal(
  args: InferRequestType<(typeof client.api)['transport-one-signal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-one-signal'].$get(args, options))
}

export async function postApiTransportOneSignal(
  args: InferRequestType<(typeof client.api)['transport-one-signal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-one-signal'].$post(args, options))
}

export async function getApiTransportOneSignalId(
  args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-one-signal'][':id'].$get(args, options))
}

export async function putApiTransportOneSignalId(
  args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-one-signal'][':id'].$put(args, options))
}

export async function deleteApiTransportOneSignalId(
  args: InferRequestType<(typeof client.api)['transport-one-signal'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-one-signal'][':id'].$delete(args, options))
}

export async function getApiTransportOpsgenie(
  args: InferRequestType<(typeof client.api)['transport-opsgenie']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-opsgenie'].$get(args, options))
}

export async function postApiTransportOpsgenie(
  args: InferRequestType<(typeof client.api)['transport-opsgenie']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-opsgenie'].$post(args, options))
}

export async function getApiTransportOpsgenieId(
  args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-opsgenie'][':id'].$get(args, options))
}

export async function putApiTransportOpsgenieId(
  args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-opsgenie'][':id'].$put(args, options))
}

export async function deleteApiTransportOpsgenieId(
  args: InferRequestType<(typeof client.api)['transport-opsgenie'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-opsgenie'][':id'].$delete(args, options))
}

export async function getApiTransportOrangeSms(
  args: InferRequestType<(typeof client.api)['transport-orange-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-orange-sms'].$get(args, options))
}

export async function postApiTransportOrangeSms(
  args: InferRequestType<(typeof client.api)['transport-orange-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-orange-sms'].$post(args, options))
}

export async function getApiTransportOrangeSmsId(
  args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-orange-sms'][':id'].$get(args, options))
}

export async function putApiTransportOrangeSmsId(
  args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-orange-sms'][':id'].$put(args, options))
}

export async function deleteApiTransportOrangeSmsId(
  args: InferRequestType<(typeof client.api)['transport-orange-sms'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-orange-sms'][':id'].$delete(args, options))
}

export async function getApiTransportOvhCloud(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ovh-cloud'].$get(args, options))
}

export async function postApiTransportOvhCloud(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ovh-cloud'].$post(args, options))
}

export async function getApiTransportOvhCloudId(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ovh-cloud'][':id'].$get(args, options))
}

export async function putApiTransportOvhCloudId(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ovh-cloud'][':id'].$put(args, options))
}

export async function deleteApiTransportOvhCloudId(
  args: InferRequestType<(typeof client.api)['transport-ovh-cloud'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ovh-cloud'][':id'].$delete(args, options))
}

export async function getApiTransportPagerDuty(
  args: InferRequestType<(typeof client.api)['transport-pager-duty']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-duty'].$get(args, options))
}

export async function postApiTransportPagerDuty(
  args: InferRequestType<(typeof client.api)['transport-pager-duty']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-duty'].$post(args, options))
}

export async function getApiTransportPagerDutyId(
  args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-duty'][':id'].$get(args, options))
}

export async function putApiTransportPagerDutyId(
  args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-duty'][':id'].$put(args, options))
}

export async function deleteApiTransportPagerDutyId(
  args: InferRequestType<(typeof client.api)['transport-pager-duty'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-duty'][':id'].$delete(args, options))
}

export async function getApiTransportPagerTree(
  args: InferRequestType<(typeof client.api)['transport-pager-tree']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-tree'].$get(args, options))
}

export async function postApiTransportPagerTree(
  args: InferRequestType<(typeof client.api)['transport-pager-tree']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-tree'].$post(args, options))
}

export async function getApiTransportPagerTreeId(
  args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-tree'][':id'].$get(args, options))
}

export async function putApiTransportPagerTreeId(
  args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-tree'][':id'].$put(args, options))
}

export async function deleteApiTransportPagerTreeId(
  args: InferRequestType<(typeof client.api)['transport-pager-tree'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pager-tree'][':id'].$delete(args, options))
}

export async function getApiTransportPlivo(
  args: InferRequestType<(typeof client.api)['transport-plivo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-plivo'].$get(args, options))
}

export async function postApiTransportPlivo(
  args: InferRequestType<(typeof client.api)['transport-plivo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-plivo'].$post(args, options))
}

export async function getApiTransportPlivoId(
  args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-plivo'][':id'].$get(args, options))
}

export async function putApiTransportPlivoId(
  args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-plivo'][':id'].$put(args, options))
}

export async function deleteApiTransportPlivoId(
  args: InferRequestType<(typeof client.api)['transport-plivo'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-plivo'][':id'].$delete(args, options))
}

export async function getApiTransportPushbullet(
  args: InferRequestType<(typeof client.api)['transport-pushbullet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushbullet'].$get(args, options))
}

export async function postApiTransportPushbullet(
  args: InferRequestType<(typeof client.api)['transport-pushbullet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushbullet'].$post(args, options))
}

export async function getApiTransportPushbulletId(
  args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushbullet'][':id'].$get(args, options))
}

export async function putApiTransportPushbulletId(
  args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushbullet'][':id'].$put(args, options))
}

export async function deleteApiTransportPushbulletId(
  args: InferRequestType<(typeof client.api)['transport-pushbullet'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushbullet'][':id'].$delete(args, options))
}

export async function getApiTransportPushover(
  args: InferRequestType<(typeof client.api)['transport-pushover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushover'].$get(args, options))
}

export async function postApiTransportPushover(
  args: InferRequestType<(typeof client.api)['transport-pushover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushover'].$post(args, options))
}

export async function getApiTransportPushoverId(
  args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushover'][':id'].$get(args, options))
}

export async function putApiTransportPushoverId(
  args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushover'][':id'].$put(args, options))
}

export async function deleteApiTransportPushoverId(
  args: InferRequestType<(typeof client.api)['transport-pushover'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushover'][':id'].$delete(args, options))
}

export async function getApiTransportPushy(
  args: InferRequestType<(typeof client.api)['transport-pushy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushy'].$get(args, options))
}

export async function postApiTransportPushy(
  args: InferRequestType<(typeof client.api)['transport-pushy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushy'].$post(args, options))
}

export async function getApiTransportPushyId(
  args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushy'][':id'].$get(args, options))
}

export async function putApiTransportPushyId(
  args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushy'][':id'].$put(args, options))
}

export async function deleteApiTransportPushyId(
  args: InferRequestType<(typeof client.api)['transport-pushy'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-pushy'][':id'].$delete(args, options))
}

export async function getApiTransportRingCentral(
  args: InferRequestType<(typeof client.api)['transport-ring-central']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ring-central'].$get(args, options))
}

export async function postApiTransportRingCentral(
  args: InferRequestType<(typeof client.api)['transport-ring-central']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ring-central'].$post(args, options))
}

export async function getApiTransportRingCentralId(
  args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ring-central'][':id'].$get(args, options))
}

export async function putApiTransportRingCentralId(
  args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ring-central'][':id'].$put(args, options))
}

export async function deleteApiTransportRingCentralId(
  args: InferRequestType<(typeof client.api)['transport-ring-central'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-ring-central'][':id'].$delete(args, options))
}

export async function getApiTransportRocketChat(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-rocket-chat'].$get(args, options))
}

export async function postApiTransportRocketChat(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-rocket-chat'].$post(args, options))
}

export async function getApiTransportRocketChatId(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-rocket-chat'][':id'].$get(args, options))
}

export async function putApiTransportRocketChatId(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-rocket-chat'][':id'].$put(args, options))
}

export async function deleteApiTransportRocketChatId(
  args: InferRequestType<(typeof client.api)['transport-rocket-chat'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-rocket-chat'][':id'].$delete(args, options))
}

export async function getApiTransportSendberry(
  args: InferRequestType<(typeof client.api)['transport-sendberry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendberry'].$get(args, options))
}

export async function postApiTransportSendberry(
  args: InferRequestType<(typeof client.api)['transport-sendberry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendberry'].$post(args, options))
}

export async function getApiTransportSendberryId(
  args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendberry'][':id'].$get(args, options))
}

export async function putApiTransportSendberryId(
  args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendberry'][':id'].$put(args, options))
}

export async function deleteApiTransportSendberryId(
  args: InferRequestType<(typeof client.api)['transport-sendberry'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendberry'][':id'].$delete(args, options))
}

export async function getApiTransportSendinblue(
  args: InferRequestType<(typeof client.api)['transport-sendinblue']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendinblue'].$get(args, options))
}

export async function postApiTransportSendinblue(
  args: InferRequestType<(typeof client.api)['transport-sendinblue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendinblue'].$post(args, options))
}

export async function getApiTransportSendinblueId(
  args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendinblue'][':id'].$get(args, options))
}

export async function putApiTransportSendinblueId(
  args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendinblue'][':id'].$put(args, options))
}

export async function deleteApiTransportSendinblueId(
  args: InferRequestType<(typeof client.api)['transport-sendinblue'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sendinblue'][':id'].$delete(args, options))
}

export async function getApiTransportSimpleTextin(
  args: InferRequestType<(typeof client.api)['transport-simple-textin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-simple-textin'].$get(args, options))
}

export async function postApiTransportSimpleTextin(
  args: InferRequestType<(typeof client.api)['transport-simple-textin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-simple-textin'].$post(args, options))
}

export async function getApiTransportSimpleTextinId(
  args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-simple-textin'][':id'].$get(args, options))
}

export async function putApiTransportSimpleTextinId(
  args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-simple-textin'][':id'].$put(args, options))
}

export async function deleteApiTransportSimpleTextinId(
  args: InferRequestType<(typeof client.api)['transport-simple-textin'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-simple-textin'][':id'].$delete(args, options))
}

export async function getApiTransportSinch(
  args: InferRequestType<(typeof client.api)['transport-sinch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sinch'].$get(args, options))
}

export async function postApiTransportSinch(
  args: InferRequestType<(typeof client.api)['transport-sinch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sinch'].$post(args, options))
}

export async function getApiTransportSinchId(
  args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sinch'][':id'].$get(args, options))
}

export async function putApiTransportSinchId(
  args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sinch'][':id'].$put(args, options))
}

export async function deleteApiTransportSinchId(
  args: InferRequestType<(typeof client.api)['transport-sinch'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sinch'][':id'].$delete(args, options))
}

export async function getApiTransportSlack(
  args: InferRequestType<(typeof client.api)['transport-slack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-slack'].$get(args, options))
}

export async function postApiTransportSlack(
  args: InferRequestType<(typeof client.api)['transport-slack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-slack'].$post(args, options))
}

export async function getApiTransportSlackId(
  args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-slack'][':id'].$get(args, options))
}

export async function putApiTransportSlackId(
  args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-slack'][':id'].$put(args, options))
}

export async function deleteApiTransportSlackId(
  args: InferRequestType<(typeof client.api)['transport-slack'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-slack'][':id'].$delete(args, options))
}

export async function getApiTransportSmsBiuras(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-biuras'].$get(args, options))
}

export async function postApiTransportSmsBiuras(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-biuras'].$post(args, options))
}

export async function getApiTransportSmsBiurasId(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-biuras'][':id'].$get(args, options))
}

export async function putApiTransportSmsBiurasId(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-biuras'][':id'].$put(args, options))
}

export async function deleteApiTransportSmsBiurasId(
  args: InferRequestType<(typeof client.api)['transport-sms-biuras'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-biuras'][':id'].$delete(args, options))
}

export async function getApiTransportSmsFactor(
  args: InferRequestType<(typeof client.api)['transport-sms-factor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-factor'].$get(args, options))
}

export async function postApiTransportSmsFactor(
  args: InferRequestType<(typeof client.api)['transport-sms-factor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-factor'].$post(args, options))
}

export async function getApiTransportSmsFactorId(
  args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-factor'][':id'].$get(args, options))
}

export async function putApiTransportSmsFactorId(
  args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-factor'][':id'].$put(args, options))
}

export async function deleteApiTransportSmsFactorId(
  args: InferRequestType<(typeof client.api)['transport-sms-factor'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms-factor'][':id'].$delete(args, options))
}

export async function getApiTransportSms77(
  args: InferRequestType<(typeof client.api)['transport-sms77']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms77'].$get(args, options))
}

export async function postApiTransportSms77(
  args: InferRequestType<(typeof client.api)['transport-sms77']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms77'].$post(args, options))
}

export async function getApiTransportSms77Id(
  args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms77'][':id'].$get(args, options))
}

export async function putApiTransportSms77Id(
  args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms77'][':id'].$put(args, options))
}

export async function deleteApiTransportSms77Id(
  args: InferRequestType<(typeof client.api)['transport-sms77'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-sms77'][':id'].$delete(args, options))
}

export async function getApiTransportSmsapi(
  args: InferRequestType<(typeof client.api)['transport-smsapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsapi'].$get(args, options))
}

export async function postApiTransportSmsapi(
  args: InferRequestType<(typeof client.api)['transport-smsapi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsapi'].$post(args, options))
}

export async function getApiTransportSmsapiId(
  args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsapi'][':id'].$get(args, options))
}

export async function putApiTransportSmsapiId(
  args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsapi'][':id'].$put(args, options))
}

export async function deleteApiTransportSmsapiId(
  args: InferRequestType<(typeof client.api)['transport-smsapi'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsapi'][':id'].$delete(args, options))
}

export async function getApiTransportSmsc(
  args: InferRequestType<(typeof client.api)['transport-smsc']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsc'].$get(args, options))
}

export async function postApiTransportSmsc(
  args: InferRequestType<(typeof client.api)['transport-smsc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsc'].$post(args, options))
}

export async function getApiTransportSmscId(
  args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsc'][':id'].$get(args, options))
}

export async function putApiTransportSmscId(
  args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsc'][':id'].$put(args, options))
}

export async function deleteApiTransportSmscId(
  args: InferRequestType<(typeof client.api)['transport-smsc'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsc'][':id'].$delete(args, options))
}

export async function getApiTransportSmsmode(
  args: InferRequestType<(typeof client.api)['transport-smsmode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsmode'].$get(args, options))
}

export async function postApiTransportSmsmode(
  args: InferRequestType<(typeof client.api)['transport-smsmode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsmode'].$post(args, options))
}

export async function getApiTransportSmsmodeId(
  args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsmode'][':id'].$get(args, options))
}

export async function putApiTransportSmsmodeId(
  args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsmode'][':id'].$put(args, options))
}

export async function deleteApiTransportSmsmodeId(
  args: InferRequestType<(typeof client.api)['transport-smsmode'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-smsmode'][':id'].$delete(args, options))
}

export async function getApiTransportSpotHit(
  args: InferRequestType<(typeof client.api)['transport-spot-hit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-spot-hit'].$get(args, options))
}

export async function postApiTransportSpotHit(
  args: InferRequestType<(typeof client.api)['transport-spot-hit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-spot-hit'].$post(args, options))
}

export async function getApiTransportSpotHitId(
  args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-spot-hit'][':id'].$get(args, options))
}

export async function putApiTransportSpotHitId(
  args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-spot-hit'][':id'].$put(args, options))
}

export async function deleteApiTransportSpotHitId(
  args: InferRequestType<(typeof client.api)['transport-spot-hit'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-spot-hit'][':id'].$delete(args, options))
}

export async function getApiTransportTelegram(
  args: InferRequestType<(typeof client.api)['transport-telegram']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telegram'].$get(args, options))
}

export async function postApiTransportTelegram(
  args: InferRequestType<(typeof client.api)['transport-telegram']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telegram'].$post(args, options))
}

export async function getApiTransportTelegramId(
  args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telegram'][':id'].$get(args, options))
}

export async function putApiTransportTelegramId(
  args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telegram'][':id'].$put(args, options))
}

export async function deleteApiTransportTelegramId(
  args: InferRequestType<(typeof client.api)['transport-telegram'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telegram'][':id'].$delete(args, options))
}

export async function getApiTransportTelnyx(
  args: InferRequestType<(typeof client.api)['transport-telnyx']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telnyx'].$get(args, options))
}

export async function postApiTransportTelnyx(
  args: InferRequestType<(typeof client.api)['transport-telnyx']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telnyx'].$post(args, options))
}

export async function getApiTransportTelnyxId(
  args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telnyx'][':id'].$get(args, options))
}

export async function putApiTransportTelnyxId(
  args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telnyx'][':id'].$put(args, options))
}

export async function deleteApiTransportTelnyxId(
  args: InferRequestType<(typeof client.api)['transport-telnyx'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-telnyx'][':id'].$delete(args, options))
}

export async function getApiTransportTermii(
  args: InferRequestType<(typeof client.api)['transport-termii']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-termii'].$get(args, options))
}

export async function postApiTransportTermii(
  args: InferRequestType<(typeof client.api)['transport-termii']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-termii'].$post(args, options))
}

export async function getApiTransportTermiiId(
  args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-termii'][':id'].$get(args, options))
}

export async function putApiTransportTermiiId(
  args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-termii'][':id'].$put(args, options))
}

export async function deleteApiTransportTermiiId(
  args: InferRequestType<(typeof client.api)['transport-termii'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-termii'][':id'].$delete(args, options))
}

export async function getApiTransportTrello(
  args: InferRequestType<(typeof client.api)['transport-trello']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-trello'].$get(args, options))
}

export async function postApiTransportTrello(
  args: InferRequestType<(typeof client.api)['transport-trello']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-trello'].$post(args, options))
}

export async function getApiTransportTrelloId(
  args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-trello'][':id'].$get(args, options))
}

export async function putApiTransportTrelloId(
  args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-trello'][':id'].$put(args, options))
}

export async function deleteApiTransportTrelloId(
  args: InferRequestType<(typeof client.api)['transport-trello'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-trello'][':id'].$delete(args, options))
}

export async function getApiTransportTurboSms(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-turbo-sms'].$get(args, options))
}

export async function postApiTransportTurboSms(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-turbo-sms'].$post(args, options))
}

export async function getApiTransportTurboSmsId(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-turbo-sms'][':id'].$get(args, options))
}

export async function putApiTransportTurboSmsId(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-turbo-sms'][':id'].$put(args, options))
}

export async function deleteApiTransportTurboSmsId(
  args: InferRequestType<(typeof client.api)['transport-turbo-sms'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-turbo-sms'][':id'].$delete(args, options))
}

export async function getApiTransportTwilio(
  args: InferRequestType<(typeof client.api)['transport-twilio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twilio'].$get(args, options))
}

export async function postApiTransportTwilio(
  args: InferRequestType<(typeof client.api)['transport-twilio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twilio'].$post(args, options))
}

export async function getApiTransportTwilioId(
  args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twilio'][':id'].$get(args, options))
}

export async function putApiTransportTwilioId(
  args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twilio'][':id'].$put(args, options))
}

export async function deleteApiTransportTwilioId(
  args: InferRequestType<(typeof client.api)['transport-twilio'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twilio'][':id'].$delete(args, options))
}

export async function getApiTransportTwitter(
  args: InferRequestType<(typeof client.api)['transport-twitter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twitter'].$get(args, options))
}

export async function postApiTransportTwitter(
  args: InferRequestType<(typeof client.api)['transport-twitter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twitter'].$post(args, options))
}

export async function getApiTransportTwitterId(
  args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twitter'][':id'].$get(args, options))
}

export async function putApiTransportTwitterId(
  args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twitter'][':id'].$put(args, options))
}

export async function deleteApiTransportTwitterId(
  args: InferRequestType<(typeof client.api)['transport-twitter'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-twitter'][':id'].$delete(args, options))
}

export async function getApiTransportVonage(
  args: InferRequestType<(typeof client.api)['transport-vonage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-vonage'].$get(args, options))
}

export async function postApiTransportVonage(
  args: InferRequestType<(typeof client.api)['transport-vonage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-vonage'].$post(args, options))
}

export async function getApiTransportVonageId(
  args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-vonage'][':id'].$get(args, options))
}

export async function putApiTransportVonageId(
  args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-vonage'][':id'].$put(args, options))
}

export async function deleteApiTransportVonageId(
  args: InferRequestType<(typeof client.api)['transport-vonage'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-vonage'][':id'].$delete(args, options))
}

export async function getApiTransportWebhook(
  args: InferRequestType<(typeof client.api)['transport-webhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-webhook'].$get(args, options))
}

export async function postApiTransportWebhook(
  args: InferRequestType<(typeof client.api)['transport-webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-webhook'].$post(args, options))
}

export async function getApiTransportWebhookId(
  args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-webhook'][':id'].$get(args, options))
}

export async function putApiTransportWebhookId(
  args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-webhook'][':id'].$put(args, options))
}

export async function deleteApiTransportWebhookId(
  args: InferRequestType<(typeof client.api)['transport-webhook'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-webhook'][':id'].$delete(args, options))
}

export async function getApiTransportYunpian(
  args: InferRequestType<(typeof client.api)['transport-yunpian']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-yunpian'].$get(args, options))
}

export async function postApiTransportYunpian(
  args: InferRequestType<(typeof client.api)['transport-yunpian']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-yunpian'].$post(args, options))
}

export async function getApiTransportYunpianId(
  args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-yunpian'][':id'].$get(args, options))
}

export async function putApiTransportYunpianId(
  args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-yunpian'][':id'].$put(args, options))
}

export async function deleteApiTransportYunpianId(
  args: InferRequestType<(typeof client.api)['transport-yunpian'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-yunpian'][':id'].$delete(args, options))
}

export async function getApiTransportZendesk(
  args: InferRequestType<(typeof client.api)['transport-zendesk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zendesk'].$get(args, options))
}

export async function postApiTransportZendesk(
  args: InferRequestType<(typeof client.api)['transport-zendesk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zendesk'].$post(args, options))
}

export async function getApiTransportZendeskId(
  args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zendesk'][':id'].$get(args, options))
}

export async function putApiTransportZendeskId(
  args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zendesk'][':id'].$put(args, options))
}

export async function deleteApiTransportZendeskId(
  args: InferRequestType<(typeof client.api)['transport-zendesk'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zendesk'][':id'].$delete(args, options))
}

export async function getApiTransportZulip(
  args: InferRequestType<(typeof client.api)['transport-zulip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zulip'].$get(args, options))
}

export async function postApiTransportZulip(
  args: InferRequestType<(typeof client.api)['transport-zulip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zulip'].$post(args, options))
}

export async function getApiTransportZulipId(
  args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zulip'][':id'].$get(args, options))
}

export async function putApiTransportZulipId(
  args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zulip'][':id'].$put(args, options))
}

export async function deleteApiTransportZulipId(
  args: InferRequestType<(typeof client.api)['transport-zulip'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['transport-zulip'][':id'].$delete(args, options))
}

export async function getApiUserAccount(
  args: InferRequestType<(typeof client.api)['user-account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-account'].$get(args, options))
}

export async function getApiUserAccountLevelCode(
  args: InferRequestType<(typeof client.api)['user-account-level-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-account-level-code'].$get(args, options))
}

export async function getApiUserAccountLevelCodeId(
  args: InferRequestType<(typeof client.api)['user-account-level-code'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-account-level-code'][':id'].$get(args, options))
}

export async function getApiUserAccountId(
  args: InferRequestType<(typeof client.api)['user-account'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-account'][':id'].$get(args, options))
}

export async function putApiUserAccountId(
  args: InferRequestType<(typeof client.api)['user-account'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['user-account'][':id'].$put(args, options))
}
