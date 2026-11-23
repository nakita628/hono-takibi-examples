import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDescribeModelVersionsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
