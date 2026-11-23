import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
