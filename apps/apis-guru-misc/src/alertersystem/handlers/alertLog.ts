import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAlertLogIdRoute, getApiAlertLogRoute } from '../routes'

const app = new OpenAPIHono()

export const alertLogHandler = app
  .openapi(getApiAlertLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
