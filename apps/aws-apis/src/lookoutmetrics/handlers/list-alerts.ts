import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const listAlertsHandler = app.openapi(postListAlertsRoute, (c) => {
  throw new Error('Not implemented')
})
