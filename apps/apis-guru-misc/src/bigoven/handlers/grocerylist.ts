import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGrocerylistItemGuidRoute,
  deleteGrocerylistRoute,
  getGrocerylistRoute,
  postGrocerylistClearcheckedlinesRoute,
  postGrocerylistDepartmentRoute,
  postGrocerylistItemRoute,
  postGrocerylistLineRoute,
  postGrocerylistRecipeRoute,
  postGrocerylistSyncRoute,
  putGrocerylistItemGuidRoute,
} from '../routes'

export const deleteGrocerylistRouteHandler: RouteHandler<typeof deleteGrocerylistRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGrocerylistRouteHandler: RouteHandler<typeof getGrocerylistRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistClearcheckedlinesRouteHandler: RouteHandler<
  typeof postGrocerylistClearcheckedlinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistDepartmentRouteHandler: RouteHandler<
  typeof postGrocerylistDepartmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistItemRouteHandler: RouteHandler<
  typeof postGrocerylistItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGrocerylistItemGuidRouteHandler: RouteHandler<
  typeof deleteGrocerylistItemGuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGrocerylistItemGuidRouteHandler: RouteHandler<
  typeof putGrocerylistItemGuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistLineRouteHandler: RouteHandler<
  typeof postGrocerylistLineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistRecipeRouteHandler: RouteHandler<
  typeof postGrocerylistRecipeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrocerylistSyncRouteHandler: RouteHandler<
  typeof postGrocerylistSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
