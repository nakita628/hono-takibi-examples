import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCacheSourceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheHandler = app.openapi(deleteCacheSourceIdRoute, (c) => {
  throw new Error('Not implemented')
})
