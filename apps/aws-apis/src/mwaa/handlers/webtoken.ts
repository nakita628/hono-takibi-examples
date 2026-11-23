import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebtokenNameRoute } from '../routes'

export const postWebtokenNameRouteHandler: RouteHandler<typeof postWebtokenNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
