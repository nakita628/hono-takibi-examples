import type { RouteHandler } from '@hono/zod-openapi'
import type { getMamaRoute } from '../routes'

export const getMamaRouteHandler: RouteHandler<typeof getMamaRoute> = async (c) => {
  throw new Error('Not implemented')
}
