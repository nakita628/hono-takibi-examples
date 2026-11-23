import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPath(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].$get(args, options))
}

export async function putPath(
  args: InferRequestType<(typeof client)[':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].$put(args, options))
}

export async function postPath(
  args: InferRequestType<(typeof client)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].$post(args, options))
}

export async function deletePath(
  args: InferRequestType<(typeof client)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':path'].$delete(args, options))
}

export async function post1IndexesIndexNameQuery(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].query.$post(args, options))
}

export async function post1IndexesStarQueries(
  args: InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes['*'].queries.$post(args, options))
}

export async function post1IndexesIndexNameFacetsFacetNameQuery(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].facets[':facetName'].query.$post(args, options),
  )
}

export async function post1IndexesIndexNameBrowse(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].browse.$post(args, options))
}

export async function post1IndexesIndexName(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].$post(args, options))
}

export async function delete1IndexesIndexName(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].$delete(args, options))
}

export async function get1IndexesIndexNameObjectID(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'][':objectID'].$get(args, options))
}

export async function put1IndexesIndexNameObjectID(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'][':objectID'].$put(args, options))
}

export async function delete1IndexesIndexNameObjectID(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'][':objectID'].$delete(args, options))
}

export async function post1IndexesIndexNameDeleteByQuery(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].deleteByQuery.$post(args, options))
}

export async function post1IndexesIndexNameClear(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].clear.$post(args, options))
}

export async function post1IndexesIndexNameObjectIDPartial(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'][':objectID'].partial.$post(args, options),
  )
}

export async function post1IndexesIndexNameBatch(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].batch.$post(args, options))
}

export async function post1IndexesStarBatch(
  args: InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes['*'].batch.$post(args, options))
}

export async function post1IndexesStarObjects(
  args: InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes['*'].objects.$post(args, options))
}

export async function get1IndexesIndexNameSettings(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].settings.$get(args, options))
}

export async function put1IndexesIndexNameSettings(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].settings.$put(args, options))
}

export async function get1IndexesIndexNameSynonymsObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].synonyms[':objectID'].$get(args, options),
  )
}

export async function put1IndexesIndexNameSynonymsObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].synonyms[':objectID'].$put(args, options),
  )
}

export async function delete1IndexesIndexNameSynonymsObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].synonyms[':objectID'].$delete(args, options),
  )
}

export async function post1IndexesIndexNameSynonymsBatch(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].synonyms.batch.$post(args, options))
}

export async function post1IndexesIndexNameSynonymsClear(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].synonyms.clear.$post(args, options))
}

export async function post1IndexesIndexNameSynonymsSearch(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].synonyms.search.$post(args, options))
}

export async function get1Keys(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].keys.$get(undefined, options))
}

export async function post1Keys(
  args: InferRequestType<(typeof client)['1']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].keys.$post(args, options))
}

export async function get1KeysKey(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].keys[':key'].$get(args, options))
}

export async function put1KeysKey(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].keys[':key'].$put(args, options))
}

export async function delete1KeysKey(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].keys[':key'].$delete(args, options))
}

export async function post1KeysKeyRestore(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].keys[':key'].restore.$post(args, options))
}

export async function get1IndexesIndexNameRulesObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].rules[':objectID'].$get(args, options),
  )
}

export async function put1IndexesIndexNameRulesObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].rules[':objectID'].$put(args, options),
  )
}

export async function delete1IndexesIndexNameRulesObjectID(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].indexes[':indexName'].rules[':objectID'].$delete(args, options),
  )
}

export async function post1IndexesIndexNameRulesBatch(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].rules.batch.$post(args, options))
}

export async function post1IndexesIndexNameRulesClear(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].rules.clear.$post(args, options))
}

export async function post1IndexesIndexNameRulesSearch(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].rules.search.$post(args, options))
}

export async function post1DictionariesDictionaryNameBatch(
  args: InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].dictionaries[':dictionaryName'].batch.$post(args, options))
}

