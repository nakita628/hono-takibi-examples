import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeletePresetRoute } from '../routes'

export const postDeletePresetRouteHandler: RouteHandler<typeof postDeletePresetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
