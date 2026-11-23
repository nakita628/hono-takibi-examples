import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetOutcomesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetOutcomesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetOutcomesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
