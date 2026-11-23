import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceCreateModelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
