import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutLifecycleHookRoute, postActionPutLifecycleHookRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutLifecycleHookHandler = app
  .openapi(getActionPutLifecycleHookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutLifecycleHookRoute, (c) => {
    throw new Error('Not implemented')
  })
