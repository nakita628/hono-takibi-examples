import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApikeysApiKeyRoute,
  getApikeysApiKeyRoute,
  getApikeysRoute,
  patchApikeysApiKeyRoute,
  postApikeysRoute,
} from '../routes'

export const postApikeysRouteHandler: RouteHandler<typeof postApikeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApikeysRouteHandler: RouteHandler<typeof getApikeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApikeysApiKeyRouteHandler: RouteHandler<
  typeof deleteApikeysApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApikeysApiKeyRouteHandler: RouteHandler<typeof getApikeysApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApikeysApiKeyRouteHandler: RouteHandler<typeof patchApikeysApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
