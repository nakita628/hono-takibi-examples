import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMaintenanceAnalyticsTypeRoute,
  deleteMaintenanceSubscribersTypeRoute,
  deleteMaintenanceSubscriptionsUnconfirmedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceHandler = app
  .openapi(deleteMaintenanceSubscribersTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMaintenanceAnalyticsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMaintenanceSubscriptionsUnconfirmedRoute, (c) => {
    throw new Error('Not implemented')
  })
