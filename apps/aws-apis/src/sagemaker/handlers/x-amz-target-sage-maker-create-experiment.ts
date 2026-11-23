import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateExperimentHandler = app.openapi(
  postXAmzTargetSageMakerCreateExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
