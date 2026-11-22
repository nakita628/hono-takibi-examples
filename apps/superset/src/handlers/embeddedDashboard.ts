import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1EmbeddedDashboardUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddedDashboardHandler = app.openapi(getApiV1EmbeddedDashboardUuidRoute, (c) => {
  throw new Error('Not implemented')
})
