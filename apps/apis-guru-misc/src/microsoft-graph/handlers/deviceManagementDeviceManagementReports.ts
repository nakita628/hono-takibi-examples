import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  deleteDeviceManagementReportsRoute,
  getDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  getDeviceManagementReportsExportJobsRoute,
  getDeviceManagementReportsRoute,
  patchDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  patchDeviceManagementReportsRoute,
  postDeviceManagementReportsExportJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementReportsHandler = app
  .openapi(deleteDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
