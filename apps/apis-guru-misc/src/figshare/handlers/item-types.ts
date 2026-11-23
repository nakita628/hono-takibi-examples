import type { RouteHandler } from '@hono/zod-openapi'
import type { getItemTypesRoute } from '../routes'

export const getItemTypesRouteHandler: RouteHandler<typeof getItemTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
