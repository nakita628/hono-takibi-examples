import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsEventAuthorizationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsEventAuthorizationsListHandler = app.openapi(
  getAppsEventAuthorizationsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
