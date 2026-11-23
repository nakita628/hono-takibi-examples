import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSalesOrdersIdRoute,
  getSalesOrdersRoute,
  patchSalesOrdersIdRoute,
  postSalesOrdersIdCancellationRoute,
  postSalesOrdersRoute,
} from '../routes'

export const getSalesOrdersRouteHandler: RouteHandler<typeof getSalesOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSalesOrdersRouteHandler: RouteHandler<typeof postSalesOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSalesOrdersIdRouteHandler: RouteHandler<typeof getSalesOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSalesOrdersIdRouteHandler: RouteHandler<typeof patchSalesOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSalesOrdersIdCancellationRouteHandler: RouteHandler<
  typeof postSalesOrdersIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
