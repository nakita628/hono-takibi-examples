import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
  get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
  post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401SipIpAddressHandler = app
  .openapi(
    get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    get20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
