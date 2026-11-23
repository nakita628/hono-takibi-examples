import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler =
  app.openapi(postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
