import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsHandler = app.openapi(
  postXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
