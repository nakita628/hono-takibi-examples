import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616TagResourceHandler = app.openapi(
  postXAmzTargetAWSShield20160616TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
