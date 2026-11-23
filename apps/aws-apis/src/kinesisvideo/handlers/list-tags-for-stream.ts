import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTagsForStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const listTagsForStreamHandler = app.openapi(postListTagsForStreamRoute, (c) => {
  throw new Error('Not implemented')
})
