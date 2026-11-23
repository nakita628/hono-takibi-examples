import type { RouteHandler } from '@hono/zod-openapi'
import type { postDumpsRoute } from '../routes'

export const postDumpsRouteHandler: RouteHandler<typeof postDumpsRoute> = async (c) => {
  throw new Error('Not implemented')
}
