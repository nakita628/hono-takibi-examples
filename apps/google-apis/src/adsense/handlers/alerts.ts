import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAlertsAlertIdRoute, getAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
