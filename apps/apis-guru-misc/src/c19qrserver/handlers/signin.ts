import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSigninSigninIdRoute,
  getSigninSigninIdRoute,
  postSigninRoute,
  putSigninSigninIdRoute,
} from '../routes'

export const postSigninRouteHandler: RouteHandler<typeof postSigninRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSigninSigninIdRouteHandler: RouteHandler<
  typeof deleteSigninSigninIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigninSigninIdRouteHandler: RouteHandler<typeof getSigninSigninIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSigninSigninIdRouteHandler: RouteHandler<typeof putSigninSigninIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
