import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameIndexFieldNameRoute,
  deleteCollectionsCollectionNameRoute,
  deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
  deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute,
  deleteCollectionsCollectionNameVectorsVectorNameRoute,
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
  patchCollectionsCollectionNameRoute,
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
  putCollectionsCollectionNameIndexRoute,
  putCollectionsCollectionNamePointsPayloadRoute,
  putCollectionsCollectionNamePointsRoute,
  putCollectionsCollectionNamePointsVectorsRoute,
  putCollectionsCollectionNameRoute,
  putCollectionsCollectionNameShardsRoute,
  putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute,
  putCollectionsCollectionNameSnapshotsRecoverRoute,
  putCollectionsCollectionNameVectorsVectorNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(putCollectionsCollectionNameShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameIndexFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameVectorsVectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameVectorsVectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameSnapshotsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameSnapshotsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsShardIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNamePointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsVectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsVectorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNamePointsPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsPayloadClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameFacetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsQueryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsQueryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsSearchMatrixPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
