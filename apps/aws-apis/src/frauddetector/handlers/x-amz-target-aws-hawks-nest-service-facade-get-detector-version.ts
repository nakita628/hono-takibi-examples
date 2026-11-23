import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
