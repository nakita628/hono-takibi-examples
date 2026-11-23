import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getItemsItemIdAttachedItemsRoute,
  getItemsItemIdItemEntitlementsRoute,
  getItemsItemIdRoute,
  getItemsRoute,
  postItemsItemIdAttachedItemsRoute,
  postItemsItemIdDeleteRoute,
  postItemsItemIdItemEntitlementsRoute,
  postItemsItemIdRoute,
  postItemsRoute,
} from '../routes'

export const getItemsRouteHandler: RouteHandler<typeof getItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsRouteHandler: RouteHandler<typeof postItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsItemIdDeleteRouteHandler: RouteHandler<
  typeof postItemsItemIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsItemIdRouteHandler: RouteHandler<typeof getItemsItemIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsItemIdRouteHandler: RouteHandler<typeof postItemsItemIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsItemIdAttachedItemsRouteHandler: RouteHandler<
  typeof getItemsItemIdAttachedItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsItemIdAttachedItemsRouteHandler: RouteHandler<
  typeof postItemsItemIdAttachedItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsItemIdItemEntitlementsRouteHandler: RouteHandler<
  typeof getItemsItemIdItemEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsItemIdItemEntitlementsRouteHandler: RouteHandler<
  typeof postItemsItemIdItemEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
