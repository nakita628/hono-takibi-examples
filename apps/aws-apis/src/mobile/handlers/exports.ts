import type { RouteHandler } from '@hono/zod-openapi'
import type { postExportsProjectIdRoute } from '../routes'

export const postExportsProjectIdRouteHandler: RouteHandler<
  typeof postExportsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
