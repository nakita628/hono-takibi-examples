import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesMemoryIdRoute,
  deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRoute,
  deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameSessionsSessionIdRoute,
  getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesMemoryIdRoute,
  getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesRoute,
  getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesRoute,
  postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameIngestRoute,
  postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRecallRoute,
  postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRememberRoute,
  postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memoryHandler = app
  .openapi(getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameIngestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesMemoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameMemoriesMemoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRecallRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameRememberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameSessionsSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdAgentMemoryNamespacesNamespaceNameProfilesProfileNameSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
