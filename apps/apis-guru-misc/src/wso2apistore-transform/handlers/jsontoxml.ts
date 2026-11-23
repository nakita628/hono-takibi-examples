import type { RouteHandler } from '@hono/zod-openapi'
import type { postJsontoxmlRoute } from '../routes'

export const postJsontoxmlRouteHandler: RouteHandler<typeof postJsontoxmlRoute> = async (c) => {
  throw new Error('Not implemented')
}
