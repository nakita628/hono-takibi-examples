import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnterStandbyRoute, postActionEnterStandbyRoute } from '../routes'

export const getActionEnterStandbyRouteHandler: RouteHandler<
  typeof getActionEnterStandbyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnterStandbyRouteHandler: RouteHandler<
  typeof postActionEnterStandbyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
