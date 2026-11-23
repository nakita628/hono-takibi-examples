import type { RouteHandler } from '@hono/zod-openapi'
import type { getTranslationsJsonRoute } from '../routes'

export const getTranslationsJsonRouteHandler: RouteHandler<
  typeof getTranslationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
