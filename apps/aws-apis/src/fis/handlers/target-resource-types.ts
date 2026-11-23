import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTargetResourceTypesResourceTypeRoute,
  getTargetResourceTypesRoute,
} from '../routes'

export const getTargetResourceTypesResourceTypeRouteHandler: RouteHandler<
  typeof getTargetResourceTypesResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTargetResourceTypesRouteHandler: RouteHandler<
  typeof getTargetResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
