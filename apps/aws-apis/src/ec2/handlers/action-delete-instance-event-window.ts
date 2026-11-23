import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteInstanceEventWindowRoute,
  postActionDeleteInstanceEventWindowRoute,
} from '../routes'

export const getActionDeleteInstanceEventWindowRouteHandler: RouteHandler<
  typeof getActionDeleteInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteInstanceEventWindowRouteHandler: RouteHandler<
  typeof postActionDeleteInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
