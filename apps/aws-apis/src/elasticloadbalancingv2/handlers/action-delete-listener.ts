import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteListenerRoute, postActionDeleteListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteListenerHandler = app
  .openapi(getActionDeleteListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
