import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateListenerRoute, postActionCreateListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateListenerHandler = app
  .openapi(getActionCreateListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
