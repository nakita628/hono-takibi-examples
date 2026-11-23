import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceMaintenanceOptionsRoute,
  postActionModifyInstanceMaintenanceOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstanceMaintenanceOptionsHandler = app
  .openapi(getActionModifyInstanceMaintenanceOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceMaintenanceOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
