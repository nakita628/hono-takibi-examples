import type { RouteHandler } from '@hono/zod-openapi'
import type { postPersonalityRoute } from '../routes'

export const postPersonalityRouteHandler: RouteHandler<typeof postPersonalityRoute> = async (c) => {
  throw new Error('Not implemented')
}
