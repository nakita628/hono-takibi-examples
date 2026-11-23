import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBatches(
  args: InferRequestType<typeof client.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches.$get(args, options))
}

export async function getBatchesBatchUid(
  args: InferRequestType<(typeof client.batches)[':batchUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':batchUid'].$get(args, options))
}

export async function postDumps(options?: ClientRequestOptions) {
  return await parseResponse(client.dumps.$post(undefined, options))
}

export async function getExperimentalFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client['experimental-features'].$get(undefined, options))
}

export async function patchExperimentalFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client['experimental-features'].$patch(undefined, options))
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

export async function getIndexesIndexUid(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].$get(args, options))
}

export async function deleteIndexesIndexUid(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].$delete(args, options))
}

export async function patchIndexesIndexUid(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].$patch(args, options))
}

export async function postIndexesIndexUidDeleteBatch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['delete-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid']['delete-batch'].$post(args, options))
}

export async function getIndexesIndexUidDocuments(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.$get(args, options))
}

export async function putIndexesIndexUidDocuments(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.$put(args, options))
}

export async function postIndexesIndexUidDocuments(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.$post(args, options))
}

export async function deleteIndexesIndexUidDocuments(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.$delete(args, options))
}

export async function postIndexesIndexUidDocumentsDelete(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.delete.$post(args, options))
}

export async function postIndexesIndexUidDocumentsEdit(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.edit.$post(args, options))
}

export async function postIndexesIndexUidDocumentsFetch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents']['fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].documents.fetch.$post(args, options))
}

export async function getIndexesIndexUidDocumentsDocumentId(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['documents'][':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].documents[':documentId'].$get(args, options),
  )
}

export async function deleteIndexesIndexUidDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].documents[':documentId'].$delete(args, options),
  )
}

export async function postIndexesIndexUidFacetSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['facet-search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid']['facet-search'].$post(args, options))
}

export async function getIndexesIndexUidSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].search.$get(args, options))
}

export async function postIndexesIndexUidSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].search.$post(args, options))
}

export async function getIndexesIndexUidSettings(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.$get(args, options))
}

export async function deleteIndexesIndexUidSettings(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.$delete(args, options))
}

export async function patchIndexesIndexUidSettings(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.$patch(args, options))
}

export async function getIndexesIndexUidSettingsChat(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.chat.$get(args, options))
}

export async function putIndexesIndexUidSettingsChat(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.chat.$put(args, options))
}

export async function deleteIndexesIndexUidSettingsChat(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['chat']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.chat.$delete(args, options))
}

export async function getIndexesIndexUidSettingsDictionary(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.dictionary.$get(args, options))
}

export async function putIndexesIndexUidSettingsDictionary(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.dictionary.$put(args, options))
}

export async function deleteIndexesIndexUidSettingsDictionary(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['dictionary']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.dictionary.$delete(args, options))
}

export async function getIndexesIndexUidSettingsDisplayedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['displayed-attributes'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsDisplayedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['displayed-attributes'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsDisplayedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['displayed-attributes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['displayed-attributes'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsDistinctAttribute(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['distinct-attribute'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsDistinctAttribute(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['distinct-attribute'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsDistinctAttribute(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['distinct-attribute']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['distinct-attribute'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsEmbedders(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.embedders.$get(args, options))
}

export async function deleteIndexesIndexUidSettingsEmbedders(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.embedders.$delete(args, options))
}

export async function patchIndexesIndexUidSettingsEmbedders(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['embedders']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.embedders.$patch(args, options))
}

export async function getIndexesIndexUidSettingsFacetSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['facet-search'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsFacetSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['facet-search']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['facet-search'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsFacetSearch(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['facet-search']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['facet-search'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsFaceting(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.faceting.$get(args, options))
}

export async function deleteIndexesIndexUidSettingsFaceting(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.faceting.$delete(args, options))
}

export async function patchIndexesIndexUidSettingsFaceting(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['faceting']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.faceting.$patch(args, options))
}

export async function getIndexesIndexUidSettingsFilterableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['filterable-attributes'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsFilterableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['filterable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsFilterableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['filterable-attributes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['filterable-attributes'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsLocalizedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['localized-attributes'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsLocalizedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['localized-attributes'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsLocalizedAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['localized-attributes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['localized-attributes'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsNonSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['non-separator-tokens'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsNonSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['non-separator-tokens'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsNonSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['non-separator-tokens']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['non-separator-tokens'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsPagination(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.pagination.$get(args, options))
}

export async function deleteIndexesIndexUidSettingsPagination(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.pagination.$delete(args, options))
}

export async function patchIndexesIndexUidSettingsPagination(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['pagination']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.pagination.$patch(args, options))
}

export async function getIndexesIndexUidSettingsPrefixSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['prefix-search'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsPrefixSearch(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['prefix-search']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['prefix-search'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsPrefixSearch(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['prefix-search']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['prefix-search'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsProximityPrecision(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['proximity-precision'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsProximityPrecision(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['proximity-precision'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsProximityPrecision(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['proximity-precision']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['proximity-precision'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsRankingRules(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['ranking-rules'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsRankingRules(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['ranking-rules'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsRankingRules(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['ranking-rules']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['ranking-rules'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsSearchCutoffMs(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['search-cutoff-ms'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsSearchCutoffMs(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['search-cutoff-ms'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsSearchCutoffMs(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['search-cutoff-ms']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['search-cutoff-ms'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsSearchableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['searchable-attributes'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsSearchableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['searchable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsSearchableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['searchable-attributes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['searchable-attributes'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['separator-tokens'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['separator-tokens'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsSeparatorTokens(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['separator-tokens']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['separator-tokens'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsSortableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['sortable-attributes'].$get(args, options),
  )
}

export async function putIndexesIndexUidSettingsSortableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['sortable-attributes'].$put(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsSortableAttributes(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['sortable-attributes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['sortable-attributes'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsStopWords(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings['stop-words'].$get(args, options))
}

export async function putIndexesIndexUidSettingsStopWords(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings['stop-words'].$put(args, options))
}

export async function deleteIndexesIndexUidSettingsStopWords(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['stop-words']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['stop-words'].$delete(args, options),
  )
}

export async function getIndexesIndexUidSettingsSynonyms(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.synonyms.$get(args, options))
}

export async function putIndexesIndexUidSettingsSynonyms(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.synonyms.$put(args, options))
}

export async function deleteIndexesIndexUidSettingsSynonyms(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['settings']['synonyms']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].settings.synonyms.$delete(args, options))
}

export async function getIndexesIndexUidSettingsTypoTolerance(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['typo-tolerance'].$get(args, options),
  )
}

export async function deleteIndexesIndexUidSettingsTypoTolerance(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['typo-tolerance'].$delete(args, options),
  )
}

export async function patchIndexesIndexUidSettingsTypoTolerance(
  args: InferRequestType<
    (typeof client.indexes)[':indexUid']['settings']['typo-tolerance']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.indexes[':indexUid'].settings['typo-tolerance'].$patch(args, options),
  )
}

export async function getIndexesIndexUidSimilar(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].similar.$get(args, options))
}

export async function postIndexesIndexUidSimilar(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['similar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].similar.$post(args, options))
}

export async function getIndexesIndexUidStats(
  args: InferRequestType<(typeof client.indexes)[':indexUid']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexes[':indexUid'].stats.$get(args, options))
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

export async function getKeysUidOrKey(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':uidOrKey'].$get(args, options))
}

export async function deleteKeysUidOrKey(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':uidOrKey'].$delete(args, options))
}

export async function patchKeysUidOrKey(
  args: InferRequestType<(typeof client.keys)[':uidOrKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':uidOrKey'].$patch(args, options))
}

export async function postLogsStderr(
  args: InferRequestType<typeof client.logs.stderr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.stderr.$post(args, options))
}

export async function postLogsStream(
  args: InferRequestType<typeof client.logs.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.stream.$post(args, options))
}

export async function deleteLogsStream(options?: ClientRequestOptions) {
  return await parseResponse(client.logs.stream.$delete(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function postMultiSearch(
  args: InferRequestType<(typeof client)['multi-search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['multi-search'].$post(args, options))
}

export async function getNetwork(options?: ClientRequestOptions) {
  return await parseResponse(client.network.$get(undefined, options))
}

export async function patchNetwork(
  args: InferRequestType<typeof client.network.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.$patch(args, options))
}

export async function postSnapshots(options?: ClientRequestOptions) {
  return await parseResponse(client.snapshots.$post(undefined, options))
}

export async function getStats(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.$get(undefined, options))
}

export async function postSwapIndexes(
  args: InferRequestType<(typeof client)['swap-indexes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['swap-indexes'].$post(args, options))
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

export async function postTasksCancel(
  args: InferRequestType<typeof client.tasks.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.cancel.$post(args, options))
}

export async function getTasksTaskUid(
  args: InferRequestType<(typeof client.tasks)[':taskUid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskUid'].$get(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
