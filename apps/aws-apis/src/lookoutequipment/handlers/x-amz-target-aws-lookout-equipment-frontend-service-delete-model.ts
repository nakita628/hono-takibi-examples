import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteModelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
