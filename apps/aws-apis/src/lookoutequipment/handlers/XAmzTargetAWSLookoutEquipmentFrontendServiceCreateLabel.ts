import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
