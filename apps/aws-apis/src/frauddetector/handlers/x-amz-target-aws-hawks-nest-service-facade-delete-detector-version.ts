import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
