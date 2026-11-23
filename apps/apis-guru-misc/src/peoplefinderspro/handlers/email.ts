import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmailEnrichRoute } from '../routes'

export const postEmailEnrichRouteHandler: RouteHandler<typeof postEmailEnrichRoute> = async (c) => {
  throw new Error('Not implemented')
}
