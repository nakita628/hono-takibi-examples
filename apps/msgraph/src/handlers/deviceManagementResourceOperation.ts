import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementResourceOperationsResourceOperationIdRoute,
  getDeviceManagementResourceOperationsCountRoute,
  getDeviceManagementResourceOperationsResourceOperationIdRoute,
  getDeviceManagementResourceOperationsRoute,
  patchDeviceManagementResourceOperationsResourceOperationIdRoute,
  postDeviceManagementResourceOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementResourceOperationHandler = app
  .openapi(getDeviceManagementResourceOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementResourceOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementResourceOperationsResourceOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementResourceOperationsResourceOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementResourceOperationsResourceOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementResourceOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
