import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNavigationViewsFragmentRoute,
  getNavigationViewsRoute,
  patchNavigationViewsFragmentRoute,
  postNavigationViewsRoute,
} from '../routes'

export const getNavigationViewsRouteHandler: RouteHandler<typeof getNavigationViewsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNavigationViewsRouteHandler: RouteHandler<
  typeof postNavigationViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNavigationViewsFragmentRouteHandler: RouteHandler<
  typeof patchNavigationViewsFragmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNavigationViewsFragmentRouteHandler: RouteHandler<
  typeof deleteNavigationViewsFragmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
