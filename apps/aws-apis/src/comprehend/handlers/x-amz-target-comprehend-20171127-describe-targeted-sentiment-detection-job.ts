import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
