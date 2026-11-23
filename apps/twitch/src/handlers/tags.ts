import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(getTagsStreamsRoute, (c) => {
  throw new Error('Not implemented')
})
