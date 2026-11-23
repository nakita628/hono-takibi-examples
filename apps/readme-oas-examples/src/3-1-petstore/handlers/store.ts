import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStoreOrderOrderIdRoute,
  getStoreInventoryRoute,
  getStoreOrderOrderIdRoute,
  postStoreOrderRoute,
} from '../routes'

export const getStoreInventoryRouteHandler: RouteHandler<typeof getStoreInventoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStoreOrderRouteHandler: RouteHandler<typeof postStoreOrderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStoreOrderOrderIdRouteHandler: RouteHandler<
  typeof getStoreOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStoreOrderOrderIdRouteHandler: RouteHandler<
  typeof deleteStoreOrderOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
