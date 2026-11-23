import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthKeysKeyRoute,
  getAuthKeysRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  postAuthKeysRoute,
} from '../routes'

export const getAuthKeysRouteHandler: RouteHandler<typeof getAuthKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKeysRouteHandler: RouteHandler<typeof postAuthKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthKeysKeyRouteHandler: RouteHandler<typeof deleteAuthKeysKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAuthPasswordResetProvidersRouteHandler: RouteHandler<
  typeof getAuthPasswordResetProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthProvidersRouteHandler: RouteHandler<typeof getAuthProvidersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
