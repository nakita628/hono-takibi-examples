import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteViewsViewIdRoute,
  getViewsViewIdRoute,
  postViewsRoute,
  postViewsSearchRoute,
  postViewsViewIdRowsSearchRoute,
  putViewsViewIdRoute,
} from '../routes'

export const postViewsRouteHandler: RouteHandler<typeof postViewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putViewsViewIdRouteHandler: RouteHandler<typeof putViewsViewIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteViewsViewIdRouteHandler: RouteHandler<typeof deleteViewsViewIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getViewsViewIdRouteHandler: RouteHandler<typeof getViewsViewIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postViewsSearchRouteHandler: RouteHandler<typeof postViewsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postViewsViewIdRowsSearchRouteHandler: RouteHandler<
  typeof postViewsViewIdRowsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
