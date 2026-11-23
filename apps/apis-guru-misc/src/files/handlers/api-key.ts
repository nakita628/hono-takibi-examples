import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteApiKeyRoute, getApiKeyRoute, patchApiKeyRoute } from '../routes'

export const deleteApiKeyRouteHandler: RouteHandler<typeof deleteApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyRouteHandler: RouteHandler<typeof getApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiKeyRouteHandler: RouteHandler<typeof patchApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
