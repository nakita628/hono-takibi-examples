import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAtlasV2GroupsGroupIdClustersClusterNameShardingRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const shardingRecommendationsHandler = app.openapi(
  getApiAtlasV2GroupsGroupIdClustersClusterNameShardingRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
