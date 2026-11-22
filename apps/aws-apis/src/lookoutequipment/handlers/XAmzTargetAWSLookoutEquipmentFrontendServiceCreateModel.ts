import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
