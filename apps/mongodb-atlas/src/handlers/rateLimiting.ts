import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAtlasV2RateLimitsEndpointSetIdRoute, getApiAtlasV2RateLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const rateLimitingHandler = app
  .openapi(getApiAtlasV2RateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2RateLimitsEndpointSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
