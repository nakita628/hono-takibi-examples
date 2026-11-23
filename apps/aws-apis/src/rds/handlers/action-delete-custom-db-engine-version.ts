import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCustomDBEngineVersionRoute,
  postActionDeleteCustomDBEngineVersionRoute,
} from '../routes'

export const getActionDeleteCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof getActionDeleteCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCustomDBEngineVersionRouteHandler: RouteHandler<
  typeof postActionDeleteCustomDBEngineVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
