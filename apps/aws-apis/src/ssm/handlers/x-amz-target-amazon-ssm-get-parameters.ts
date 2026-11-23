import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetParametersHandler = app.openapi(
  postXAmzTargetAmazonSSMGetParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
