import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetareacodefromnumberRoute } from '../routes'

export const getGetareacodefromnumberRouteHandler: RouteHandler<
  typeof getGetareacodefromnumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
