import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlossaryRoute, postGlossaryRoute } from '../routes'

export const getGlossaryRouteHandler: RouteHandler<typeof getGlossaryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGlossaryRouteHandler: RouteHandler<typeof postGlossaryRoute> = async (c) => {
  throw new Error('Not implemented')
}
