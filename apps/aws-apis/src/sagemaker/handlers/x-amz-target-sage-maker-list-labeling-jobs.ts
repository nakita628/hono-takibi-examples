import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListLabelingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListLabelingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListLabelingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
