import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteItemDeleteRoute,
  getItemAllTagsRoute,
  getItemChangesRoute,
  getItemFindByUrlRoute,
  getItemGetOtpRoute,
  getItemGetRoute,
  getItemInFoldersRoute,
  postItemCreateRoute,
  putItemUpdateRoute,
} from '../routes'

export const getItemGetRouteHandler: RouteHandler<typeof getItemGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemInFoldersRouteHandler: RouteHandler<typeof getItemInFoldersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemFindByUrlRouteHandler: RouteHandler<typeof getItemFindByUrlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemGetOtpRouteHandler: RouteHandler<typeof getItemGetOtpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemChangesRouteHandler: RouteHandler<typeof getItemChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemAllTagsRouteHandler: RouteHandler<typeof getItemAllTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemCreateRouteHandler: RouteHandler<typeof postItemCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putItemUpdateRouteHandler: RouteHandler<typeof putItemUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteItemDeleteRouteHandler: RouteHandler<typeof deleteItemDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
