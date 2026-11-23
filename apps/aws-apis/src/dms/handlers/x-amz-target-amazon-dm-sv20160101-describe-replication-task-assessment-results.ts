import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeReplicationTaskAssessmentResultsHandler =
  app.openapi(
    postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
