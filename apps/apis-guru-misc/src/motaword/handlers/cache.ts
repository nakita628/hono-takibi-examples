import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCacheKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app.openapi(deleteCacheKeyRoute, (c) => {
  throw new Error('Not implemented')
})
