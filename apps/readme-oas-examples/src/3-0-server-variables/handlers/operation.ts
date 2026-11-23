import type { RouteHandler } from '@hono/zod-openapi'
import type { postOperationRoute } from '../routes'

export const postOperationRouteHandler: RouteHandler<typeof postOperationRoute> = async (c) => {
  throw new Error('Not implemented')
}
