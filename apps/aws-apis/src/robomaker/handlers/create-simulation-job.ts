import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSimulationJobRoute } from '../routes'

export const postCreateSimulationJobRouteHandler: RouteHandler<
  typeof postCreateSimulationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
