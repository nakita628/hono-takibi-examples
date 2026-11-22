import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteDetectorHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
