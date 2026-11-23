import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListInferenceExecutionsHandler =
  app.openapi(postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
