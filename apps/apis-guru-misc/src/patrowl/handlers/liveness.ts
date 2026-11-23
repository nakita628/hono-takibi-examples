import type { RouteHandler } from '@hono/zod-openapi'
import type { getLivenessRoute } from '../routes'

export const getLivenessRouteHandler: RouteHandler<typeof getLivenessRoute> = async (c) => {
  throw new Error('Not implemented')
}
