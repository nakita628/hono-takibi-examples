import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeInferenceSchedulerHandler =
  app.openapi(
    postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
