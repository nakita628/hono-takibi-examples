import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetPassportDataErrorsRoute } from '../routes'

export const postSetPassportDataErrorsRouteHandler: RouteHandler<
  typeof postSetPassportDataErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
