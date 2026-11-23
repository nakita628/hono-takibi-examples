import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckSqsRoute } from '../routes'

export const postCheckSqsRouteHandler: RouteHandler<typeof postCheckSqsRoute> = async (c) => {
  throw new Error('Not implemented')
}
