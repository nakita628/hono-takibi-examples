import type { RouteHandler } from '@hono/zod-openapi'
import type { postResponsesBetaTrueRoute } from '../routes'

export const postResponsesBetaTrueRouteHandler: RouteHandler<
  typeof postResponsesBetaTrueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
