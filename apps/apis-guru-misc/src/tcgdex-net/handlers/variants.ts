import type { RouteHandler } from '@hono/zod-openapi'
import type { getVariantsRoute, getVariantsVariantRoute } from '../routes'

export const getVariantsRouteHandler: RouteHandler<typeof getVariantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVariantsVariantRouteHandler: RouteHandler<typeof getVariantsVariantRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
