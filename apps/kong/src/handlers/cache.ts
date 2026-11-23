import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCacheKeyRoute, deleteCacheRoute, getCacheKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app
  .openapi(getCacheKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCacheKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
