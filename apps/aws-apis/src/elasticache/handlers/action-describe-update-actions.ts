import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeUpdateActionsRoute,
  postActionDescribeUpdateActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeUpdateActionsHandler = app
  .openapi(getActionDescribeUpdateActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeUpdateActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
