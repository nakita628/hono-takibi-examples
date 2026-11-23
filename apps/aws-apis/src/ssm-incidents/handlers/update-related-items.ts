import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateRelatedItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const updateRelatedItemsHandler = app.openapi(postUpdateRelatedItemsRoute, (c) => {
  throw new Error('Not implemented')
})
