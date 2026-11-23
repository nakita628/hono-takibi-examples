import type { RouteHandler } from '@hono/zod-openapi'
import type { getSignTemplatesRoute, getSignTemplatesTemplateIdRoute } from '../routes'

export const getSignTemplatesRouteHandler: RouteHandler<typeof getSignTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSignTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getSignTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
