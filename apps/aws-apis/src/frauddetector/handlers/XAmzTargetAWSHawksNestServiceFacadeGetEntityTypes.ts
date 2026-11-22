import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetEntityTypesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
