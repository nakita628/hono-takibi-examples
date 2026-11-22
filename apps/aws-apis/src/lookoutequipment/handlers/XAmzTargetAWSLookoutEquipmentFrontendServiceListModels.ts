import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListModelsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
