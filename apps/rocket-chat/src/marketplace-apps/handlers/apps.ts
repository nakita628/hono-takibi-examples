import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsBuildExternalAppRequestRoute, getAppsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsBuildExternalAppRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
