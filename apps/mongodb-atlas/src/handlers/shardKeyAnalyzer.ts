import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesAnalysisIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperationsOperationIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperationsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shardKeyAnalyzerHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameShardKeyAnalysesOperationsOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
