import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCompleteLifecycleActionRoute,
  postActionCompleteLifecycleActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCompleteLifecycleActionHandler = app
  .openapi(getActionCompleteLifecycleActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCompleteLifecycleActionRoute, (c) => {
    throw new Error('Not implemented')
  })
