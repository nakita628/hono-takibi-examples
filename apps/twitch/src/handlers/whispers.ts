import type { RouteHandler } from '@hono/zod-openapi'
import type { postWhispersRoute } from '../routes'

export const postWhispersRouteHandler: RouteHandler<typeof postWhispersRoute> = async (c) => {
  throw new Error('Not implemented')
}
