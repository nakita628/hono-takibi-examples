import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionActionIdRoute, postActionTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const actionHandler = app
  .openapi(getActionActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
