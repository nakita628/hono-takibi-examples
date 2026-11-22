import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackDriftDetectionStatusRoute,
  postActionDescribeStackDriftDetectionStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStackDriftDetectionStatusHandler = app
  .openapi(getActionDescribeStackDriftDetectionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackDriftDetectionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
