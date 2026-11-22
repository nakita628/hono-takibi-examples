import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetIdentityHeadersInNotificationsEnabledRoute,
  postActionSetIdentityHeadersInNotificationsEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetIdentityHeadersInNotificationsEnabledHandler = app
  .openapi(getActionSetIdentityHeadersInNotificationsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIdentityHeadersInNotificationsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
