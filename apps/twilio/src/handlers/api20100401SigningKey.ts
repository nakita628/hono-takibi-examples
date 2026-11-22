import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSigningKeysSidJsonRoute,
  get20100401AccountsAccountSidSigningKeysJsonRoute,
  get20100401AccountsAccountSidSigningKeysSidJsonRoute,
  post20100401AccountsAccountSidSigningKeysSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401SigningKeyHandler = app
  .openapi(get20100401AccountsAccountSidSigningKeysJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidSigningKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSigningKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidSigningKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
