import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDefaultAuthorizerRoute,
  getDefaultAuthorizerRoute,
  postDefaultAuthorizerRoute,
} from '../routes'

export const deleteDefaultAuthorizerRouteHandler: RouteHandler<
  typeof deleteDefaultAuthorizerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDefaultAuthorizerRouteHandler: RouteHandler<
  typeof getDefaultAuthorizerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDefaultAuthorizerRouteHandler: RouteHandler<
  typeof postDefaultAuthorizerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
