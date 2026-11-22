import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
