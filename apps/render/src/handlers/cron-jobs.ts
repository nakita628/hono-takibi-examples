import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCronJobsCronJobIdRunsRoute, postCronJobsCronJobIdRunsRoute } from '../routes'

export const postCronJobsCronJobIdRunsRouteHandler: RouteHandler<
  typeof postCronJobsCronJobIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCronJobsCronJobIdRunsRouteHandler: RouteHandler<
  typeof deleteCronJobsCronJobIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
