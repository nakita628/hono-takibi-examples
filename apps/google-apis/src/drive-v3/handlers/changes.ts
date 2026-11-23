import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChangesRoute,
  getChangesStartPageTokenRoute,
  postChangesWatchRoute,
} from '../routes'

export const getChangesRouteHandler: RouteHandler<typeof getChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChangesStartPageTokenRouteHandler: RouteHandler<
  typeof getChangesStartPageTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChangesWatchRouteHandler: RouteHandler<typeof postChangesWatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
