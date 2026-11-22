import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelInstanceRefreshRoute,
  postActionCancelInstanceRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCancelInstanceRefreshHandler = app
  .openapi(getActionCancelInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
