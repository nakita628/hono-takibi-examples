import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteItemsCollectionIdRoute,
  deleteItemsCollectionRoute,
  getItemsCollectionIdRoute,
  getItemsCollectionRoute,
  patchItemsCollectionIdRoute,
  patchItemsCollectionRoute,
  postItemsCollectionRoute,
} from '../routes'

export const getItemsCollectionRouteHandler: RouteHandler<typeof getItemsCollectionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postItemsCollectionRouteHandler: RouteHandler<
  typeof postItemsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchItemsCollectionRouteHandler: RouteHandler<
  typeof patchItemsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteItemsCollectionRouteHandler: RouteHandler<
  typeof deleteItemsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsCollectionIdRouteHandler: RouteHandler<
  typeof getItemsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchItemsCollectionIdRouteHandler: RouteHandler<
  typeof patchItemsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteItemsCollectionIdRouteHandler: RouteHandler<
  typeof deleteItemsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
