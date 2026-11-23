import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerUpdateTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
