import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeOrderableClusterOptionsRoute,
  postActionDescribeOrderableClusterOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeOrderableClusterOptionsHandler = app
  .openapi(getActionDescribeOrderableClusterOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeOrderableClusterOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
