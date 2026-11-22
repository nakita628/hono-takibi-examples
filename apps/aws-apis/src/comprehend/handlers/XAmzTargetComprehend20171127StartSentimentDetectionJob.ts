import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StartSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
