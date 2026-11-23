import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDiscoursePostEventEventsIcsRoute,
  getDiscoursePostEventEventsJsonRoute,
} from '../routes'

export const getDiscoursePostEventEventsJsonRouteHandler: RouteHandler<
  typeof getDiscoursePostEventEventsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDiscoursePostEventEventsIcsRouteHandler: RouteHandler<
  typeof getDiscoursePostEventEventsIcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
