import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryHandler =
  app.openapi(postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
