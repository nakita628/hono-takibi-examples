import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
