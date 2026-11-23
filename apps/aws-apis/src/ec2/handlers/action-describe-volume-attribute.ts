import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVolumeAttributeRoute,
  postActionDescribeVolumeAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVolumeAttributeHandler = app
  .openapi(getActionDescribeVolumeAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVolumeAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
