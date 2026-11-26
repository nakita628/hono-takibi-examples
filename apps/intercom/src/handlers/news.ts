import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNewsNewsItemsRoute,
  postNewsNewsItemsRoute,
  getNewsNewsItemsNewsItemIdRoute,
  putNewsNewsItemsNewsItemIdRoute,
  deleteNewsNewsItemsNewsItemIdRoute,
  getNewsNewsfeedsNewsfeedIdItemsRoute,
  getNewsNewsfeedsRoute,
  getNewsNewsfeedsNewsfeedIdRoute,
} from '../routes'

export const getNewsNewsItemsRouteHandler: RouteHandler<typeof getNewsNewsItemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNewsNewsItemsRouteHandler: RouteHandler<typeof postNewsNewsItemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNewsNewsItemsNewsItemIdRouteHandler: RouteHandler<
  typeof getNewsNewsItemsNewsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNewsNewsItemsNewsItemIdRouteHandler: RouteHandler<
  typeof putNewsNewsItemsNewsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNewsNewsItemsNewsItemIdRouteHandler: RouteHandler<
  typeof deleteNewsNewsItemsNewsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNewsNewsfeedsNewsfeedIdItemsRouteHandler: RouteHandler<
  typeof getNewsNewsfeedsNewsfeedIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNewsNewsfeedsRouteHandler: RouteHandler<typeof getNewsNewsfeedsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNewsNewsfeedsNewsfeedIdRouteHandler: RouteHandler<
  typeof getNewsNewsfeedsNewsfeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
