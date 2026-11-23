import type { RouteHandler } from '@hono/zod-openapi'
import type { getFrontendSettingsRoute } from '../routes'

export const getFrontendSettingsRouteHandler: RouteHandler<
  typeof getFrontendSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
