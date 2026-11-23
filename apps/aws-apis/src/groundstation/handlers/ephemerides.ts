import type { RouteHandler } from '@hono/zod-openapi'
import type { postEphemeridesRoute } from '../routes'

export const postEphemeridesRouteHandler: RouteHandler<typeof postEphemeridesRoute> = async (c) => {
  throw new Error('Not implemented')
}
