import type { RouteHandler } from '@hono/zod-openapi'
import type { postPortabilityChecksRoute } from '../routes'

export const postPortabilityChecksRouteHandler: RouteHandler<
  typeof postPortabilityChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
