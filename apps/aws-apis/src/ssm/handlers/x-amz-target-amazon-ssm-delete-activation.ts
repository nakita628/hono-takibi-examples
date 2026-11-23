import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteActivationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteActivationHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteActivationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
