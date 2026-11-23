import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeVTLDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeVtlDevicesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeVTLDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
