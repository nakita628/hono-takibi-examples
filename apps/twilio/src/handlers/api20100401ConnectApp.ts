import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidConnectAppsSidJsonRoute,
  get20100401AccountsAccountSidConnectAppsJsonRoute,
  get20100401AccountsAccountSidConnectAppsSidJsonRoute,
  post20100401AccountsAccountSidConnectAppsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ConnectAppHandler = app
  .openapi(get20100401AccountsAccountSidConnectAppsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidConnectAppsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidConnectAppsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidConnectAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
