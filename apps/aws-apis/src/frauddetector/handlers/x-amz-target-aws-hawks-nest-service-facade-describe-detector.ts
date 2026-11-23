import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDescribeDetectorHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
