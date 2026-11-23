import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAttachedItemsAttachedItemIdRoute,
  postAttachedItemsAttachedItemIdDeleteRoute,
  postAttachedItemsAttachedItemIdRoute,
} from '../routes'

export const getAttachedItemsAttachedItemIdRouteHandler: RouteHandler<
  typeof getAttachedItemsAttachedItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachedItemsAttachedItemIdRouteHandler: RouteHandler<
  typeof postAttachedItemsAttachedItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachedItemsAttachedItemIdDeleteRouteHandler: RouteHandler<
  typeof postAttachedItemsAttachedItemIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
