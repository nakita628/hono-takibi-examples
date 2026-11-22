import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteActivationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteActivationHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteActivationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
