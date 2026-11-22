import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeProfileHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
