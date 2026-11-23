import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobTypesRoute } from '../routes'

export const getJobTypesRouteHandler: RouteHandler<typeof getJobTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
