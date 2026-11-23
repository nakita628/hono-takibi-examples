import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTableRestoreStatusRoute,
  postActionDescribeTableRestoreStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTableRestoreStatusHandler = app
  .openapi(getActionDescribeTableRestoreStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTableRestoreStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
