import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardingInsightsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsListMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetNameMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shardingInsightsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsReplicaSetNameMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardMetricsListMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardingInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
