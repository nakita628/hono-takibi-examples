import type { RouteHandler } from '@hono/zod-openapi'
import type { getProgrammesPidEpisodesRoute, getProgrammesPidRoute } from '../routes'

export const getProgrammesPidRouteHandler: RouteHandler<typeof getProgrammesPidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProgrammesPidEpisodesRouteHandler: RouteHandler<
  typeof getProgrammesPidEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
