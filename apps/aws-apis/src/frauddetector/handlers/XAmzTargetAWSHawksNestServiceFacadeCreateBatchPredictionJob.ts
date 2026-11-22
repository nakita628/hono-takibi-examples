import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
