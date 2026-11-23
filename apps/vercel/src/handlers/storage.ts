import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStorageStoresBlobIdRoute,
  getStorageStoresIdRoute,
  postStorageStoresBlobRoute,
} from '../routes'

export const getStorageStoresIdRouteHandler: RouteHandler<typeof getStorageStoresIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStorageStoresBlobRouteHandler: RouteHandler<
  typeof postStorageStoresBlobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStorageStoresBlobIdRouteHandler: RouteHandler<
  typeof deleteStorageStoresBlobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
