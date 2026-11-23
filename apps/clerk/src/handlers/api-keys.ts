import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDSecretRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIDRoute,
  postApiKeysApiKeyIDRevokeRoute,
  postApiKeysRoute,
  postApiKeysVerifyRoute,
} from '../routes'

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysApiKeyIDRouteHandler: RouteHandler<typeof getApiKeysApiKeyIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiKeysApiKeyIDRouteHandler: RouteHandler<
  typeof patchApiKeysApiKeyIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysApiKeyIDRouteHandler: RouteHandler<
  typeof deleteApiKeysApiKeyIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysApiKeyIDSecretRouteHandler: RouteHandler<
  typeof getApiKeysApiKeyIDSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysApiKeyIDRevokeRouteHandler: RouteHandler<
  typeof postApiKeysApiKeyIDRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysVerifyRouteHandler: RouteHandler<typeof postApiKeysVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
