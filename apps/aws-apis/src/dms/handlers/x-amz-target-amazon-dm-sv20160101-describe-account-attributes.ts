import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeAccountAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribeAccountAttributesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeAccountAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
