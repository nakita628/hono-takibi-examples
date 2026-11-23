import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateHyperParameterTuningJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateHyperParameterTuningJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateHyperParameterTuningJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
