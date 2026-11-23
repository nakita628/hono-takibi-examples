import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceTypesRoute } from '../routes'

export const getServiceTypesRouteHandler: RouteHandler<typeof getServiceTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
