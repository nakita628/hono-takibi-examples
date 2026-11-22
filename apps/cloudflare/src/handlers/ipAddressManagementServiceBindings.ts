import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAddressingPrefixesPrefixIdBindingsBindingIdRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdBindingsBindingIdRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdBindingsRoute,
  getAccountsAccountIdAddressingServicesRoute,
  postAccountsAccountIdAddressingPrefixesPrefixIdBindingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementServiceBindingsHandler = app
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingPrefixesPrefixIdBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingPrefixesPrefixIdBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdBindingsBindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
