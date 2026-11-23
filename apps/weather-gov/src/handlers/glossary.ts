import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlossaryRoute } from '../routes'

export const getGlossaryRouteHandler: RouteHandler<typeof getGlossaryRoute> = async (c) => {
  throw new Error('Not implemented')
}
