import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateQueueRoute, postActionCreateQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateQueueHandler = app
  .openapi(getActionCreateQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
