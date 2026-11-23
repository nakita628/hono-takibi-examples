import type { RouteHandler } from '@hono/zod-openapi'
import type { postRebootRoute } from '../routes'

export const postRebootRouteHandler: RouteHandler<typeof postRebootRoute> = async (c) => {
  throw new Error('Not implemented')
}
