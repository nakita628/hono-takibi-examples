import type { RouteHandler } from '@hono/zod-openapi'
import type { postAddPresetRoute } from '../routes'

export const postAddPresetRouteHandler: RouteHandler<typeof postAddPresetRoute> = async (c) => {
  throw new Error('Not implemented')
}
