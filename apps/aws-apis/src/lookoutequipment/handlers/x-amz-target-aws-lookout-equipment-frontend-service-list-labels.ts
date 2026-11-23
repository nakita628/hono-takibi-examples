import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
