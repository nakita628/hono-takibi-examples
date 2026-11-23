import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClientTokensClientTokenIdRoute,
  getClientTokensRoute,
  patchClientTokensClientTokenIdRoute,
  postClientTokensRoute,
} from '../routes'

export const getClientTokensRouteHandler: RouteHandler<typeof getClientTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientTokensRouteHandler: RouteHandler<typeof postClientTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClientTokensClientTokenIdRouteHandler: RouteHandler<
  typeof getClientTokensClientTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchClientTokensClientTokenIdRouteHandler: RouteHandler<
  typeof patchClientTokensClientTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
