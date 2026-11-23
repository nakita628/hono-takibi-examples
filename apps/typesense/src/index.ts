import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesAliasNameRoute,
  deleteAnalyticsRulesRuleNameRoute,
  deleteCollectionsCollectionNameDocumentsDocumentIdRoute,
  deleteCollectionsCollectionNameDocumentsRoute,
  deleteCollectionsCollectionNameRoute,
  deleteConversationsModelsModelIdRoute,
  deleteCurationSetsCurationSetNameItemsItemIdRoute,
  deleteCurationSetsCurationSetNameRoute,
  deleteKeysKeyIdRoute,
  deleteNlSearchModelsModelIdRoute,
  deletePresetsPresetIdRoute,
  deleteStopwordsSetIdRoute,
  deleteSynonymSetsSynonymSetNameItemsItemIdRoute,
  deleteSynonymSetsSynonymSetNameRoute,
  getAliasesAliasNameRoute,
  getAliasesRoute,
  getAnalyticsEventsRoute,
  getAnalyticsRulesRoute,
  getAnalyticsRulesRuleNameRoute,
  getAnalyticsStatusRoute,
  getCollectionsCollectionNameDocumentsDocumentIdRoute,
  getCollectionsCollectionNameDocumentsExportRoute,
  getCollectionsCollectionNameDocumentsSearchRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  getConversationsModelsModelIdRoute,
  getConversationsModelsRoute,
  getCurationSetsCurationSetNameItemsItemIdRoute,
  getCurationSetsCurationSetNameItemsRoute,
  getCurationSetsCurationSetNameRoute,
  getCurationSetsRoute,
  getDebugRoute,
  getHealthRoute,
  getKeysKeyIdRoute,
  getKeysRoute,
  getMetricsJsonRoute,
  getNlSearchModelsModelIdRoute,
  getNlSearchModelsRoute,
  getOperationsSchemaChangesRoute,
  getPresetsPresetIdRoute,
  getPresetsRoute,
  getStatsJsonRoute,
  getStemmingDictionariesDictionaryIdRoute,
  getStemmingDictionariesRoute,
  getStopwordsRoute,
  getStopwordsSetIdRoute,
  getSynonymSetsRoute,
  getSynonymSetsSynonymSetNameItemsItemIdRoute,
  getSynonymSetsSynonymSetNameItemsRoute,
  getSynonymSetsSynonymSetNameRoute,
  patchCollectionsCollectionNameDocumentsDocumentIdRoute,
  patchCollectionsCollectionNameDocumentsRoute,
  patchCollectionsCollectionNameRoute,
  postAnalyticsEventsRoute,
  postAnalyticsFlushRoute,
  postAnalyticsRulesRoute,
  postCollectionsCollectionNameDocumentsImportRoute,
  postCollectionsCollectionNameDocumentsRoute,
  postCollectionsRoute,
  postConfigRoute,
  postConversationsModelsRoute,
  postKeysRoute,
  postMultiSearchRoute,
  postNlSearchModelsRoute,
  postOperationsCacheClearRoute,
  postOperationsDbCompactRoute,
  postOperationsSnapshotRoute,
  postOperationsVoteRoute,
  postStemmingDictionariesImportRoute,
  putAliasesAliasNameRoute,
  putAnalyticsRulesRuleNameRoute,
  putConversationsModelsModelIdRoute,
  putCurationSetsCurationSetNameItemsItemIdRoute,
  putCurationSetsCurationSetNameRoute,
  putNlSearchModelsModelIdRoute,
  putPresetsPresetIdRoute,
  putStopwordsSetIdRoute,
  putSynonymSetsSynonymSetNameItemsItemIdRoute,
  putSynonymSetsSynonymSetNameRoute,
} from './routes'
import {
  deleteAliasesAliasNameRouteHandler,
  deleteAnalyticsRulesRuleNameRouteHandler,
  deleteCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  deleteCollectionsCollectionNameDocumentsRouteHandler,
  deleteCollectionsCollectionNameRouteHandler,
  deleteConversationsModelsModelIdRouteHandler,
  deleteCurationSetsCurationSetNameItemsItemIdRouteHandler,
  deleteCurationSetsCurationSetNameRouteHandler,
  deleteKeysKeyIdRouteHandler,
  deleteNlSearchModelsModelIdRouteHandler,
  deletePresetsPresetIdRouteHandler,
  deleteStopwordsSetIdRouteHandler,
  deleteSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  deleteSynonymSetsSynonymSetNameRouteHandler,
  getAliasesAliasNameRouteHandler,
  getAliasesRouteHandler,
  getAnalyticsEventsRouteHandler,
  getAnalyticsRulesRouteHandler,
  getAnalyticsRulesRuleNameRouteHandler,
  getAnalyticsStatusRouteHandler,
  getCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  getCollectionsCollectionNameDocumentsExportRouteHandler,
  getCollectionsCollectionNameDocumentsSearchRouteHandler,
  getCollectionsCollectionNameRouteHandler,
  getCollectionsRouteHandler,
  getConversationsModelsModelIdRouteHandler,
  getConversationsModelsRouteHandler,
  getCurationSetsCurationSetNameItemsItemIdRouteHandler,
  getCurationSetsCurationSetNameItemsRouteHandler,
  getCurationSetsCurationSetNameRouteHandler,
  getCurationSetsRouteHandler,
  getDebugRouteHandler,
  getHealthRouteHandler,
  getKeysKeyIdRouteHandler,
  getKeysRouteHandler,
  getMetricsJsonRouteHandler,
  getNlSearchModelsModelIdRouteHandler,
  getNlSearchModelsRouteHandler,
  getOperationsSchemaChangesRouteHandler,
  getPresetsPresetIdRouteHandler,
  getPresetsRouteHandler,
  getStatsJsonRouteHandler,
  getStemmingDictionariesDictionaryIdRouteHandler,
  getStemmingDictionariesRouteHandler,
  getStopwordsRouteHandler,
  getStopwordsSetIdRouteHandler,
  getSynonymSetsRouteHandler,
  getSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  getSynonymSetsSynonymSetNameItemsRouteHandler,
  getSynonymSetsSynonymSetNameRouteHandler,
  patchCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  patchCollectionsCollectionNameDocumentsRouteHandler,
  patchCollectionsCollectionNameRouteHandler,
  postAnalyticsEventsRouteHandler,
  postAnalyticsFlushRouteHandler,
  postAnalyticsRulesRouteHandler,
  postCollectionsCollectionNameDocumentsImportRouteHandler,
  postCollectionsCollectionNameDocumentsRouteHandler,
  postCollectionsRouteHandler,
  postConfigRouteHandler,
  postConversationsModelsRouteHandler,
  postKeysRouteHandler,
  postMultiSearchRouteHandler,
  postNlSearchModelsRouteHandler,
  postOperationsCacheClearRouteHandler,
  postOperationsDbCompactRouteHandler,
  postOperationsSnapshotRouteHandler,
  postOperationsVoteRouteHandler,
  postStemmingDictionariesImportRouteHandler,
  putAliasesAliasNameRouteHandler,
  putAnalyticsRulesRuleNameRouteHandler,
  putConversationsModelsModelIdRouteHandler,
  putCurationSetsCurationSetNameItemsItemIdRouteHandler,
  putCurationSetsCurationSetNameRouteHandler,
  putNlSearchModelsModelIdRouteHandler,
  putPresetsPresetIdRouteHandler,
  putStopwordsSetIdRouteHandler,
  putSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  putSynonymSetsSynonymSetNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(getCollectionsCollectionNameRoute, getCollectionsCollectionNameRouteHandler)
  .openapi(patchCollectionsCollectionNameRoute, patchCollectionsCollectionNameRouteHandler)
  .openapi(deleteCollectionsCollectionNameRoute, deleteCollectionsCollectionNameRouteHandler)
  .openapi(
    postCollectionsCollectionNameDocumentsRoute,
    postCollectionsCollectionNameDocumentsRouteHandler,
  )
  .openapi(
    patchCollectionsCollectionNameDocumentsRoute,
    patchCollectionsCollectionNameDocumentsRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionNameDocumentsRoute,
    deleteCollectionsCollectionNameDocumentsRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameDocumentsSearchRoute,
    getCollectionsCollectionNameDocumentsSearchRouteHandler,
  )
  .openapi(getSynonymSetsRoute, getSynonymSetsRouteHandler)
  .openapi(getSynonymSetsSynonymSetNameRoute, getSynonymSetsSynonymSetNameRouteHandler)
  .openapi(putSynonymSetsSynonymSetNameRoute, putSynonymSetsSynonymSetNameRouteHandler)
  .openapi(deleteSynonymSetsSynonymSetNameRoute, deleteSynonymSetsSynonymSetNameRouteHandler)
  .openapi(getSynonymSetsSynonymSetNameItemsRoute, getSynonymSetsSynonymSetNameItemsRouteHandler)
  .openapi(
    getSynonymSetsSynonymSetNameItemsItemIdRoute,
    getSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  )
  .openapi(
    putSynonymSetsSynonymSetNameItemsItemIdRoute,
    putSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  )
  .openapi(
    deleteSynonymSetsSynonymSetNameItemsItemIdRoute,
    deleteSynonymSetsSynonymSetNameItemsItemIdRouteHandler,
  )
  .openapi(getCurationSetsRoute, getCurationSetsRouteHandler)
  .openapi(getCurationSetsCurationSetNameRoute, getCurationSetsCurationSetNameRouteHandler)
  .openapi(putCurationSetsCurationSetNameRoute, putCurationSetsCurationSetNameRouteHandler)
  .openapi(deleteCurationSetsCurationSetNameRoute, deleteCurationSetsCurationSetNameRouteHandler)
  .openapi(
    getCurationSetsCurationSetNameItemsRoute,
    getCurationSetsCurationSetNameItemsRouteHandler,
  )
  .openapi(
    getCurationSetsCurationSetNameItemsItemIdRoute,
    getCurationSetsCurationSetNameItemsItemIdRouteHandler,
  )
  .openapi(
    putCurationSetsCurationSetNameItemsItemIdRoute,
    putCurationSetsCurationSetNameItemsItemIdRouteHandler,
  )
  .openapi(
    deleteCurationSetsCurationSetNameItemsItemIdRoute,
    deleteCurationSetsCurationSetNameItemsItemIdRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameDocumentsExportRoute,
    getCollectionsCollectionNameDocumentsExportRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNameDocumentsImportRoute,
    postCollectionsCollectionNameDocumentsImportRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameDocumentsDocumentIdRoute,
    getCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    patchCollectionsCollectionNameDocumentsDocumentIdRoute,
    patchCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionNameDocumentsDocumentIdRoute,
    deleteCollectionsCollectionNameDocumentsDocumentIdRouteHandler,
  )
  .openapi(getConversationsModelsRoute, getConversationsModelsRouteHandler)
  .openapi(postConversationsModelsRoute, postConversationsModelsRouteHandler)
  .openapi(getConversationsModelsModelIdRoute, getConversationsModelsModelIdRouteHandler)
  .openapi(putConversationsModelsModelIdRoute, putConversationsModelsModelIdRouteHandler)
  .openapi(deleteConversationsModelsModelIdRoute, deleteConversationsModelsModelIdRouteHandler)
  .openapi(getKeysRoute, getKeysRouteHandler)
  .openapi(postKeysRoute, postKeysRouteHandler)
  .openapi(getKeysKeyIdRoute, getKeysKeyIdRouteHandler)
  .openapi(deleteKeysKeyIdRoute, deleteKeysKeyIdRouteHandler)
  .openapi(getAliasesRoute, getAliasesRouteHandler)
  .openapi(putAliasesAliasNameRoute, putAliasesAliasNameRouteHandler)
  .openapi(getAliasesAliasNameRoute, getAliasesAliasNameRouteHandler)
  .openapi(deleteAliasesAliasNameRoute, deleteAliasesAliasNameRouteHandler)
  .openapi(getDebugRoute, getDebugRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getOperationsSchemaChangesRoute, getOperationsSchemaChangesRouteHandler)
  .openapi(postOperationsSnapshotRoute, postOperationsSnapshotRouteHandler)
  .openapi(postOperationsVoteRoute, postOperationsVoteRouteHandler)
  .openapi(postOperationsCacheClearRoute, postOperationsCacheClearRouteHandler)
  .openapi(postOperationsDbCompactRoute, postOperationsDbCompactRouteHandler)
  .openapi(postConfigRoute, postConfigRouteHandler)
  .openapi(postMultiSearchRoute, postMultiSearchRouteHandler)
  .openapi(postAnalyticsEventsRoute, postAnalyticsEventsRouteHandler)
  .openapi(getAnalyticsEventsRoute, getAnalyticsEventsRouteHandler)
  .openapi(postAnalyticsFlushRoute, postAnalyticsFlushRouteHandler)
  .openapi(getAnalyticsStatusRoute, getAnalyticsStatusRouteHandler)
  .openapi(postAnalyticsRulesRoute, postAnalyticsRulesRouteHandler)
  .openapi(getAnalyticsRulesRoute, getAnalyticsRulesRouteHandler)
  .openapi(putAnalyticsRulesRuleNameRoute, putAnalyticsRulesRuleNameRouteHandler)
  .openapi(getAnalyticsRulesRuleNameRoute, getAnalyticsRulesRuleNameRouteHandler)
  .openapi(deleteAnalyticsRulesRuleNameRoute, deleteAnalyticsRulesRuleNameRouteHandler)
  .openapi(getMetricsJsonRoute, getMetricsJsonRouteHandler)
  .openapi(getStatsJsonRoute, getStatsJsonRouteHandler)
  .openapi(getStopwordsRoute, getStopwordsRouteHandler)
  .openapi(putStopwordsSetIdRoute, putStopwordsSetIdRouteHandler)
  .openapi(getStopwordsSetIdRoute, getStopwordsSetIdRouteHandler)
  .openapi(deleteStopwordsSetIdRoute, deleteStopwordsSetIdRouteHandler)
  .openapi(getPresetsRoute, getPresetsRouteHandler)
  .openapi(getPresetsPresetIdRoute, getPresetsPresetIdRouteHandler)
  .openapi(putPresetsPresetIdRoute, putPresetsPresetIdRouteHandler)
  .openapi(deletePresetsPresetIdRoute, deletePresetsPresetIdRouteHandler)
  .openapi(getStemmingDictionariesRoute, getStemmingDictionariesRouteHandler)
  .openapi(
    getStemmingDictionariesDictionaryIdRoute,
    getStemmingDictionariesDictionaryIdRouteHandler,
  )
  .openapi(postStemmingDictionariesImportRoute, postStemmingDictionariesImportRouteHandler)
  .openapi(getNlSearchModelsRoute, getNlSearchModelsRouteHandler)
  .openapi(postNlSearchModelsRoute, postNlSearchModelsRouteHandler)
  .openapi(getNlSearchModelsModelIdRoute, getNlSearchModelsModelIdRouteHandler)
  .openapi(putNlSearchModelsModelIdRoute, putNlSearchModelsModelIdRouteHandler)
  .openapi(deleteNlSearchModelsModelIdRoute, deleteNlSearchModelsModelIdRouteHandler)

export default app
