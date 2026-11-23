import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeBlueGreenDeploymentsRoute,
  postActionDescribeBlueGreenDeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeBlueGreenDeploymentsHandler = app
  .openapi(getActionDescribeBlueGreenDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeBlueGreenDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
