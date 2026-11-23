import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePitRoute } from '../routes'

export const deletePitRouteHandler: RouteHandler<typeof deletePitRoute> = async (c) => {
  throw new Error('Not implemented')
}
