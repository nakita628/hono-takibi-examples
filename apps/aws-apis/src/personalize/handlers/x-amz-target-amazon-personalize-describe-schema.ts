import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeSchemaHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
