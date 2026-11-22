import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopLabelingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopLabelingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopLabelingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
