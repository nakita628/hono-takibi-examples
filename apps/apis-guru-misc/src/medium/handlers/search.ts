import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchArticlesQueryQueryRoute,
  getSearchListsQueryQueryRoute,
  getSearchPublicationsQueryQueryRoute,
  getSearchTagsQueryQueryRoute,
  getSearchUsersQueryQueryRoute,
} from '../routes'

export const getSearchArticlesQueryQueryRouteHandler: RouteHandler<
  typeof getSearchArticlesQueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchListsQueryQueryRouteHandler: RouteHandler<
  typeof getSearchListsQueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchPublicationsQueryQueryRouteHandler: RouteHandler<
  typeof getSearchPublicationsQueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchTagsQueryQueryRouteHandler: RouteHandler<
  typeof getSearchTagsQueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchUsersQueryQueryRouteHandler: RouteHandler<
  typeof getSearchUsersQueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
