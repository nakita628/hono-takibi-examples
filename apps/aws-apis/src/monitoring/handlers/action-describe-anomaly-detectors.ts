import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAnomalyDetectorsRoute,
  postActionDescribeAnomalyDetectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAnomalyDetectorsHandler = app
  .openapi(getActionDescribeAnomalyDetectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAnomalyDetectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
