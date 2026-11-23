import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeUnassignSetJsonRoute } from '../routes'

export const postAttributeUnassignSetJsonRouteHandler: RouteHandler<
  typeof postAttributeUnassignSetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
