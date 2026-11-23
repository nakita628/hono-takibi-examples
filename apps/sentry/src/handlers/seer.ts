import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeerModelsIndexRoute } from '../routes'

export const getSeerModelsIndexRouteHandler: RouteHandler<typeof getSeerModelsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
