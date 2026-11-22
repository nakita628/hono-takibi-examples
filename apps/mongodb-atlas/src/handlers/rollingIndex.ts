import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiAtlasV2GroupsGroupIdClustersClusterNameIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const rollingIndexHandler = app.openapi(
  postApiAtlasV2GroupsGroupIdClustersClusterNameIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
