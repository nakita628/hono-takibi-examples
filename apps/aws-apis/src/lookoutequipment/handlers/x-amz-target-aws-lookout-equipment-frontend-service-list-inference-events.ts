import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceEventsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
