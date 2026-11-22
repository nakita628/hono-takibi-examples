import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdGatewayListsListIdRoute,
  getAccountsAccountIdGatewayListsListIdItemsRoute,
  getAccountsAccountIdGatewayListsListIdRoute,
  getAccountsAccountIdGatewayListsRoute,
  patchAccountsAccountIdGatewayListsListIdRoute,
  postAccountsAccountIdGatewayListsRoute,
  postAccountsAccountIdGatewayListsUploadRoute,
  putAccountsAccountIdGatewayListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustListsHandler = app
  .openapi(getAccountsAccountIdGatewayListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayListsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdGatewayListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdGatewayListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdGatewayListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
