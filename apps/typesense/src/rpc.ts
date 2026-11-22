import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCollections(
  args: InferRequestType<typeof client.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$get(args, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function getCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].$get(args, options))
}

export async function deleteCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].$delete(args, options))
}

export async function patchCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].$patch(args, options))
}

export async function postCollectionsCollectionNameDocuments(
  args: InferRequestType<(typeof client.collections)[':collectionName']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].documents.$post(args, options))
}

export async function deleteCollectionsCollectionNameDocuments(
  args: InferRequestType<(typeof client.collections)[':collectionName']['documents']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].documents.$delete(args, options))
}

export async function patchCollectionsCollectionNameDocuments(
  args: InferRequestType<(typeof client.collections)[':collectionName']['documents']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collectionName'].documents.$patch(args, options))
}

export async function getCollectionsCollectionNameDocumentsSearch(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents.search.$get(args, options),
  )
}

export async function getSynonymSets(options?: ClientRequestOptions) {
  return await parseResponse(client.synonym_sets.$get(undefined, options))
}

export async function getSynonymSetsSynonymSetName(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synonym_sets[':synonymSetName'].$get(args, options))
}

export async function putSynonymSetsSynonymSetName(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synonym_sets[':synonymSetName'].$put(args, options))
}

export async function deleteSynonymSetsSynonymSetName(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synonym_sets[':synonymSetName'].$delete(args, options))
}

export async function getSynonymSetsSynonymSetNameItems(
  args: InferRequestType<(typeof client.synonym_sets)[':synonymSetName']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synonym_sets[':synonymSetName'].items.$get(args, options))
}

export async function getSynonymSetsSynonymSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.synonym_sets[':synonymSetName'].items[':itemId'].$get(args, options),
  )
}

export async function putSynonymSetsSynonymSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.synonym_sets[':synonymSetName'].items[':itemId'].$put(args, options),
  )
}

export async function deleteSynonymSetsSynonymSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.synonym_sets)[':synonymSetName']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.synonym_sets[':synonymSetName'].items[':itemId'].$delete(args, options),
  )
}

export async function getCurationSets(options?: ClientRequestOptions) {
  return await parseResponse(client.curation_sets.$get(undefined, options))
}

export async function getCurationSetsCurationSetName(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curation_sets[':curationSetName'].$get(args, options))
}

export async function putCurationSetsCurationSetName(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curation_sets[':curationSetName'].$put(args, options))
}

export async function deleteCurationSetsCurationSetName(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curation_sets[':curationSetName'].$delete(args, options))
}

export async function getCurationSetsCurationSetNameItems(
  args: InferRequestType<(typeof client.curation_sets)[':curationSetName']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.curation_sets[':curationSetName'].items.$get(args, options))
}

export async function getCurationSetsCurationSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.curation_sets[':curationSetName'].items[':itemId'].$get(args, options),
  )
}

export async function putCurationSetsCurationSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.curation_sets[':curationSetName'].items[':itemId'].$put(args, options),
  )
}

export async function deleteCurationSetsCurationSetNameItemsItemId(
  args: InferRequestType<
    (typeof client.curation_sets)[':curationSetName']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.curation_sets[':curationSetName'].items[':itemId'].$delete(args, options),
  )
}

export async function getCollectionsCollectionNameDocumentsExport(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents.export.$get(args, options),
  )
}

export async function postCollectionsCollectionNameDocumentsImport(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents.import.$post(args, options),
  )
}

export async function getCollectionsCollectionNameDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents[':documentId'].$get(args, options),
  )
}

export async function deleteCollectionsCollectionNameDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents[':documentId'].$delete(args, options),
  )
}

export async function patchCollectionsCollectionNameDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.collections)[':collectionName']['documents'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collectionName'].documents[':documentId'].$patch(args, options),
  )
}

export async function getConversationsModels(options?: ClientRequestOptions) {
  return await parseResponse(client.conversations.models.$get(undefined, options))
}

export async function postConversationsModels(
  args: InferRequestType<typeof client.conversations.models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.models.$post(args, options))
}

export async function getConversationsModelsModelId(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.models[':modelId'].$get(args, options))
}

export async function putConversationsModelsModelId(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.models[':modelId'].$put(args, options))
}

export async function deleteConversationsModelsModelId(
  args: InferRequestType<(typeof client.conversations.models)[':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.models[':modelId'].$delete(args, options))
}

export async function getKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.keys.$get(undefined, options))
}

export async function postKeys(
  args: InferRequestType<typeof client.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$post(args, options))
}

export async function getKeysKeyId(
  args: InferRequestType<(typeof client.keys)[':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':keyId'].$get(args, options))
}

export async function deleteKeysKeyId(
  args: InferRequestType<(typeof client.keys)[':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':keyId'].$delete(args, options))
}

export async function getAliases(options?: ClientRequestOptions) {
  return await parseResponse(client.aliases.$get(undefined, options))
}

export async function getAliasesAliasName(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':aliasName'].$get(args, options))
}

