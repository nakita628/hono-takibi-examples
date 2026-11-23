import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler =
  app.openapi(postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerRoute, (c) => {
    throw new Error('Not implemented')
  })
