import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
