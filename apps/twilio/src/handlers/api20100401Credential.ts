import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
  get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
  post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CredentialHandler = app
  .openapi(
    get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
