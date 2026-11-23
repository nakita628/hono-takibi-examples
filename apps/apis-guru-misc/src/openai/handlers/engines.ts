import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEnginesEngineIdRoute,
  getEnginesRoute,
  postEnginesEngineIdSearchRoute,
} from '../routes'

export const getEnginesRouteHandler: RouteHandler<typeof getEnginesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnginesEngineIdRouteHandler: RouteHandler<typeof getEnginesEngineIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEnginesEngineIdSearchRouteHandler: RouteHandler<
  typeof postEnginesEngineIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
