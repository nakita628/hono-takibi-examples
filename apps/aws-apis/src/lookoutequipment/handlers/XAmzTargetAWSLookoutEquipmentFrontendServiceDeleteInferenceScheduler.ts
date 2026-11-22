import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerHandler =
  app.openapi(
    postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
