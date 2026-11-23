import type { RouteHandler } from '@hono/zod-openapi'
import type { postIntegrationsIndexRoute } from '../routes'

export const postIntegrationsIndexRouteHandler: RouteHandler<
  typeof postIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
