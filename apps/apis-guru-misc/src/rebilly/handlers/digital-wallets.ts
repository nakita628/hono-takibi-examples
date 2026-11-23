import type { RouteHandler } from '@hono/zod-openapi'
import type { postDigitalWalletsValidationRoute } from '../routes'

export const postDigitalWalletsValidationRouteHandler: RouteHandler<
  typeof postDigitalWalletsValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
