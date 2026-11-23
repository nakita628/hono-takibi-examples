import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateActivationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateActivationHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateActivationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
