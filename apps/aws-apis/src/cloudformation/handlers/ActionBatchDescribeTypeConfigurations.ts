import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchDescribeTypeConfigurationsRoute,
  postActionBatchDescribeTypeConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionBatchDescribeTypeConfigurationsHandler = app
  .openapi(getActionBatchDescribeTypeConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchDescribeTypeConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
