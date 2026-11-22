import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeHsmConfigurationsRoute,
  postActionDescribeHsmConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeHsmConfigurationsHandler = app
  .openapi(getActionDescribeHsmConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeHsmConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
