import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiSearchInstancesIdRoute,
  deleteAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute,
  getAccountsAccountIdAiSearchInstancesIdRoute,
  getAccountsAccountIdAiSearchInstancesIdStatsRoute,
  getAccountsAccountIdAiSearchInstancesRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdStatsRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesRoute,
  postAccountsAccountIdAiSearchInstancesIdChatCompletionsRoute,
  postAccountsAccountIdAiSearchInstancesIdSearchRoute,
  postAccountsAccountIdAiSearchInstancesRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdChatCompletionsRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdPurgeCacheRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdSearchRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesRoute,
  putAccountsAccountIdAiSearchInstancesIdRoute,
  putAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchInstancesHandler = app
  .openapi(getAccountsAccountIdAiSearchInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiSearchInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiSearchInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchInstancesIdChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchInstancesIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchInstancesIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdPurgeCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
