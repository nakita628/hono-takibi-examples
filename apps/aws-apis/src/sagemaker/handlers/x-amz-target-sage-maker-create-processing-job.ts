import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateProcessingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateProcessingJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateProcessingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
