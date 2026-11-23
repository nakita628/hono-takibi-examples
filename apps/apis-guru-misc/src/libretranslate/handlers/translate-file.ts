import type { RouteHandler } from '@hono/zod-openapi'
import type { postTranslateFileRoute } from '../routes'

export const postTranslateFileRouteHandler: RouteHandler<typeof postTranslateFileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
