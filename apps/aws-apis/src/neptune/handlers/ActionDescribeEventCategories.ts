import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEventCategoriesRoute,
  postActionDescribeEventCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeEventCategoriesHandler = app
  .openapi(getActionDescribeEventCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEventCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
