import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameProtectedResourcesSummaryRoute,
  getV1ParentCryptoKeysRoute,
  getV1ScopeProtectedResourcesSearchRoute,
} from '../routes'

export const getV1NameProtectedResourcesSummaryRouteHandler: RouteHandler<
  typeof getV1NameProtectedResourcesSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentCryptoKeysRouteHandler: RouteHandler<
  typeof getV1ParentCryptoKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ScopeProtectedResourcesSearchRouteHandler: RouteHandler<
  typeof getV1ScopeProtectedResourcesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
