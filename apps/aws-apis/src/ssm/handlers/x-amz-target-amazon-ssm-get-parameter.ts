import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetParameterHandler = app.openapi(
  postXAmzTargetAmazonSSMGetParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
