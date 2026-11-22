import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceManagementSoftwareUpdateStatusSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceManagementSoftwareUpdateStatusSummaryHandler = app.openapi(
  getDeviceManagementSoftwareUpdateStatusSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
