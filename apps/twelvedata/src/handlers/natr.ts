import type { RouteHandler } from '@hono/zod-openapi'
import type { getNatrRoute } from '../routes'

export const getNatrRouteHandler: RouteHandler<typeof getNatrRoute> = async (c) => {
  throw new Error('Not implemented')
}
