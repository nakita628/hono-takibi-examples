import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopTargetedSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
