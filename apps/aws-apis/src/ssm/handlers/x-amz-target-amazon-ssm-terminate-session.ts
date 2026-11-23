import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMTerminateSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmTerminateSessionHandler = app.openapi(
  postXAmzTargetAmazonSSMTerminateSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
