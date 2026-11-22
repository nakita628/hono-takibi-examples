import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616AssociateHealthCheckHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateHealthCheckRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
