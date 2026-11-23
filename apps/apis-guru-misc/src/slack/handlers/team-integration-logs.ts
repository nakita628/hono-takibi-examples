import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamIntegrationLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamIntegrationLogsHandler = app.openapi(getTeamIntegrationLogsRoute, (c) => {
  throw new Error('Not implemented')
})
