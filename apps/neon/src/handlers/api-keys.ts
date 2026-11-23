import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteApiKeysKeyIdRoute, getApiKeysRoute, postApiKeysRoute } from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysKeyIdRouteHandler: RouteHandler<typeof deleteApiKeysKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
