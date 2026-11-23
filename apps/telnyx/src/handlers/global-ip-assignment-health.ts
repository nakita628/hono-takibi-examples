import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpAssignmentHealthRoute } from '../routes'

export const getGlobalIpAssignmentHealthRouteHandler: RouteHandler<
  typeof getGlobalIpAssignmentHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
