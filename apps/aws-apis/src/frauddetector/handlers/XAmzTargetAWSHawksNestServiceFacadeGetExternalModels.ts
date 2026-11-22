import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetExternalModelsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
