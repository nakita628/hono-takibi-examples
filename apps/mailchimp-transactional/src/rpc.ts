import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAllowlistsAdd(
  args: InferRequestType<typeof client.allowlists.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlists.add.$post(args, options))
}

export async function postAllowlistsList(
  args: InferRequestType<typeof client.allowlists.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlists.list.$post(args, options))
}

export async function postAllowlistsDelete(
  args: InferRequestType<typeof client.allowlists.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allowlists.delete.$post(args, options))
}

export async function postExportsInfo(
  args: InferRequestType<typeof client.exports.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.info.$post(args, options))
}

export async function postExportsList(
  args: InferRequestType<typeof client.exports.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.list.$post(args, options))
}

export async function postExportsRejects(
  args: InferRequestType<typeof client.exports.rejects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.rejects.$post(args, options))
}

export async function postExportsWhitelist(
  args: InferRequestType<typeof client.exports.whitelist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.whitelist.$post(args, options))
}

export async function postExportsAllowlist(
  args: InferRequestType<typeof client.exports.allowlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.allowlist.$post(args, options))
}

export async function postExportsActivity(
  args: InferRequestType<typeof client.exports.activity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.activity.$post(args, options))
}

export async function postIpsList(
  args: InferRequestType<typeof client.ips.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.list.$post(args, options))
}

export async function postIpsInfo(
  args: InferRequestType<typeof client.ips.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.info.$post(args, options))
}

export async function postIpsProvision(
  args: InferRequestType<typeof client.ips.provision.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.provision.$post(args, options))
}

