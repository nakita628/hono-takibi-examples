import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestapisModeImportRoute } from '../routes'

export const postRestapisModeImportRouteHandler: RouteHandler<
  typeof postRestapisModeImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
