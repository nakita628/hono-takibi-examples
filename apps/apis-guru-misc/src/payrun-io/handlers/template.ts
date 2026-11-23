import type { RouteHandler } from '@hono/zod-openapi'
import type { getTemplateDtoDataTypeRoute } from '../routes'

export const getTemplateDtoDataTypeRouteHandler: RouteHandler<
  typeof getTemplateDtoDataTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
