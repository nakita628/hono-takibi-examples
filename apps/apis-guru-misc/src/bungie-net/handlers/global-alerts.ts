import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalAlertsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const globalAlertsHandler = app.openapi(getGlobalAlertsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
