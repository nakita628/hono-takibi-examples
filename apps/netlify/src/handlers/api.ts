import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiV1SitesSiteIdEnvRoute } from '../routes'

export const getApiV1SitesSiteIdEnvRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}
