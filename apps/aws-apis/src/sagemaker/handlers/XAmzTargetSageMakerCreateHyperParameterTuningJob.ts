import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateHyperParameterTuningJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateHyperParameterTuningJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateHyperParameterTuningJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
