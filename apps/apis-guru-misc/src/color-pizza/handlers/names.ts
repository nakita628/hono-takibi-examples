import type { RouteHandler } from '@hono/zod-openapi'
import type { getNamesIndexRoute } from '../routes'

export const getNamesIndexRouteHandler: RouteHandler<typeof getNamesIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
