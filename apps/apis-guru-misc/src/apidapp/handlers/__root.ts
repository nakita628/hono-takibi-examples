import type { RouteHandler } from '@hono/zod-openapi'
import type { optionsRoute } from '../routes'

export const optionsRouteHandler: RouteHandler<typeof optionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
