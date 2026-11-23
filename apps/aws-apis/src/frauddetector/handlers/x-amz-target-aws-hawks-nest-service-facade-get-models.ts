import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetModelsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
