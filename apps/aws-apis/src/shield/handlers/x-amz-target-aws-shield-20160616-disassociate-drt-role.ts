import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisassociateDRTRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DisassociateDrtRoleHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisassociateDRTRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
