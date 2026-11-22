import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesRoute,
  patchAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute,
  postAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementBGPPrefixesHandler = app
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAddressingPrefixesPrefixIdBgpPrefixesBgpPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
