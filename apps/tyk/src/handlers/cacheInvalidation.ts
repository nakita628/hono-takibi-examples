import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTykCacheApiIDRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheInvalidationHandler = app.openapi(deleteTykCacheApiIDRoute, (c) => {
  throw new Error('Not implemented')
})
