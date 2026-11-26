import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchCitiesRoute,
  getSearchExploreRoute,
  postSearchLargeAssetsRoute,
  postSearchMetadataRoute,
  getSearchPersonRoute,
  getSearchPlacesRoute,
  postSearchRandomRoute,
  postSearchSmartRoute,
  postSearchStatisticsRoute,
  getSearchSuggestionsRoute,
} from '../routes'

export const getSearchCitiesRouteHandler: RouteHandler<typeof getSearchCitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchExploreRouteHandler: RouteHandler<typeof getSearchExploreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchLargeAssetsRouteHandler: RouteHandler<
  typeof postSearchLargeAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchMetadataRouteHandler: RouteHandler<typeof postSearchMetadataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchPersonRouteHandler: RouteHandler<typeof getSearchPersonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchPlacesRouteHandler: RouteHandler<typeof getSearchPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchRandomRouteHandler: RouteHandler<typeof postSearchRandomRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchSmartRouteHandler: RouteHandler<typeof postSearchSmartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchStatisticsRouteHandler: RouteHandler<
  typeof postSearchStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchSuggestionsRouteHandler: RouteHandler<
  typeof getSearchSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
