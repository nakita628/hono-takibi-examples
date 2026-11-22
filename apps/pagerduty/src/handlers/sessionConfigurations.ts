import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionConfigurationsRoute,
  getSessionConfigurationsRoute,
  putSessionConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionConfigurationsHandler = app
  .openapi(getSessionConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSessionConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
