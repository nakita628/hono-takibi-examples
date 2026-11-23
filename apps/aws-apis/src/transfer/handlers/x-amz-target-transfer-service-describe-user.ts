import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeUserHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
