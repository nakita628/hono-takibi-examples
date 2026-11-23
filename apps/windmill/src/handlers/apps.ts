import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsHubGetIdRoute, getAppsHubGetRawIdRoute, getAppsHubListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsHubListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsHubGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsHubGetRawIdRoute, (c) => {
    throw new Error('Not implemented')
  })
