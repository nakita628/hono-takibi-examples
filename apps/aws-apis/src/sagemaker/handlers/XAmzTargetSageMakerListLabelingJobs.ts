import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListLabelingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListLabelingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListLabelingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
