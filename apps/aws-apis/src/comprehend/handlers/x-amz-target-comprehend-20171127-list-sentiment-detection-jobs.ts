import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListSentimentDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListSentimentDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListSentimentDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
