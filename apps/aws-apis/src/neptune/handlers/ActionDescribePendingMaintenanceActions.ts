import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePendingMaintenanceActionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribePendingMaintenanceActionsHandler = app
  .openapi(getActionDescribePendingMaintenanceActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePendingMaintenanceActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
