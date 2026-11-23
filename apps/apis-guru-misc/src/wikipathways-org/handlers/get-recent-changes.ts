import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRecentChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const getRecentChangesHandler = app.openapi(getGetRecentChangesRoute, (c) => {
  throw new Error('Not implemented')
})
