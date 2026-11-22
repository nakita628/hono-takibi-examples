import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeHostKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeHostKeyHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeHostKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
