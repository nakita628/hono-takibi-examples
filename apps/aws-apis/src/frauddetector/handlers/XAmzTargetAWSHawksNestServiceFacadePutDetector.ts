import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadePutDetectorHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