export async function postIpsStartWarmup(
  args: InferRequestType<(typeof client.ips)['start-warmup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['start-warmup'].$post(args, options))
}

export async function postIpsCancelWarmup(
  args: InferRequestType<(typeof client.ips)['cancel-warmup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['cancel-warmup'].$post(args, options))
}

export async function postIpsSetPool(
  args: InferRequestType<(typeof client.ips)['set-pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['set-pool'].$post(args, options))
}

export async function postIpsDelete(
  args: InferRequestType<typeof client.ips.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips.delete.$post(args, options))
}

export async function postIpsListPools(
  args: InferRequestType<(typeof client.ips)['list-pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['list-pools'].$post(args, options))
}

export async function postIpsPoolInfo(
  args: InferRequestType<(typeof client.ips)['pool-info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['pool-info'].$post(args, options))
}

export async function postIpsCreatePool(
  args: InferRequestType<(typeof client.ips)['create-pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['create-pool'].$post(args, options))
}

export async function postIpsDeletePool(
  args: InferRequestType<(typeof client.ips)['delete-pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['delete-pool'].$post(args, options))
}

export async function postIpsCheckCustomDns(
  args: InferRequestType<(typeof client.ips)['check-custom-dns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['check-custom-dns'].$post(args, options))
}

export async function postIpsSetCustomDns(
  args: InferRequestType<(typeof client.ips)['set-custom-dns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips['set-custom-dns'].$post(args, options))
}

export async function postInboundDomains(
  args: InferRequestType<typeof client.inbound.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound.domains.$post(args, options))
}

export async function postInboundAddDomain(
  args: InferRequestType<(typeof client.inbound)['add-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['add-domain'].$post(args, options))
}

export async function postInboundCheckDomain(
  args: InferRequestType<(typeof client.inbound)['check-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['check-domain'].$post(args, options))
}

export async function postInboundDeleteDomain(
  args: InferRequestType<(typeof client.inbound)['delete-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['delete-domain'].$post(args, options))
}

export async function postInboundRoutes(
  args: InferRequestType<typeof client.inbound.routes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound.routes.$post(args, options))
}

export async function postInboundAddRoute(
  args: InferRequestType<(typeof client.inbound)['add-route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['add-route'].$post(args, options))
}

export async function postInboundUpdateRoute(
  args: InferRequestType<(typeof client.inbound)['update-route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['update-route'].$post(args, options))
}

export async function postInboundDeleteRoute(
  args: InferRequestType<(typeof client.inbound)['delete-route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['delete-route'].$post(args, options))
}

export async function postInboundSendRaw(
  args: InferRequestType<(typeof client.inbound)['send-raw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound['send-raw'].$post(args, options))
}

export async function postMctemplatesInfo(
  args: InferRequestType<typeof client.mctemplates.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mctemplates.info.$post(args, options))
}

export async function postMctemplatesList(
  args: InferRequestType<typeof client.mctemplates.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mctemplates.list.$post(args, options))
}

export async function postMctemplatesRender(
  args: InferRequestType<typeof client.mctemplates.render.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mctemplates.render.$post(args, options))
}

export async function postMctemplatesTimeSeries(
  args: InferRequestType<(typeof client.mctemplates)['time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mctemplates['time-series'].$post(args, options))
}

export async function postMessagesSend(
  args: InferRequestType<typeof client.messages.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.send.$post(args, options))
}

export async function postMessagesSendTemplate(
  args: InferRequestType<(typeof client.messages)['send-template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['send-template'].$post(args, options))
}

export async function postMessagesSendMcTemplate(
  args: InferRequestType<(typeof client.messages)['send-mc-template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['send-mc-template'].$post(args, options))
}

export async function postMessagesSearch(
  args: InferRequestType<typeof client.messages.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.search.$post(args, options))
}

export async function postMessagesSearchTimeSeries(
  args: InferRequestType<(typeof client.messages)['search-time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['search-time-series'].$post(args, options))
}

export async function postMessagesInfo(
  args: InferRequestType<typeof client.messages.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.info.$post(args, options))
}

export async function postMessagesContent(
  args: InferRequestType<typeof client.messages.content.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.content.$post(args, options))
}

export async function postMessagesParse(
  args: InferRequestType<typeof client.messages.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.parse.$post(args, options))
}

export async function postMessagesSendRaw(
  args: InferRequestType<(typeof client.messages)['send-raw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['send-raw'].$post(args, options))
}

export async function postMessagesListScheduled(
  args: InferRequestType<(typeof client.messages)['list-scheduled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['list-scheduled'].$post(args, options))
}

export async function postMessagesCancelScheduled(
  args: InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['cancel-scheduled'].$post(args, options))
}

export async function postMessagesReschedule(
  args: InferRequestType<typeof client.messages.reschedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.reschedule.$post(args, options))
}

export async function postMessagesSendSms(
  args: InferRequestType<(typeof client.messages)['send-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages['send-sms'].$post(args, options))
}

export async function postMetadataList(
  args: InferRequestType<typeof client.metadata.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.list.$post(args, options))
}

export async function postMetadataAdd(
  args: InferRequestType<typeof client.metadata.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.add.$post(args, options))
}

export async function postMetadataUpdate(
  args: InferRequestType<typeof client.metadata.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.update.$post(args, options))
}

export async function postMetadataDelete(
  args: InferRequestType<typeof client.metadata.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata.delete.$post(args, options))
}

export async function postRejectsAdd(
  args: InferRequestType<typeof client.rejects.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects.add.$post(args, options))
}

export async function postRejectsAddSms(
  args: InferRequestType<(typeof client.rejects)['add-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects['add-sms'].$post(args, options))
}

export async function postRejectsList(
  args: InferRequestType<typeof client.rejects.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects.list.$post(args, options))
}

export async function postRejectsListSms(
  args: InferRequestType<(typeof client.rejects)['list-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects['list-sms'].$post(args, options))
}

export async function postRejectsDelete(
  args: InferRequestType<typeof client.rejects.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects.delete.$post(args, options))
}

export async function postRejectsDeleteSms(
  args: InferRequestType<(typeof client.rejects)['delete-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejects['delete-sms'].$post(args, options))
}

export async function postSendersList(
  args: InferRequestType<typeof client.senders.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.list.$post(args, options))
}

export async function postSendersDomains(
  args: InferRequestType<typeof client.senders.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.domains.$post(args, options))
}

export async function postSendersAddDomain(
  args: InferRequestType<(typeof client.senders)['add-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders['add-domain'].$post(args, options))
}

export async function postSendersCheckDomain(
  args: InferRequestType<(typeof client.senders)['check-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders['check-domain'].$post(args, options))
}

export async function postSendersVerifyDomain(
  args: InferRequestType<(typeof client.senders)['verify-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders['verify-domain'].$post(args, options))
}

export async function postSendersInfo(
  args: InferRequestType<typeof client.senders.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.info.$post(args, options))
}

export async function postSendersTimeSeries(
  args: InferRequestType<(typeof client.senders)['time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders['time-series'].$post(args, options))
}

export async function postSendersDeleteDomain(
  args: InferRequestType<(typeof client.senders)['delete-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders['delete-domain'].$post(args, options))
}

export async function postSubaccountsList(
  args: InferRequestType<typeof client.subaccounts.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.list.$post(args, options))
}

export async function postSubaccountsAdd(
  args: InferRequestType<typeof client.subaccounts.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.add.$post(args, options))
}

export async function postSubaccountsInfo(
  args: InferRequestType<typeof client.subaccounts.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.info.$post(args, options))
}

export async function postSubaccountsUpdate(
  args: InferRequestType<typeof client.subaccounts.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.update.$post(args, options))
}

export async function postSubaccountsDelete(
  args: InferRequestType<typeof client.subaccounts.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.delete.$post(args, options))
}

export async function postSubaccountsPause(
  args: InferRequestType<typeof client.subaccounts.pause.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.pause.$post(args, options))
}

export async function postSubaccountsResume(
  args: InferRequestType<typeof client.subaccounts.resume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.resume.$post(args, options))
}

export async function postTagsList(
  args: InferRequestType<typeof client.tags.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.list.$post(args, options))
}

