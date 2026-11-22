import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CredentialListHandler = app
  .openapi(get20100401AccountsAccountSidSIPCredentialListsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPCredentialListsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidSIPCredentialListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPCredentialListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidSIPCredentialListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
