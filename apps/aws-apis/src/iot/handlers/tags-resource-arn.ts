import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsResourceArnHandler = app.openapi(getTagsResourceArnRoute, (c) => {
  throw new Error('Not implemented')
})
