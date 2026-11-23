import type { RouteHandler } from '@hono/zod-openapi'
import type { getKamaRoute } from '../routes'

export const getKamaRouteHandler: RouteHandler<typeof getKamaRoute> = async (c) => {
  throw new Error('Not implemented')
}
