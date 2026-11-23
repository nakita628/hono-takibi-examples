import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccentPhrasesRoute } from '../routes'

export const postAccentPhrasesRouteHandler: RouteHandler<typeof postAccentPhrasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
