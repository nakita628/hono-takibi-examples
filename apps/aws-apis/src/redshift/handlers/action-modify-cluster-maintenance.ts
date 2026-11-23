import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterMaintenanceRoute,
  postActionModifyClusterMaintenanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterMaintenanceHandler = app
  .openapi(getActionModifyClusterMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
