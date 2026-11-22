import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlertsAlertIdRoute,
  getAlertsAlertIdRoute,
  getAlertsRoute,
  patchAlertsAlertIdRoute,
  postAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
