import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMetricWidgetImageRoute, postActionGetMetricWidgetImageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetMetricWidgetImageHandler = app
  .openapi(getActionGetMetricWidgetImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMetricWidgetImageRoute, (c) => {
    throw new Error('Not implemented')
  })
