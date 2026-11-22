import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAccountSendingEnabledRoute,
  postActionGetAccountSendingEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetAccountSendingEnabledHandler = app
  .openapi(getActionGetAccountSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccountSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
