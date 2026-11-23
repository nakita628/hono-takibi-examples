import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSimCardOrdersIdRoute,
  getSimCardOrdersRoute,
  postSimCardOrdersRoute,
} from '../routes'

export const getSimCardOrdersRouteHandler: RouteHandler<typeof getSimCardOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSimCardOrdersRouteHandler: RouteHandler<typeof postSimCardOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSimCardOrdersIdRouteHandler: RouteHandler<typeof getSimCardOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
