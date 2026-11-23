import type { RouteHandler } from '@hono/zod-openapi'
import type { getSoundboardDefaultSoundsRoute } from '../routes'

export const getSoundboardDefaultSoundsRouteHandler: RouteHandler<
  typeof getSoundboardDefaultSoundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
