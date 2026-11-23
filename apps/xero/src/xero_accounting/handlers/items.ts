import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteItemsItemIDRoute,
  getItemsItemIDHistoryRoute,
  getItemsItemIDRoute,
  getItemsRoute,
  postItemsItemIDRoute,
  postItemsRoute,
  putItemsItemIDHistoryRoute,
  putItemsRoute,
} from '../routes'

export const getItemsRouteHandler: RouteHandler<typeof getItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putItemsRouteHandler: RouteHandler<typeof putItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsRouteHandler: RouteHandler<typeof postItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsItemIDRouteHandler: RouteHandler<typeof getItemsItemIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsItemIDRouteHandler: RouteHandler<typeof postItemsItemIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteItemsItemIDRouteHandler: RouteHandler<typeof deleteItemsItemIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemsItemIDHistoryRouteHandler: RouteHandler<
  typeof getItemsItemIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putItemsItemIDHistoryRouteHandler: RouteHandler<
  typeof putItemsItemIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
