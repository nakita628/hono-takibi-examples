import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsArnRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsArnHandler = app.openapi(getTagsArnRoute, (c) => {
  throw new Error('Not implemented')
})
