import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrainingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTrainingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListTrainingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
