import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateDRTRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616AssociateDRTRoleHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateDRTRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
