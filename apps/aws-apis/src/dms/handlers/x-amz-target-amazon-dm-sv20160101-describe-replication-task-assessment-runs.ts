import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentRunsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
