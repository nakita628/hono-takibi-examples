import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopHyperParameterTuningJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopHyperParameterTuningJobHandler = app.openapi(
  postXAmzTargetSageMakerStopHyperParameterTuningJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
