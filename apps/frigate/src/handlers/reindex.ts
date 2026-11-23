import type { RouteHandler } from '@hono/zod-openapi'
import type { putReindexRoute } from '../routes'

export const putReindexRouteHandler: RouteHandler<typeof putReindexRoute> = async (c) => {
  throw new Error('Not implemented')
}
