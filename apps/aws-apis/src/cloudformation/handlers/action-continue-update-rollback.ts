import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionContinueUpdateRollbackRoute,
  postActionContinueUpdateRollbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionContinueUpdateRollbackHandler = app
  .openapi(getActionContinueUpdateRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionContinueUpdateRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
