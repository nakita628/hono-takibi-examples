import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeWorkingStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeWorkingStorageHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeWorkingStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
