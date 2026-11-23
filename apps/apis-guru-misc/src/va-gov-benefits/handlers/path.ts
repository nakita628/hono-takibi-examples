import type { RouteHandler } from '@hono/zod-openapi'
import type { putPathRoute } from '../routes'

export const putPathRouteHandler: RouteHandler<typeof putPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
