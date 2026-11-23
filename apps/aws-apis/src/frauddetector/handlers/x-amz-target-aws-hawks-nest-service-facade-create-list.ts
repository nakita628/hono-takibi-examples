import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeCreateListHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
