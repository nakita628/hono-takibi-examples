import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrdersIdIndexRoute,
  getOrdersIndexRoute,
  patchOrdersIdIndexRoute,
  postOrdersIndexRoute,
  putOrdersIdIndexRoute,
} from '../routes'

export const getOrdersIndexRouteHandler: RouteHandler<typeof getOrdersIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersIndexRouteHandler: RouteHandler<typeof postOrdersIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersIdIndexRouteHandler: RouteHandler<typeof getOrdersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchOrdersIdIndexRouteHandler: RouteHandler<typeof patchOrdersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putOrdersIdIndexRouteHandler: RouteHandler<typeof putOrdersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
