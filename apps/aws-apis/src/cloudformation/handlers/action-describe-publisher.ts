import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribePublisherRoute, postActionDescribePublisherRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribePublisherHandler = app
  .openapi(getActionDescribePublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
