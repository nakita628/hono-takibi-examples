import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteBatchPredictionJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
