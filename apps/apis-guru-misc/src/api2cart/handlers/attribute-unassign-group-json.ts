import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeUnassignGroupJsonRoute } from '../routes'

export const postAttributeUnassignGroupJsonRouteHandler: RouteHandler<
  typeof postAttributeUnassignGroupJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
