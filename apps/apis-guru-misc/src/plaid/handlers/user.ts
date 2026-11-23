import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserCreateRoute } from '../routes'

export const postUserCreateRouteHandler: RouteHandler<typeof postUserCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}
