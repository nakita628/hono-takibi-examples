import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteItemsIdRoute,
  getItemsIdRoute,
  getItemsRoute,
  postItemsRoute,
  putItemsIdRoute,
} from '../routes'

export const getItemsRouteHandler: RouteHandler<typeof getItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postItemsRouteHandler: RouteHandler<typeof postItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteItemsIdRouteHandler: RouteHandler<typeof deleteItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsIdRouteHandler: RouteHandler<typeof getItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putItemsIdRouteHandler: RouteHandler<typeof putItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
