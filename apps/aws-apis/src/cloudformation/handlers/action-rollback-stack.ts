import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRollbackStackRoute, postActionRollbackStackRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRollbackStackHandler = app
  .openapi(getActionRollbackStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRollbackStackRoute, (c) => {
    throw new Error('Not implemented')
  })
