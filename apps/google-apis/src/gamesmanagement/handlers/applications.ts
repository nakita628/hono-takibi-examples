import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app.openapi(
  getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
