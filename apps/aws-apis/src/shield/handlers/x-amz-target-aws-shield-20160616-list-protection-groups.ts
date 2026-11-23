import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616ListProtectionGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616ListProtectionGroupsHandler = app.openapi(
  postXAmzTargetAWSShield20160616ListProtectionGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
