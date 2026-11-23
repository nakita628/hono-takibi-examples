import type { RouteHandler } from '@hono/zod-openapi'
import type { postLocationRoute } from '../routes'

export const postLocationRouteHandler: RouteHandler<typeof postLocationRoute> = async (c) => {
  throw new Error('Not implemented')
}
