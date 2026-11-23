import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicenseAllocationsRoute } from '../routes'

export const getLicenseAllocationsRouteHandler: RouteHandler<
  typeof getLicenseAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
