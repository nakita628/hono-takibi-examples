import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpAssignmentsUsage2Route } from '../routes'

export const getGlobalIpAssignmentsUsage2RouteHandler: RouteHandler<
  typeof getGlobalIpAssignmentsUsage2Route
> = async (c) => {
  throw new Error('Not implemented')
}
