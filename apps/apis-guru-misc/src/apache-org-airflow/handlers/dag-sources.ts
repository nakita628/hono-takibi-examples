import type { RouteHandler } from '@hono/zod-openapi'
import type { getDagSourcesFileTokenRoute } from '../routes'

export const getDagSourcesFileTokenRouteHandler: RouteHandler<
  typeof getDagSourcesFileTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
