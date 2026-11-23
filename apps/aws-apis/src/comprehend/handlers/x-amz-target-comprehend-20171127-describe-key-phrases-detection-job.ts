import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
