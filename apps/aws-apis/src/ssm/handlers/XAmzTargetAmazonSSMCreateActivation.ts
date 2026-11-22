import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateActivationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateActivationHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateActivationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
