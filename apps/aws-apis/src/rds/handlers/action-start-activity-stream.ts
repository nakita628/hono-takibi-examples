import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStartActivityStreamRoute,
  postActionStartActivityStreamRoute,
} from '../routes'

export const getActionStartActivityStreamRouteHandler: RouteHandler<
  typeof getActionStartActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartActivityStreamRouteHandler: RouteHandler<
  typeof postActionStartActivityStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
