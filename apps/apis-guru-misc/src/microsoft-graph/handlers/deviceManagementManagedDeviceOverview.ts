import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceManagementManagedDeviceOverviewRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceManagementManagedDeviceOverviewHandler = app.openapi(
  getDeviceManagementManagedDeviceOverviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
