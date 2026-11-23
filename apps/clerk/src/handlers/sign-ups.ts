import type { RouteHandler } from '@hono/zod-openapi'
import type { getSignUpsIdRoute, patchSignUpsIdRoute } from '../routes'

export const getSignUpsIdRouteHandler: RouteHandler<typeof getSignUpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSignUpsIdRouteHandler: RouteHandler<typeof patchSignUpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
