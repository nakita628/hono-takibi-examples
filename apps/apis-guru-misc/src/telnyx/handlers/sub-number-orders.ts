import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
} from '../routes'

export const getSubNumberOrdersRouteHandler: RouteHandler<typeof getSubNumberOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubNumberOrdersSubNumberOrderIdRouteHandler: RouteHandler<
  typeof getSubNumberOrdersSubNumberOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubNumberOrdersSubNumberOrderIdRouteHandler: RouteHandler<
  typeof patchSubNumberOrdersSubNumberOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
