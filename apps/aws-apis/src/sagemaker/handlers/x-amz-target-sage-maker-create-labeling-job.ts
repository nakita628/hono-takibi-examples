import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateLabelingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateLabelingJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateLabelingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
