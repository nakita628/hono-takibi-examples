import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopLabelingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopLabelingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopLabelingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
