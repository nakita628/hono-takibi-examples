import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateModuloRoute } from '../routes'

export const postCalculateModuloRouteHandler: RouteHandler<
  typeof postCalculateModuloRoute
> = async (c) => {
  throw new Error('Not implemented')
}
