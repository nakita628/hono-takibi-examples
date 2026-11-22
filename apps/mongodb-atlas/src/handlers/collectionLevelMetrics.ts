import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewCollStatsNamespacesRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewDatabaseNameCollectionNameCollStatsMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute,
  getApiAtlasV2GroupsGroupIdCollStatsMetricsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdCollStatsNamespacesRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabaseNameCollectionNameCollStatsMeasurementsRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsUnpinRoute,
  putApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionLevelMetricsHandler = app
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewDatabaseNameCollectionNameCollStatsMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameClusterViewCollStatsNamespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsPinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameCollStatsUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdCollStatsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabaseNameCollectionNameCollStatsMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdCollStatsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
