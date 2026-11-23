import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeFleetAdvisorSchemasHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
