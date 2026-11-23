import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebConfigurationPageRoute, getWebConfigurationPagesRoute } from '../routes'

export const getWebConfigurationPageRouteHandler: RouteHandler<
  typeof getWebConfigurationPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebConfigurationPagesRouteHandler: RouteHandler<
  typeof getWebConfigurationPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
