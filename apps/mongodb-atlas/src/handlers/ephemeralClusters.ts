import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2UnauthEphemeralClustersClusterIdRoute,
  postApiAtlasV2UnauthEphemeralClustersCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ephemeralClustersHandler = app
  .openapi(getApiAtlasV2UnauthEphemeralClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2UnauthEphemeralClustersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
