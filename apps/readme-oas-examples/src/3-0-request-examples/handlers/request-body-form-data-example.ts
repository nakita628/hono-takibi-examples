import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestBodyFormDataExampleRoute } from '../routes'

export const postRequestBodyFormDataExampleRouteHandler: RouteHandler<
  typeof postRequestBodyFormDataExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