export async function postTagsDelete(
  args: InferRequestType<typeof client.tags.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.delete.$post(args, options))
}

export async function postTagsInfo(
  args: InferRequestType<typeof client.tags.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.info.$post(args, options))
}

export async function postTagsTimeSeries(
  args: InferRequestType<(typeof client.tags)['time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags['time-series'].$post(args, options))
}

export async function postTagsAllTimeSeries(
  args: InferRequestType<(typeof client.tags)['all-time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags['all-time-series'].$post(args, options))
}

export async function postTemplatesAdd(
  args: InferRequestType<typeof client.templates.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.add.$post(args, options))
}

export async function postTemplatesInfo(
  args: InferRequestType<typeof client.templates.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.info.$post(args, options))
}

export async function postTemplatesUpdate(
  args: InferRequestType<typeof client.templates.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.update.$post(args, options))
}

export async function postTemplatesPublish(
  args: InferRequestType<typeof client.templates.publish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.publish.$post(args, options))
}

export async function postTemplatesDelete(
  args: InferRequestType<typeof client.templates.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.delete.$post(args, options))
}

export async function postTemplatesList(
  args: InferRequestType<typeof client.templates.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.list.$post(args, options))
}

export async function postTemplatesTimeSeries(
  args: InferRequestType<(typeof client.templates)['time-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates['time-series'].$post(args, options))
}

export async function postTemplatesRender(
  args: InferRequestType<typeof client.templates.render.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.render.$post(args, options))
}

export async function postUrlsTrackingDomains(
  args: InferRequestType<(typeof client.urls)['tracking-domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urls['tracking-domains'].$post(args, options))
}

export async function postUrlsAddTrackingDomain(
  args: InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urls['add-tracking-domain'].$post(args, options))
}

export async function postUrlsCheckTrackingDomain(
  args: InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urls['check-tracking-domain'].$post(args, options))
}

export async function postUrlsDeleteTrackingDomain(
  args: InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urls['delete-tracking-domain'].$post(args, options))
}

export async function postUsersInfo(
  args: InferRequestType<typeof client.users.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.info.$post(args, options))
}

export async function postUsersPing(
  args: InferRequestType<typeof client.users.ping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.ping.$post(args, options))
}

export async function postUsersPing2(
  args: InferRequestType<typeof client.users.ping2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.ping2.$post(args, options))
}

export async function postUsersSenders(
  args: InferRequestType<typeof client.users.senders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.senders.$post(args, options))
}

export async function postWebhooksList(
  args: InferRequestType<typeof client.webhooks.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.list.$post(args, options))
}

export async function postWebhooksAdd(
  args: InferRequestType<typeof client.webhooks.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.add.$post(args, options))
}

export async function postWebhooksInfo(
  args: InferRequestType<typeof client.webhooks.info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.info.$post(args, options))
}

export async function postWebhooksUpdate(
  args: InferRequestType<typeof client.webhooks.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.update.$post(args, options))
}

export async function postWebhooksDelete(
  args: InferRequestType<typeof client.webhooks.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.delete.$post(args, options))
}
