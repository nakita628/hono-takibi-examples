import type { RouteHandler } from '@hono/zod-openapi'
import type { getSiteBasicInfoJsonRoute } from '../routes'

export const getSiteBasicInfoJsonRouteHandler: RouteHandler<
  typeof getSiteBasicInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
