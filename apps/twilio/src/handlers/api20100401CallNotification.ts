import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidCallsCallSidNotificationsJsonRoute,
  get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CallNotificationHandler = app
  .openapi(get20100401AccountsAccountSidCallsCallSidNotificationsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidCallsCallSidNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
