import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUnlabelParameterVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUnlabelParameterVersionHandler = app.openapi(
  postXAmzTargetAmazonSSMUnlabelParameterVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
