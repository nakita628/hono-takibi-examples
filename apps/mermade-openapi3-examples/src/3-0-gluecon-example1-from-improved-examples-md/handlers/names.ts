import type { RouteHandler } from '@hono/zod-openapi'
import type { getNamesRoute } from '../routes'

export const getNamesRouteHandler: RouteHandler<typeof getNamesRoute> = async (c) => {
  throw new Error('Not implemented')
}
