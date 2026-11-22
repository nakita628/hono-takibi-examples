import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppsAppNameRoute, getAppsAppNameRoute, getAppsRoute, postAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
