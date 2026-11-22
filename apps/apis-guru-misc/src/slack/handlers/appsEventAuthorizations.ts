import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsEventAuthorizationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsEventAuthorizationsHandler = app.openapi(
  getAppsEventAuthorizationsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
