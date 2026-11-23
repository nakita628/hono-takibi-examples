import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecentBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const recentBuildsHandler = app.openapi(getRecentBuildsRoute, (c) => {
  throw new Error('Not implemented')
})
