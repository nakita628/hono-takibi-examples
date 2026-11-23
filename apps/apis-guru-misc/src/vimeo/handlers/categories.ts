import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCategoriesCategoryChannelsRoute,
  getCategoriesCategoryGroupsRoute,
  getCategoriesCategoryRoute,
  getCategoriesCategoryVideosRoute,
  getCategoriesCategoryVideosVideoIdRoute,
  getCategoriesRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryRouteHandler: RouteHandler<
  typeof getCategoriesCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryChannelsRouteHandler: RouteHandler<
  typeof getCategoriesCategoryChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryGroupsRouteHandler: RouteHandler<
  typeof getCategoriesCategoryGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryVideosRouteHandler: RouteHandler<
  typeof getCategoriesCategoryVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryVideosVideoIdRouteHandler: RouteHandler<
  typeof getCategoriesCategoryVideosVideoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
