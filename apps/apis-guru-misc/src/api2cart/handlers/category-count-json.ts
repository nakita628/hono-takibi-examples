import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoryCountJsonRoute } from '../routes'

export const getCategoryCountJsonRouteHandler: RouteHandler<
  typeof getCategoryCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
