import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsAttributeRoute, putSettingsRoute } from '../routes'

export const getSettingsAttributeRouteHandler: RouteHandler<
  typeof getSettingsAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsRouteHandler: RouteHandler<typeof putSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
