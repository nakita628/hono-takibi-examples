import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidAddressesSidJsonRoute,
  get20100401AccountsAccountSidAddressesJsonRoute,
  get20100401AccountsAccountSidAddressesSidJsonRoute,
  post20100401AccountsAccountSidAddressesJsonRoute,
  post20100401AccountsAccountSidAddressesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AddressHandler = app
  .openapi(post20100401AccountsAccountSidAddressesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidAddressesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidAddressesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidAddressesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidAddressesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
