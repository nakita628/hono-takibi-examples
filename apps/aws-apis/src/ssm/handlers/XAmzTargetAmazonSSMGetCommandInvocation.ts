import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetCommandInvocationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetCommandInvocationHandler = app.openapi(
  postXAmzTargetAmazonSSMGetCommandInvocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
