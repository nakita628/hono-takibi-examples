import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsJsonHandler = app.openapi(getTagsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
