import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(getTagsRoute, (c) => {
  throw new Error('Not implemented')
})
