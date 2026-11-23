import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
