import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsIndexRoute } from '../routes'

export const getSettingsIndexRouteHandler: RouteHandler<typeof getSettingsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
