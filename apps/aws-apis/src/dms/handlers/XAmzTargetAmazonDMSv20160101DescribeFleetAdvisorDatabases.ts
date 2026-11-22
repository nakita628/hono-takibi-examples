import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
