import type { RouteHandler } from '@hono/zod-openapi'
import type { postStarsCreateRoute } from '../routes'

export const postStarsCreateRouteHandler: RouteHandler<typeof postStarsCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}
