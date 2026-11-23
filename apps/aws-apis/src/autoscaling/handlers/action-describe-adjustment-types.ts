import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAdjustmentTypesRoute,
  postActionDescribeAdjustmentTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAdjustmentTypesHandler = app
  .openapi(getActionDescribeAdjustmentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAdjustmentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
