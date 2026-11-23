import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionApplyPendingMaintenanceActionRoute,
  postActionApplyPendingMaintenanceActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionApplyPendingMaintenanceActionHandler = app
  .openapi(getActionApplyPendingMaintenanceActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionApplyPendingMaintenanceActionRoute, (c) => {
    throw new Error('Not implemented')
  })
