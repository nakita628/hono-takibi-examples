import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete1ClustersMappingUserIDRoute,
  delete1IndexesIndexNameObjectIDRoute,
  delete1IndexesIndexNameRoute,
  delete1IndexesIndexNameRulesObjectIDRoute,
  delete1IndexesIndexNameSynonymsObjectIDRoute,
  delete1KeysKeyRoute,
  delete1SecuritySourcesSourceRoute,
  deletePathRoute,
  get1ClustersMappingPendingRoute,
  get1ClustersMappingRoute,
  get1ClustersMappingTopRoute,
  get1ClustersMappingUserIDRoute,
  get1ClustersRoute,
  get1DictionariesStarLanguagesRoute,
  get1DictionariesStarSettingsRoute,
  get1IndexesIndexNameObjectIDRoute,
  get1IndexesIndexNameRulesObjectIDRoute,
  get1IndexesIndexNameSettingsRoute,
  get1IndexesIndexNameSynonymsObjectIDRoute,
  get1IndexesIndexNameTaskTaskIDRoute,
  get1IndexesRoute,
  get1KeysKeyRoute,
  get1KeysRoute,
  get1LogsRoute,
  get1SecuritySourcesRoute,
  get1TaskTaskIDRoute,
  getAccountCopyIndexRoute,
  getBrowseObjectsRoute,
  getChunkedBatchRoute,
  getGenerateSecuredApiKeyRoute,
  getIndexExistsRoute,
  getPathRoute,
  getReplaceAllObjectsRoute,
  getReplaceAllObjectsWithTransformationRoute,
  getSaveObjectsRoute,
  getSaveObjectsWithTransformationRoute,
  getSetClientApiKeyRoute,
  getWaitForApiKeyRoute,
  getWaitForAppTaskRoute,
  getWaitForTaskRoute,
  post1ClustersMappingBatchRoute,
  post1ClustersMappingRoute,
  post1ClustersMappingSearchRoute,
  post1DictionariesDictionaryNameBatchRoute,
  post1DictionariesDictionaryNameSearchRoute,
  post1IndexesIndexNameBatchRoute,
  post1IndexesIndexNameBrowseRoute,
  post1IndexesIndexNameClearRoute,
  post1IndexesIndexNameDeleteByQueryRoute,
  post1IndexesIndexNameFacetsFacetNameQueryRoute,
  post1IndexesIndexNameObjectIDPartialRoute,
  post1IndexesIndexNameOperationRoute,
  post1IndexesIndexNameQueryRoute,
  post1IndexesIndexNameRoute,
  post1IndexesIndexNameRulesBatchRoute,
  post1IndexesIndexNameRulesClearRoute,
  post1IndexesIndexNameRulesSearchRoute,
  post1IndexesIndexNameSynonymsBatchRoute,
  post1IndexesIndexNameSynonymsClearRoute,
  post1IndexesIndexNameSynonymsSearchRoute,
  post1IndexesStarBatchRoute,
  post1IndexesStarObjectsRoute,
  post1IndexesStarQueriesRoute,
  post1KeysKeyRestoreRoute,
  post1KeysRoute,
  post1SecuritySourcesAppendRoute,
  postDeleteObjectsRoute,
  postPartialUpdateObjectsRoute,
  postPartialUpdateObjectsWithTransformationRoute,
  postPathRoute,
  put1DictionariesStarSettingsRoute,
  put1IndexesIndexNameObjectIDRoute,
  put1IndexesIndexNameRulesObjectIDRoute,
  put1IndexesIndexNameSettingsRoute,
  put1IndexesIndexNameSynonymsObjectIDRoute,
  put1KeysKeyRoute,
  put1SecuritySourcesRoute,
  putPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesStarQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameFacetsFacetNameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesIndexNameObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1IndexesIndexNameObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1IndexesIndexNameObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameDeleteByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameObjectIDPartialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesStarBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesStarObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesIndexNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1IndexesIndexNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesIndexNameSynonymsObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1IndexesIndexNameSynonymsObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1IndexesIndexNameSynonymsObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameSynonymsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameSynonymsClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameSynonymsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1KeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1KeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1KeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1KeysKeyRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesIndexNameRulesObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1IndexesIndexNameRulesObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1IndexesIndexNameRulesObjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameRulesClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameRulesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1DictionariesDictionaryNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1DictionariesDictionaryNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1DictionariesStarSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1DictionariesStarSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1DictionariesStarLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1ClustersMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1ClustersMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1ClustersMappingBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1ClustersMappingTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1ClustersMappingUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1ClustersMappingUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1ClustersMappingSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1ClustersMappingPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1SecuritySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put1SecuritySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1SecuritySourcesAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete1SecuritySourcesSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1TaskTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesIndexNameTaskTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post1IndexesIndexNameOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get1IndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWaitForApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWaitForTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWaitForAppTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenerateSecuredApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCopyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReplaceAllObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReplaceAllObjectsWithTransformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChunkedBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSaveObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSaveObjectsWithTransformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartialUpdateObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPartialUpdateObjectsWithTransformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetClientApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
