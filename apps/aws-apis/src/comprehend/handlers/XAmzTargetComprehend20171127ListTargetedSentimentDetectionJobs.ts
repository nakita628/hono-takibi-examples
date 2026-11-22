import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
