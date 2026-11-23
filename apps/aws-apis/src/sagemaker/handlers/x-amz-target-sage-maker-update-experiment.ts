import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateExperimentHandler = app.openapi(
  postXAmzTargetSageMakerUpdateExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
