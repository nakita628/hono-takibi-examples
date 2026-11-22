import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
