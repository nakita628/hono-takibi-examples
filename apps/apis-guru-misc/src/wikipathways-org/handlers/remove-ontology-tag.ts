import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemoveOntologyTagRoute } from '../routes'

export const getRemoveOntologyTagRouteHandler: RouteHandler<
  typeof getRemoveOntologyTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}
