import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidNotificationsJsonRoute,
  get20100401AccountsAccountSidNotificationsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401NotificationHandler = app
  .openapi(get20100401AccountsAccountSidNotificationsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
