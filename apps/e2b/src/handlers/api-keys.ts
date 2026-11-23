import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysApiKeyIDRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIDRoute,
  postApiKeysRoute,
} from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
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
