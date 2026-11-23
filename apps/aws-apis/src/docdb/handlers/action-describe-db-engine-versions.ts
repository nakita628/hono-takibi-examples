import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBEngineVersionsRoute,
  postActionDescribeDBEngineVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbEngineVersionsHandler = app
  .openapi(getActionDescribeDBEngineVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBEngineVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
