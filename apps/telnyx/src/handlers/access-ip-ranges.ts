import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessIpRangesAccessIpRangeIdRoute,
  getAccessIpRangesRoute,
  postAccessIpRangesRoute,
} from '../routes'

export const getAccessIpRangesRouteHandler: RouteHandler<typeof getAccessIpRangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccessIpRangesRouteHandler: RouteHandler<typeof postAccessIpRangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAccessIpRangesAccessIpRangeIdRouteHandler: RouteHandler<
  typeof deleteAccessIpRangesAccessIpRangeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
