import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVerifiedAccessInstanceLoggingConfigurationsRoute,
  postActionDescribeVerifiedAccessInstanceLoggingConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVerifiedAccessInstanceLoggingConfigurationsHandler = app
  .openapi(getActionDescribeVerifiedAccessInstanceLoggingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVerifiedAccessInstanceLoggingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
