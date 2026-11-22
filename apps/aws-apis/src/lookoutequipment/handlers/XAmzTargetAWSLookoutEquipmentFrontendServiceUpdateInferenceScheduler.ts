import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerHandler =
  app.openapi(
    postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
