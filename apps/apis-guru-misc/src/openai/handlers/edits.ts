import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditsRoute } from '../routes'

export const postEditsRouteHandler: RouteHandler<typeof postEditsRoute> = async (c) => {
  throw new Error('Not implemented')
}
