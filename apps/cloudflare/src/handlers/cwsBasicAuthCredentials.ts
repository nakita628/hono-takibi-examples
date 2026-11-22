import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsBasicAuthCredentialsCredentialIdRoute,
  deleteAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsSecretIdRoute,
  getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdRoute,
  getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsRoute,
  getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsSecretIdRoute,
  getAccountsAccountIdCwsBasicAuthCredentialsRoute,
  postAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsRoute,
  postAccountsAccountIdCwsBasicAuthCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsBasicAuthCredentialsHandler = app
  .openapi(getAccountsAccountIdCwsBasicAuthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsBasicAuthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsBasicAuthCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsBasicAuthCredentialsCredentialIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
