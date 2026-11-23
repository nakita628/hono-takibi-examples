import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestBodyMultiMediaTypesRoute } from '../routes'

export const postRequestBodyMultiMediaTypesRouteHandler: RouteHandler<
  typeof postRequestBodyMultiMediaTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
