import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestartSimulationJobRoute } from '../routes'

export const postRestartSimulationJobRouteHandler: RouteHandler<
  typeof postRestartSimulationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
