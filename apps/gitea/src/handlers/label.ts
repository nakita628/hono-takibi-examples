import type { RouteHandler } from '@hono/zod-openapi'
import type { getLabelTemplatesNameRoute, getLabelTemplatesRoute } from '../routes'

export const getLabelTemplatesRouteHandler: RouteHandler<typeof getLabelTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLabelTemplatesNameRouteHandler: RouteHandler<
  typeof getLabelTemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
