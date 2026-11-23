import { OpenAPIHono } from '@hono/zod-openapi'
import { getCacheNonceRoute, postCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app
  .openapi(postCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCacheNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
