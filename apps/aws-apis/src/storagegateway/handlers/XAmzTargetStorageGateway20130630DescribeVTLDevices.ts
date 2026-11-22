import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeVTLDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeVTLDevicesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeVTLDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
