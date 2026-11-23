import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAccountSettingsRoute } from '../routes'

export const postUpdateAccountSettingsRouteHandler: RouteHandler<
  typeof postUpdateAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
