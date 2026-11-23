import type { RouteHandler } from '@hono/zod-openapi'
import type { postDbaasServiceLogsServiceNameRoute } from '../routes'

export const postDbaasServiceLogsServiceNameRouteHandler: RouteHandler<
  typeof postDbaasServiceLogsServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
