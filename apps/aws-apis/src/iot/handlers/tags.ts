import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(postTagsRoute, (c) => {
  throw new Error('Not implemented')
})
