import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionImportInstanceRoute, postActionImportInstanceRoute } from '../routes'

export const getActionImportInstanceRouteHandler: RouteHandler<
  typeof getActionImportInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportInstanceRouteHandler: RouteHandler<
  typeof postActionImportInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
