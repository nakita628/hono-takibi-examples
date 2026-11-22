import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
