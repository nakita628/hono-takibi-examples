import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDumps(options?: ClientRequestOptions) {
  return await parseResponse(client.dumps.$post(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getIndexes(
  args: InferRequestType<typeof client.indexes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.$get(args, options))
}

export async function postIndexes(
  args: InferRequestType<typeof client.indexes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.$post(args, options))
}

export async function getIndexesBooks(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.$get(undefined, options))
}

export async function deleteIndexesBooks(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.$delete(undefined, options))
}

export async function patchIndexesBooks(
  args: InferRequestType<typeof client.indexes.books.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.$patch(args, options))
}

export async function getIndexesBooksDocuments(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.documents.$get(args, options))
}

export async function putIndexesBooksDocuments(
  args: InferRequestType<typeof client.indexes.books.documents.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.documents.$put(args, options))
}

export async function postIndexesBooksDocuments(
  args: InferRequestType<typeof client.indexes.books.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.documents.$post(args, options))
}

export async function deleteIndexesBooksDocuments(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.documents.$delete(undefined, options))
}

export async function deleteIndexesBooksDocuments1(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.documents['1'].$delete(undefined, options))
}

export async function getIndexesBooksDocuments2(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.documents['2'].$get(args, options))
}

export async function postIndexesBooksDocumentsDeleteBatch(
  args: InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.documents['delete-batch'].$post(args, options))
}

export async function getIndexesBooksSearch(
  args: InferRequestType<typeof client.indexes.books.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.search.$get(args, options))
}

export async function postIndexesBooksSearch(
  args: InferRequestType<typeof client.indexes.books.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.search.$post(args, options))
}

export async function getIndexesBooksSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.$get(undefined, options))
}

export async function deleteIndexesBooksSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.$delete(undefined, options))
}

export async function patchIndexesBooksSettings(
  args: InferRequestType<typeof client.indexes.books.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings.$patch(args, options))
}

export async function getIndexesBooksSettingsDisplayedAttributes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['displayed-attributes'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsDisplayedAttributes(
  args: InferRequestType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['displayed-attributes'].$put(args, options),
  )
}

export async function deleteIndexesBooksSettingsDisplayedAttributes(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['displayed-attributes'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsDistinctAttribute(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['distinct-attribute'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsDistinctAttribute(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['distinct-attribute'].$put(undefined, options),
  )
}

export async function deleteIndexesBooksSettingsDistinctAttribute(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['distinct-attribute'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsFaceting(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.faceting.$get(undefined, options))
}

export async function deleteIndexesBooksSettingsFaceting(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.faceting.$delete(undefined, options))
}

export async function patchIndexesBooksSettingsFaceting(
  args: InferRequestType<typeof client.indexes.books.settings.faceting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings.faceting.$patch(args, options))
}

export async function getIndexesBooksSettingsFilterableAttributes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['filterable-attributes'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsFilterableAttributes(
  args: InferRequestType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['filterable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesBooksSettingsFilterableAttributes(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['filterable-attributes'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsPagination(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.pagination.$get(undefined, options))
}

export async function deleteIndexesBooksSettingsPagination(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.pagination.$delete(undefined, options))
}

export async function patchIndexesBooksSettingsPagination(
  args: InferRequestType<typeof client.indexes.books.settings.pagination.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings.pagination.$patch(args, options))
}

export async function getIndexesBooksSettingsRankingRules(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['ranking-rules'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsRankingRules(
  args: InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings['ranking-rules'].$put(args, options))
}

export async function deleteIndexesBooksSettingsRankingRules(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['ranking-rules'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsSearchableAttributes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['searchable-attributes'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsSearchableAttributes(
  args: InferRequestType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['searchable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesBooksSettingsSearchableAttributes(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['searchable-attributes'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsSortableAttributes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['sortable-attributes'].$get(undefined, options),
  )
}

export async function putIndexesBooksSettingsSortableAttributes(
  args: InferRequestType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes.books.settings['sortable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesBooksSettingsSortableAttributes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['sortable-attributes'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsStopWords(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings['stop-words'].$get(args, options))
}

export async function putIndexesBooksSettingsStopWords(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings['stop-words'].$put(args, options))
}

export async function deleteIndexesBooksSettingsStopWords(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['stop-words'].$delete(undefined, options),
  )
}

export async function getIndexesBooksSettingsSynonyms(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.synonyms.$get(undefined, options))
}

export async function putIndexesBooksSettingsSynonyms(
  args: InferRequestType<typeof client.indexes.books.settings.synonyms.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings.synonyms.$put(args, options))
}

export async function deleteIndexesBooksSettingsSynonyms(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.settings.synonyms.$delete(undefined, options))
}

export async function getIndexesBooksSettingsTypoTolerance(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['typo-tolerance'].$get(undefined, options),
  )
}

export async function deleteIndexesBooksSettingsTypoTolerance(options?: ClientRequestOptions) {
  return await parseResponse(
    client.indexes.books.settings['typo-tolerance'].$delete(undefined, options),
  )
}

export async function patchIndexesBooksSettingsTypoTolerance(
  args: InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes.books.settings['typo-tolerance'].$patch(args, options))
}

export async function getIndexesBooksStats(options?: ClientRequestOptions) {
  return await parseResponse(client.indexes.books.stats.$get(undefined, options))
}

export async function postIndexesSwapIndexes(
  args: InferRequestType<(typeof client.indexes)['swap-indexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes['swap-indexes'].$post(args, options))
}

export async function getKeys(
  args: InferRequestType<typeof client.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$get(args, options))
}

export async function postKeys(
  args: InferRequestType<typeof client.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$post(args, options))
}

export async function getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
      undefined,
      options,
    ),
  )
}

export async function deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete(
      undefined,
      options,
    ),
  )
}

export async function patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd(
  args: InferRequestType<
    typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch(
      args,
      options,
    ),
  )
}

export async function getStats(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.$get(undefined, options))
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function deleteTasks(
  args: InferRequestType<typeof client.tasks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$delete(args, options))
}

export async function getTasks0(options?: ClientRequestOptions) {
  return await parseResponse(client.tasks['0'].$get(undefined, options))
}

export async function postTasksCancel(
  args: InferRequestType<typeof client.tasks.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.cancel.$post(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
