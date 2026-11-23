import type { RouteHandler } from '@hono/zod-openapi'
import type { getCampagneRoute } from '../routes'

export const getCampagneRouteHandler: RouteHandler<typeof getCampagneRoute> = async (c) => {
  throw new Error('Not implemented')
}
