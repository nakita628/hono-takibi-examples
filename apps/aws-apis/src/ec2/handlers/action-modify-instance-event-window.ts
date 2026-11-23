import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstanceEventWindowRoute,
  postActionModifyInstanceEventWindowRoute,
} from '../routes'

export const getActionModifyInstanceEventWindowRouteHandler: RouteHandler<
  typeof getActionModifyInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstanceEventWindowRouteHandler: RouteHandler<
  typeof postActionModifyInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
