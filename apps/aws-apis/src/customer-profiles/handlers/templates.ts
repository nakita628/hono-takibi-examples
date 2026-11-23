import type { RouteHandler } from '@hono/zod-openapi'
import type { getTemplatesRoute, getTemplatesTemplateIdRoute } from '../routes'

export const getTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
