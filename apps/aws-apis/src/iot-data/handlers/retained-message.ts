import { OpenAPIHono } from '@hono/zod-openapi'
import { getRetainedMessageRoute, getRetainedMessageTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const retainedMessageHandler = app
  .openapi(getRetainedMessageTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetainedMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
