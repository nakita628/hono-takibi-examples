import type { RouteHandler } from '@hono/zod-openapi'
import type { getSksTemplateKubeVersionVariantRoute } from '../routes'

export const getSksTemplateKubeVersionVariantRouteHandler: RouteHandler<
  typeof getSksTemplateKubeVersionVariantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
