import type { RouteHandler } from '@hono/zod-openapi'
import type { getSqrtRoute } from '../routes'

export const getSqrtRouteHandler: RouteHandler<typeof getSqrtRoute> = async (c) => {
  throw new Error('Not implemented')
}
