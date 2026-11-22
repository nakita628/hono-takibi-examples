import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerHandler =
  app.openapi(postXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerRoute, (c) => {
    throw new Error('Not implemented')
  })
