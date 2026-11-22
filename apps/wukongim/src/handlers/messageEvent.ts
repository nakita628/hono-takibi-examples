import { OpenAPIHono } from '@hono/zod-openapi'
import { postMessageEventRoute, postMessageEventsyncRoute } from '../routes'

const app = new OpenAPIHono()

export const messageEventHandler = app
  .openapi(postMessageEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageEventsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
