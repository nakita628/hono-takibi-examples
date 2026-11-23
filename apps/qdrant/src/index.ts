import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterPeerPeerIdRoute,
  deleteCollectionsCollectionNameIndexFieldNameRoute,
  deleteCollectionsCollectionNameRoute,
  deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
  deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute,
  deleteCollectionsCollectionNameVectorsVectorNameRoute,
  deleteIssuesRoute,
  deleteSnapshotsSnapshotNameRoute,
  getAliasesRoute,
  getClusterRoute,
  getClusterTelemetryRoute,
  getCollectionsCollectionNameAliasesRoute,
  getCollectionsCollectionNameClusterRoute,
  getCollectionsCollectionNameExistsRoute,
  getCollectionsCollectionNameOptimizationsRoute,
  getCollectionsCollectionNamePointsIdRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsCollectionNameShardsRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotsRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
  getCollectionsCollectionNameSnapshotsRoute,
  getCollectionsCollectionNameSnapshotsSnapshotNameRoute,
  getCollectionsRoute,
  getHealthzRoute,
  getIssuesRoute,
  getLivezRoute,
  getMetricsRoute,
  getQuotasRoute,
  getReadyzRoute,
  getRoute,
  getSnapshotsRoute,
  getSnapshotsSnapshotNameRoute,
  getTelemetryRoute,
  patchCollectionsCollectionNameRoute,
  postClusterRecoverRoute,
  postCollectionsAliasesRoute,
  postCollectionsCollectionNameClusterRoute,
  postCollectionsCollectionNameFacetRoute,
  postCollectionsCollectionNamePointsBatchRoute,
  postCollectionsCollectionNamePointsCountRoute,
  postCollectionsCollectionNamePointsDeleteRoute,
  postCollectionsCollectionNamePointsPayloadClearRoute,
  postCollectionsCollectionNamePointsPayloadDeleteRoute,
  postCollectionsCollectionNamePointsPayloadRoute,
  postCollectionsCollectionNamePointsQueryBatchRoute,
  postCollectionsCollectionNamePointsQueryGroupsRoute,
  postCollectionsCollectionNamePointsQueryRoute,
  postCollectionsCollectionNamePointsRoute,
  postCollectionsCollectionNamePointsScrollRoute,
  postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute,
  postCollectionsCollectionNamePointsSearchMatrixPairsRoute,
  postCollectionsCollectionNamePointsVectorsDeleteRoute,
  postCollectionsCollectionNameShardsDeleteRoute,
  postCollectionsCollectionNameShardsShardIdSnapshotsRoute,
  postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute,
  postCollectionsCollectionNameSnapshotsRoute,
  postCollectionsCollectionNameSnapshotsUploadRoute,
  postSnapshotsRoute,
  putCollectionsCollectionNameIndexRoute,
  putCollectionsCollectionNamePointsPayloadRoute,
  putCollectionsCollectionNamePointsRoute,
  putCollectionsCollectionNamePointsVectorsRoute,
  putCollectionsCollectionNameRoute,
  putCollectionsCollectionNameShardsRoute,
  putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute,
  putCollectionsCollectionNameSnapshotsRecoverRoute,
  putCollectionsCollectionNameVectorsVectorNameRoute,
  putQuotasRoute,
} from './routes'
import {
  deleteClusterPeerPeerIdRouteHandler,
  deleteCollectionsCollectionNameIndexFieldNameRouteHandler,
  deleteCollectionsCollectionNameRouteHandler,
  deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRouteHandler,
  deleteCollectionsCollectionNameSnapshotsSnapshotNameRouteHandler,
  deleteCollectionsCollectionNameVectorsVectorNameRouteHandler,
  deleteIssuesRouteHandler,
  deleteSnapshotsSnapshotNameRouteHandler,
  getAliasesRouteHandler,
  getClusterRouteHandler,
  getClusterTelemetryRouteHandler,
  getCollectionsCollectionNameAliasesRouteHandler,
  getCollectionsCollectionNameClusterRouteHandler,
  getCollectionsCollectionNameExistsRouteHandler,
  getCollectionsCollectionNameOptimizationsRouteHandler,
  getCollectionsCollectionNamePointsIdRouteHandler,
  getCollectionsCollectionNameRouteHandler,
  getCollectionsCollectionNameShardsRouteHandler,
  getCollectionsCollectionNameShardsShardIdSnapshotRouteHandler,
  getCollectionsCollectionNameShardsShardIdSnapshotsRouteHandler,
  getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRouteHandler,
  getCollectionsCollectionNameSnapshotsRouteHandler,
  getCollectionsCollectionNameSnapshotsSnapshotNameRouteHandler,
  getCollectionsRouteHandler,
  getHealthzRouteHandler,
  getIssuesRouteHandler,
  getLivezRouteHandler,
  getMetricsRouteHandler,
  getQuotasRouteHandler,
  getReadyzRouteHandler,
  getRouteHandler,
  getSnapshotsRouteHandler,
  getSnapshotsSnapshotNameRouteHandler,
  getTelemetryRouteHandler,
  patchCollectionsCollectionNameRouteHandler,
  postClusterRecoverRouteHandler,
  postCollectionsAliasesRouteHandler,
  postCollectionsCollectionNameClusterRouteHandler,
  postCollectionsCollectionNameFacetRouteHandler,
  postCollectionsCollectionNamePointsBatchRouteHandler,
  postCollectionsCollectionNamePointsCountRouteHandler,
  postCollectionsCollectionNamePointsDeleteRouteHandler,
  postCollectionsCollectionNamePointsPayloadClearRouteHandler,
  postCollectionsCollectionNamePointsPayloadDeleteRouteHandler,
  postCollectionsCollectionNamePointsPayloadRouteHandler,
  postCollectionsCollectionNamePointsQueryBatchRouteHandler,
  postCollectionsCollectionNamePointsQueryGroupsRouteHandler,
  postCollectionsCollectionNamePointsQueryRouteHandler,
  postCollectionsCollectionNamePointsRouteHandler,
  postCollectionsCollectionNamePointsScrollRouteHandler,
  postCollectionsCollectionNamePointsSearchMatrixOffsetsRouteHandler,
  postCollectionsCollectionNamePointsSearchMatrixPairsRouteHandler,
  postCollectionsCollectionNamePointsVectorsDeleteRouteHandler,
  postCollectionsCollectionNameShardsDeleteRouteHandler,
  postCollectionsCollectionNameShardsShardIdSnapshotsRouteHandler,
  postCollectionsCollectionNameShardsShardIdSnapshotsUploadRouteHandler,
  postCollectionsCollectionNameSnapshotsRouteHandler,
  postCollectionsCollectionNameSnapshotsUploadRouteHandler,
  postSnapshotsRouteHandler,
  putCollectionsCollectionNameIndexRouteHandler,
  putCollectionsCollectionNamePointsPayloadRouteHandler,
  putCollectionsCollectionNamePointsRouteHandler,
  putCollectionsCollectionNamePointsVectorsRouteHandler,
  putCollectionsCollectionNameRouteHandler,
  putCollectionsCollectionNameShardsRouteHandler,
  putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRouteHandler,
  putCollectionsCollectionNameSnapshotsRecoverRouteHandler,
  putCollectionsCollectionNameVectorsVectorNameRouteHandler,
  putQuotasRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putCollectionsCollectionNameShardsRoute, putCollectionsCollectionNameShardsRouteHandler)
  .openapi(getCollectionsCollectionNameShardsRoute, getCollectionsCollectionNameShardsRouteHandler)
  .openapi(
    postCollectionsCollectionNameShardsDeleteRoute,
    postCollectionsCollectionNameShardsDeleteRouteHandler,
  )
  .openapi(getRoute, getRouteHandler)
  .openapi(getTelemetryRoute, getTelemetryRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getHealthzRoute, getHealthzRouteHandler)
  .openapi(getLivezRoute, getLivezRouteHandler)
  .openapi(getReadyzRoute, getReadyzRouteHandler)
  .openapi(getIssuesRoute, getIssuesRouteHandler)
  .openapi(deleteIssuesRoute, deleteIssuesRouteHandler)
  .openapi(getClusterRoute, getClusterRouteHandler)
  .openapi(getClusterTelemetryRoute, getClusterTelemetryRouteHandler)
  .openapi(postClusterRecoverRoute, postClusterRecoverRouteHandler)
  .openapi(deleteClusterPeerPeerIdRoute, deleteClusterPeerPeerIdRouteHandler)
  .openapi(getQuotasRoute, getQuotasRouteHandler)
  .openapi(putQuotasRoute, putQuotasRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(getCollectionsCollectionNameRoute, getCollectionsCollectionNameRouteHandler)
  .openapi(putCollectionsCollectionNameRoute, putCollectionsCollectionNameRouteHandler)
  .openapi(patchCollectionsCollectionNameRoute, patchCollectionsCollectionNameRouteHandler)
  .openapi(deleteCollectionsCollectionNameRoute, deleteCollectionsCollectionNameRouteHandler)
  .openapi(postCollectionsAliasesRoute, postCollectionsAliasesRouteHandler)
  .openapi(putCollectionsCollectionNameIndexRoute, putCollectionsCollectionNameIndexRouteHandler)
  .openapi(getCollectionsCollectionNameExistsRoute, getCollectionsCollectionNameExistsRouteHandler)
  .openapi(
    deleteCollectionsCollectionNameIndexFieldNameRoute,
    deleteCollectionsCollectionNameIndexFieldNameRouteHandler,
  )
  .openapi(
    putCollectionsCollectionNameVectorsVectorNameRoute,
    putCollectionsCollectionNameVectorsVectorNameRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionNameVectorsVectorNameRoute,
    deleteCollectionsCollectionNameVectorsVectorNameRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameClusterRoute,
    getCollectionsCollectionNameClusterRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNameClusterRoute,
    postCollectionsCollectionNameClusterRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameOptimizationsRoute,
    getCollectionsCollectionNameOptimizationsRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameAliasesRoute,
    getCollectionsCollectionNameAliasesRouteHandler,
  )
  .openapi(getAliasesRoute, getAliasesRouteHandler)
  .openapi(
    postCollectionsCollectionNameSnapshotsUploadRoute,
    postCollectionsCollectionNameSnapshotsUploadRouteHandler,
  )
  .openapi(
    putCollectionsCollectionNameSnapshotsRecoverRoute,
    putCollectionsCollectionNameSnapshotsRecoverRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameSnapshotsRoute,
    getCollectionsCollectionNameSnapshotsRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNameSnapshotsRoute,
    postCollectionsCollectionNameSnapshotsRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute,
    deleteCollectionsCollectionNameSnapshotsSnapshotNameRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameSnapshotsSnapshotNameRoute,
    getCollectionsCollectionNameSnapshotsSnapshotNameRouteHandler,
  )
  .openapi(getSnapshotsRoute, getSnapshotsRouteHandler)
  .openapi(postSnapshotsRoute, postSnapshotsRouteHandler)
  .openapi(deleteSnapshotsSnapshotNameRoute, deleteSnapshotsSnapshotNameRouteHandler)
  .openapi(getSnapshotsSnapshotNameRoute, getSnapshotsSnapshotNameRouteHandler)
  .openapi(
    getCollectionsCollectionNameShardsShardIdSnapshotRoute,
    getCollectionsCollectionNameShardsShardIdSnapshotRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute,
    postCollectionsCollectionNameShardsShardIdSnapshotsUploadRouteHandler,
  )
  .openapi(
    putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute,
    putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameShardsShardIdSnapshotsRoute,
    getCollectionsCollectionNameShardsShardIdSnapshotsRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNameShardsShardIdSnapshotsRoute,
    postCollectionsCollectionNameShardsShardIdSnapshotsRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
    deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
    getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRouteHandler,
  )
  .openapi(
    getCollectionsCollectionNamePointsIdRoute,
    getCollectionsCollectionNamePointsIdRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsRoute,
    postCollectionsCollectionNamePointsRouteHandler,
  )
  .openapi(putCollectionsCollectionNamePointsRoute, putCollectionsCollectionNamePointsRouteHandler)
  .openapi(
    postCollectionsCollectionNamePointsDeleteRoute,
    postCollectionsCollectionNamePointsDeleteRouteHandler,
  )
  .openapi(
    putCollectionsCollectionNamePointsVectorsRoute,
    putCollectionsCollectionNamePointsVectorsRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsVectorsDeleteRoute,
    postCollectionsCollectionNamePointsVectorsDeleteRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsPayloadRoute,
    postCollectionsCollectionNamePointsPayloadRouteHandler,
  )
  .openapi(
    putCollectionsCollectionNamePointsPayloadRoute,
    putCollectionsCollectionNamePointsPayloadRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsPayloadDeleteRoute,
    postCollectionsCollectionNamePointsPayloadDeleteRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsPayloadClearRoute,
    postCollectionsCollectionNamePointsPayloadClearRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsBatchRoute,
    postCollectionsCollectionNamePointsBatchRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsScrollRoute,
    postCollectionsCollectionNamePointsScrollRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsCountRoute,
    postCollectionsCollectionNamePointsCountRouteHandler,
  )
  .openapi(postCollectionsCollectionNameFacetRoute, postCollectionsCollectionNameFacetRouteHandler)
  .openapi(
    postCollectionsCollectionNamePointsQueryRoute,
    postCollectionsCollectionNamePointsQueryRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsQueryBatchRoute,
    postCollectionsCollectionNamePointsQueryBatchRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsQueryGroupsRoute,
    postCollectionsCollectionNamePointsQueryGroupsRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsSearchMatrixPairsRoute,
    postCollectionsCollectionNamePointsSearchMatrixPairsRouteHandler,
  )
  .openapi(
    postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute,
    postCollectionsCollectionNamePointsSearchMatrixOffsetsRouteHandler,
  )

export default app
