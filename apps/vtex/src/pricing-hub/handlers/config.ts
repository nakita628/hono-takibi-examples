import type { RouteHandler } from '@hono/zod-openapi'
import type { putConfigRoute } from '../routes'

export const putConfigRouteHandler: RouteHandler<typeof putConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
