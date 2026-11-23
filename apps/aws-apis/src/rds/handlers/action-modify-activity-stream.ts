import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyActivityStreamRoute,
  postActionModifyActivityStreamRoute,
} from '../routes'

export const getActionModifyActivityStreamRouteHandler: RouteHandler<
  typeof getActionModifyActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyActivityStreamRouteHandler: RouteHandler<
  typeof postActionModifyActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
