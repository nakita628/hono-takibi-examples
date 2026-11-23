import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetEventTypesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
