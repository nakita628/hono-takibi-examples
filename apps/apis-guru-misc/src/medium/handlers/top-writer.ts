import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopWriterTopicSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const topWriterHandler = app.openapi(getTopWriterTopicSlugRoute, (c) => {
  throw new Error('Not implemented')
})
