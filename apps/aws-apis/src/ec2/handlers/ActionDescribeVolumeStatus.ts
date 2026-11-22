import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVolumeStatusRoute, postActionDescribeVolumeStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVolumeStatusHandler = app
  .openapi(getActionDescribeVolumeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVolumeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
