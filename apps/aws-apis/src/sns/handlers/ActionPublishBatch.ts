import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPublishBatchRoute, postActionPublishBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPublishBatchHandler = app
  .openapi(getActionPublishBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPublishBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
