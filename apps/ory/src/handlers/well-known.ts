import type { RouteHandler } from '@hono/zod-openapi'
import type { getWellKnownChangePasswordRoute, getWellKnownOryWebauthnJsRoute } from '../routes'

export const getWellKnownChangePasswordRouteHandler: RouteHandler<
  typeof getWellKnownChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellKnownOryWebauthnJsRouteHandler: RouteHandler<
  typeof getWellKnownOryWebauthnJsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
