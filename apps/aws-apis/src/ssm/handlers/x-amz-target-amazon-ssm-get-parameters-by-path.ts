import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetParametersByPathRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetParametersByPathHandler = app.openapi(
  postXAmzTargetAmazonSSMGetParametersByPathRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
