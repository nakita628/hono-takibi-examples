import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRollbackInstanceRefreshRoute,
  postActionRollbackInstanceRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRollbackInstanceRefreshHandler = app
  .openapi(getActionRollbackInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRollbackInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
