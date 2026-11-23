import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetAccountSettingsRoute } from '../routes'

export const postGetAccountSettingsRouteHandler: RouteHandler<
  typeof postGetAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
