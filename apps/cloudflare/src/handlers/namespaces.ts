import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameRoute,
  getAccountsAccountIdAgentMemoryNamespacesNamespaceNameRoute,
  getAccountsAccountIdAgentMemoryNamespacesRoute,
  postAccountsAccountIdAgentMemoryNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getAccountsAccountIdAgentMemoryNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAgentMemoryNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAgentMemoryNamespacesNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
