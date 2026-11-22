import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeEndpointTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeEndpointTypesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeEndpointTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
