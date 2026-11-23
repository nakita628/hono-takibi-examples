import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMetricsStreamOwnerIdRoute,
  getMetricsStreamOwnerIdRoute,
  putMetricsStreamOwnerIdRoute,
} from '../routes'

export const getMetricsStreamOwnerIdRouteHandler: RouteHandler<
  typeof getMetricsStreamOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMetricsStreamOwnerIdRouteHandler: RouteHandler<
  typeof putMetricsStreamOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMetricsStreamOwnerIdRouteHandler: RouteHandler<
  typeof deleteMetricsStreamOwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
