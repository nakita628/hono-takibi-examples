import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
