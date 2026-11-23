import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShieldListsShieldListIdRoute,
  getShieldListsRoute,
  getShieldListsShieldListIdRoute,
  postShieldListsRoute,
  putShieldListsShieldListIdRoute,
} from '../routes'

export const getShieldListsRouteHandler: RouteHandler<typeof getShieldListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postShieldListsRouteHandler: RouteHandler<typeof postShieldListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShieldListsShieldListIdRouteHandler: RouteHandler<
  typeof getShieldListsShieldListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShieldListsShieldListIdRouteHandler: RouteHandler<
  typeof deleteShieldListsShieldListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShieldListsShieldListIdRouteHandler: RouteHandler<
  typeof putShieldListsShieldListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
