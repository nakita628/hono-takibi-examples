import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeAssignGroupJsonRoute } from '../routes'

export const postAttributeAssignGroupJsonRouteHandler: RouteHandler<
  typeof postAttributeAssignGroupJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
