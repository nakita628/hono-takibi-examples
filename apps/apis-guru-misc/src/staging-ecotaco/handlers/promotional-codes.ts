import type { RouteHandler } from '@hono/zod-openapi'
import type { getPromotionalCodesRoute, postPromotionalCodesRoute } from '../routes'

export const getPromotionalCodesRouteHandler: RouteHandler<
  typeof getPromotionalCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionalCodesRouteHandler: RouteHandler<
  typeof postPromotionalCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
