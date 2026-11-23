import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePendingMaintenanceActionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribePendingMaintenanceActionsHandler = app
  .openapi(getActionDescribePendingMaintenanceActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePendingMaintenanceActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
