import type { RouteHandler } from '@hono/zod-openapi'
import type { getDescriptionRoute } from '../routes'

export const getDescriptionRouteHandler: RouteHandler<typeof getDescriptionRoute> = async (c) => {
  throw new Error('Not implemented')
}
