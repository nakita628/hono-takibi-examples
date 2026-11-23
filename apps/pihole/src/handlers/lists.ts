import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteListsListRoute,
  getListsListRoute,
  getListsRoute,
  postListsRoute,
  putListsListRoute,
} from '../routes'

export const getListsListRouteHandler: RouteHandler<typeof getListsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putListsListRouteHandler: RouteHandler<typeof putListsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteListsListRouteHandler: RouteHandler<typeof deleteListsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsRouteHandler: RouteHandler<typeof getListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsRouteHandler: RouteHandler<typeof postListsRoute> = async (c) => {
  throw new Error('Not implemented')
}
