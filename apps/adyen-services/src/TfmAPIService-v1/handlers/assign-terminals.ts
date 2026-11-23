import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssignTerminalsRoute } from '../routes'

export const postAssignTerminalsRouteHandler: RouteHandler<
  typeof postAssignTerminalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
