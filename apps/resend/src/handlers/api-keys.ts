import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysApiKeyIdRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIdRoute,
  postApiKeysRoute,
} from '../routes'

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof patchApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysApiKeyIdRouteHandler: RouteHandler<
  typeof deleteApiKeysApiKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
