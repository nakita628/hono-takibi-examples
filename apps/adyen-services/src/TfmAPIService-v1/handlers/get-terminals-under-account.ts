import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTerminalsUnderAccountRoute } from '../routes'

export const postGetTerminalsUnderAccountRouteHandler: RouteHandler<
  typeof postGetTerminalsUnderAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
