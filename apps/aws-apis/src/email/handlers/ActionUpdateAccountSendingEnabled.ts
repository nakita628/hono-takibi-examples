import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateAccountSendingEnabledRoute,
  postActionUpdateAccountSendingEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateAccountSendingEnabledHandler = app
  .openapi(getActionUpdateAccountSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAccountSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
