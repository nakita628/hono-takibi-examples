import type { RouteHandler } from '@hono/zod-openapi'
import type { getGcrFluxDlrRoute } from '../routes'

export const getGcrFluxDlrRouteHandler: RouteHandler<typeof getGcrFluxDlrRoute> = async (c) => {
  throw new Error('Not implemented')
}
