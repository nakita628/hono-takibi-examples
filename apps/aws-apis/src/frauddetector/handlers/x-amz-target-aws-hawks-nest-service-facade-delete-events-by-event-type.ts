import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteEventsByEventTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
