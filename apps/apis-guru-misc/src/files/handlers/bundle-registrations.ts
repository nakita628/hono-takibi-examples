import type { RouteHandler } from '@hono/zod-openapi'
import type { getBundleRegistrationsRoute } from '../routes'

export const getBundleRegistrationsRouteHandler: RouteHandler<
  typeof getBundleRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
