import { OpenAPIHono } from '@hono/zod-openapi'
import { getLatestpostsTopicSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const latestpostsHandler = app.openapi(getLatestpostsTopicSlugRoute, (c) => {
  throw new Error('Not implemented')
})
