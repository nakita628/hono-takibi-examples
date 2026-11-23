import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBrowseCategoriesCategoryIdPlaylistsRoute,
  getBrowseCategoriesCategoryIdRoute,
  getBrowseCategoriesRoute,
  getBrowseFeaturedPlaylistsRoute,
  getBrowseNewReleasesRoute,
} from '../routes'

export const getBrowseCategoriesRouteHandler: RouteHandler<
  typeof getBrowseCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowseCategoriesCategoryIdRouteHandler: RouteHandler<
  typeof getBrowseCategoriesCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowseCategoriesCategoryIdPlaylistsRouteHandler: RouteHandler<
  typeof getBrowseCategoriesCategoryIdPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowseFeaturedPlaylistsRouteHandler: RouteHandler<
  typeof getBrowseFeaturedPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrowseNewReleasesRouteHandler: RouteHandler<
  typeof getBrowseNewReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
