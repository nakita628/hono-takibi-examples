import type { RouteHandler } from '@hono/zod-openapi'
import type { postStringToFileRoute } from '../routes'

export const postStringToFileRouteHandler: RouteHandler<typeof postStringToFileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
