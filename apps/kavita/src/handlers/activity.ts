import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiActivityCurrentRoute } from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app.openapi(getApiActivityCurrentRoute, (c) => {
  throw new Error('Not implemented')
})
