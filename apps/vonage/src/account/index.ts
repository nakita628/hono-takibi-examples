import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsApiKeySecretsSecretIdRoute,
  getAccountGetBalanceRoute,
  getAccountsApiKeySecretsRoute,
  getAccountsApiKeySecretsSecretIdRoute,
  postAccountRegisterSenderRoute,
  postAccountsApiKeySecretsRoute,
  postAccountSettingsRoute,
  postAccountTopUpRoute,
} from './routes'
import {
  deleteAccountsApiKeySecretsSecretIdRouteHandler,
  getAccountGetBalanceRouteHandler,
  getAccountsApiKeySecretsRouteHandler,
  getAccountsApiKeySecretsSecretIdRouteHandler,
  postAccountRegisterSenderRouteHandler,
  postAccountsApiKeySecretsRouteHandler,
  postAccountSettingsRouteHandler,
  postAccountTopUpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountGetBalanceRoute, getAccountGetBalanceRouteHandler)
  .openapi(postAccountRegisterSenderRoute, postAccountRegisterSenderRouteHandler)
  .openapi(postAccountSettingsRoute, postAccountSettingsRouteHandler)
  .openapi(postAccountTopUpRoute, postAccountTopUpRouteHandler)
  .openapi(getAccountsApiKeySecretsRoute, getAccountsApiKeySecretsRouteHandler)
  .openapi(postAccountsApiKeySecretsRoute, postAccountsApiKeySecretsRouteHandler)
  .openapi(
    deleteAccountsApiKeySecretsSecretIdRoute,
    deleteAccountsApiKeySecretsSecretIdRouteHandler,
  )
  .openapi(getAccountsApiKeySecretsSecretIdRoute, getAccountsApiKeySecretsSecretIdRouteHandler)

export default app
