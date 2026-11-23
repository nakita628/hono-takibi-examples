import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsRoute, postSettingsSmtpTestRoute, putSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsRouteHandler: RouteHandler<typeof putSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsSmtpTestRouteHandler: RouteHandler<
  typeof postSettingsSmtpTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
