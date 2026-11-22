import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersScriptsScriptNameRoute,
  deleteAccountsAccountIdWorkersScriptsScriptNameSecretsSecretNameRoute,
  deleteAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute,
  getAccountsAccountIdWorkersScriptsRoute,
  getAccountsAccountIdWorkersScriptsScriptNameContentV2Route,
  getAccountsAccountIdWorkersScriptsScriptNameRoute,
  getAccountsAccountIdWorkersScriptsScriptNameScriptSettingsRoute,
  getAccountsAccountIdWorkersScriptsScriptNameSecretsRoute,
  getAccountsAccountIdWorkersScriptsScriptNameSecretsSecretNameRoute,
  getAccountsAccountIdWorkersScriptsScriptNameSettingsRoute,
  getAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute,
  getAccountsAccountIdWorkersScriptsScriptNameUsageModelRoute,
  getAccountsAccountIdWorkersScriptsSearchRoute,
  patchAccountsAccountIdWorkersScriptsScriptNameScriptSettingsRoute,
  patchAccountsAccountIdWorkersScriptsScriptNameSecretsBulkRoute,
  patchAccountsAccountIdWorkersScriptsScriptNameSettingsRoute,
  postAccountsAccountIdWorkersAssetsUploadRoute,
  postAccountsAccountIdWorkersScriptsScriptNameAssetsUploadSessionRoute,
  postAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute,
  putAccountsAccountIdWorkersScriptsScriptNameContentRoute,
  putAccountsAccountIdWorkersScriptsScriptNameRoute,
  putAccountsAccountIdWorkersScriptsScriptNameSecretsRoute,
  putAccountsAccountIdWorkersScriptsScriptNameUsageModelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerScriptHandler = app
  .openapi(postAccountsAccountIdWorkersAssetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersScriptsScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersScriptsScriptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersScriptsScriptNameAssetsUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersScriptsScriptNameContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameContentV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameScriptSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersScriptsScriptNameScriptSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersScriptsScriptNameSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersScriptsScriptNameSecretsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersScriptsScriptNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersScriptsScriptNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersScriptsScriptNameSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameUsageModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersScriptsScriptNameUsageModelRoute, (c) => {
    throw new Error('Not implemented')
  })
