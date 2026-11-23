import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1DebugNameItemsSearchByViewUrl(
  args: InferRequestType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debug[':name']['items:searchByViewUrl'].$post(args, options))
}

export async function postV1DebugNameCheckAccess(
  args: InferRequestType<(typeof client.v1.debug)[':name:checkAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debug[':name:checkAccess'].$post(args, options))
}

export async function getV1DebugParentItemsForunmappedidentity(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.debug[':parent']['items:forunmappedidentity'].$get(args, options),
  )
}

export async function getV1DebugParentUnmappedids(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debug[':parent'].unmappedids.$get(args, options))
}

export async function getV1IndexingName(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].$get(args, options))
}

export async function deleteV1IndexingName(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].$delete(args, options))
}

export async function getV1IndexingNameItems(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].items.$get(args, options))
}

export async function postV1IndexingNameItemsDeleteQueueItems(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.indexing[':name']['items:deleteQueueItems'].$post(args, options),
  )
}

export async function postV1IndexingNameItemsPoll(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name']['items:poll'].$post(args, options))
}

export async function postV1IndexingNameItemsUnreserve(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name']['items:unreserve'].$post(args, options))
}

export async function getV1IndexingNameSchema(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].schema.$get(args, options))
}

export async function putV1IndexingNameSchema(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].schema.$put(args, options))
}

export async function deleteV1IndexingNameSchema(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name'].schema.$delete(args, options))
}

export async function postV1IndexingNameIndex(
  args: InferRequestType<(typeof client.v1.indexing)[':name:index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name:index'].$post(args, options))
}

export async function postV1IndexingNamePush(
  args: InferRequestType<(typeof client.v1.indexing)[':name:push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name:push'].$post(args, options))
}

export async function postV1IndexingNameUpload(
  args: InferRequestType<(typeof client.v1.indexing)[':name:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indexing[':name:upload'].$post(args, options))
}

export async function postV1MediaResourceName(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.media[':resourceName'].$post(args, options))
}

export async function postV1QuerySearch(
  args: InferRequestType<typeof client.v1.query.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.search.$post(args, options))
}

export async function getV1QuerySources(
  args: InferRequestType<typeof client.v1.query.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.sources.$get(args, options))
}

export async function postV1QuerySuggest(
  args: InferRequestType<typeof client.v1.query.suggest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.suggest.$post(args, options))
}

export async function getV1SettingsCustomer(
  args: InferRequestType<typeof client.v1.settings.customer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.customer.$get(args, options))
}

export async function patchV1SettingsCustomer(
  args: InferRequestType<typeof client.v1.settings.customer.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.customer.$patch(args, options))
}

export async function getV1SettingsDatasources(
  args: InferRequestType<typeof client.v1.settings.datasources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.datasources.$get(args, options))
}

export async function postV1SettingsDatasources(
  args: InferRequestType<typeof client.v1.settings.datasources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.datasources.$post(args, options))
}

export async function getV1SettingsSearchapplications(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.searchapplications.$get(args, options))
}

export async function postV1SettingsSearchapplications(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings.searchapplications.$post(args, options))
}

export async function getV1SettingsName(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':name'].$get(args, options))
}

export async function putV1SettingsName(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':name'].$put(args, options))
}

export async function deleteV1SettingsName(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':name'].$delete(args, options))
}

export async function patchV1SettingsName(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':name'].$patch(args, options))
}

export async function postV1SettingsNameReset(
  args: InferRequestType<(typeof client.v1.settings)[':name:reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':name:reset'].$post(args, options))
}

export async function getV1StatsIndex(
  args: InferRequestType<typeof client.v1.stats.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.index.$get(args, options))
}

export async function getV1StatsIndexName(
  args: InferRequestType<(typeof client.v1.stats.index)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.index[':name'].$get(args, options))
}

export async function getV1StatsQuery(
  args: InferRequestType<typeof client.v1.stats.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.query.$get(args, options))
}

export async function getV1StatsQueryName(
  args: InferRequestType<(typeof client.v1.stats.query)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.query[':name'].$get(args, options))
}

export async function getV1StatsSearchapplication(
  args: InferRequestType<typeof client.v1.stats.searchapplication.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.searchapplication.$get(args, options))
}

export async function getV1StatsSession(
  args: InferRequestType<typeof client.v1.stats.session.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.session.$get(args, options))
}

export async function getV1StatsSessionName(
  args: InferRequestType<(typeof client.v1.stats.session)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.session[':name'].$get(args, options))
}

export async function getV1StatsUser(
  args: InferRequestType<typeof client.v1.stats.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.user.$get(args, options))
}

export async function getV1StatsUserName(
  args: InferRequestType<(typeof client.v1.stats.user)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stats.user[':name'].$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function getV1NameLro(
  args: InferRequestType<(typeof client.v1)[':name']['lro']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].lro.$get(args, options))
}

export async function postV1InitializeCustomer(
  args: InferRequestType<(typeof client)['v1:initializeCustomer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v1:initializeCustomer'].$post(args, options))
}
