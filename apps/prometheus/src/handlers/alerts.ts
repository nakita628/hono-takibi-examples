import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlertmanagersRoute, getAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertmanagersRoute, (c) => {
    throw new Error('Not implemented')
  })
