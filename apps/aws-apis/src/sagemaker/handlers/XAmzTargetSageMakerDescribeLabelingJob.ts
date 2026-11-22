import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeLabelingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeLabelingJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeLabelingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
