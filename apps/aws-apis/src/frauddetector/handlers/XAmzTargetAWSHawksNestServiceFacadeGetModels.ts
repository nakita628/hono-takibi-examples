import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetModelsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
