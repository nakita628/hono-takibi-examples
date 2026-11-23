import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdatePresetRoute } from '../routes'

export const postUpdatePresetRouteHandler: RouteHandler<typeof postUpdatePresetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
