import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdChunksRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdDownloadRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdLogsRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute,
  patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute,
  putAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchInstancesItemsHandler = app
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdChunksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdItemsItemIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
