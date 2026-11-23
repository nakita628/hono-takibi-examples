import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePeeringsPeeringIdRoute, getPeeringsRoute } from '../routes'

export const deletePeeringsPeeringIdRouteHandler: RouteHandler<
  typeof deletePeeringsPeeringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeeringsRouteHandler: RouteHandler<typeof getPeeringsRoute> = async (c) => {
  throw new Error('Not implemented')
}
