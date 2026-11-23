import type { RouteHandler } from '@hono/zod-openapi'
import type { postRetrieve3ds2ResultRoute } from '../routes'

export const postRetrieve3ds2ResultRouteHandler: RouteHandler<
  typeof postRetrieve3ds2ResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
