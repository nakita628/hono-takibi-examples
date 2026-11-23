import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateInstanceEventWindowRoute,
  postActionCreateInstanceEventWindowRoute,
} from '../routes'

export const getActionCreateInstanceEventWindowRouteHandler: RouteHandler<
  typeof getActionCreateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateInstanceEventWindowRouteHandler: RouteHandler<
  typeof postActionCreateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
