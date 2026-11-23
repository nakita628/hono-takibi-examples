import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeEndpointSettingsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEndpointSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
