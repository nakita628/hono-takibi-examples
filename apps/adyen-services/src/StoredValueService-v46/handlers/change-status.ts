import type { RouteHandler } from '@hono/zod-openapi'
import type { postChangeStatusRoute } from '../routes'

export const postChangeStatusRouteHandler: RouteHandler<typeof postChangeStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
