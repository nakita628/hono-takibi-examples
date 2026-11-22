import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStorageKvNamespacesNamespaceIdBulkRoute,
  deleteAccountsAccountIdStorageKvNamespacesNamespaceIdRoute,
  deleteAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute,
  getAccountsAccountIdStorageKvNamespacesNamespaceIdKeysRoute,
  getAccountsAccountIdStorageKvNamespacesNamespaceIdMetadataKeyNameRoute,
  getAccountsAccountIdStorageKvNamespacesNamespaceIdRoute,
  getAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute,
  getAccountsAccountIdStorageKvNamespacesRoute,
  postAccountsAccountIdStorageKvNamespacesNamespaceIdBulkDeleteRoute,
  postAccountsAccountIdStorageKvNamespacesNamespaceIdBulkGetRoute,
  postAccountsAccountIdStorageKvNamespacesRoute,
  putAccountsAccountIdStorageKvNamespacesNamespaceIdBulkRoute,
  putAccountsAccountIdStorageKvNamespacesNamespaceIdRoute,
  putAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersKVNamespaceHandler = app
  .openapi(getAccountsAccountIdStorageKvNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStorageKvNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStorageKvNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStorageKvNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStorageKvNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStorageKvNamespacesNamespaceIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStorageKvNamespacesNamespaceIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStorageKvNamespacesNamespaceIdBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStorageKvNamespacesNamespaceIdBulkGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStorageKvNamespacesNamespaceIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStorageKvNamespacesNamespaceIdMetadataKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStorageKvNamespacesNamespaceIdValuesKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
