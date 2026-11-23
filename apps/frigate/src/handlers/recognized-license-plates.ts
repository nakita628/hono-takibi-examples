import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecognizedLicensePlatesRoute } from '../routes'

export const getRecognizedLicensePlatesRouteHandler: RouteHandler<
  typeof getRecognizedLicensePlatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
