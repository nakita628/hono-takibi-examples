import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetfullnameparsedmatchRoute } from '../routes'

export const getGetfullnameparsedmatchRouteHandler: RouteHandler<
  typeof getGetfullnameparsedmatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
