import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute,
  deleteAccountsAccountIdCwsTenantStructuresStructureIdRoute,
  getAccountsAccountIdCwsTenantStructuresRoute,
  getAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute,
  getAccountsAccountIdCwsTenantStructuresStructureIdNodesRoute,
  getAccountsAccountIdCwsTenantStructuresStructureIdRoute,
  postAccountsAccountIdCwsTenantStructuresRoute,
  postAccountsAccountIdCwsTenantStructuresStructureIdNodesBatchRoute,
  postAccountsAccountIdCwsTenantStructuresStructureIdNodesRoute,
  putAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute,
  putAccountsAccountIdCwsTenantStructuresStructureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsTenantStructuresHandler = app
  .openapi(getAccountsAccountIdCwsTenantStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsTenantStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsTenantStructuresStructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsTenantStructuresStructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsTenantStructuresStructureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsTenantStructuresStructureIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsTenantStructuresStructureIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsTenantStructuresStructureIdNodesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsTenantStructuresStructureIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
