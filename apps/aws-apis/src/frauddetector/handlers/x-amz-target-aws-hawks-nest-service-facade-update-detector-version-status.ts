import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionStatusHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
