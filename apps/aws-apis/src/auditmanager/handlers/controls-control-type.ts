import type { RouteHandler } from '@hono/zod-openapi'
import type { getControlsControlTypeRoute } from '../routes'

export const getControlsControlTypeRouteHandler: RouteHandler<
  typeof getControlsControlTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
