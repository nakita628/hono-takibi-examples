import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsExportsIdIndexRoute,
  getReportsExportsIdIndexRoute,
  getReportsExportsIndexRoute,
} from '../routes'

export const getReportsExportsIndexRouteHandler: RouteHandler<
  typeof getReportsExportsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsExportsIdIndexRouteHandler: RouteHandler<
  typeof getReportsExportsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsExportsIdIndexRouteHandler: RouteHandler<
  typeof deleteReportsExportsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
