import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisassociateDRTRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DisassociateDRTRoleHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisassociateDRTRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
