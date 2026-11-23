import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
