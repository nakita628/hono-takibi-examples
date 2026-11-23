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
} from './routes'
import {
  delete1ClustersMappingUserIDRouteHandler,
  delete1IndexesIndexNameObjectIDRouteHandler,
  delete1IndexesIndexNameRouteHandler,
  delete1IndexesIndexNameRulesObjectIDRouteHandler,
  delete1IndexesIndexNameSynonymsObjectIDRouteHandler,
  delete1KeysKeyRouteHandler,
  delete1SecuritySourcesSourceRouteHandler,
  deletePathRouteHandler,
  get1ClustersMappingPendingRouteHandler,
  get1ClustersMappingRouteHandler,
  get1ClustersMappingTopRouteHandler,
  get1ClustersMappingUserIDRouteHandler,
  get1ClustersRouteHandler,
  get1DictionariesStarLanguagesRouteHandler,
  get1DictionariesStarSettingsRouteHandler,
  get1IndexesIndexNameObjectIDRouteHandler,
  get1IndexesIndexNameRulesObjectIDRouteHandler,
  get1IndexesIndexNameSettingsRouteHandler,
  get1IndexesIndexNameSynonymsObjectIDRouteHandler,
  get1IndexesIndexNameTaskTaskIDRouteHandler,
  get1IndexesRouteHandler,
  get1KeysKeyRouteHandler,
  get1KeysRouteHandler,
  get1LogsRouteHandler,
  get1SecuritySourcesRouteHandler,
  get1TaskTaskIDRouteHandler,
  getAccountCopyIndexRouteHandler,
  getBrowseObjectsRouteHandler,
  getChunkedBatchRouteHandler,
  getGenerateSecuredApiKeyRouteHandler,
  getIndexExistsRouteHandler,
  getPathRouteHandler,
  getReplaceAllObjectsRouteHandler,
  getReplaceAllObjectsWithTransformationRouteHandler,
  getSaveObjectsRouteHandler,
  getSaveObjectsWithTransformationRouteHandler,
  getSetClientApiKeyRouteHandler,
  getWaitForApiKeyRouteHandler,
  getWaitForAppTaskRouteHandler,
  getWaitForTaskRouteHandler,
  post1ClustersMappingBatchRouteHandler,
  post1ClustersMappingRouteHandler,
  post1ClustersMappingSearchRouteHandler,
  post1DictionariesDictionaryNameBatchRouteHandler,
  post1DictionariesDictionaryNameSearchRouteHandler,
  post1IndexesIndexNameBatchRouteHandler,
  post1IndexesIndexNameBrowseRouteHandler,
  post1IndexesIndexNameClearRouteHandler,
  post1IndexesIndexNameDeleteByQueryRouteHandler,
  post1IndexesIndexNameFacetsFacetNameQueryRouteHandler,
  post1IndexesIndexNameObjectIDPartialRouteHandler,
  post1IndexesIndexNameOperationRouteHandler,
  post1IndexesIndexNameQueryRouteHandler,
  post1IndexesIndexNameRouteHandler,
  post1IndexesIndexNameRulesBatchRouteHandler,
  post1IndexesIndexNameRulesClearRouteHandler,
  post1IndexesIndexNameRulesSearchRouteHandler,
  post1IndexesIndexNameSynonymsBatchRouteHandler,
  post1IndexesIndexNameSynonymsClearRouteHandler,
  post1IndexesIndexNameSynonymsSearchRouteHandler,
  post1IndexesStarBatchRouteHandler,
  post1IndexesStarObjectsRouteHandler,
  post1IndexesStarQueriesRouteHandler,
  post1KeysKeyRestoreRouteHandler,
  post1KeysRouteHandler,
  post1SecuritySourcesAppendRouteHandler,
  postDeleteObjectsRouteHandler,
  postPartialUpdateObjectsRouteHandler,
  postPartialUpdateObjectsWithTransformationRouteHandler,
  postPathRouteHandler,
  put1DictionariesStarSettingsRouteHandler,
  put1IndexesIndexNameObjectIDRouteHandler,
  put1IndexesIndexNameRulesObjectIDRouteHandler,
  put1IndexesIndexNameSettingsRouteHandler,
  put1IndexesIndexNameSynonymsObjectIDRouteHandler,
  put1KeysKeyRouteHandler,
  put1SecuritySourcesRouteHandler,
  putPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPathRoute, getPathRouteHandler)
  .openapi(postPathRoute, postPathRouteHandler)
  .openapi(putPathRoute, putPathRouteHandler)
  .openapi(deletePathRoute, deletePathRouteHandler)
  .openapi(post1IndexesIndexNameQueryRoute, post1IndexesIndexNameQueryRouteHandler)
  .openapi(post1IndexesStarQueriesRoute, post1IndexesStarQueriesRouteHandler)
  .openapi(
    post1IndexesIndexNameFacetsFacetNameQueryRoute,
    post1IndexesIndexNameFacetsFacetNameQueryRouteHandler,
  )
  .openapi(post1IndexesIndexNameBrowseRoute, post1IndexesIndexNameBrowseRouteHandler)
  .openapi(post1IndexesIndexNameRoute, post1IndexesIndexNameRouteHandler)
  .openapi(delete1IndexesIndexNameRoute, delete1IndexesIndexNameRouteHandler)
  .openapi(get1IndexesIndexNameObjectIDRoute, get1IndexesIndexNameObjectIDRouteHandler)
  .openapi(put1IndexesIndexNameObjectIDRoute, put1IndexesIndexNameObjectIDRouteHandler)
  .openapi(delete1IndexesIndexNameObjectIDRoute, delete1IndexesIndexNameObjectIDRouteHandler)
  .openapi(post1IndexesIndexNameDeleteByQueryRoute, post1IndexesIndexNameDeleteByQueryRouteHandler)
  .openapi(post1IndexesIndexNameClearRoute, post1IndexesIndexNameClearRouteHandler)
  .openapi(
    post1IndexesIndexNameObjectIDPartialRoute,
    post1IndexesIndexNameObjectIDPartialRouteHandler,
  )
  .openapi(post1IndexesIndexNameBatchRoute, post1IndexesIndexNameBatchRouteHandler)
  .openapi(post1IndexesStarBatchRoute, post1IndexesStarBatchRouteHandler)
  .openapi(post1IndexesStarObjectsRoute, post1IndexesStarObjectsRouteHandler)
  .openapi(get1IndexesIndexNameSettingsRoute, get1IndexesIndexNameSettingsRouteHandler)
  .openapi(put1IndexesIndexNameSettingsRoute, put1IndexesIndexNameSettingsRouteHandler)
  .openapi(
    get1IndexesIndexNameSynonymsObjectIDRoute,
    get1IndexesIndexNameSynonymsObjectIDRouteHandler,
  )
  .openapi(
    put1IndexesIndexNameSynonymsObjectIDRoute,
    put1IndexesIndexNameSynonymsObjectIDRouteHandler,
  )
  .openapi(
    delete1IndexesIndexNameSynonymsObjectIDRoute,
    delete1IndexesIndexNameSynonymsObjectIDRouteHandler,
  )
  .openapi(post1IndexesIndexNameSynonymsBatchRoute, post1IndexesIndexNameSynonymsBatchRouteHandler)
  .openapi(post1IndexesIndexNameSynonymsClearRoute, post1IndexesIndexNameSynonymsClearRouteHandler)
  .openapi(
    post1IndexesIndexNameSynonymsSearchRoute,
    post1IndexesIndexNameSynonymsSearchRouteHandler,
  )
  .openapi(get1KeysRoute, get1KeysRouteHandler)
  .openapi(post1KeysRoute, post1KeysRouteHandler)
  .openapi(get1KeysKeyRoute, get1KeysKeyRouteHandler)
  .openapi(put1KeysKeyRoute, put1KeysKeyRouteHandler)
  .openapi(delete1KeysKeyRoute, delete1KeysKeyRouteHandler)
  .openapi(post1KeysKeyRestoreRoute, post1KeysKeyRestoreRouteHandler)
  .openapi(get1IndexesIndexNameRulesObjectIDRoute, get1IndexesIndexNameRulesObjectIDRouteHandler)
  .openapi(put1IndexesIndexNameRulesObjectIDRoute, put1IndexesIndexNameRulesObjectIDRouteHandler)
  .openapi(
    delete1IndexesIndexNameRulesObjectIDRoute,
    delete1IndexesIndexNameRulesObjectIDRouteHandler,
  )
  .openapi(post1IndexesIndexNameRulesBatchRoute, post1IndexesIndexNameRulesBatchRouteHandler)
  .openapi(post1IndexesIndexNameRulesClearRoute, post1IndexesIndexNameRulesClearRouteHandler)
  .openapi(post1IndexesIndexNameRulesSearchRoute, post1IndexesIndexNameRulesSearchRouteHandler)
  .openapi(
    post1DictionariesDictionaryNameBatchRoute,
    post1DictionariesDictionaryNameBatchRouteHandler,
  )
  .openapi(
    post1DictionariesDictionaryNameSearchRoute,
    post1DictionariesDictionaryNameSearchRouteHandler,
  )
  .openapi(get1DictionariesStarSettingsRoute, get1DictionariesStarSettingsRouteHandler)
  .openapi(put1DictionariesStarSettingsRoute, put1DictionariesStarSettingsRouteHandler)
  .openapi(get1DictionariesStarLanguagesRoute, get1DictionariesStarLanguagesRouteHandler)
  .openapi(post1ClustersMappingRoute, post1ClustersMappingRouteHandler)
  .openapi(get1ClustersMappingRoute, get1ClustersMappingRouteHandler)
  .openapi(post1ClustersMappingBatchRoute, post1ClustersMappingBatchRouteHandler)
  .openapi(get1ClustersMappingTopRoute, get1ClustersMappingTopRouteHandler)
  .openapi(get1ClustersMappingUserIDRoute, get1ClustersMappingUserIDRouteHandler)
  .openapi(delete1ClustersMappingUserIDRoute, delete1ClustersMappingUserIDRouteHandler)
  .openapi(get1ClustersRoute, get1ClustersRouteHandler)
  .openapi(post1ClustersMappingSearchRoute, post1ClustersMappingSearchRouteHandler)
  .openapi(get1ClustersMappingPendingRoute, get1ClustersMappingPendingRouteHandler)
  .openapi(get1SecuritySourcesRoute, get1SecuritySourcesRouteHandler)
  .openapi(put1SecuritySourcesRoute, put1SecuritySourcesRouteHandler)
  .openapi(post1SecuritySourcesAppendRoute, post1SecuritySourcesAppendRouteHandler)
  .openapi(delete1SecuritySourcesSourceRoute, delete1SecuritySourcesSourceRouteHandler)
  .openapi(get1LogsRoute, get1LogsRouteHandler)
  .openapi(get1TaskTaskIDRoute, get1TaskTaskIDRouteHandler)
  .openapi(get1IndexesIndexNameTaskTaskIDRoute, get1IndexesIndexNameTaskTaskIDRouteHandler)
  .openapi(post1IndexesIndexNameOperationRoute, post1IndexesIndexNameOperationRouteHandler)
  .openapi(get1IndexesRoute, get1IndexesRouteHandler)
  .openapi(getWaitForApiKeyRoute, getWaitForApiKeyRouteHandler)
  .openapi(getWaitForTaskRoute, getWaitForTaskRouteHandler)
  .openapi(getWaitForAppTaskRoute, getWaitForAppTaskRouteHandler)
  .openapi(getBrowseObjectsRoute, getBrowseObjectsRouteHandler)
  .openapi(getGenerateSecuredApiKeyRoute, getGenerateSecuredApiKeyRouteHandler)
  .openapi(getAccountCopyIndexRoute, getAccountCopyIndexRouteHandler)
  .openapi(getReplaceAllObjectsRoute, getReplaceAllObjectsRouteHandler)
  .openapi(
    getReplaceAllObjectsWithTransformationRoute,
    getReplaceAllObjectsWithTransformationRouteHandler,
  )
  .openapi(getChunkedBatchRoute, getChunkedBatchRouteHandler)
  .openapi(getSaveObjectsRoute, getSaveObjectsRouteHandler)
  .openapi(getSaveObjectsWithTransformationRoute, getSaveObjectsWithTransformationRouteHandler)
  .openapi(postDeleteObjectsRoute, postDeleteObjectsRouteHandler)
  .openapi(postPartialUpdateObjectsRoute, postPartialUpdateObjectsRouteHandler)
  .openapi(
    postPartialUpdateObjectsWithTransformationRoute,
    postPartialUpdateObjectsWithTransformationRouteHandler,
  )
  .openapi(getIndexExistsRoute, getIndexExistsRouteHandler)
  .openapi(getSetClientApiKeyRoute, getSetClientApiKeyRouteHandler)

export default app
