import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getLangLang(
  args: InferRequestType<(typeof client.lang)[':lang']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lang[':lang'].$get(args, options))
}

export async function getDashboardCharts(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboard.charts.$get(undefined, options))
}

export async function getDashboardCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.dashboard.counts.$get(undefined, options))
}

export async function getSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.$get(undefined, options))
}

export async function putSettings(
  args: InferRequestType<typeof client.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$put(args, options))
}

export async function postSettingsSmtpTest(
  args: InferRequestType<typeof client.settings.smtp.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.smtp.test.$post(args, options))
}

export async function postAdminReload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.reload.$post(undefined, options))
}

export async function getLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.logs.$get(undefined, options))
}

export async function getSubscribers(
  args: InferRequestType<typeof client.subscribers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.$get(args, options))
}

export async function postSubscribers(
  args: InferRequestType<typeof client.subscribers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.$post(args, options))
}

export async function deleteSubscribers(
  args: InferRequestType<typeof client.subscribers.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.$delete(args, options))
}

export async function getSubscribersId(
  args: InferRequestType<(typeof client.subscribers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].$get(args, options))
}

export async function putSubscribersId(
  args: InferRequestType<(typeof client.subscribers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].$put(args, options))
}

export async function deleteSubscribersId(
  args: InferRequestType<(typeof client.subscribers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].$delete(args, options))
}

export async function putSubscribersLists(
  args: InferRequestType<typeof client.subscribers.lists.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.lists.$put(args, options))
}

export async function putSubscribersListsId(
  args: InferRequestType<(typeof client.subscribers.lists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.lists[':id'].$put(args, options))
}

export async function putSubscribersBlocklist(
  args: InferRequestType<typeof client.subscribers.blocklist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.blocklist.$put(args, options))
}

export async function putSubscribersIdBlocklist(
  args: InferRequestType<(typeof client.subscribers)[':id']['blocklist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].blocklist.$put(args, options))
}

export async function getSubscribersIdExport(
  args: InferRequestType<(typeof client.subscribers)[':id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].export.$get(args, options))
}

export async function getSubscribersIdBounces(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].bounces.$get(args, options))
}

export async function deleteSubscribersIdBounces(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].bounces.$delete(args, options))
}

export async function postSubscribersIdOptin(
  args: InferRequestType<(typeof client.subscribers)[':id']['optin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers[':id'].optin.$post(args, options))
}

export async function postSubscribersQueryDelete(
  args: InferRequestType<typeof client.subscribers.query.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.query.delete.$post(args, options))
}

export async function putSubscribersQueryBlocklist(
  args: InferRequestType<typeof client.subscribers.query.blocklist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.query.blocklist.$put(args, options))
}

export async function putSubscribersQueryLists(
  args: InferRequestType<typeof client.subscribers.query.lists.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribers.query.lists.$put(args, options))
}

export async function getBounces(
  args: InferRequestType<typeof client.bounces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bounces.$get(args, options))
}

export async function deleteBounces(
  args: InferRequestType<typeof client.bounces.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bounces.$delete(args, options))
}

export async function getBouncesId(
  args: InferRequestType<(typeof client.bounces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bounces[':id'].$get(args, options))
}

export async function deleteBouncesId(
  args: InferRequestType<(typeof client.bounces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bounces[':id'].$delete(args, options))
}

export async function getLists(
  args: InferRequestType<typeof client.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$get(args, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function getListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$get(args, options))
}

export async function putListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$put(args, options))
}

export async function deleteListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$delete(args, options))
}

export async function getImportSubscribers(options?: ClientRequestOptions) {
  return await parseResponse(client.import.subscribers.$get(undefined, options))
}

export async function postImportSubscribers(
  args: InferRequestType<typeof client.import.subscribers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import.subscribers.$post(args, options))
}

export async function deleteImportSubscribers(options?: ClientRequestOptions) {
  return await parseResponse(client.import.subscribers.$delete(undefined, options))
}

export async function getImportSubscribersLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.import.subscribers.logs.$get(undefined, options))
}

export async function getCampaigns(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$get(args, options))
}

export async function postCampaigns(
  args: InferRequestType<typeof client.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$post(args, options))
}

export async function getCampaignsId(
  args: InferRequestType<(typeof client.campaigns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].$get(args, options))
}

export async function putCampaignsId(
  args: InferRequestType<(typeof client.campaigns)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].$put(args, options))
}

export async function deleteCampaignsId(
  args: InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].$delete(args, options))
}

export async function getCampaignsRunningStats(
  args: InferRequestType<typeof client.campaigns.running.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.running.stats.$get(args, options))
}

export async function getCampaignsAnalyticsType(
  args: InferRequestType<(typeof client.campaigns.analytics)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.analytics[':type'].$get(args, options))
}

export async function getCampaignsIdPreview(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].preview.$get(args, options))
}

export async function postCampaignsIdPreview(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].preview.$post(args, options))
}

export async function postCampaignsIdText(
  args: InferRequestType<(typeof client.campaigns)[':id']['text']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].text.$post(args, options))
}

export async function putCampaignsIdStatus(
  args: InferRequestType<(typeof client.campaigns)[':id']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].status.$put(args, options))
}

export async function putCampaignsIdArchive(
  args: InferRequestType<(typeof client.campaigns)[':id']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].archive.$put(args, options))
}

export async function postCampaignsIdContent(
  args: InferRequestType<(typeof client.campaigns)[':id']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].content.$post(args, options))
}

export async function postCampaignsIdTest(
  args: InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':id'].test.$post(args, options))
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

export async function getMediaId(
  args: InferRequestType<(typeof client.media)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':id'].$get(args, options))
}

export async function deleteMediaId(
  args: InferRequestType<(typeof client.media)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':id'].$delete(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function getTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$get(args, options))
}

export async function putTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$put(args, options))
}

export async function deleteTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$delete(args, options))
}

export async function postTemplatesPreview(
  args: InferRequestType<typeof client.templates.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.preview.$post(args, options))
}

export async function getTemplatesIdPreview(
  args: InferRequestType<(typeof client.templates)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].preview.$get(args, options))
}

export async function putTemplatesIdDefault(
  args: InferRequestType<(typeof client.templates)[':id']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].default.$put(args, options))
}

export async function postTx(
  args: InferRequestType<typeof client.tx.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tx.$post(args, options))
}

export async function deleteMaintenanceSubscribersType(
  args: InferRequestType<(typeof client.maintenance.subscribers)[':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.subscribers[':type'].$delete(args, options))
}

export async function deleteMaintenanceAnalyticsType(
  args: InferRequestType<(typeof client.maintenance.analytics)[':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.analytics[':type'].$delete(args, options))
}

export async function deleteMaintenanceSubscriptionsUnconfirmed(
  args: InferRequestType<typeof client.maintenance.subscriptions.unconfirmed.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.subscriptions.unconfirmed.$delete(args, options))
}

export async function getPublicLists(options?: ClientRequestOptions) {
  return await parseResponse(client.public.lists.$get(undefined, options))
}

export async function postPublicSubscription(
  args: InferRequestType<typeof client.public.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.subscription.$post(args, options))
}
