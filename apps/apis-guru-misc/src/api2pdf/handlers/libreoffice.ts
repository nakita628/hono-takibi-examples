import type { RouteHandler } from '@hono/zod-openapi'
import type { postLibreofficeConvertRoute } from '../routes'

export const postLibreofficeConvertRouteHandler: RouteHandler<
  typeof postLibreofficeConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
