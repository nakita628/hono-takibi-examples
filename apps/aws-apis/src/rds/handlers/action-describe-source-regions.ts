import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSourceRegionsRoute,
  postActionDescribeSourceRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSourceRegionsHandler = app
  .openapi(getActionDescribeSourceRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSourceRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
