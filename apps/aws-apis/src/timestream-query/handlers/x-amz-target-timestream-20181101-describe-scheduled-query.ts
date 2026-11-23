import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DescribeScheduledQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101DescribeScheduledQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101DescribeScheduledQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
