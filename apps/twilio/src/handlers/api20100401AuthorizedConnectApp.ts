import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonRoute,
  get20100401AccountsAccountSidAuthorizedConnectAppsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AuthorizedConnectAppHandler = app
  .openapi(get20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidAuthorizedConnectAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
