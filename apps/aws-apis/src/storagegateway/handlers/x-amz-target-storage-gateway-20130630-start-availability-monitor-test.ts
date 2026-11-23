import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630StartAvailabilityMonitorTestHandler = app.openapi(
  postXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
