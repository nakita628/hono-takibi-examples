import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeGlobalClustersRoute,
  postActionDescribeGlobalClustersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeGlobalClustersHandler = app
  .openapi(getActionDescribeGlobalClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeGlobalClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
