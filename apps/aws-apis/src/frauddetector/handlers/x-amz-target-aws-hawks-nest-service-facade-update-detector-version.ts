import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
