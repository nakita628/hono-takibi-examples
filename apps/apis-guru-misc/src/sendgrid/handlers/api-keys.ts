import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysApiKeyIdRoute,
  getApiKeysApiKeyIdRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIdRoute,
  postApiKeysRoute,
  putApiKeysApiKeyIdRoute,
} from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysApiKeyIdRouteHandler: RouteHandler<typeof getApiKeysApiKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof patchApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiKeysApiKeyIdRouteHandler: RouteHandler<typeof putApiKeysApiKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
