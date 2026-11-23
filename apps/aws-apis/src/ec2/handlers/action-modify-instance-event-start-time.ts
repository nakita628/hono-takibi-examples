import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstanceEventStartTimeRoute,
  postActionModifyInstanceEventStartTimeRoute,
} from '../routes'

export const getActionModifyInstanceEventStartTimeRouteHandler: RouteHandler<
  typeof getActionModifyInstanceEventStartTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstanceEventStartTimeRouteHandler: RouteHandler<
  typeof postActionModifyInstanceEventStartTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
