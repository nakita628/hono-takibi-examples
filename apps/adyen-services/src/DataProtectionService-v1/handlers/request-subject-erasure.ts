import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestSubjectErasureRoute } from '../routes'

export const postRequestSubjectErasureRouteHandler: RouteHandler<
  typeof postRequestSubjectErasureRoute
> = async (c) => {
  throw new Error('Not implemented')
}
