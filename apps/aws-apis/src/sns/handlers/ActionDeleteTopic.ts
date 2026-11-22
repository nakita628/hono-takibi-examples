import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteTopicRoute, postActionDeleteTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTopicHandler = app
  .openapi(getActionDeleteTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
