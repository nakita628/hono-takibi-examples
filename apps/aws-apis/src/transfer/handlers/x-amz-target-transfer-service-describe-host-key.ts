import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
