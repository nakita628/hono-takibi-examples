import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreateDiffHTMLRoute, postCreateDiffHTMLRoute } from '../routes'

export const getCreateDiffHTMLRouteHandler: RouteHandler<typeof getCreateDiffHTMLRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCreateDiffHTMLRouteHandler: RouteHandler<typeof postCreateDiffHTMLRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
