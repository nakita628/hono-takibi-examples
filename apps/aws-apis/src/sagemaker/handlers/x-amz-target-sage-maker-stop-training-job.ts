import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
