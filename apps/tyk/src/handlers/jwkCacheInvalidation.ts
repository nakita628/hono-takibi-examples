import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTykCacheJwksApiIDRoute, deleteTykCacheJwksRoute } from '../routes'

const app = new OpenAPIHono()

export const jwkCacheInvalidationHandler = app
  .openapi(deleteTykCacheJwksApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCacheJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
