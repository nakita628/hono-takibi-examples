import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBitsCheermotesRoute,
  getBitsCustomPowerUpsRoute,
  getBitsExtensionsRoute,
  getBitsLeaderboardRoute,
  putBitsExtensionsRoute,
} from '../routes'

export const getBitsLeaderboardRouteHandler: RouteHandler<typeof getBitsLeaderboardRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBitsCheermotesRouteHandler: RouteHandler<typeof getBitsCheermotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBitsCustomPowerUpsRouteHandler: RouteHandler<
  typeof getBitsCustomPowerUpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBitsExtensionsRouteHandler: RouteHandler<typeof getBitsExtensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBitsExtensionsRouteHandler: RouteHandler<typeof putBitsExtensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
