import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsApiKeySecretsSecretIdRoute,
  getAccountsApiKeySecretsRoute,
  getAccountsApiKeySecretsSecretIdRoute,
  postAccountsApiKeySecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretManagementHandler = app
  .openapi(getAccountsApiKeySecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsApiKeySecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsApiKeySecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsApiKeySecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
