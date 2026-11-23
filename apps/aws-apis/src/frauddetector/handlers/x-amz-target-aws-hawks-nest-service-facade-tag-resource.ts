import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeTagResourceHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
