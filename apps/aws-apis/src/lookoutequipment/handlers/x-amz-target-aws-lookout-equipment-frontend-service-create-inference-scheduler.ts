import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceCreateInferenceSchedulerHandler =
  app.openapi(
    postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
