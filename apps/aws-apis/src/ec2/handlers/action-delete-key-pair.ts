import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteKeyPairRoute, postActionDeleteKeyPairRoute } from '../routes'

export const getActionDeleteKeyPairRouteHandler: RouteHandler<
  typeof getActionDeleteKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteKeyPairRouteHandler: RouteHandler<
  typeof postActionDeleteKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
