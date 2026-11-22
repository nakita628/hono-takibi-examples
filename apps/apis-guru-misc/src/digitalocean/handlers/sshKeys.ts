import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2AccountKeysSshKeyIdentifierRoute,
  getV2AccountKeysRoute,
  getV2AccountKeysSshKeyIdentifierRoute,
  postV2AccountKeysRoute,
  putV2AccountKeysSshKeyIdentifierRoute,
} from '../routes'

export const getV2AccountKeysRouteHandler: RouteHandler<typeof getV2AccountKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2AccountKeysRouteHandler: RouteHandler<typeof postV2AccountKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof deleteV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof getV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof putV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
