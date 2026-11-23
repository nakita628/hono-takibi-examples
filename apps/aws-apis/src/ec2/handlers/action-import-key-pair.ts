import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionImportKeyPairRoute, postActionImportKeyPairRoute } from '../routes'

export const getActionImportKeyPairRouteHandler: RouteHandler<
  typeof getActionImportKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportKeyPairRouteHandler: RouteHandler<
  typeof postActionImportKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
