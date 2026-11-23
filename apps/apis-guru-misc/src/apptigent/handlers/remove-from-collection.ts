import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveFromCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const removeFromCollectionHandler = app.openapi(postRemoveFromCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
