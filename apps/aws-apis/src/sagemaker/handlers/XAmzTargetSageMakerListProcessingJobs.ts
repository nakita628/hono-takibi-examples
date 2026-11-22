import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListProcessingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListProcessingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListProcessingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