export async function post1DictionariesDictionaryNameSearch(
  args: InferRequestType<
    (typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1'].dictionaries[':dictionaryName'].search.$post(args, options),
  )
}

export async function get1DictionariesStarSettings(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].dictionaries['*'].settings.$get(undefined, options))
}

export async function put1DictionariesStarSettings(
  args: InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].dictionaries['*'].settings.$put(args, options))
}

export async function get1DictionariesStarLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].dictionaries['*'].languages.$get(undefined, options))
}

export async function get1ClustersMapping(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping.$get(args, options))
}

export async function post1ClustersMapping(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping.$post(args, options))
}

export async function post1ClustersMappingBatch(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping.batch.$post(args, options))
}

export async function get1ClustersMappingTop(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].clusters.mapping.top.$get(undefined, options))
}

export async function get1ClustersMappingUserID(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping[':userID'].$get(args, options))
}

export async function delete1ClustersMappingUserID(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping[':userID'].$delete(args, options))
}

export async function get1Clusters(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].clusters.$get(undefined, options))
}

export async function post1ClustersMappingSearch(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping.search.$post(args, options))
}

export async function get1ClustersMappingPending(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].clusters.mapping.pending.$get(args, options))
}

export async function get1SecuritySources(options?: ClientRequestOptions) {
  return await parseResponse(client['1'].security.sources.$get(undefined, options))
}

export async function put1SecuritySources(
  args: InferRequestType<(typeof client)['1']['security']['sources']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].security.sources.$put(args, options))
}

export async function post1SecuritySourcesAppend(
  args: InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].security.sources.append.$post(args, options))
}

export async function delete1SecuritySourcesSource(
  args: InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].security.sources[':source'].$delete(args, options))
}

export async function get1Logs(
  args: InferRequestType<(typeof client)['1']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].logs.$get(args, options))
}

export async function get1TaskTaskID(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].task[':taskID'].$get(args, options))
}

export async function get1IndexesIndexNameTaskTaskID(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].task[':taskID'].$get(args, options))
}

export async function post1IndexesIndexNameOperation(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes[':indexName'].operation.$post(args, options))
}

export async function get1Indexes(
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['1'].indexes.$get(args, options))
}

export async function getWaitForApiKey(
  args: InferRequestType<typeof client.waitForApiKey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitForApiKey.$get(args, options))
}

export async function getWaitForTask(
  args: InferRequestType<typeof client.waitForTask.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitForTask.$get(args, options))
}

export async function getWaitForAppTask(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.waitForAppTask.$get(args, options))
}

export async function getBrowseObjects(
  args: InferRequestType<typeof client.browseObjects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browseObjects.$get(args, options))
}

export async function getGenerateSecuredApiKey(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generateSecuredApiKey.$get(args, options))
}

export async function getAccountCopyIndex(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountCopyIndex.$get(args, options))
}

export async function getReplaceAllObjects(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replaceAllObjects.$get(args, options))
}

export async function getReplaceAllObjectsWithTransformation(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replaceAllObjectsWithTransformation.$get(args, options))
}

export async function getChunkedBatch(
  args: InferRequestType<typeof client.chunkedBatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chunkedBatch.$get(args, options))
}

export async function getSaveObjects(
  args: InferRequestType<typeof client.saveObjects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveObjects.$get(args, options))
}

export async function getSaveObjectsWithTransformation(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveObjectsWithTransformation.$get(args, options))
}

export async function postDeleteObjects(
  args: InferRequestType<typeof client.deleteObjects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteObjects.$post(args, options))
}

export async function postPartialUpdateObjects(
  args: InferRequestType<typeof client.partialUpdateObjects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partialUpdateObjects.$post(args, options))
}

export async function postPartialUpdateObjectsWithTransformation(
  args: InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.partialUpdateObjectsWithTransformation.$post(args, options))
}

export async function getIndexExists(
  args: InferRequestType<typeof client.indexExists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexExists.$get(args, options))
}

export async function getSetClientApiKey(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setClientApiKey.$get(args, options))
}
