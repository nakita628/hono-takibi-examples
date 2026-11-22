import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppCatalogsTeamsAppsCountRoute,
  getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appCatalogsHandler = app
  .openapi(getAppCatalogsTeamsAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
