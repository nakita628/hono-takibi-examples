import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeFleetInstancesRoute,
  postActionDescribeFleetInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeFleetInstancesHandler = app
  .openapi(getActionDescribeFleetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFleetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
