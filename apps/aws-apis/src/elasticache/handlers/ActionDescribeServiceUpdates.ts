import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeServiceUpdatesRoute,
  postActionDescribeServiceUpdatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeServiceUpdatesHandler = app
  .openapi(getActionDescribeServiceUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeServiceUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
