import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
