import type { RouteHandler } from '@hono/zod-openapi'
import type { getPipsRoute } from '../routes'

export const getPipsRouteHandler: RouteHandler<typeof getPipsRoute> = async (c) => {
  throw new Error('Not implemented')
}
