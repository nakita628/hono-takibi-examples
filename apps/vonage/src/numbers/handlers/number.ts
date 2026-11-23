import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberSearchRoute,
  postNumberBuyRoute,
  postNumberCancelRoute,
  postNumberUpdateRoute,
} from '../routes'

export const postNumberBuyRouteHandler: RouteHandler<typeof postNumberBuyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberCancelRouteHandler: RouteHandler<typeof postNumberCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNumberSearchRouteHandler: RouteHandler<typeof getNumberSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberUpdateRouteHandler: RouteHandler<typeof postNumberUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
