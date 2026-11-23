import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeConfigurationOptionsRoute,
  postActionDescribeConfigurationOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeConfigurationOptionsHandler = app
  .openapi(getActionDescribeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
