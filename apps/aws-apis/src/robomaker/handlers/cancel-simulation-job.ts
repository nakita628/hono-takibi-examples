import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelSimulationJobRoute } from '../routes'

export const postCancelSimulationJobRouteHandler: RouteHandler<
  typeof postCancelSimulationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
