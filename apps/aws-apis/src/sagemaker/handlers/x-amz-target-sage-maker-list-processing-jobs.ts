import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListProcessingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListProcessingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListProcessingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
