import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeUploadBufferRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeUploadBufferHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeUploadBufferRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
