import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsApiKeySecretsSecretIdRoute,
  getAccountsApiKeySecretsRoute,
  getAccountsApiKeySecretsSecretIdRoute,
  postAccountsApiKeySecretsRoute,
} from '../routes'

export const getAccountsApiKeySecretsRouteHandler: RouteHandler<
  typeof getAccountsApiKeySecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsApiKeySecretsRouteHandler: RouteHandler<
  typeof postAccountsApiKeySecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsApiKeySecretsSecretIdRouteHandler: RouteHandler<
  typeof deleteAccountsApiKeySecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsApiKeySecretsSecretIdRouteHandler: RouteHandler<
  typeof getAccountsApiKeySecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
