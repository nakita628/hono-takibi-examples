import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiSearchNamespacesNameRoute,
  getAccountsAccountIdAiSearchNamespacesNameRoute,
  getAccountsAccountIdAiSearchNamespacesRoute,
  patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute,
  postAccountsAccountIdAiSearchNamespacesRoute,
  putAccountsAccountIdAiSearchNamespacesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchNamespacesHandler = app
  .openapi(getAccountsAccountIdAiSearchNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiSearchNamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiSearchNamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
