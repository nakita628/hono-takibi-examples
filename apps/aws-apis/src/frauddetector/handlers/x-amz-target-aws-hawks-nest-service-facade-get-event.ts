import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetEventHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
