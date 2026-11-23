import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
