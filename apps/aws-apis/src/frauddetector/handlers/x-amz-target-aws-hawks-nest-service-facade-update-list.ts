import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateListHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
