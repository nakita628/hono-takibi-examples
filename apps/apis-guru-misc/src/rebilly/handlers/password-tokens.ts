import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePasswordTokensIdRoute,
  getPasswordTokensIdRoute,
  getPasswordTokensRoute,
  postPasswordTokensRoute,
} from '../routes'

export const getPasswordTokensRouteHandler: RouteHandler<typeof getPasswordTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPasswordTokensRouteHandler: RouteHandler<typeof postPasswordTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePasswordTokensIdRouteHandler: RouteHandler<
  typeof deletePasswordTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPasswordTokensIdRouteHandler: RouteHandler<
  typeof getPasswordTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
