import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatAliasesNameRoute,
  getCatAliasesRoute,
  getCatAllocationNodeIdRoute,
  getCatAllocationRoute,
  getCatClusterManagerRoute,
  getCatCountIndexRoute,
  getCatCountRoute,
  getCatFielddataFieldsRoute,
  getCatFielddataRoute,
  getCatHealthRoute,
  getCatIndicesIndexRoute,
  getCatIndicesRoute,
  getCatMasterRoute,
  getCatNodeattrsRoute,
  getCatNodesRoute,
  getCatPendingTasksRoute,
  getCatPitSegmentsAllRoute,
  getCatPitSegmentsRoute,
  getCatPluginsRoute,
  getCatRecoveryIndexRoute,
  getCatRecoveryRoute,
  getCatRepositoriesRoute,
  getCatRoute,
  getCatSegmentReplicationIndexRoute,
  getCatSegmentReplicationRoute,
  getCatSegmentsIndexRoute,
  getCatSegmentsRoute,
  getCatShardsIndexRoute,
  getCatShardsRoute,
  getCatSnapshotsRepositoryRoute,
  getCatSnapshotsRoute,
  getCatTasksRoute,
  getCatTemplatesNameRoute,
  getCatTemplatesRoute,
  getCatThreadPoolRoute,
  getCatThreadPoolThreadPoolPatternsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catHandler = app
  .openapi(getCatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatAllocationNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatClusterManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatCountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatFielddataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatFielddataFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatIndicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatNodeattrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatPendingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatPitSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatPitSegmentsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatRecoveryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSegmentReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSegmentReplicationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSegmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatShardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatSnapshotsRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatThreadPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatThreadPoolThreadPoolPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
