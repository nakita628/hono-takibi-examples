import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopProcessingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopProcessingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopProcessingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
