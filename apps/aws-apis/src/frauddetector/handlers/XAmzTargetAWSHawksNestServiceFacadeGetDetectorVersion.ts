import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
