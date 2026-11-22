import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisassociateHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DisassociateHealthCheckHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisassociateHealthCheckRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
