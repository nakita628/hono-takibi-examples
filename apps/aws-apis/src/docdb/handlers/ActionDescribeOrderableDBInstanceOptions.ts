import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeOrderableDBInstanceOptionsRoute,
  postActionDescribeOrderableDBInstanceOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeOrderableDBInstanceOptionsHandler = app
  .openapi(getActionDescribeOrderableDBInstanceOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeOrderableDBInstanceOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
