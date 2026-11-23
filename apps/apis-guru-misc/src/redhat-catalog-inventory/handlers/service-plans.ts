import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicePlansIdRoute, getServicePlansRoute } from '../routes'

export const getServicePlansRouteHandler: RouteHandler<typeof getServicePlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicePlansIdRouteHandler: RouteHandler<typeof getServicePlansIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
