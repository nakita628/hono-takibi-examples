import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
