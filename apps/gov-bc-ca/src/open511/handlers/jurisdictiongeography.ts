import type { RouteHandler } from '@hono/zod-openapi'
import type { getJurisdictiongeographyRoute } from '../routes'

export const getJurisdictiongeographyRouteHandler: RouteHandler<
  typeof getJurisdictiongeographyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
