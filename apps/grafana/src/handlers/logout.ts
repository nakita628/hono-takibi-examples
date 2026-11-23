import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogoutSamlRoute } from '../routes'

export const getLogoutSamlRouteHandler: RouteHandler<typeof getLogoutSamlRoute> = async (c) => {
  throw new Error('Not implemented')
}
