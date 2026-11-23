import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorCollectorsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
