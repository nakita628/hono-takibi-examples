import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNodeConfigurationOptionsRoute,
  postActionDescribeNodeConfigurationOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNodeConfigurationOptionsHandler = app
  .openapi(getActionDescribeNodeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNodeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
