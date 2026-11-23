import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const listTagsForResourceHandler = app.openapi(postListTagsForResourceRoute, (c) => {
  throw new Error('Not implemented')
})
