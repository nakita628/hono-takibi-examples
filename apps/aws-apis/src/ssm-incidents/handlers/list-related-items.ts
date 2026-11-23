import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRelatedItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const listRelatedItemsHandler = app.openapi(postListRelatedItemsRoute, (c) => {
  throw new Error('Not implemented')
})
