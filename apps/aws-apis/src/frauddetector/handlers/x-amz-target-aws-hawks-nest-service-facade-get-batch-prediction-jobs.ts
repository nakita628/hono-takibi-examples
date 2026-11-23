import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetBatchPredictionJobsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
