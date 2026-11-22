import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAddressingPrefixesPrefixIdDelegationsDelegationIdRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdDelegationsRoute,
  postAccountsAccountIdAddressingPrefixesPrefixIdDelegationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementPrefixDelegationHandler = app
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingPrefixesPrefixIdDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingPrefixesPrefixIdDelegationsDelegationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
