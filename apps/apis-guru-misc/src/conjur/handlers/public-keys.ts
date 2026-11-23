import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicKeysAccountKindIdentifierRoute } from '../routes'

export const getPublicKeysAccountKindIdentifierRouteHandler: RouteHandler<
  typeof getPublicKeysAccountKindIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
