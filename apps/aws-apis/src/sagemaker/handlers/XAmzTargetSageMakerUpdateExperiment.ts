import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateExperimentHandler = app.openapi(
  postXAmzTargetSageMakerUpdateExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
