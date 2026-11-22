import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeOptionGroupOptionsRoute,
  postActionDescribeOptionGroupOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeOptionGroupOptionsHandler = app
  .openapi(getActionDescribeOptionGroupOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeOptionGroupOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
