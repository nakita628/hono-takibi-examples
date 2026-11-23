import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterTracksRoute,
  postActionDescribeClusterTracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClusterTracksHandler = app
  .openapi(getActionDescribeClusterTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
