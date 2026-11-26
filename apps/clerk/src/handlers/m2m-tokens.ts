import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postM2mTokensRoute,
  getM2mTokensRoute,
  postM2mTokensM2mTokenIdRevokeRoute,
  postM2mTokensVerifyRoute,
} from '../routes'

export const postM2mTokensRouteHandler: RouteHandler<typeof postM2mTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getM2mTokensRouteHandler: RouteHandler<typeof getM2mTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postM2mTokensM2mTokenIdRevokeRouteHandler: RouteHandler<
  typeof postM2mTokensM2mTokenIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postM2mTokensVerifyRouteHandler: RouteHandler<
  typeof postM2mTokensVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
