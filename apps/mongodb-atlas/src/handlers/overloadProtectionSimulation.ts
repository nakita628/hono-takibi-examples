import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationIdRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const overloadProtectionSimulationHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameOverloadSimulationsSimulationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
