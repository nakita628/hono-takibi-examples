import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
