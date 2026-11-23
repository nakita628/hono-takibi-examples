import type { RouteHandler } from '@hono/zod-openapi'
import type { getTypesIdRoute } from '../routes'

export const getTypesIdRouteHandler: RouteHandler<typeof getTypesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
