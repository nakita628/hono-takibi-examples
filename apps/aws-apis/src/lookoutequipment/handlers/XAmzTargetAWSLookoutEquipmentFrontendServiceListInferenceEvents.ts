import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
