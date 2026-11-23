import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQueryDistinctColumnNameRoute,
  getQueryIndexRoute,
  getQueryPkRoute,
  getQueryRelatedColumnNameRoute,
} from '../routes'

export const getQueryIndexRouteHandler: RouteHandler<typeof getQueryIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryDistinctColumnNameRouteHandler: RouteHandler<
  typeof getQueryDistinctColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryRelatedColumnNameRouteHandler: RouteHandler<
  typeof getQueryRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueryPkRouteHandler: RouteHandler<typeof getQueryPkRoute> = async (c) => {
  throw new Error('Not implemented')
}
