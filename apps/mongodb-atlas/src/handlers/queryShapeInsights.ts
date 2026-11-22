import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsQueryShapeHashDetailsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsSummariesRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHashRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHashRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryShapeInsightsHandler = app
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsQueryShapeHashDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapeInsightsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameQueryShapesQueryShapeHashRoute, (c) => {
    throw new Error('Not implemented')
  })
