import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616UntagResourceHandler = app.openapi(
  postXAmzTargetAWSShield20160616UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
