import type { RouteHandler } from '@hono/zod-openapi'
import type { getFaxesRoute } from '../routes'

export const getFaxesRouteHandler: RouteHandler<typeof getFaxesRoute> = async (c) => {
  throw new Error('Not implemented')
}
