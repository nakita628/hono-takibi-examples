import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSecretsStoreStoresStoreIdRoute,
  deleteAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute,
  deleteAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute,
  getAccountsAccountIdSecretsStoreQuotaRoute,
  getAccountsAccountIdSecretsStoreStoresRoute,
  getAccountsAccountIdSecretsStoreStoresStoreIdRoute,
  getAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute,
  getAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute,
  patchAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute,
  postAccountsAccountIdSecretsStoreStoresRoute,
  postAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute,
  postAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdDuplicateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsStoreHandler = app
  .openapi(getAccountsAccountIdSecretsStoreQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecretsStoreStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecretsStoreStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecretsStoreStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecretsStoreStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecretsStoreStoresStoreIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecretsStoreStoresStoreIdSecretsSecretIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
