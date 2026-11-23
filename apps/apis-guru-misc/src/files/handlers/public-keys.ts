import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePublicKeysIdRoute,
  getPublicKeysIdRoute,
  getPublicKeysRoute,
  patchPublicKeysIdRoute,
  postPublicKeysRoute,
} from '../routes'

export const getPublicKeysRouteHandler: RouteHandler<typeof getPublicKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPublicKeysRouteHandler: RouteHandler<typeof postPublicKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePublicKeysIdRouteHandler: RouteHandler<typeof deletePublicKeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPublicKeysIdRouteHandler: RouteHandler<typeof getPublicKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPublicKeysIdRouteHandler: RouteHandler<typeof patchPublicKeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
