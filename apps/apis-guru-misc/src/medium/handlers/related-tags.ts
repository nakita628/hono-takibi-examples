import { OpenAPIHono } from '@hono/zod-openapi'
import { getRelatedTagsTagRoute } from '../routes'

const app = new OpenAPIHono()

export const relatedTagsHandler = app.openapi(getRelatedTagsTagRoute, (c) => {
  throw new Error('Not implemented')
})
