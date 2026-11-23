import type { RouteHandler } from '@hono/zod-openapi'
import type { postPotentiallyUndefinedFormDataRoute } from '../routes'

export const postPotentiallyUndefinedFormDataRouteHandler: RouteHandler<
  typeof postPotentiallyUndefinedFormDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
