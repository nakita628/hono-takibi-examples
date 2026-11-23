import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetSettingsRoute } from '../routes'

export const getGetSettingsRouteHandler: RouteHandler<typeof getGetSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
