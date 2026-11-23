import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceInformationRoute } from '../routes'

export const getServiceInformationRouteHandler: RouteHandler<
  typeof getServiceInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
