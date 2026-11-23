import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeProfileHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
