import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListAccessKeysRoute, postActionListAccessKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListAccessKeysHandler = app
  .openapi(getActionListAccessKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAccessKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
