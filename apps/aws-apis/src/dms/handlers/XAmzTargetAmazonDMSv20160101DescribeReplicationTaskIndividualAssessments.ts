import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsHandler =
  app.openapi(
    postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
