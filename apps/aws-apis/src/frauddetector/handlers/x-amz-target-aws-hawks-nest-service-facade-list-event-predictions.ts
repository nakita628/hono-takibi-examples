import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeListEventPredictionsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
