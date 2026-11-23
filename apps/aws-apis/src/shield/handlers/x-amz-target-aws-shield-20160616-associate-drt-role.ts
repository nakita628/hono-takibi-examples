import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateDRTRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616AssociateDrtRoleHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateDRTRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
