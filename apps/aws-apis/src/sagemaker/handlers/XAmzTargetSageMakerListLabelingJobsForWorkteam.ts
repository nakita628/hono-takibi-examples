import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListLabelingJobsForWorkteamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListLabelingJobsForWorkteamHandler = app.openapi(
  postXAmzTargetSageMakerListLabelingJobsForWorkteamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
