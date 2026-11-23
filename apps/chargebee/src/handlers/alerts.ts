import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlertsAlertIdAlertStatusesRoute,
  getAlertsAlertIdRoute,
  getAlertsRoute,
  postAlertsAlertIdDeleteRoute,
  postAlertsAlertIdRoute,
  postAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsAlertIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlertsAlertIdAlertStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
