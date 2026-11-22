import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IpAccessControlListHandler = app
  .openapi(get20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPIpAccessControlListsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
