import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderTaskRoute, getOrderTaskTaskIdRoute, postOrderTaskRoute } from '../routes'

export const getOrderTaskRouteHandler: RouteHandler<typeof getOrderTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrderTaskRouteHandler: RouteHandler<typeof postOrderTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrderTaskTaskIdRouteHandler: RouteHandler<typeof getOrderTaskTaskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
