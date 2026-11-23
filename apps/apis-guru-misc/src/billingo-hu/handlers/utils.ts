import type { RouteHandler } from '@hono/zod-openapi'
import type { getUtilsConvertLegacyIdIdRoute } from '../routes'

export const getUtilsConvertLegacyIdIdRouteHandler: RouteHandler<
  typeof getUtilsConvertLegacyIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
