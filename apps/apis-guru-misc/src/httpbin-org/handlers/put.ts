import type { RouteHandler } from '@hono/zod-openapi'
import type { putPutRoute } from '../routes'

export const putPutRouteHandler: RouteHandler<typeof putPutRoute> = async (c) => {
  throw new Error('Not implemented')
}
