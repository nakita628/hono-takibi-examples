import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlusDmRoute } from '../routes'

export const getPlusDmRouteHandler: RouteHandler<typeof getPlusDmRoute> = async (c) => {
  throw new Error('Not implemented')
}
