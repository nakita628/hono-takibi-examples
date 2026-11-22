import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler =
  app.openapi(postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
