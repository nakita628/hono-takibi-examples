import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopProcessingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopProcessingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopProcessingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
