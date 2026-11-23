import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppliedCouponsRoute, postAppliedCouponsRoute } from '../routes'

export const postAppliedCouponsRouteHandler: RouteHandler<typeof postAppliedCouponsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAppliedCouponsRouteHandler: RouteHandler<typeof getAppliedCouponsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
