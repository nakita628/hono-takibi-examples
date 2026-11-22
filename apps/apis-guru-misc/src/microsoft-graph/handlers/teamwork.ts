import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamworkWorkforceIntegrationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const teamworkHandler = app.openapi(getTeamworkWorkforceIntegrationsCountRoute, (c) => {
  throw new Error('Not implemented')
})
