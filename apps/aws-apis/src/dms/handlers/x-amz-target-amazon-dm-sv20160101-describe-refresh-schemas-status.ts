import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeRefreshSchemasStatusHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
