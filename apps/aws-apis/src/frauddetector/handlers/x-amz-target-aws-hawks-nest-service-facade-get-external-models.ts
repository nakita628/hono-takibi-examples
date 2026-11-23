import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetExternalModelsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
