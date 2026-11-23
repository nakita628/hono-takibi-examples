import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616ListProtectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616ListProtectionsHandler = app.openapi(
  postXAmzTargetAWSShield20160616ListProtectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
