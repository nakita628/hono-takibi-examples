import type { RouteHandler } from '@hono/zod-openapi'
import type { getMagazinesRoute } from '../routes'

export const getMagazinesRouteHandler: RouteHandler<typeof getMagazinesRoute> = async (c) => {
  throw new Error('Not implemented')
}
