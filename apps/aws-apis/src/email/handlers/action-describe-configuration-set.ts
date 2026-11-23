import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeConfigurationSetRoute,
  postActionDescribeConfigurationSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeConfigurationSetHandler = app
  .openapi(getActionDescribeConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
