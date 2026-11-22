import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateTopicRoute, postActionCreateTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTopicHandler = app
  .openapi(getActionCreateTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
