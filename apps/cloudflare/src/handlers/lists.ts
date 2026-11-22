import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRulesListsListIdItemsRoute,
  deleteAccountsAccountIdRulesListsListIdRoute,
  getAccountsAccountIdRulesListsBulkOperationsOperationIdRoute,
  getAccountsAccountIdRulesListsListIdItemsItemIdRoute,
  getAccountsAccountIdRulesListsListIdItemsRoute,
  getAccountsAccountIdRulesListsListIdRoute,
  getAccountsAccountIdRulesListsRoute,
  postAccountsAccountIdRulesListsListIdItemsRoute,
  postAccountsAccountIdRulesListsRoute,
  putAccountsAccountIdRulesListsListIdItemsRoute,
  putAccountsAccountIdRulesListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getAccountsAccountIdRulesListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRulesListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesListsBulkOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRulesListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRulesListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRulesListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRulesListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRulesListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesListsListIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
