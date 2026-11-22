import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionProfileAppsAppIdRoute,
  getApiVersionProfileAppsAppIdRoute,
  getApiVersionProfileAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthAppsHandler = app
  .openapi(getApiVersionProfileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
