import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterOutageSimulationHandler = app
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameOutageSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
