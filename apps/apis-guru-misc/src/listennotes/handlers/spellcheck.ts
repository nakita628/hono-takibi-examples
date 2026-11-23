import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpellcheckRoute } from '../routes'

export const getSpellcheckRouteHandler: RouteHandler<typeof getSpellcheckRoute> = async (c) => {
  throw new Error('Not implemented')
}
