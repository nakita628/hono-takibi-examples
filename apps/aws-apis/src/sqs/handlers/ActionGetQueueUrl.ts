import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetQueueUrlRoute, postActionGetQueueUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetQueueUrlHandler = app
  .openapi(getActionGetQueueUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetQueueUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
