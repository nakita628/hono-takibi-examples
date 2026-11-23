import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeauthorizeDataShareRoute,
  postActionDeauthorizeDataShareRoute,
} from '../routes'

export const getActionDeauthorizeDataShareRouteHandler: RouteHandler<
  typeof getActionDeauthorizeDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeauthorizeDataShareRouteHandler: RouteHandler<
  typeof postActionDeauthorizeDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
