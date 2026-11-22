import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespaceRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespaceRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const querySamplingHandler = app
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameQuerySamplingNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
