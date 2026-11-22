import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdTriggersScriptNameRoute,
  deleteAccountsAccountIdWorkflowsConcurrencyKeyIdRoute,
  deleteAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdRoute,
  deleteAccountsAccountIdWorkflowsWorkflowNameRoute,
  getAccountsAccountIdTriggersScriptNameRoute,
  getAccountsAccountIdWorkflowsConcurrencyKeyIdRoute,
  getAccountsAccountIdWorkflowsConcurrencyRoute,
  getAccountsAccountIdWorkflowsRoute,
  getAccountsAccountIdWorkflowsSettingsRoute,
  getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdRoute,
  getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdStepRoute,
  getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdSubscribeTokenRoute,
  getAccountsAccountIdWorkflowsWorkflowNameInstancesRoute,
  getAccountsAccountIdWorkflowsWorkflowNameInstancesTerminateRoute,
  getAccountsAccountIdWorkflowsWorkflowNameRoute,
  getAccountsAccountIdWorkflowsWorkflowNameVersionsRoute,
  getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdDagRoute,
  getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdGraphRoute,
  getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdRoute,
  patchAccountsAccountIdTriggersScriptNameRoute,
  patchAccountsAccountIdWorkflowsConcurrencyKeyIdRoute,
  patchAccountsAccountIdWorkflowsSettingsRoute,
  patchAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdStatusRoute,
  postAccountsAccountIdWorkflowsConcurrencyRoute,
  postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchDeleteRoute,
  postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchRoute,
  postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchTerminateRoute,
  postAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdEventsEventTypeRoute,
  postAccountsAccountIdWorkflowsWorkflowNameInstancesRoute,
  putAccountsAccountIdTriggersScriptNameRoute,
  putAccountsAccountIdWorkflowsWorkflowNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(deleteAccountsAccountIdTriggersScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTriggersScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdTriggersScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdTriggersScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsConcurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkflowsConcurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkflowsConcurrencyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsConcurrencyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkflowsConcurrencyKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkflowsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkflowsWorkflowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkflowsWorkflowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkflowsWorkflowNameInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkflowsWorkflowNameInstancesBatchTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameInstancesTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdEventsEventTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameInstancesInstanceIdSubscribeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdDagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkflowsWorkflowNameVersionsVersionIdGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
