import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCouponsCodeRoute,
  getCouponsCodeRoute,
  getCouponsRoute,
  postCouponsRoute,
  putCouponsCodeRoute,
} from '../routes'

export const postCouponsRouteHandler: RouteHandler<typeof postCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsRouteHandler: RouteHandler<typeof getCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCouponsCodeRouteHandler: RouteHandler<typeof putCouponsCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsCodeRouteHandler: RouteHandler<typeof getCouponsCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCouponsCodeRouteHandler: RouteHandler<typeof deleteCouponsCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