export async function putAliasesAliasName(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':aliasName'].$put(args, options))
}

export async function deleteAliasesAliasName(
  args: InferRequestType<(typeof client.aliases)[':aliasName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':aliasName'].$delete(args, options))
}

export async function getDebug(options?: ClientRequestOptions) {
  return await parseResponse(client.debug.$get(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getOperationsSchemaChanges(options?: ClientRequestOptions) {
  return await parseResponse(client.operations.schema_changes.$get(undefined, options))
}

export async function postOperationsSnapshot(
  args: InferRequestType<typeof client.operations.snapshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations.snapshot.$post(args, options))
}

export async function postOperationsVote(options?: ClientRequestOptions) {
  return await parseResponse(client.operations.vote.$post(undefined, options))
}

export async function postOperationsCacheClear(options?: ClientRequestOptions) {
  return await parseResponse(client.operations.cache.clear.$post(undefined, options))
}

export async function postOperationsDbCompact(options?: ClientRequestOptions) {
  return await parseResponse(client.operations.db.compact.$post(undefined, options))
}

export async function postConfig(
  args: InferRequestType<typeof client.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$post(args, options))
}

export async function postMultiSearch(
  args: InferRequestType<typeof client.multi_search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.multi_search.$post(args, options))
}

export async function getAnalyticsEvents(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.events.$get(args, options))
}

export async function postAnalyticsEvents(
  args: InferRequestType<typeof client.analytics.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.events.$post(args, options))
}

export async function postAnalyticsFlush(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.flush.$post(undefined, options))
}

export async function getAnalyticsStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.status.$get(undefined, options))
}

export async function getAnalyticsRules(
  args: InferRequestType<typeof client.analytics.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.rules.$get(args, options))
}

export async function postAnalyticsRules(
  args: InferRequestType<typeof client.analytics.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.rules.$post(args, options))
}

export async function getAnalyticsRulesRuleName(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.rules[':ruleName'].$get(args, options))
}

export async function putAnalyticsRulesRuleName(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.rules[':ruleName'].$put(args, options))
}

export async function deleteAnalyticsRulesRuleName(
  args: InferRequestType<(typeof client.analytics.rules)[':ruleName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.rules[':ruleName'].$delete(args, options))
}

export async function getMetricsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['metrics.json'].$get(undefined, options))
}

export async function getStatsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['stats.json'].$get(undefined, options))
}

export async function getStopwords(options?: ClientRequestOptions) {
  return await parseResponse(client.stopwords.$get(undefined, options))
}

export async function getStopwordsSetId(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stopwords[':setId'].$get(args, options))
}

export async function putStopwordsSetId(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stopwords[':setId'].$put(args, options))
}

export async function deleteStopwordsSetId(
  args: InferRequestType<(typeof client.stopwords)[':setId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stopwords[':setId'].$delete(args, options))
}

export async function getPresets(options?: ClientRequestOptions) {
  return await parseResponse(client.presets.$get(undefined, options))
}

export async function getPresetsPresetId(
  args: InferRequestType<(typeof client.presets)[':presetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':presetId'].$get(args, options))
}

export async function putPresetsPresetId(
  args: InferRequestType<(typeof client.presets)[':presetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':presetId'].$put(args, options))
}

export async function deletePresetsPresetId(
  args: InferRequestType<(typeof client.presets)[':presetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':presetId'].$delete(args, options))
}

export async function getStemmingDictionaries(options?: ClientRequestOptions) {
  return await parseResponse(client.stemming.dictionaries.$get(undefined, options))
}

export async function getStemmingDictionariesDictionaryId(
  args: InferRequestType<(typeof client.stemming.dictionaries)[':dictionaryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stemming.dictionaries[':dictionaryId'].$get(args, options))
}

export async function postStemmingDictionariesImport(
  args: InferRequestType<typeof client.stemming.dictionaries.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stemming.dictionaries.import.$post(args, options))
}

export async function getNlSearchModels(options?: ClientRequestOptions) {
  return await parseResponse(client.nl_search_models.$get(undefined, options))
}

export async function postNlSearchModels(
  args: InferRequestType<typeof client.nl_search_models.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nl_search_models.$post(args, options))
}

export async function getNlSearchModelsModelId(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nl_search_models[':modelId'].$get(args, options))
}

export async function putNlSearchModelsModelId(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nl_search_models[':modelId'].$put(args, options))
}

export async function deleteNlSearchModelsModelId(
  args: InferRequestType<(typeof client.nl_search_models)[':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nl_search_models[':modelId'].$delete(args, options))
}
