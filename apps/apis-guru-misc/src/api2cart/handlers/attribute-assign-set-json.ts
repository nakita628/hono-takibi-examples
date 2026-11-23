import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeAssignSetJsonRoute } from '../routes'

export const postAttributeAssignSetJsonRouteHandler: RouteHandler<
  typeof postAttributeAssignSetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
