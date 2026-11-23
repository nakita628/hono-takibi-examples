import type { RouteHandler } from '@hono/zod-openapi'
import type { getSaveOntologyTagRoute } from '../routes'

export const getSaveOntologyTagRouteHandler: RouteHandler<typeof getSaveOntologyTagRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
