import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMLabelParameterVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmLabelParameterVersionHandler = app.openapi(
  postXAmzTargetAmazonSSMLabelParameterVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
