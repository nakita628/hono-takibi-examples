import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
