import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListModelsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
