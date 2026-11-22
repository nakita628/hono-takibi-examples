import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAdjustmentTypesRoute,
  postActionDescribeAdjustmentTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAdjustmentTypesHandler = app
  .openapi(getActionDescribeAdjustmentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAdjustmentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
