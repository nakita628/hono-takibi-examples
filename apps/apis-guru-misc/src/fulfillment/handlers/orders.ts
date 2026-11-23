import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOrdersIdRoute,
  getOrdersIdRoute,
  getOrdersRoute,
  postOrdersRoute,
  putOrdersIdShipRoute,
  putOrdersIdStatusRoute,
} from '../routes'

export const getOrdersRouteHandler: RouteHandler<typeof getOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersRouteHandler: RouteHandler<typeof postOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrdersIdRouteHandler: RouteHandler<typeof deleteOrdersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersIdRouteHandler: RouteHandler<typeof getOrdersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrdersIdShipRouteHandler: RouteHandler<typeof putOrdersIdShipRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrdersIdStatusRouteHandler: RouteHandler<typeof putOrdersIdStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
