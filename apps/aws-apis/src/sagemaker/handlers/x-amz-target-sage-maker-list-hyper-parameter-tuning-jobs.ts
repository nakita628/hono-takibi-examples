import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHyperParameterTuningJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListHyperParameterTuningJobsHandler = app.openapi(
  postXAmzTargetSageMakerListHyperParameterTuningJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
