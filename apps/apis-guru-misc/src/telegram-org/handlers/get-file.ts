import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetFileRoute } from '../routes'

export const postGetFileRouteHandler: RouteHandler<typeof postGetFileRoute> = async (c) => {
  throw new Error('Not implemented')
}
