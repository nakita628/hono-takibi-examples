import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrainingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListTrainingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListTrainingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
