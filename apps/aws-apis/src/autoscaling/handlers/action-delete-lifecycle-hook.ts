import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteLifecycleHookRoute, postActionDeleteLifecycleHookRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteLifecycleHookHandler = app
  .openapi(getActionDeleteLifecycleHookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLifecycleHookRoute, (c) => {
    throw new Error('Not implemented')
  })
