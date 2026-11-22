import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
