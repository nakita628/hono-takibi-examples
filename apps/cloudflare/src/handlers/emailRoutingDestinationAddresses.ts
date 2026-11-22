import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute,
  getAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute,
  getAccountsAccountIdEmailRoutingAddressesRoute,
  patchAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute,
  postAccountsAccountIdEmailRoutingAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailRoutingDestinationAddressesHandler = app
  .openapi(getAccountsAccountIdEmailRoutingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailRoutingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailRoutingAddressesDestinationAddressIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
