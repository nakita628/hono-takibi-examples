import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinesLineServicesRoute, getLinesRoute } from '../routes'

export const getLinesRouteHandler: RouteHandler<typeof getLinesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLinesLineServicesRouteHandler: RouteHandler<
  typeof getLinesLineServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
