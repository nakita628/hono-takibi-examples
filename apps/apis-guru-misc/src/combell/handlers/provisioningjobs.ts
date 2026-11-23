import type { RouteHandler } from '@hono/zod-openapi'
import type { getProvisioningjobsJobIdRoute } from '../routes'

export const getProvisioningjobsJobIdRouteHandler: RouteHandler<
  typeof getProvisioningjobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
