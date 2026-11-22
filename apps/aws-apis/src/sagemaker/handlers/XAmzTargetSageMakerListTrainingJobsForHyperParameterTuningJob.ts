import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobHandler = app.openapi(
  postXAmzTargetSageMakerListTrainingJobsForHyperParameterTuningJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
