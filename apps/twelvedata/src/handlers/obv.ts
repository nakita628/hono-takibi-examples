import type { RouteHandler } from '@hono/zod-openapi'
import type { getObvRoute } from '../routes'

export const getObvRouteHandler: RouteHandler<typeof getObvRoute> = async (c) => {
  throw new Error('Not implemented')
}
