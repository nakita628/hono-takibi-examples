import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app.openapi(getVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
