import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetglobalnumberinfoRoute } from '../routes'

export const getGetglobalnumberinfoRouteHandler: RouteHandler<
  typeof getGetglobalnumberinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
