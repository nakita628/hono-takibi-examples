import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerHandler =
  app.openapi(postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerRoute, (c) => {
    throw new Error('Not implemented')
  })
