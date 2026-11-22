import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteExperimentHandler = app.openapi(
  postXAmzTargetSageMakerDeleteExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
