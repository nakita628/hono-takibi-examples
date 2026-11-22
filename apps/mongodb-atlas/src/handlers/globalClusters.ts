import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMappingRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespacesRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMappingRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalClustersHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMappingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesCustomZoneMappingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdClustersClusterNameGlobalWritesManagedNamespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
