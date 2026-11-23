import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateApplicationResourceLifecycleRoute,
  postActionUpdateApplicationResourceLifecycleRoute,
} from '../routes'

export const getActionUpdateApplicationResourceLifecycleRouteHandler: RouteHandler<
  typeof getActionUpdateApplicationResourceLifecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateApplicationResourceLifecycleRouteHandler: RouteHandler<
  typeof postActionUpdateApplicationResourceLifecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
