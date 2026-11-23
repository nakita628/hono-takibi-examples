import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateKeyPairRoute, postActionCreateKeyPairRoute } from '../routes'

export const getActionCreateKeyPairRouteHandler: RouteHandler<
  typeof getActionCreateKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateKeyPairRouteHandler: RouteHandler<
  typeof postActionCreateKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}
