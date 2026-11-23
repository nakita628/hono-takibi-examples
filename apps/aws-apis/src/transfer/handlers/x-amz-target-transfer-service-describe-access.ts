import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeAccessHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
