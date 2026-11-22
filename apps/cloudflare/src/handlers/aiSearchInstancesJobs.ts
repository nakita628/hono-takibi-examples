import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAiSearchInstancesIdJobsJobIdLogsRoute,
  getAccountsAccountIdAiSearchInstancesIdJobsJobIdRoute,
  getAccountsAccountIdAiSearchInstancesIdJobsRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdLogsRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdRoute,
  getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsRoute,
  patchAccountsAccountIdAiSearchInstancesIdJobsJobIdRoute,
  patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdRoute,
  postAccountsAccountIdAiSearchInstancesIdJobsRoute,
  postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchInstancesJobsHandler = app
  .openapi(getAccountsAccountIdAiSearchInstancesIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchInstancesIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchInstancesIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiSearchInstancesIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchInstancesIdJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiSearchNamespacesNamespaceInstancesIdJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
