import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartTargetedSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
