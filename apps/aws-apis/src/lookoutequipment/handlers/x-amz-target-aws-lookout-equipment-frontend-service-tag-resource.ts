import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
