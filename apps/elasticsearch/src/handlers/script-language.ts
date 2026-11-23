import type { RouteHandler } from '@hono/zod-openapi'
import type { getScriptLanguageRoute } from '../routes'

export const getScriptLanguageRouteHandler: RouteHandler<typeof getScriptLanguageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
