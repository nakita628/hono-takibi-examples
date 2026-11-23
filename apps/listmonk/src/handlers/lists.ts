import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteListsListIdRoute,
  getListsListIdRoute,
  getListsRoute,
  postListsRoute,
  putListsListIdRoute,
} from '../routes'

export const getListsRouteHandler: RouteHandler<typeof getListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsRouteHandler: RouteHandler<typeof postListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsListIdRouteHandler: RouteHandler<typeof getListsListIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putListsListIdRouteHandler: RouteHandler<typeof putListsListIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteListsListIdRouteHandler: RouteHandler<typeof deleteListsListIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
