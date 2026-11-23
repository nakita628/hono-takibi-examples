import type { RouteHandler } from '@hono/zod-openapi'
import type { postJoinStringsRoute } from '../routes'

export const postJoinStringsRouteHandler: RouteHandler<typeof postJoinStringsRoute> = async (c) => {
  throw new Error('Not implemented')
}
